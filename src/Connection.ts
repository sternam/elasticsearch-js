'use strict'

/* eslint-disable no-unused-vars, camelcase */
import assert from 'assert'
import { URL } from 'url'
import http from 'http'
import https from 'https'
import { SecureContextOptions } from 'tls'
import Debug from 'debug'
import decompressResponse from 'decompress-response'
import pump from 'pump'
import { TimeoutError } from './errors'
/* eslint-enable no-unused-vars */

const debug = Debug('elasticsearch')

interface ConnectionOptions {
  url: URL
  ssl?: SecureContextOptions
  id?: string
  headers?: any
  agent?: AgentOptions
  status?: string
  roles?: any
}

export interface AgentOptions {
  keepAlive: boolean,
  keepAliveMsecs: number,
  maxSockets: number,
  maxFreeSockets: number
}

export default class Connection {
  static statuses = {
    ALIVE: 'alive',
    DEAD: 'dead'
  }

  static roles = {
    MASTER: 'master',
    DATA: 'data',
    INGEST: 'ingest',
    COORDINATING: 'coordinating',
    MACHINE_LEARNING: 'machine_learning'
  }

  url: URL
  ssl: SecureContextOptions | null
  id: string
  headers: any
  deadCount: number
  resurrectTimeout: number
  statuses: any
  roles: any
  makeRequest: any
  _openRequests: number
  _status: string
  _agent: http.Agent
  constructor (opts: ConnectionOptions = { url: new URL('http://localhost:9200') }) {
    this.url = opts.url
    this.ssl = opts.ssl || null
    this.id = opts.id || stripAuth(opts.url.href)
    this.headers = opts.headers || null
    this.deadCount = 0
    this.resurrectTimeout = 0

    this._openRequests = 0
    this._status = opts.status || Connection.statuses.ALIVE
    this.roles = opts.roles || defaultRoles

    const agentOptions = Object.assign({}, {
      keepAlive: true,
      keepAliveMsecs: 1000,
      maxSockets: Infinity,
      maxFreeSockets: 256
    }, opts.agent)
    this._agent = this.url.protocol === 'http:'
      ? new http.Agent(agentOptions)
      : new https.Agent(Object.assign({}, agentOptions, this.ssl))

    this.makeRequest = this.url.protocol === 'http:'
      ? http.request
      : https.request
  }

  // request (params: any, callback: (err: Error | null, response: http.IncomingMessage | null) => void): http.ClientRequest {
  request (params: any, callback: (err: Error | null, response: http.IncomingMessage | null) => void): http.ClientRequest {
    this._openRequests++
    var ended: boolean = false

    debug('Starting a new request', params)
    const request: http.ClientRequest = this.makeRequest(this.buildRequestObject(params))

    // listen for the response event
    // TODO: handle redirects?
    request.on('response', (response: http.IncomingMessage) => {
      if (ended === false) {
        ended = true
        this._openRequests--

        if (params.asStream === true) {
          callback(null, response)
        } else {
          callback(null, decompressResponse(response))
        }
      }
    })

    // handles request timeout
    request.on('timeout', () => {
      if (ended === false) {
        ended = true
        this._openRequests--
        request.abort()
        callback(new TimeoutError('Request timed out', params), null)
      }
    })

    // handles request error
    request.on('error', (err: Error | null) => {
      if (ended === false) {
        ended = true
        this._openRequests--
        callback(err, null)
      }
    })

    // Disables the Nagle algorithm
    request.setNoDelay(true)

    // starts the request
    if (isStream(params.body) === true) {
      pump(params.body, request, (err: Error | null) => {
        if (err != null && ended === false) {
          ended = true
          this._openRequests--
          callback(err, null)
        }
      })
    } else {
      request.end(params.body)
    }

    return request
  }

  // TODO: write a better closing logic
  close (): Connection {
    debug('Closing connection', this.id)
    if (this._openRequests > 0) {
      setTimeout(() => this.close(), 1000)
    } else {
      this._agent.destroy()
    }
    return this
  }

  setRole (role: string, enabled: boolean): Connection {
    assert(
      ~validRoles.indexOf(role),
      `Unsupported role: '${role}'`
    )
    assert(
      typeof enabled === 'boolean',
      'enabled should be a boolean'
    )
    this.roles[role] = enabled
    return this
  }

  get status (): string {
    return this._status
  }

  set status (status: string) {
    assert(
      ~validStatuses.indexOf(status),
      `Unsupported status: '${status}'`
    )
    this._status = status
  }

  buildRequestObject (params: any): http.ClientRequestArgs {
    const url = this.url
    const request = {
      protocol: url.protocol,
      hostname: url.hostname[0] === '['
        ? url.hostname.slice(1, -1)
        : url.hostname,
      hash: url.hash,
      search: url.search,
      pathname: url.pathname,
      path: '',
      href: url.href,
      port: url.port,
      headers: this.headers,
      auth: !!url.username === true || !!url.password === true
        ? `${url.username}:${url.password}`
        : undefined,
      agent: this._agent
    }

    const paramsKeys = Object.keys(params)
    for (var i = 0, len = paramsKeys.length; i < len; i++) {
      var key = paramsKeys[i]
      if (key === 'path') {
        request.pathname = resolve(request.pathname, params[key])
      } else if (key === 'querystring' && !!params[key] === true) {
        if (request.search === '') {
          request.search = '?' + params[key]
        } else {
          request.search += '&' + params[key]
        }
      } else if (key === 'headers') {
        request.headers = Object.assign({}, request.headers, params.headers)
      } else {
        request[key] = params[key]
      }
    }

    request.path = request.pathname + request.search

    return request
  }
}

const defaultRoles = {
  [Connection.roles.MASTER]: true,
  [Connection.roles.DATA]: true,
  [Connection.roles.INGEST]: true,
  [Connection.roles.COORDINATING]: true,
  [Connection.roles.MACHINE_LEARNING]: true
}

const validStatuses = Object.keys(Connection.statuses)
  .map(k => Connection.statuses[k])
const validRoles = Object.keys(Connection.roles)
  .map(k => Connection.roles[k])

function stripAuth (url: string): string {
  if (url.indexOf('@') === -1) return url
  return url.slice(0, url.indexOf('//') + 2) + url.slice(url.indexOf('@') + 1)
}

function isStream (obj: any): boolean {
  return obj != null && typeof obj.pipe === 'function'
}

function resolve (host: string, path: string): string {
  const hostEndWithSlash = host[host.length - 1] === '/'
  const pathStartsWithSlash = path[0] === '/'

  if (hostEndWithSlash === true && pathStartsWithSlash === true) {
    return host + path.slice(1)
  } else if (hostEndWithSlash !== pathStartsWithSlash) {
    return host + path
  } else {
    return host + '/' + path
  }
}

'use strict'

/* eslint-disable no-unused-vars, camelcase */
import { SecureContextOptions } from 'tls'
import Transport from './Transport'
import Connection, { AgentOptions } from './Connection'
import ConnectionPool, { nodeSelectorFn, nodeFilterFn } from './ConnectionPool'
import Serializer from './Serializer'
import { ConfigurationError } from './errors'
import ESAPI from './api'
/* eslint-enable no-unused-vars */

interface ClientOptions {
  node?: string | string[]
  nodes?: string | string[]
  Connection?: typeof Connection
  ConnectionPool?: typeof ConnectionPool
  Transport?: typeof Transport
  Serializer?: typeof Serializer
  maxRetries?: number
  requestTimeout?: number
  pingTimeout?: number
  sniffInterval?: number
  sniffOnStart?: boolean
  sniffEndpoint?: string
  sniffOnConnectionFault?: boolean
  resurrectStrategy?: string
  randomizeHost?: boolean
  suggestCompression?: boolean
  ssl?: SecureContextOptions,
  agent?: AgentOptions,
  nodeFilter?: nodeFilterFn
  nodeSelector?: nodeSelectorFn | string
}

class Client extends ESAPI {
  connectionPool: ConnectionPool
  transport: Transport
  constructor (opts: ClientOptions = {}) {
    super({
      getMakeRequest,
      result: { body: null, statusCode: null, headers: null, warnings: null },
      ConfigurationError
    })

    if (!opts.node && !opts.nodes) {
      throw new ConfigurationError('Missing node(s) option')
    }

    // The logging is exposed via events, which the user can
    // listen to and log the message its preferred way
    // we add a fake listener to the error event to avoid
    // the "unhandled error event" error.
    this.on('error', () => {})

    const options = Object.assign({}, {
      Connection,
      ConnectionPool,
      Transport,
      Serializer,
      maxRetries: 3,
      requestTimeout: 30000,
      pingTimeout: 3000,
      sniffInterval: false,
      sniffOnStart: false,
      sniffEndpoint: '_nodes/_all/http',
      sniffOnConnectionFault: false,
      resurrectStrategy: 'ping',
      randomizeHost: true,
      suggestCompression: false,
      ssl: null,
      agent: null,
      nodeFilter: null,
      nodeSelector: 'round-robin'
    }, opts)

    const serializer: Serializer = new options.Serializer()
    this.connectionPool = new options.ConnectionPool({
      pingTimeout: options.pingTimeout,
      resurrectStrategy: options.resurrectStrategy,
      randomizeHost: options.randomizeHost,
      ssl: options.ssl,
      agent: options.agent,
      nodeFilter: options.nodeFilter,
      nodeSelector: options.nodeSelector,
      Connection: options.Connection
    })

    // Add the connections before initialize the Transport
    this.connectionPool.addConnection(options.node || options.nodes)

    this.transport = new options.Transport({
      emit: this.emit.bind(this),
      connectionPool: this.connectionPool,
      serializer: serializer,
      maxRetries: options.maxRetries,
      requestTimeout: options.requestTimeout,
      sniffInterval: options.sniffInterval,
      sniffOnStart: options.sniffOnStart,
      sniffOnConnectionFault: options.sniffOnConnectionFault,
      sniffEndpoint: options.sniffEndpoint,
      suggestCompression: options.suggestCompression
    })

    // This is needed to inject the transport's request
    // into the extended API class.
    // TODO: is there a cleaner way?
    const makeRequest = this.transport.request.bind(this.transport)
    function getMakeRequest () {
      return makeRequest
    }
  }
}

const events = {
  RESPONSE: 'response',
  REQUEST: 'request',
  ERROR: 'error'
}

export {
  Client,
  Transport,
  ConnectionPool,
  Connection,
  Serializer,
  events
}

'use strict'

const { readdirSync } = require('fs')
const dedent = require('dedent')
const deepmerge = require('deepmerge')

function genFactory (folder) {
  // get all the API files
  const apiFiles = readdirSync(folder)
  const types = apiFiles
    .map(file => {
      return file
        .slice(0, -3) // remove `.js` extension
        .split('.')
        .reverse()
        .reduce((acc, val) => {
          const obj = {
            [val]: acc === null
              ? 'apiMethod'
              : acc
          }
          if (isSnakeCased(val)) {
            obj[camelify(val)] = acc === null
              ? 'apiMethod'
              : acc
          }
          return obj
        }, null)
    })
    .reduce((acc, val) => deepmerge(acc, val), {})

  const apis = apiFiles
    .map(file => {
      // const name = format(file.slice(0, -3))
      return file
        .slice(0, -3) // remove `.js` extension
        .split('.')
        .reverse()
        .reduce((acc, val) => {
          const obj = {
            [val]: acc === null
              ? `lazyLoad('./api/${changeExtension(file)}', opts)` // `${name}(opts)`
              : acc
          }
          if (isSnakeCased(val)) {
            obj[camelify(val)] = acc === null
              ? `lazyLoad('./api/${changeExtension(file)}', opts)` // `${name}(opts)`
              : acc
          }
          return obj
        }, null)
    })
    .reduce((acc, val) => deepmerge(acc, val), {})

  // serialize the API object
  const apisStr = Object.keys(apis)
    .map(key => `this.${key} = ${JSON.stringify(apis[key], null, 2)}`)
    .join('\n    ')
    // remove useless quotes
    .replace(/"/g, '')

  // serialize the type object
  const typesStr = Object.keys(types)
    .map(key => `${key}: ${JSON.stringify(types[key], null, 6)}`)
    .join('\n    ')
    // remove useless quotes
    .replace(/"/g, '')
    .replace(/,/g, '')

  const fn = dedent`
  'use strict'

  /* eslint-disable camelcase */
  /* eslint-disable no-unused-vars */
  import { EventEmitter } from 'events'
  import { ApiResponse } from '../Transport'
  /* eslint-enable no-unused-vars */

  type anyObject = { [key: string]: any }
  type callbackFn = (err: Error | null, result: ApiResponse) => void
  type apiMethod = (params?: anyObject | callbackFn, callback?: callbackFn) => any
  declare function require(moduleName: string): any

  interface ESAPIOptions {
    getMakeRequest: Function
    ConfigurationError: any
    result: any
  }

  export default class ESAPI extends EventEmitter {
    ${typesStr}
    constructor (opts: ESAPIOptions) {
      super()
      ${apisStr}
    }
  }

  // It's unlikely that a user needs all of our APIs,
  // and since require is a sync operation that takes time
  // (given the amount of APIs we have), let's lazy load them,
  // so a given API file will be required only
  // if the user actually needs that API.
  // The following implementation takes advantage
  // of js closures to have a simple cache with the least overhead.
  function lazyLoad (file: string, opts: any): any {
    var fn: any = null
    return function _lazyLoad (params: any, callback: any): any {
      if (fn === null) {
        opts.makeRequest = opts.getMakeRequest()
        fn = require(file)(opts)
      }
      return fn(params, callback)
    }
  }
  `

  // new line at the end of file
  return fn + '\n'
}

// from snake_case to camelCase
function camelify (str) {
  return str.replace(/_([a-z])/g, k => k[1].toUpperCase())
}

function isSnakeCased (str) {
  return !!~str.indexOf('_')
}

function changeExtension (file) {
  return file.slice(0, -2) + 'js'
}

module.exports = genFactory

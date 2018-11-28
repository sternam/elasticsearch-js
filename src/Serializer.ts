'use strict'

/* eslint-disable camelcase */

import { stringify } from 'querystring'
import Debug from 'debug'
import { SerializationError, DeserializationError } from './errors'

const debug = Debug('elasticsearch')

export default class Serializer {
  serialize (object: any): string {
    debug('Serializing', object)
    try {
      var json: string = JSON.stringify(object)
    } catch (err) {
      throw new SerializationError(err.message)
    }
    return json
  }

  deserialize (json: string): any {
    debug('Deserializing', json)
    try {
      var object: any = JSON.parse(json)
    } catch (err) {
      throw new DeserializationError(err.message)
    }
    return object
  }

  ndserialize (array: any[]): string {
    debug('ndserialize', array)
    if (Array.isArray(array) === false) {
      throw new SerializationError('The argument provided is not an array')
    }
    var ndjson: string = ''
    for (var i = 0, len = array.length; i < len; i++) {
      if (typeof array[i] === 'string') {
        ndjson += array[i] + '\n'
      } else {
        ndjson += this.serialize(array[i]) + '\n'
      }
    }
    return ndjson
  }

  qserialize (object: any): string {
    debug('qserialize', object)
    if (object == null) return ''
    // arrays should be serialized as comma separated list
    const keys: string[] = Object.keys(object)
    for (var i = 0, len = keys.length; i < len; i++) {
      var key: string = keys[i]
      if (Array.isArray(object[key]) === true) {
        object[key] = object[key].join(',')
      }
    }
    return stringify(object)
  }
}

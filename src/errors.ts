'use strict'

/* eslint-disable camelcase */

export class TimeoutError extends Error {
  name: string
  message: string
  request: any
  constructor (message: string, request: any) {
    super()
    Error.captureStackTrace(this, TimeoutError)
    this.name = 'TimeoutError'
    this.message = message || 'Timeout Error'
    this.request = request
  }
}

export class ConnectionError extends Error {
  name: string
  message: string
  request: any
  constructor (message: string, request: any) {
    super()
    Error.captureStackTrace(this, ConnectionError)
    this.name = 'ConnectionError'
    this.message = message || 'Connection Error'
    this.request = request
  }
}

export class NoLivingConnectionsError extends Error {
  name: string
  message: string
  constructor (message: string) {
    super()
    Error.captureStackTrace(this, NoLivingConnectionsError)
    this.name = 'NoLivingConnectionsError'
    this.message = message || 'No Living Connections Error'
  }
}

export class SerializationError extends Error {
  name: string
  message: string
  constructor (message: string) {
    super()
    Error.captureStackTrace(this, SerializationError)
    this.name = 'SerializationError'
    this.message = message || 'Serialization Error'
  }
}

export class DeserializationError extends Error {
  name: string
  message: string
  constructor (message: string) {
    super()
    Error.captureStackTrace(this, DeserializationError)
    this.name = 'DeserializationError'
    this.message = message || 'Deserialization Error'
  }
}

export class ConfigurationError extends Error {
  name: string
  message: string
  constructor (message: string) {
    super()
    Error.captureStackTrace(this, ConfigurationError)
    this.name = 'ConfigurationError'
    this.message = message || 'Configuration Error'
  }
}

export class ResponseError extends Error {
  name: string
  message: string
  body: any
  statusCode: number
  headers: any
  constructor ({ body, statusCode, headers }: {[key:string]:any}) {
    super()
    Error.captureStackTrace(this, ResponseError)
    this.name = 'ResponseError'
    this.message = (body && body.error && body.error.type) || 'Response Error'
    this.body = body
    this.statusCode = body && typeof body.status === 'number'
      ? body.status
      : statusCode
    this.headers = headers
  }
}

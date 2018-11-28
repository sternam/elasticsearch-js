'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
/* eslint-disable camelcase */
class TimeoutError extends Error {
  constructor (message, request) {
    super()
    Error.captureStackTrace(this, TimeoutError)
    this.name = 'TimeoutError'
    this.message = message || 'Timeout Error'
    this.request = request
  }
}
exports.TimeoutError = TimeoutError
class ConnectionError extends Error {
  constructor (message, request) {
    super()
    Error.captureStackTrace(this, ConnectionError)
    this.name = 'ConnectionError'
    this.message = message || 'Connection Error'
    this.request = request
  }
}
exports.ConnectionError = ConnectionError
class NoLivingConnectionsError extends Error {
  constructor (message) {
    super()
    Error.captureStackTrace(this, NoLivingConnectionsError)
    this.name = 'NoLivingConnectionsError'
    this.message = message || 'No Living Connections Error'
  }
}
exports.NoLivingConnectionsError = NoLivingConnectionsError
class SerializationError extends Error {
  constructor (message) {
    super()
    Error.captureStackTrace(this, SerializationError)
    this.name = 'SerializationError'
    this.message = message || 'Serialization Error'
  }
}
exports.SerializationError = SerializationError
class DeserializationError extends Error {
  constructor (message) {
    super()
    Error.captureStackTrace(this, DeserializationError)
    this.name = 'DeserializationError'
    this.message = message || 'Deserialization Error'
  }
}
exports.DeserializationError = DeserializationError
class ConfigurationError extends Error {
  constructor (message) {
    super()
    Error.captureStackTrace(this, ConfigurationError)
    this.name = 'ConfigurationError'
    this.message = message || 'Configuration Error'
  }
}
exports.ConfigurationError = ConfigurationError
class ResponseError extends Error {
  constructor ({ body, statusCode, headers }) {
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
exports.ResponseError = ResponseError

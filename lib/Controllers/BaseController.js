/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const logger = require('winston');
const _modelFactory = require('../ModelFactory');
const _objectMapper = require('../ObjectMapper');

const _objectMapperInstance = new _objectMapper();

class BaseController {
  /**
   * Get ObjectMapper instance
   * @return {ObjectMapper} Shared instance
   */
  static getObjectMapper() {
    return _objectMapperInstance;
  }

  /**
   * Helper function to print error logging messages
   * @param    {number}    code        The error code which needs to be logged
   * @param    {string}    endpName    The name of endpoint making the call
   */
  static printErrorLog(code, endpName) {
    logger.error(`'Status code: ${code} received for ${endpName}.`);
  }

  /**
   * Global error handling
   * @param   {HttpContext}   _context   HttpContext containing request and response objects
   * @param   {string}        endpName   Name of the endpoint called
   * @callback    Callback function which returns error, response, context
   */
  static validateResponse(_context, endpName) {
    const errorObj = {
      errorMessage: '',
      errorCode: '',
      errorResponse: _context.response.body,
    };
    const returnObj = {
      error: errorObj,
      response: null,
      context: _context,
    };

    let response;
    try {
      response = JSON.parse(_context.response.body);
    } catch (ex) {
      response = JSON.parse(JSON.stringify(_context.response.body));
    }

    BaseController.printErrorLog(_context.response.statusCode, endpName);

    if (_context.response.statusCode === 400) {
      returnObj.error.errorMessage = 'Bad Request';
      returnObj.error.errorCode = 400;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasClientException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasClientException'
        );
      }
      mappedObject.reason = 'Bad Request';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    } else if (_context.response.statusCode === 401) {
      returnObj.error.errorMessage = 'Unauthorized - Invalid Credentials';
      returnObj.error.errorCode = 401;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasGenericException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasGenericException'
        );
      }
      mappedObject.reason = 'Unauthorized - Invalid Credentials';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    } else if (_context.response.statusCode === 403) {
      returnObj.error.errorMessage = 'Forbidden';
      returnObj.error.errorCode = 403;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasClientException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasClientException'
        );
      }
      mappedObject.reason = 'Forbidden';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    } else if (_context.response.statusCode === 404) {
      returnObj.error.errorMessage = 'Not Found';
      returnObj.error.errorCode = 404;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasGenericException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasGenericException'
        );
      }
      mappedObject.reason = 'Not Found';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
      returnObj.response = _context.response.body;
    } else if (_context.response.statusCode === 409) {
      returnObj.error.errorMessage = 'Conflict';
      returnObj.error.errorCode = 409;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasClientException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasClientException'
        );
      }
      mappedObject.reason = 'Conflict';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    } else if (_context.response.statusCode === 500) {
      returnObj.error.errorMessage = 'Internal Server Error - Retry Later';
      returnObj.error.errorCode = 500;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasServerException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasServerException'
        );
      }
      mappedObject.reason = 'Internal Server Error - Retry Later';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    } else if (_context.response.statusCode === 503) {
      returnObj.error.errorMessage = 'Service Unavailable - Retry Later';
      returnObj.error.errorCode = 503;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasServerException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasServerException'
        );
      }
      mappedObject.reason = 'Service Unavailable - Retry Later';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    } else {
      returnObj.error.errorMessage = 'API Error';
      returnObj.error.errorCode = 0;
      let mappedObject;
      if (response === null || response === undefined) {
        mappedObject = _modelFactory.getInstance('RaasGenericException');
      } else {
        mappedObject = this.getObjectMapper().mapObject(
          response,
          'RaasGenericException'
        );
      }
      mappedObject.reason = 'API Error';
      mappedObject.context = _context;
      returnObj.error.errorResponse = mappedObject;
    }

    return returnObj;
  }
}

module.exports = BaseController;

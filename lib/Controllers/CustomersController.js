/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const _logger = require('winston');
const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class CustomersController {
  /**
   * Creates a new customer
   *
   * @param {CreateCustomerRequestModel} body Request Body
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static createCustomer(body, callback) {
    _logger.info('createCustomer being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for createCustomer');
    if (body === null || body === undefined) {
      const _err = {
        errorMessage:
          'The parameter `body` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for createCustomer');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/customers'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for createCustomer');
    const _headers = {
      accept: 'application/json',
      'content-type': 'application/json; charset=utf-8',
      'user-agent': 'V2NGSDK',
    };

    // remove null values
    _apiHelper.cleanObject(body);

    // construct the request
    const _options = {
      queryUrl: _queryUrl,
      method: 'POST',
      headers: _headers,
      body: _apiHelper.jsonSerialize(body),
      username: _configuration.platformName,
      password: _configuration.platformKey,
    };
    _logger.debug(
      `'Raw request for createCustomer  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for createCustomer...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'createCustomer'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for createCustomer...  > ${JSON.stringify(
              _response
            )}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for createCustomer');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'CustomerModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for createCustomer ');
          errorResponse = _baseController.validateResponse(
            _context,
            'createCustomer'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        }
      });
    });
  }

  /**
   * Retrieves all customers under the platform
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getAllCustomers(callback) {
    _logger.info('getAllCustomers being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // prepare query string for API call
    _logger.info('Preparing Query URL for getAllCustomers');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/customers'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getAllCustomers');
    const _headers = {
      accept: 'application/json',
      'user-agent': 'V2NGSDK',
    };

    const _options = {
      queryUrl: _queryUrl,
      method: 'GET',
      headers: _headers,
      username: _configuration.platformName,
      password: _configuration.platformKey,
    };
    _logger.debug(
      `'Raw request for getAllCustomers  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getAllCustomers...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getAllCustomers'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getAllCustomers...  > ${JSON.stringify(
              _response
            )}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getAllCustomers');
          parsed = parsed.map((model) =>
            _baseController.getObjectMapper().mapObject(model, 'CustomerModel')
          );
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getAllCustomers ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getAllCustomers'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        }
      });
    });
  }

  /**
   * Retrieves a single customer
   *
   * @param {string} customerIdentifier Customer Identifier
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getCustomer(customerIdentifier, callback) {
    _logger.info('getCustomer being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for getCustomer');
    if (customerIdentifier === null || customerIdentifier === undefined) {
      const _err = {
        errorMessage:
          'The parameter `customerIdentifier` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for getCustomer');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/customers/{customerIdentifier}'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      customerIdentifier,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getCustomer');
    const _headers = {
      accept: 'application/json',
      'user-agent': 'V2NGSDK',
    };

    // construct the request
    const _options = {
      queryUrl: _queryUrl,
      method: 'GET',
      headers: _headers,
      username: _configuration.platformName,
      password: _configuration.platformKey,
    };
    _logger.debug(
      `'Raw request for getCustomer  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getCustomer...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getCustomer'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getCustomer...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getCustomer');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'CustomerModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getCustomer ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getCustomer'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        }
      });
    });
  }
}
module.exports = CustomersController;

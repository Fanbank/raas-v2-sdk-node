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

class OrdersController {
  /**
   * Retrieves a single order
   *
   * @param {string} referenceOrderID Reference Order ID
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getOrder(referenceOrderID, callback) {
    _logger.info('getOrder being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for getOrder');
    if (referenceOrderID === null || referenceOrderID === undefined) {
      const _err = {
        errorMessage:
          'The parameter `referenceOrderID` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for getOrder');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/orders/{referenceOrderID}'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      referenceOrderID,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getOrder');
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
    _logger.debug(`'Raw request for getOrder  > ${JSON.stringify(_options)}'`);

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getOrder...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getOrder'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getOrder...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getOrder');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'OrderModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getOrder ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getOrder'
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
   * Resends an order
   *
   * @param {string} referenceOrderID The order's reference order id
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static createResendOrder(referenceOrderID, callback) {
    _logger.info('createResendOrder being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for createResendOrder');
    if (referenceOrderID === null || referenceOrderID === undefined) {
      const _err = {
        errorMessage:
          'The parameter `referenceOrderID` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for createResendOrder');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/orders/{referenceOrderID}/resends'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      referenceOrderID,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for createResendOrder');
    const _headers = {
      accept: 'application/json',
      'user-agent': 'V2NGSDK',
    };

    // construct the request
    const _options = {
      queryUrl: _queryUrl,
      method: 'POST',
      headers: _headers,
      username: _configuration.platformName,
      password: _configuration.platformKey,
    };
    _logger.debug(
      `'Raw request for createResendOrder  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for createResendOrder...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'createResendOrder'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for createResendOrder...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for createResendOrder');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'ResendOrderResponseModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for createResendOrder ');
          errorResponse = _baseController.validateResponse(
            _context,
            'createResendOrder'
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
   * Retrieves a list of orders under a platform
   *
   * @param  {array}  input    Array with all options for search
   * @param {string} input['accountIdentifier'] (optional) Account identifier
   * @param {string} input['customerIdentifier'] (optional) Customer identifier
   * @param {string} input['externalRefID'] (optional) External reference id
   * @param {dateTime} input['startDate'] (optional) The start date
   * @param {dateTime} input['endDate'] (optional) The end date
   * @param {int} input['elementsPerBlock'] (optional) The number of elements per page
   * @param {int} input['page'] (optional) The page number to return
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getOrders(input, callback) {
    _logger.info('getOrders being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // prepare query string for API call
    _logger.info('Preparing Query URL for getOrders');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/orders'}`;

    // process query parameters
    _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
      accountIdentifier: input.accountIdentifier,
      customerIdentifier: input.customerIdentifier,
      externalRefID: input.externalRefID,
      startDate: _apiHelper.stringifyDateTime(input.startDate, 'rfc3339'),
      endDate: _apiHelper.stringifyDateTime(input.endDate, 'rfc3339'),
      elementsPerBlock: input.elementsPerBlock,
      page: input.page,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getOrders');
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
    _logger.debug(`'Raw request for getOrders  > ${JSON.stringify(_options)}'`);

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getOrders...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getOrders'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getOrders...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getOrders');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'GetOrdersResponseModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getOrders ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getOrders'
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
   * Places an order
   *
   * @param {CreateOrderRequestModel} body A CreateOrderRequest object
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static createOrder(body, callback) {
    _logger.info('createOrder being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for createOrder');
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
    _logger.info('Preparing Query URL for createOrder');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/orders'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for createOrder');
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
      `'Raw request for createOrder  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for createOrder...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'createOrder'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for createOrder...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for createOrder');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'OrderModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for createOrder ');
          errorResponse = _baseController.validateResponse(
            _context,
            'createOrder'
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
module.exports = OrdersController;

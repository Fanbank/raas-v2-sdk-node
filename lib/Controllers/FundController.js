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

class FundController {
  /**
   * Unregister a credit card
   *
   * @param {UnregisterCreditCardRequestModel} body TODO: type description here
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static createUnregisterCreditCard(body, callback) {
    _logger.info('createUnregisterCreditCard being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info(
      'Validating required parameters for createUnregisterCreditCard'
    );
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
    _logger.info('Preparing Query URL for createUnregisterCreditCard');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/creditCardUnregisters'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for createUnregisterCreditCard');
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
      `'Raw request for createUnregisterCreditCard  > ${JSON.stringify(
        _options
      )}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for createUnregisterCreditCard...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'createUnregisterCreditCard'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for createUnregisterCreditCard...  > ${JSON.stringify(
              _response
            )}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for createUnregisterCreditCard');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'UnregisterCreditCardResponseModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for createUnregisterCreditCard ');
          errorResponse = _baseController.validateResponse(
            _context,
            'createUnregisterCreditCard'
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
   * Get details for a specific credit card deposit
   *
   * @param {string} depositId The reference deposit id
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getDeposit(depositId, callback) {
    _logger.info('getDeposit being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for getDeposit');
    if (depositId === null || depositId === undefined) {
      const _err = {
        errorMessage:
          'The parameter `depositId` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for getDeposit');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/creditCardDeposits/{depositId}'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      depositId,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getDeposit');
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
      `'Raw request for getDeposit  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getDeposit...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getDeposit'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getDeposit...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getDeposit');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'GetDepositResponseModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getDeposit ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getDeposit'
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
   * Funds an account via credit card
   *
   * @param {DepositRequestModel} body TODO: type description here
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static addFunds(body, callback) {
    _logger.info('addFunds being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for addFunds');
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
    _logger.info('Preparing Query URL for addFunds');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/creditCardDeposits'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for addFunds');
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
    _logger.debug(`'Raw request for addFunds  > ${JSON.stringify(_options)}'`);

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for addFunds...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'addFunds'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for addFunds...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for addFunds');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'DepositResponseModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for addFunds ');
          errorResponse = _baseController.validateResponse(
            _context,
            'addFunds'
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
   * Retrieves all credit cards registered on the platform
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getCreditCards(callback) {
    _logger.info('getCreditCards being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // prepare query string for API call
    _logger.info('Preparing Query URL for getCreditCards');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/creditCards'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getCreditCards');
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
      `'Raw request for getCreditCards  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getCreditCards...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getCreditCards'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getCreditCards...  > ${JSON.stringify(
              _response
            )}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getCreditCards');
          parsed = parsed.map((model) =>
            _baseController
              .getObjectMapper()
              .mapObject(model, 'CreditCardModel')
          );

          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getCreditCards ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getCreditCards'
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
   * Retrieves details for a single credit card
   *
   * @param {string} token Credit Card Token
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getCreditCard(token, callback) {
    _logger.info('getCreditCard being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for getCreditCard');
    if (token === null || token === undefined) {
      const _err = {
        errorMessage:
          'The parameter `token` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for getCreditCard');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/creditCards/{token}'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      token,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getCreditCard');
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
      `'Raw request for getCreditCard  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getCreditCard...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getCreditCard'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getCreditCard...  > ${JSON.stringify(
              _response
            )}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getCreditCard');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'CreditCardModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getCreditCard ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getCreditCard'
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
   * Registers a new credit card
   *
   * @param {CreateCreditCardRequestModel} body A CreateCreditCardRequest object
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static createRegisterCreditCard(body, callback) {
    _logger.info('createRegisterCreditCard being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for createRegisterCreditCard');
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
    _logger.info('Preparing Query URL for createRegisterCreditCard');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/creditCards'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for createRegisterCreditCard');
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
      `'Raw request for createRegisterCreditCard  > ${JSON.stringify(
        _options
      )}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for createRegisterCreditCard...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'createRegisterCreditCard'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for createRegisterCreditCard...  > ${JSON.stringify(
              _response
            )}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for createRegisterCreditCard');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'CreditCardModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for createRegisterCreditCard ');
          errorResponse = _baseController.validateResponse(
            _context,
            'createRegisterCreditCard'
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
module.exports = FundController;

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

class AccountsController {
  /**
   * Retrieves a list of accounts for a given customer
   *
   * @param {string} customerIdentifier Customer Identifier
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getAccountsByCustomer(customerIdentifier, callback) {
    _logger.info('getAccountsByCustomer being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for getAccountsByCustomer');
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
    _logger.info('Preparing Query URL for getAccountsByCustomer');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/customers/{customerIdentifier}/accounts'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      customerIdentifier,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getAccountsByCustomer');
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
      `'Raw request for getAccountsByCustomer  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getAccountsByCustomer...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getAccountsByCustomer'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getAccountsByCustomer...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getAccountsByCustomer');
          parsed = parsed.map((model) =>
            _baseController
              .getObjectMapper()
              .mapObject(model, 'AccountSummaryModel')
          );
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getAccountsByCustomer ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getAccountsByCustomer'
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
   * Creates an account under a given customer
   *
   * @param  {array}  input    Array with all options for search
   * @param {string} input['customerIdentifier'] Customer Identifier
   * @param {CreateAccountRequestModel} input['body'] Request Body
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static createAccount(input, callback) {
    _logger.info('createAccount being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for createAccount');
    if (
      input.customerIdentifier === null ||
      input.customerIdentifier === undefined
    ) {
      const _err = {
        errorMessage:
          'The property `customerIdentifier` in the input object cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }

    if (input.body === null || input.body === undefined) {
      const _err = {
        errorMessage: 'The property `body` in the input object cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for createAccount');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/customers/{customerIdentifier}/accounts'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      customerIdentifier: input.customerIdentifier,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for createAccount');
    const _headers = {
      accept: 'application/json',
      'content-type': 'application/json; charset=utf-8',
      'user-agent': 'V2NGSDK',
    };

    // remove null values
    _apiHelper.cleanObject(input.body);

    // construct the request
    const _options = {
      queryUrl: _queryUrl,
      method: 'POST',
      headers: _headers,
      body: _apiHelper.jsonSerialize(input.body),
      username: _configuration.platformName,
      password: _configuration.platformKey,
    };
    _logger.debug(
      `'Raw request for createAccount  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for createAccount...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'createAccount'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for createAccount...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for createAccount');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'AccountModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for createAccount ');
          errorResponse = _baseController.validateResponse(
            _context,
            'createAccount'
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
   * Retrieves all accounts under the platform
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getAllAccounts(callback) {
    _logger.info('getAllAccounts being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // prepare query string for API call
    _logger.info('Preparing Query URL for getAllAccounts');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/accounts'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getAllAccounts');
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
      `'Raw request for getAllAccounts  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getAllAccounts...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getAllAccounts'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getAllAccounts...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getAllAccounts');
          parsed = parsed.map((model) =>
            _baseController.getObjectMapper().mapObject(model, 'AccountModel')
          );
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getAllAccounts ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getAllAccounts'
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
   * Retrieves a single account
   *
   * @param {string} accountIdentifier Account Identifier
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getAccount(accountIdentifier, callback) {
    _logger.info('getAccount being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // validating required parameters
    _logger.info('Validating required parameters for getAccount');
    if (accountIdentifier === null || accountIdentifier === undefined) {
      const _err = {
        errorMessage:
          'The parameter `accountIdentifier` is a required parameter and cannot be null.',
        errorCode: -1,
      };
      _callback(_err, null, null);
      return Promise.reject(_err);
    }
    // prepare query string for API call
    _logger.info('Preparing Query URL for getAccount');
    const _baseUri = _configuration.getBaseUri();

    let _queryBuilder = `${_baseUri}${'/accounts/{accountIdentifier}'}`;

    // process template parameters
    _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
      accountIdentifier,
    });

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getAccount');
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
      `'Raw request for getAccount  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getAccount...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getAccount'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getAccount...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getAccount');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'AccountModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getAccount ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getAccount'
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
module.exports = AccountsController;

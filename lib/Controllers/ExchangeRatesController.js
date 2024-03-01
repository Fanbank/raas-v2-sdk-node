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

class ExchangeRatesController {
  /**
   * Retrieve current exchange rates
   *
   * @callback    The callback function that returns response from the API call
   *
   * @returns {Promise}
   */
  static getExchangeRates(callback) {
    _logger.info('getExchangeRates being called');
    // create empty callback if absent
    const _callback =
      typeof callback === 'function' ? callback : () => undefined;

    // prepare query string for API call
    _logger.info('Preparing Query URL for getExchangeRates');
    const _baseUri = _configuration.getBaseUri();

    const _queryBuilder = `${_baseUri}${'/exchangerates'}`;

    // validate and preprocess url
    const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

    // prepare headers
    _logger.info('Preparing headers for getExchangeRates');
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
      `'Raw request for getExchangeRates  > ${JSON.stringify(_options)}'`
    );

    // build the response processing.
    return new Promise((_fulfill, _reject) => {
      _logger.info('Sending request for getExchangeRates...');
      _request(_options, (_error, _response, _context) => {
        let errorResponse;
        if (_error) {
          _logger.error(_error);
          errorResponse = _baseController.validateResponse(
            _context,
            'getExchangeRates'
          );
          _callback(
            errorResponse.error,
            errorResponse.response,
            errorResponse.context
          );
          _reject(errorResponse.error);
        } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
          _logger.debug(
            `'Raw response for getExchangeRates...  > ${JSON.stringify(_response)}'`
          );
          let parsed = JSON.parse(_response.body);
          _logger.info('Deserializing response for getExchangeRates');
          parsed = _baseController
            .getObjectMapper()
            .mapObject(parsed, 'ExchangeRateResponseModel');
          _callback(null, parsed, _context);
          _fulfill(parsed);
        } else {
          _logger.info('Validating response for getExchangeRates ');
          errorResponse = _baseController.validateResponse(
            _context,
            'getExchangeRates'
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
module.exports = ExchangeRatesController;

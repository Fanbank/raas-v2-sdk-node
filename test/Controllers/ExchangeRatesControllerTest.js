/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require('../TestHelper');
const APIHelper = require('../../lib/APIHelper');
const testerlib = require('../../lib');
const testConfiguration = require('../TestBootstrap');

const controller = testerlib.ExchangeRatesController;
const ExchangeRateResponseModel = testerlib.ExchangeRateResponseModel;

describe('ExchangeRatesController Tests', function tests() {
  this.timeout(testConfiguration.TEST_TIMEOUT);

  /**
   * Tests if we can successfully retrieve exchange rates
   */
  it('should testRetrieveExchangeRates response', function testRetrieveExchangeRatesTest(done) {
    controller.getExchangeRates(function callback(error, response, context) {
      // test response code
      assert.equal(200, context.response.statusCode);
      assert.isNotNull(response);
      assert.isTrue(
        TestHelper.isProperSubsetOf(
          context.response.body,
          {
            disclaimer:
              'Exchange rates are provided here for reference. They are updated at least once a day and may have changed by time of order.',
            exchangeRates: [
              {
                lastModifiedDate: '2018-04-19T13: 00: 14.291',
                rewardCurrency: 'EUR',
                baseCurrency: 'NZD',
                baseFx: 0.5912,
              },
              {
                lastModifiedDate: '2018-04-19T13: 00: 14.291',
                rewardCurrency: 'USD',
                baseCurrency: 'NZD',
                baseFx: 0.7313,
              },
              {
                lastModifiedDate: '2018-04-19T13: 00: 14.230',
                rewardCurrency: 'INR',
                baseCurrency: 'AUD',
                baseFx: 51.29066,
              },
            ],
          },
          false,
          true,
          false
        )
      );
      done();
    });
  });
});

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

const controller = testerlib.CatalogController;
const CatalogModel = testerlib.CatalogModel;

describe('CatalogController Tests', function tests() {
  this.timeout(testConfiguration.TEST_TIMEOUT);

  /**
   * Tests if we can successfully retrieve a platform's catalog
   */
  it('should testRetrieveCatalog response', function testRetrieveCatalogTest(done) {
    controller.getCatalog(function callback(error, response, context) {
      // test response code
      assert.equal(200, context.response.statusCode);
      assert.isNotNull(response);
      assert.isTrue(
        TestHelper.isProperSubsetOf(
          context.response.body,
          {
            catalogName: 'TestCatalog',
            brands: [
              {
                brandKey: 'B916708',
                brandName: 'Amazon.com',
                disclaimer: 'disclaimer',
                description: 'desc',
                shortDescription: 'short desc',
                terms: 'terms',
                createdDate: '2016-06-17T16: 52: 24Z',
                lastUpdateDate: '2017-10-23T22: 18: 51Z',
                imageUrls: {
                  '80w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b916708-80w-326ppi.png',
                  '130w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b916708-130w-326ppi.png',
                  '200w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b916708-200w-326ppi.png',
                  '278w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b916708-278w-326ppi.png',
                  '300w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b916708-300w-326ppi.png',
                  '1200w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b916708-1200w-326ppi.png',
                },
                status: 'active',
                items: [
                  {
                    utid: 'U666425',
                    rewardName: 'Amazon.com Gift Card',
                    currencyCode: 'USD',
                    status: 'active',
                    valueType: 'VARIABLE_VALUE',
                    rewardType: 'gift card',
                    minValue: 0.01,
                    maxValue: 2000,
                    createdDate: '2016-06-17T17: 38: 45.294Z',
                    lastUpdateDate: '2017-12-15T01: 27: 49.607Z',
                    countries: ['US'],
                  },
                ],
              },
              {
                brandKey: 'B725361',
                brandName: 'AMC Theatres®',
                disclaimer: 'discl',
                description: 'desc',
                shortDescription: 'short desc',
                terms: 'terms',
                createdDate: '2016-06-23T21: 53: 45Z',
                lastUpdateDate: '2016-07-25T22: 41: 11Z',
                imageUrls: {
                  '80w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b725361-80w-326ppi.png',
                  '130w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b725361-130w-326ppi.png',
                  '200w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b725361-200w-326ppi.png',
                  '278w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b725361-278w-326ppi.png',
                  '300w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b725361-300w-326ppi.png',
                  '1200w-326ppi':
                    'https: //d30s7yzk2az89n.cloudfront.net/images/brands/b725361-1200w-326ppi.png',
                },
                status: 'active',
                items: [
                  {
                    utid: 'U154092',
                    rewardName: 'AMC® Gift Card $10.00',
                    currencyCode: 'USD',
                    status: 'active',
                    valueType: 'FIXED_VALUE',
                    rewardType: 'gift card',
                    faceValue: 10,
                    createdDate: '2016-07-27T02: 54: 30.142Z',
                    lastUpdateDate: '2016-09-21T20: 59: 01.874Z',
                    countries: ['US'],
                  },
                  {
                    utid: 'U913336',
                    rewardName: 'AMC® Gift Card $25.00',
                    currencyCode: 'USD',
                    status: 'active',
                    valueType: 'FIXED_VALUE',
                    rewardType: 'gift card',
                    faceValue: 25,
                    createdDate: '2016-07-27T02: 55: 37.899Z',
                    lastUpdateDate: '2016-10-17T20: 55: 00.386Z',
                    countries: ['US'],
                  },
                  {
                    utid: 'U652361',
                    rewardName: 'AMC® Gift Card $50.00',
                    currencyCode: 'USD',
                    status: 'active',
                    valueType: 'FIXED_VALUE',
                    rewardType: 'gift card',
                    faceValue: 50,
                    createdDate: '2016-07-27T02: 56: 53.391Z',
                    lastUpdateDate: '2016-09-21T20: 59: 16.283Z',
                    countries: ['US'],
                  },
                ],
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

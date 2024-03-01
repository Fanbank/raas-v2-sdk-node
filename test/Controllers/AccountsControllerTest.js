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
const baseController = require('../../lib/Controllers/BaseController');

const controller = testerlib.AccountsController;
const AccountSummaryModel = testerlib.AccountSummaryModel;
const AccountModel = testerlib.AccountModel;
const CreateAccountRequestModel = testerlib.CreateAccountRequestModel;

describe('AccountsController Tests', function tests() {
  this.timeout(testConfiguration.TEST_TIMEOUT);

  /**
   * Tests retrieving all accounts under a specific customer
   */
  it('should testGetAllCustomerAccounts response', function testGetAllCustomerAccountsTest(done) {
    // parameters for the API call
    let customerIdentifier = 'sdkautotest1';

    controller.getAccountsByCustomer(
      customerIdentifier,
      function callback(error, response, context) {
        // test response code
        assert.equal(200, context.response.statusCode);
        assert.isNotNull(response);
        assert.isTrue(
          TestHelper.isArrayOfJsonObjectsProperSubsetOf(
            context.response.body,
            [
              {
                accountIdentifier: 'sdkautotest3',
                accountNumber: 'A01335766',
                displayName: 'SDK Auto Testing 3',
                createdAt: '2018-04-26T18: 16: 51.652Z',
                status: 'ACTIVE',
              },
              {
                accountIdentifier: 'sdkautotest2',
                accountNumber: 'A11720237',
                displayName: 'SDK Auto Testing 2',
                createdAt: '2018-04-26T18: 13: 45.196Z',
                status: 'ACTIVE',
              },
            ],
            true,
            true,
            false
          )
        );
        done();
      }
    );
  });

  /**
   * Tests retrieving all accounts
   */
  it('should testGetAllAccounts response', function testGetAllAccountsTest(done) {
    controller.getAllAccounts(function callback(error, response, context) {
      // test response code
      assert.equal(200, context.response.statusCode);
      assert.isNotNull(response);
      assert.isTrue(
        TestHelper.isArrayOfJsonObjectsProperSubsetOf(
          context.response.body,
          [
            {
              accountIdentifier: 'sdkautotest2',
              accountNumber: 'A11720237',
              displayName: 'SDK Auto Testing 2',
              currencyCode: 'USD',
              currentBalance: 0,
              createdAt: '2018-04-26T18: 13: 45.196Z',
              status: 'ACTIVE',
              contactEmail: 'test@example.com',
            },
          ],
          true,
          true,
          false
        )
      );
      done();
    });
  });

  /**
   * Tests retrieving a single account
   */
  it('should testGetSingleAccount response', function testGetSingleAccountTest(done) {
    // parameters for the API call
    let accountIdentifier = 'sdkautotest2';

    controller.getAccount(
      accountIdentifier,
      function callback(error, response, context) {
        // test response code
        assert.equal(200, context.response.statusCode);
        assert.isNotNull(response);
        assert.isTrue(
          TestHelper.isProperSubsetOf(
            context.response.body,
            {
              accountIdentifier: 'sdkautotest2',
              accountNumber: 'A11720237',
              displayName: 'SDK Auto Testing 2',
              currencyCode: 'USD',
              currentBalance: 0,
              createdAt: '2018-04-26T18: 13: 45.196Z',
              status: 'ACTIVE',
              contactEmail: 'test@example.com',
            },
            true,
            true,
            false
          )
        );
        done();
      }
    );
  });
});

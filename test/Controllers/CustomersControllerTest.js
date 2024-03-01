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

const controller = testerlib.CustomersController;
const CustomerModel = testerlib.CustomerModel;
const CreateCustomerRequestModel = testerlib.CreateCustomerRequestModel;

describe('CustomersController Tests', function tests() {
  this.timeout(testConfiguration.TEST_TIMEOUT);

  /**
   * Tests retrieving all customers
   */
  //     it("should testGetAllCustomers response", function testGetAllCustomersTest(done) {
  //         controller.getAllCustomers(function callback(error, response, context) {
  //             // test response code
  //             assert.equal(200, context.response.statusCode);
  //             assert.isNotNull(response);
  //             assert.isTrue(TestHelper.isArrayOfJsonObjectsProperSubsetOf(context.response.body, [
  //   {
  //     "customerIdentifier": "sdkautotest1",
  //     "displayName": "SDK Auto Testing 1",
  //     "status": "active",
  //     "createdAt": "2018-04-26T18: 13: 12.874Z",
  //     "accounts": [
  //       {
  //         "accountIdentifier": "sdkautotest3",
  //         "accountNumber": "A01335766",
  //         "displayName": "SDK Auto Testing 3",
  //         "createdAt": "2018-04-26T18: 16: 51.652Z",
  //         "status": "ACTIVE"
  //       },
  //       {
  //         "accountIdentifier": "sdkautotest2",
  //         "accountNumber": "A11720237",
  //         "displayName": "SDK Auto Testing 2",
  //         "createdAt": "2018-04-26T18: 13: 45.196Z",
  //         "status": "ACTIVE"
  //       }
  //     ]
  //   }
  // ], true, true, false));
  //             done();
  //         });
  //     });

  /**
   * Tests retrieving a single customer
   */
  it('should testGetCustomer response', function testGetCustomerTest(done) {
    // parameters for the API call
    let customerIdentifier = 'sdkautotest1';

    controller.getCustomer(
      customerIdentifier,
      function callback(error, response, context) {
        // test response code
        assert.equal(200, context.response.statusCode);
        assert.isNotNull(response);
        assert.isTrue(
          TestHelper.isProperSubsetOf(
            context.response.body,
            {
              customerIdentifier: 'sdkautotest1',
              displayName: 'SDK Auto Testing 1',
              status: 'active',
              createdAt: '2018-04-26T18: 13: 12.874Z',
              accounts: [
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

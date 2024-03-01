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

const controller = testerlib.FundController;
const UnregisterCreditCardResponseModel =
  testerlib.UnregisterCreditCardResponseModel;
const UnregisterCreditCardRequestModel =
  testerlib.UnregisterCreditCardRequestModel;
const GetDepositResponseModel = testerlib.GetDepositResponseModel;
const DepositResponseModel = testerlib.DepositResponseModel;
const DepositRequestModel = testerlib.DepositRequestModel;
const CreditCardModel = testerlib.CreditCardModel;
const CreateCreditCardRequestModel = testerlib.CreateCreditCardRequestModel;

describe('FundController Tests', function tests() {
  this.timeout(testConfiguration.TEST_TIMEOUT);

  /**
   * Tests retrieving deposit information
   */
  it('should testGetDeposit response', function testGetDepositTest(done) {
    // parameters for the API call
    let depositId = 'RAD-180426-5407';

    controller.getDeposit(
      depositId,
      function callback(error, response, context) {
        // test response code
        assert.equal(200, context.response.statusCode);
        assert.isNotNull(response);
        assert.isTrue(
          TestHelper.isProperSubsetOf(
            context.response.body,
            {
              referenceDepositID: 'RAD-180426-5407',
              amount: 1.25,
              amountCharged: 1.29,
              feePercent: 3.5,
              createdDate: '2018-04-26T18: 56: 28.28Z',
              status: 'SUCCESS',
              accountNumber: 'A32386768',
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

  /**
   * Tests adding funds to an account
   */
  // it("should testAddFunds response", function testAddFundsTest(done) {
  //   // parameters for the API call
  //   let body = baseController.getObjectMapper().mapObject(
  //     {
  //       accountIdentifier: "sdkautotest5",
  //       amount: 1.25,
  //       creditCardToken: "56ac1a30-6ba2-4047-9b8c-70f97a5502c5",
  //       customerIdentifier: "sdkautotest4"
  //     },
  //     "DepositRequestModel"
  //   );

  //   controller.addFunds(body, function callback(error, response, context) {
  //     // test response code
  //     assert.equal(200, context.response.statusCode);
  //     assert.isNotNull(response);
  //     assert.isTrue(
  //       TestHelper.isProperSubsetOf(
  //         context.response.body,
  //         {
  //           referenceDepositID: "RAD-180426-5407",
  //           amount: 1.25,
  //           amountCharged: 1.29,
  //           feePercent: 3.5,
  //           createdDate: "2018-04-26T18: 56: 28.28Z",
  //           status: "SUCCESS",
  //           accountNumber: "A32386768"
  //         },
  //         false,
  //         true,
  //         false
  //       )
  //     );
  //     done();
  //   });
  // });

  /**
   * Tests retrieving all credit cards for a platform
   */
  it('should testGetCreditCards response', function testGetCreditCardsTest(done) {
    controller.getCreditCards(function callback(error, response, context) {
      // test response code
      assert.equal(200, context.response.statusCode);
      assert.isNotNull(response);
      assert.isTrue(
        TestHelper.isArrayOfJsonObjectsProperSubsetOf(
          context.response.body,
          [
            {
              customerIdentifier: 'sdkautotest4',
              accountIdentifier: 'sdkautotest5',
              token: '56ac1a30-6ba2-4047-9b8c-70f97a5502c5',
              label: 'SDK Auto Testing Card 1',
              lastFourDigits: '4444',
              expirationDate: '2020-01',
              status: 'ACTIVE',
              createdDate: '2018-04-26T18: 52: 17.575Z',
              activationDate: '2018-04-26T18: 52: 17.575Z',
              contactInformation: [
                {
                  fullName: 'Test User',
                  emailAddress: 'test@example.com',
                },
                {
                  fullName: 'Test Man Two',
                  emailAddress: 'test2@example.com',
                },
              ],
              accountNumber: 'A32386768',
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
   * Tests retrieving a single credit card
   */
  it('should testGetCreditCard response', function testGetCreditCardTest(done) {
    // parameters for the API call
    let token = '56ac1a30-6ba2-4047-9b8c-70f97a5502c5';

    controller.getCreditCard(
      token,
      function callback(error, response, context) {
        // test response code
        assert.equal(200, context.response.statusCode);
        assert.isNotNull(response);
        assert.isTrue(
          TestHelper.isProperSubsetOf(
            context.response.body,
            {
              customerIdentifier: 'sdkautotest4',
              accountIdentifier: 'sdkautotest5',
              token: '56ac1a30-6ba2-4047-9b8c-70f97a5502c5',
              label: 'SDK Auto Testing Card 1',
              lastFourDigits: '4444',
              expirationDate: '2020-01',
              status: 'ACTIVE',
              createdDate: '2018-04-26T18: 52: 17.575Z',
              activationDate: '2018-04-26T18: 52: 17.575Z',
              contactInformation: [
                {
                  fullName: 'Test User',
                  emailAddress: 'test@example.com',
                },
                {
                  fullName: 'Test Man Two',
                  emailAddress: 'test2@example.com',
                },
              ],
              accountNumber: 'A32386768',
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

/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require('../TestHelper');
const APIHelper = require('../../lib/APIHelper');
const ObjectMapper = require('../../lib/ObjectMapper');
const testerlib = require('../../lib');
const testConfiguration = require('../TestBootstrap');
const baseController = require('../../lib/Controllers/BaseController');

const controller = testerlib.OrdersController;
const OrderModel = testerlib.OrderModel;
const ResendOrderResponseModel = testerlib.ResendOrderResponseModel;
const GetOrdersResponseModel = testerlib.GetOrdersResponseModel;
const CreateOrderRequestModel = testerlib.CreateOrderRequestModel;

describe('OrdersController Tests', function tests() {
  this.timeout(testConfiguration.TEST_TIMEOUT);

  /**
   * Tests retrieving a single order
   */
  it('should testGetOrder response', function testGetOrderTest(done) {
    // parameters for the API call
    let referenceOrderID = 'RA180426-1401-64';

    controller.getOrder(
      referenceOrderID,
      function callback(error, response, context) {
        // test response code
        assert.equal(200, context.response.statusCode);
        assert.isNotNull(response);
        assert.isTrue(
          TestHelper.isProperSubsetOf(
            context.response.body,
            {
              referenceOrderID: 'RA180426-1401-64',
              customerIdentifier: 'sdkautotest4',
              accountIdentifier: 'sdkautotest5',
              accountNumber: 'A32386768',
              amountCharged: {
                value: 1,
                currencyCode: 'USD',
                total: 1,
              },
              marginShare: {
                value: 0,
                currencyCode: 'USD',
              },
              denomination: {
                value: 1,
                currencyCode: 'USD',
              },
              utid: 'U561593',
              rewardName: 'Reward Link',
              sender: {
                firstName: '',
                lastName: '',
                email: '',
              },
              recipient: {
                email: '',
                firstName: '',
                lastName: '',
              },
              sendEmail: false,
              status: 'COMPLETE',
              createdAt: '2018-04-26T20: 08: 59.624Z',
              reward: {
                credentials: {
                  'Redemption Link':
                    'https: //sandbox.rewardlink.io/r/1/ed0HtzSblNV6oFddNnnlf68eXzGQoREvcxwxu_Vi5Wk',
                },
                credentialList: [
                  {
                    label: 'Redemption Link',
                    value:
                      'https: //sandbox.rewardlink.io/r/1/ed0HtzSblNV6oFddNnnlf68eXzGQoREvcxwxu_Vi5Wk',
                    type: 'url',
                    credentialType: 'redemptionUrl',
                  },
                ],
                redemptionInstructions:
                  '<p>&bull; Click on the redemption link above to activate your Reward Link.<br />\r\n&bull; Next, you will be able to spend your balance on retail gift cards.</p>\r\n\r\n<p>If you don&#39;t want to spend your entire Reward Link value right away, save the email or URL and return via the redemption link - your value will be waiting to be spent. This allows you to store the balance to redeem at another time.</p>\r\n',
              },
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
   * Tests placing an order with the minimum parameters required
   */
  it('should testPlaceOrderWithMinimumCriteria response', function testPlaceOrderWithMinimumCriteriaTest(done) {
    // parameters for the API call
    let body = baseController.getObjectMapper().mapObject(
      {
        accountIdentifier: 'sdkautotest5',
        amount: 1.0,
        customerIdentifier: 'sdkautotest4',
        sendEmail: false,
        utid: 'U561593',
      },
      'CreateOrderRequestModel'
    );

    controller.createOrder(body, function callback(error, response, context) {
      // test response code
      assert.equal(201, context.response.statusCode);
      assert.isNotNull(response);
      assert.isTrue(
        TestHelper.isProperSubsetOf(
          context.response.body,
          {
            referenceOrderID: 'RA180426-1401-64',
            customerIdentifier: 'sdkautotest4',
            accountIdentifier: 'sdkautotest5',
            accountNumber: 'A32386768',
            amountCharged: {
              value: 1,
              currencyCode: 'USD',
              total: 1,
            },
            denomination: {
              value: 1,
              currencyCode: 'USD',
            },
            utid: 'U561593',
            rewardName: 'Reward Link',
            sender: {
              firstName: '',
              lastName: '',
              email: '',
            },
            recipient: {
              email: '',
              firstName: '',
              lastName: '',
            },
            sendEmail: false,
            status: 'COMPLETE',
            createdAt: '2018-04-26T20: 08: 59.624Z',
            reward: {
              credentials: {
                'Redemption Link':
                  'https: //sandbox.rewardlink.io/r/1/ed0HtzSblNV6oFddNnnlf68eXzGQoREvcxwxu_Vi5Wk',
              },
              credentialList: [
                {
                  label: 'Redemption Link',
                  value:
                    'https: //sandbox.rewardlink.io/r/1/ed0HtzSblNV6oFddNnnlf68eXzGQoREvcxwxu_Vi5Wk',
                  type: 'url',
                  credentialType: 'redemptionUrl',
                },
              ],
              redemptionInstructions:
                '<p>&bull; Click on the redemption link above to activate your Reward Link.<br />\r\n&bull; Next, you will be able to spend your balance on retail gift cards.</p>\r\n\r\n<p>If you don&#39;t want to spend your entire Reward Link value right away, save the email or URL and return via the redemption link - your value will be waiting to be spent. This allows you to store the balance to redeem at another time.</p>\r\n',
            },
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

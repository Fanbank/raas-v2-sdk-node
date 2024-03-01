/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const CreateAccountRequestModel = require('./Models/CreateAccountRequestModel');
const NameEmailModel = require('./Models/NameEmailModel');
const SystemStatusResponseModel = require('./Models/SystemStatusResponseModel');
const RaasServerErrorModel = require('./Models/RaasServerErrorModel');
const NewCreditCardModel = require('./Models/NewCreditCardModel');
const CreateCustomerRequestModel = require('./Models/CreateCustomerRequestModel');
const UnregisterCreditCardResponseModel = require('./Models/UnregisterCreditCardResponseModel');
const UnregisterCreditCardRequestModel = require('./Models/UnregisterCreditCardRequestModel');
const CreateOrderRequestModel = require('./Models/CreateOrderRequestModel');
const DepositRequestModel = require('./Models/DepositRequestModel');
const GetOrdersResponseModel = require('./Models/GetOrdersResponseModel');
const ItemModel = require('./Models/ItemModel');
const CatalogModel = require('./Models/CatalogModel');
const RewardCredentialModel = require('./Models/RewardCredentialModel');
const OrderModel = require('./Models/OrderModel');
const ExchangeRateModel = require('./Models/ExchangeRateModel');
const FullNameEmailModel = require('./Models/FullNameEmailModel');
const RaasClientErrorModel = require('./Models/RaasClientErrorModel');
const BrandModel = require('./Models/BrandModel');
const BillingAddressModel = require('./Models/BillingAddressModel');
const AccountModel = require('./Models/AccountModel');
const CreateCreditCardRequestModel = require('./Models/CreateCreditCardRequestModel');
const GetDepositResponseModel = require('./Models/GetDepositResponseModel');
const RewardModel = require('./Models/RewardModel');
const CurrencyBreakdownModel = require('./Models/CurrencyBreakdownModel');
const AccountSummaryModel = require('./Models/AccountSummaryModel');
const ResendOrderResponseModel = require('./Models/ResendOrderResponseModel');
const DepositResponseModel = require('./Models/DepositResponseModel');
const ExchangeRateResponseModel = require('./Models/ExchangeRateResponseModel');
const CustomerModel = require('./Models/CustomerModel');
const OrderSummaryModel = require('./Models/OrderSummaryModel');
const PageModel = require('./Models/PageModel');
const CreditCardModel = require('./Models/CreditCardModel');
const RaasServerException = require('./Exceptions/RaasServerException');
const RaasGenericException = require('./Exceptions/RaasGenericException');
const RaasClientException = require('./Exceptions/RaasClientException');

const classMap = {
  CreateAccountRequestModel,
  NameEmailModel,
  SystemStatusResponseModel,
  RaasServerErrorModel,
  NewCreditCardModel,
  CreateCustomerRequestModel,
  UnregisterCreditCardResponseModel,
  UnregisterCreditCardRequestModel,
  CreateOrderRequestModel,
  DepositRequestModel,
  GetOrdersResponseModel,
  ItemModel,
  CatalogModel,
  RewardCredentialModel,
  OrderModel,
  ExchangeRateModel,
  FullNameEmailModel,
  RaasClientErrorModel,
  BrandModel,
  BillingAddressModel,
  AccountModel,
  CreateCreditCardRequestModel,
  GetDepositResponseModel,
  RewardModel,
  CurrencyBreakdownModel,
  AccountSummaryModel,
  ResendOrderResponseModel,
  DepositResponseModel,
  ExchangeRateResponseModel,
  CustomerModel,
  OrderSummaryModel,
  PageModel,
  CreditCardModel,
  RaasServerException,
  RaasGenericException,
  RaasClientException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
  /**
   * Creates instance of a model class
   * @param  modelName  {string}  Name of class to instantiate
   * @returns  {object} Instance of the model class
   */
  static getInstance(modelName) {
    return new classMap[modelName]();
  }
}

module.exports = ModelFactory;

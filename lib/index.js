/**
 * @module raas
 *
 * With this RESTful API you can integrate a global reward or incentive program into your app or
 * platform. If you have any questions or if you'd like to receive your own credentials, please
 * contact us at devsupport@tangocard.com.
 */

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Logger = require('./LogConfig');
const StatusController = require('./Controllers/StatusController');
const AccountsController = require('./Controllers/AccountsController');
const OrdersController = require('./Controllers/OrdersController');
const FundController = require('./Controllers/FundController');
const ExchangeRatesController = require('./Controllers/ExchangeRatesController');
const CustomersController = require('./Controllers/CustomersController');
const CatalogController = require('./Controllers/CatalogController');
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
const APIException = require('./Exceptions/APIException');

const initializer = {
  // functional components of raas
  Configuration,
  Environments,
  Logger,
  // controllers of raas
  StatusController,
  AccountsController,
  OrdersController,
  FundController,
  ExchangeRatesController,
  CustomersController,
  CatalogController,
  // models of raas
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
  // exceptions of raas
  RaasServerException,
  RaasGenericException,
  RaasClientException,
  APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;

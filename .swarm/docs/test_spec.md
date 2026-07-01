# raas-v2-sdk-node - Testing Specifications

## Controller Operations (API Interfaces)

### StatusController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `getSystemStatus(callback)` | `GET /pulse` | None | `SystemStatusResponseModel` |

### AccountsController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `getAccountsByCustomer(customerIdentifier, callback)` | `GET /customers/{customerIdentifier}/accounts` | `customerIdentifier` (string) | `AccountSummaryModel[]` |
| `createAccount(input, callback)` | `POST /customers/{customerIdentifier}/accounts` | `input.customerIdentifier` (string), `input.body` (CreateAccountRequestModel) | `AccountModel` |
| `getAllAccounts(callback)` | `GET /accounts` | None | `AccountModel[]` |
| `getAccount(accountIdentifier, callback)` | `GET /accounts/{accountIdentifier}` | `accountIdentifier` (string) | `AccountModel` |

### CustomersController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `createCustomer(body, callback)` | `POST /customers` | `body` (CreateCustomerRequestModel) | `CustomerModel` |
| `getAllCustomers(callback)` | `GET /customers` | None | `CustomerModel[]` |
| `getCustomer(customerIdentifier, callback)` | `GET /customers/{customerIdentifier}` | `customerIdentifier` (string) | `CustomerModel` |

### OrdersController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `getOrder(referenceOrderID, callback)` | `GET /orders/{referenceOrderID}` | `referenceOrderID` (string) | `OrderModel` |
| `createOrder(body, callback)` | `POST /orders` | `body` (CreateOrderRequestModel) | `OrderModel` (201) |
| `getOrders(input, callback)` | `GET /orders` | None (all optional) | `GetOrdersResponseModel` |
| `createResendOrder(referenceOrderID, callback)` | `POST /orders/{referenceOrderID}/resends` | `referenceOrderID` (string) | `ResendOrderResponseModel` |

**getOrders optional query params:** `accountIdentifier`, `customerIdentifier`, `externalRefID`, `startDate` (rfc3339), `endDate` (rfc3339), `elementsPerBlock` (int), `page` (int)

### CatalogController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `getCatalog(callback)` | `GET /catalogs` | None | `CatalogModel` |

### ExchangeRatesController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `getExchangeRates(callback)` | `GET /exchangerates` | None | `ExchangeRateResponseModel` |

### FundController

| Method | HTTP Endpoint | Required Params | Response Model |
|--------|--------------|-----------------|----------------|
| `createRegisterCreditCard(body, callback)` | `POST /creditCards` | `body` (CreateCreditCardRequestModel) | `CreditCardModel` |
| `getCreditCards(callback)` | `GET /creditCards` | None | `CreditCardModel[]` |
| `getCreditCard(token, callback)` | `GET /creditCards/{token}` | `token` (string) | `CreditCardModel` |
| `createUnregisterCreditCard(body, callback)` | `POST /creditCardUnregisters` | `body` (UnregisterCreditCardRequestModel) | `UnregisterCreditCardResponseModel` |
| `addFunds(body, callback)` | `POST /creditCardDeposits` | `body` (DepositRequestModel) | `DepositResponseModel` |
| `getDeposit(depositId, callback)` | `GET /creditCardDeposits/{depositId}` | `depositId` (string) | `GetDepositResponseModel` |

---

## Authentication & Configuration

All endpoints except `GET /pulse` (StatusController) use **HTTP Basic Authentication**:
- **Username:** `configuration.platformName` (e.g., `'QAPlatform2'` in sandbox)
- **Password:** `configuration.platformKey` (the platform secret)
- Set via `raas.configuration.platformName` and `raas.configuration.platformKey` before making any call.
- **User-Agent header:** `'V2NGSDK'` is sent on every request.

Environment selection:
```js
raas.configuration.currentEnvironment = raas.Environments.SANDBOX;     // default
raas.configuration.currentEnvironment = raas.Environments.PRODUCTION;
```

---

## Key Request Models

### CreateOrderRequestModel

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `accountIdentifier` | string | Yes | The funded account to charge |
| `amount` | number | Yes | Order amount in account currency |
| `utid` | string | Yes (or `etid`) | Unique Token ID identifying the reward product |
| `customerIdentifier` | string | Yes | Customer who owns the account |
| `sendEmail` | boolean | Yes | Whether Tango Card sends the reward email |
| `recipient` | NameEmailModel | No | Recipient name and email |
| `sender` | NameEmailModel | No | Sender name and email |
| `externalRefID` | string | No | Caller-defined reference for idempotency |
| `campaign` | string | No | Campaign identifier |
| `emailSubject` | string | No | Custom email subject |
| `message` | string | No | Custom message |
| `notes` | string | No | Internal notes |
| `etid` | string | No | Alternative to utid |

### CreateAccountRequestModel

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `accountIdentifier` | string | Yes | Unique identifier for the new account |
| `displayName` | string | Yes | Human-readable name |
| `contactEmail` | string | No | Account contact email |

---

## Key Response Models

### OrderModel

Fields: `referenceOrderID`, `customerIdentifier`, `accountIdentifier`, `accountNumber`, `amountCharged` (CurrencyBreakdownModel), `denomination` (CurrencyBreakdownModel), `utid`, `rewardName`, `sender` (NameEmailModel), `recipient` (NameEmailModel), `sendEmail`, `etid`, `status`, `createdAt` (rfc3339 datetime), `reward` (RewardModel), `campaign`, `emailSubject`, `externalRefID`, `message`, `notes`, `marginShare` (CurrencyBreakdownModel).

### AccountModel

Fields: `accountIdentifier`, `accountNumber`, `displayName`, `currencyCode` (default: `'USD'`), `currentBalance`, `createdAt` (rfc3339), `status`, `contactEmail`.

### CatalogModel

Fields: `catalogName`, `brands` (BrandModel[]).

### BrandModel

Fields: include `brandKey`, `brandName`, `description`, `disclaimer`, `shortDescription`, `terms`, `imageUrls`, `items` (ItemModel[]).

### RewardModel

Fields: `credentials` (key-value map), `credentialList` (RewardCredentialModel[]), `redemptionInstructions`.

### CurrencyBreakdownModel

Fields: `value`, `currencyCode`, `total`.

---

## Error Handling

HTTP status codes are mapped to typed exceptions by `BaseController.validateResponse()`:

| HTTP Status | Exception Class | Notes |
|------------|-----------------|-------|
| 400 | `RaasClientException` | Bad Request; `errors` array with field-level detail |
| 401 | `RaasGenericException` | Unauthorized — invalid credentials |
| 403 | `RaasClientException` | Forbidden |
| 404 | `RaasGenericException` | Not Found; `response` contains raw body |
| 409 | `RaasClientException` | Conflict (e.g., duplicate identifiers) |
| 500 | `RaasServerException` | Internal Server Error — retry later |
| 503 | `RaasServerException` | Service Unavailable — retry later |
| other | `RaasGenericException` | API Error |

Exception fields: `reason` (human-readable string), `context` (HttpContext), `timestamp`, `requestId`, `path`, `httpCode`, `httpPhrase`, `errors` (array).

---

## Edge Cases

### Authentication
- Missing or incorrect `platformName`/`platformKey` returns 401 (`RaasGenericException`).
- Default credentials in `configuration.js` are sandbox test values — using them against production returns 401.
- `getSystemStatus` (`GET /pulse`) does not send auth headers; it is the only unauthenticated endpoint.

### Required Parameter Validation (client-side, before HTTP call)
- Any controller method with a required parameter (e.g., `referenceOrderID`, `customerIdentifier`, `accountIdentifier`, `body`) performs a null/undefined check before sending.
- If a required param is null/undefined, the callback is called immediately with `{ errorMessage: '...', errorCode: -1 }` and the Promise is rejected — **no HTTP call is made**.

### Orders
- `createOrder` requires `body` to be non-null; null body returns `errorCode: -1` without hitting the API.
- `createOrder` returns 201 on success (not 200).
- `externalRefID` can be used for idempotency — same `externalRefID` may return 409 (Conflict) if the order already exists.
- `sendEmail: false` suppresses Tango Card's own email delivery; the reward credentials are still returned in `OrderModel.reward`.

### Accounts
- `createAccount` requires both `input.customerIdentifier` and `input.body`; missing either returns `errorCode: -1`.
- `currencyCode` on `AccountModel` defaults to `'USD'` if not returned by the API.

### Catalog
- `getCatalog` returns the full platform catalog (all brands and items) in one call. This can be a large payload for platforms with many products.

### Fund / Credit Cards
- `getCreditCard` and `getDeposit` require a string token/depositId respectively.
- `createUnregisterCreditCard` uses the `/creditCardUnregisters` endpoint (POST, not DELETE).

### Exchange Rates
- `getExchangeRates` returns all exchange rates for the platform in one call; no filtering parameters.

### Logging
- `LogConfig.LogConfig()` is called once automatically when `lib/index.js` is first `require`'d. This writes a `logfile.log` in the **process working directory**. Callers should be aware of this file side effect.
- All controller methods emit `_logger.info` and `_logger.debug` entries; raw request options (including credentials) are logged at debug level — avoid debug-level logging in production.

---

## Test Scenarios

### Integration Test Setup

The test suite in `test/Controllers/` hits the **live Tango Card sandbox API**. There are no mocks. Tests require:
- A live internet connection to `integration-api.tangocard.com`
- Valid sandbox credentials (the repo defaults to `QAPlatform2` / the hardcoded key in `configuration.js`)
- Pre-existing sandbox test data: customers `sdkautotest1`, `sdkautotest4`; accounts `sdkautotest2`, `sdkautotest3`, `sdkautotest5`; order `RA180426-1401-64`

### Test Scenarios by Controller

| ID | Controller | Scenario | Expected |
|----|-----------|----------|----------|
| ACC-01 | AccountsController | Get all accounts under customer `sdkautotest1` | 200 + array with `sdkautotest2`, `sdkautotest3` |
| ACC-02 | AccountsController | Get all platform accounts | 200 + array including `sdkautotest2` with balance and contactEmail |
| ACC-03 | AccountsController | Get single account `sdkautotest2` | 200 + AccountModel with currencyCode=USD, status=ACTIVE |
| ORD-01 | OrdersController | Get existing order `RA180426-1401-64` | 200 + OrderModel with status=COMPLETE, reward credentials |
| ORD-02 | OrdersController | Place order with minimum criteria | 201 + OrderModel with referenceOrderID, reward |
| CAT-01 | CatalogController | Get platform catalog | 200 + CatalogModel with brands array |
| CUS-01 | CustomersController | Get all customers | 200 + CustomerModel array |
| CUS-02 | CustomersController | Get single customer | 200 + CustomerModel |
| EXR-01 | ExchangeRatesController | Get exchange rates | 200 + ExchangeRateResponseModel |
| FND-01 | FundController | Get all credit cards | 200 + CreditCardModel array |
| STA-01 | StatusController | Get system status | 200 + SystemStatusResponseModel |

### Error / Edge Case Scenarios

| ID | Scenario | Expected |
|----|----------|----------|
| ERR-01 | Call with null required param (e.g., `getOrder(null)`) | Immediate callback with `errorCode: -1`, no HTTP call |
| ERR-02 | Invalid platformKey (wrong credentials) | 401, RaasGenericException with reason='Unauthorized - Invalid Credentials' |
| ERR-03 | Get non-existent order ID | 404, RaasGenericException with reason='Not Found' |
| ERR-04 | Create order with invalid account | 400, RaasClientException with errors array |
| ERR-05 | Duplicate externalRefID on order | 409, RaasClientException with reason='Conflict' |
| ERR-06 | Tango Card API returns 500 | RaasServerException with reason='Internal Server Error - Retry Later' |
| ERR-07 | Tango Card API returns 503 | RaasServerException with reason='Service Unavailable - Retry Later' |

### Running Tests

```bash
# Run all tests
mocha --recursive

# Run specific controller tests
cd test/Controllers && mocha OrdersControllerTest

# Increase timeout (default comes from TestBootstrap TESTTIMEOUT)
# Edit the TEST_TIMEOUT value in test/TestBootstrap.js
```

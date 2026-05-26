# API Controllers

## What it is and what it does

The API Controllers process is the primary interface layer of the SDK. It exposes all RaaS v2 API operations as static methods on seven ES6 controller classes, plus a shared `BaseController` that handles error processing. Each controller groups methods by resource domain: Accounts, Catalog, Customers, ExchangeRates, Fund (credit cards and deposits), Orders, and Status. Every method supports both a Node.js callback pattern and a Promise interface simultaneously.

## How it works (simplified flow)

1. The caller invokes a static controller method, e.g. `OrdersController.createOrder(body, callback)`.
2. The method validates required parameters client-side. If any required parameter is null or undefined, the callback is called immediately with `{ errorCode: -1, errorMessage: '...' }` and the Promise is rejected — no HTTP call is made.
3. The method builds the full request URL using `APIHelper.appendUrlWithTemplateParameters()` and `APIHelper.appendUrlWithQueryParameters()`.
4. HTTP headers are constructed (always includes `accept: application/json` and `user-agent: V2NGSDK`; POST/PUT operations add `content-type: application/json; charset=utf-8`). POST body is serialized via `APIHelper.jsonSerialize()` after `APIHelper.cleanObject()` removes null fields.
5. The options object (queryUrl, method, headers, body, username, password) is passed to `RequestClient`, which executes the HTTP request using the `request` npm package.
6. On a 2xx response: the response body string is parsed with `JSON.parse`, then deserialized into the appropriate model class via `BaseController.getObjectMapper().mapObject(parsed, 'ModelName')`. The typed model is passed to the callback as the second argument and resolved in the Promise.
7. On a non-2xx response: `BaseController.validateResponse(_context, endpointName)` maps the HTTP status code to the appropriate exception type (`RaasClientException`, `RaasServerException`, or `RaasGenericException`) and returns a structured error object. This is passed to the callback as the first argument and rejected in the Promise.
8. All significant steps are logged via `winston` (`_logger.info` for flow checkpoints, `_logger.debug` for raw request/response objects).

## What data it handles

- **Input:** Typed request models (e.g., `CreateOrderRequestModel`, `CreateAccountRequestModel`), string identifiers (customerIdentifier, accountIdentifier, referenceOrderID, token, depositId), optional query parameters (dates as moment objects, pagination integers), callback functions.
- **Output:** Typed response model instances (e.g., `OrderModel`, `AccountModel[]`, `CatalogModel`), or typed exception objects with `errorMessage`, `errorCode`, and `errorResponse` fields on error.

## Key concepts

- **Static methods:** All controller methods are `static`. There is no need to instantiate a controller class.
- **Dual interface:** Every method accepts an optional callback as the last parameter and simultaneously returns a Promise. If no callback is provided, a no-op function is used. This supports both legacy callback-style and modern async/await usage.
- **No retry logic:** The SDK does not retry failed requests. If the Tango Card API returns 5xx, the error is surfaced immediately to the caller. Retry logic must be implemented by the consuming application.
- **Null cleaning:** Before serializing POST bodies, `APIHelper.cleanObject()` removes null and undefined fields. This prevents sending `null` fields that the RaaS API might reject.
- **Auth is always Basic Auth:** Every request (except `GET /pulse`) sends `platformName` as the HTTP Basic Auth username and `platformKey` as the password, drawn from `configuration.js` at call time.
- **User-Agent:** All requests include `user-agent: 'V2NGSDK'` for Tango Card analytics.

## Considerations for future changes

- This is **auto-generated code** (APIMatic v2.0). Manual edits risk being overwritten if the SDK is ever regenerated from the Tango Card API spec. If the Tango Card API adds a new endpoint, the correct approach is to regenerate via APIMatic and review the diff.
- The `request` npm package (v2.x) is deprecated in favor of alternatives like `node-fetch`, `axios`, or the native `fetch`. If upgrading, `RequestClient.js` is the only file that needs to change — all controllers depend on it indirectly.
- `winston` v2.x is also legacy. Upgrading to winston v3 changes the transport API used in `LogConfig.js`.
- The debug log entries include the full request options object with credentials (`username` and `password`). In production environments, ensure the file transport's debug log (`logfile.log`) is protected or the log level is raised to info.
- Adding a new controller operation requires: (1) a new static method in the relevant controller class, (2) a new request model if the endpoint has a novel request body shape, (3) a new response model if the endpoint returns a new response shape, and (4) registering any new models in both `ModelFactory.js` and `lib/index.js`.

## Main files

| File | Responsibility |
|------|----------------|
| `lib/Controllers/AccountsController.js` | getAccountsByCustomer, createAccount, getAllAccounts, getAccount |
| `lib/Controllers/CatalogController.js` | getCatalog |
| `lib/Controllers/CustomersController.js` | createCustomer, getAllCustomers, getCustomer |
| `lib/Controllers/ExchangeRatesController.js` | getExchangeRates |
| `lib/Controllers/FundController.js` | createRegisterCreditCard, getCreditCards, getCreditCard, createUnregisterCreditCard, addFunds, getDeposit |
| `lib/Controllers/OrdersController.js` | getOrder, createOrder, getOrders, createResendOrder |
| `lib/Controllers/StatusController.js` | getSystemStatus |
| `lib/Controllers/BaseController.js` | validateResponse (error mapping), getObjectMapper (shared ObjectMapper instance) |

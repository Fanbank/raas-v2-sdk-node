# raas-v2-sdk-node

Auto-generated Node.js client SDK for the Tango Card RaaS (Rewards as a Service) v2 API. Provides JavaScript wrapper classes over the Tango Card REST API: catalogs, brands, orders, accounts, customers, credit cards, deposits, exchange rates, and system status. Used by main-api (installed as the `raas` npm package from GitHub).

## Repo Processes

This repo has 4 processes. Detailed documentation for each one is in `.swarm/docs/`.

### 1. API Controllers
- **What it does:** Implements all RaaS API operations as static methods on ES6 classes. Each controller covers a resource domain: Accounts, Catalog, Customers, ExchangeRates, Fund (credit cards + deposits), Orders, and Status.
- **Files:** `lib/Controllers/AccountsController.js`, `lib/Controllers/CatalogController.js`, `lib/Controllers/CustomersController.js`, `lib/Controllers/ExchangeRatesController.js`, `lib/Controllers/FundController.js`, `lib/Controllers/OrdersController.js`, `lib/Controllers/StatusController.js`, `lib/Controllers/BaseController.js`
- **Detailed docs:** `.swarm/docs/api_controllers.md`

### 2. Request/Response Models
- **What it does:** Plain JavaScript classes representing every request body and response shape from the RaaS API. Each model declares its field mapping via `mappingInfo()` and supports serialization via `toJSON()`.
- **Files:** `lib/Models/` (28 model files), `lib/Models/BaseModel.js`
- **Detailed docs:** `.swarm/docs/models.md`

### 3. HTTP Client & Configuration
- **What it does:** Low-level transport layer. `RequestClient.js` wraps the `request` npm package. `configuration.js` holds credentials, environment selection, and base URL resolution. `APIHelper.js` provides URL building, serialization, and date formatting utilities. `LogConfig.js` configures winston logging.
- **Files:** `lib/Http/Client/RequestClient.js`, `lib/Http/Client/HttpContext.js`, `lib/Http/Request/HttpRequest.js`, `lib/Http/Response/HttpResponse.js`, `lib/configuration.js`, `lib/Environments.js`, `lib/Servers.js`, `lib/APIHelper.js`, `lib/LogConfig.js`
- **Detailed docs:** `.swarm/docs/http_client_config.md`

### 4. Exceptions & Object Mapping
- **What it does:** Exception class hierarchy for typed error handling (client 4xx vs server 5xx vs generic). `ObjectMapper` deserializes raw JSON API responses into typed model instances. `ModelFactory` instantiates model/exception classes by name.
- **Files:** `lib/Exceptions/APIException.js`, `lib/Exceptions/RaasClientException.js`, `lib/Exceptions/RaasServerException.js`, `lib/Exceptions/RaasGenericException.js`, `lib/ObjectMapper.js`, `lib/ModelFactory.js`
- **Detailed docs:** `.swarm/docs/exceptions_mapping.md`

## Stack

- **Language:** JavaScript (Node.js, CommonJS modules)
- **Generator:** APIMatic v2.0 (auto-generated for Tango Card, Inc.) — do not hand-edit generated files
- **HTTP:** `request` npm package (v2.x)
- **Logging:** `winston` (v2.x)
- **Date handling:** `moment` (v2.x)
- **Auth:** HTTP Basic Auth (platformName / platformKey)
- **Environments:** SANDBOX (`integration-api.tangocard.com`) and PRODUCTION (`api.tangocard.com`)
- **Tests:** Mocha + Chai (integration tests hitting the real sandbox API)

## Legacy Status

This is a **legacy, auto-generated SDK**. It is installed by `main-api` as `"raas": "github:Fanbank/raas-v2-sdk-node#master"` and consumed through `src/datasources/tango.js` in that repo. There is no active development history and the code should be treated as read-only vendor code unless a Tango Card API change requires regenerating or patching it.

## Instructions for Claude

When asked about this repo:
1. First consult this file to identify which process applies.
2. Read the detailed documentation in `.swarm/docs/<process>.md` for deep context.
3. If you need to see the actual code, read the files listed in each process.
4. If asked to update documentation, read the current source code and update the corresponding `.md` in `.swarm/docs/`.
5. If asked to add a new process, update both this CLAUDE.md and create its doc in `.swarm/docs/`.

### Product and Testing Documentation Maintenance

After any significant code change (new endpoint, new model, config change):

6. **Update `.swarm/docs/product.md`** — Reflect the change in business language. Keep the executive format: what it does, why it exists, how it is used.
7. **Update `.swarm/docs/test_spec.md`** — Reflect the change in technical testing specifications. This file is used by a QA agent to generate test cases. Include: controller operations, request/response schemas, auth parameters, and edge cases.

Both files must be kept in sync with the source code.

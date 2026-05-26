# raas-v2-sdk-node - Swarm Documentation

## Architecture

```
Caller (main-api / any Node.js app)
    |
    | require('raas')
    v
lib/index.js  (exports all controllers, models, exceptions, configuration)
    |
    +-- configuration.js  (platformName, platformKey, environment: SANDBOX | PRODUCTION)
    |
    +-- Controllers (7 resource controllers + BaseController)
    |       |
    |       |  static method call (e.g. OrdersController.createOrder)
    |       v
    |   APIHelper.js  (URL building, serialization, date formatting)
    |       |
    |       v
    |   Http/Client/RequestClient.js  (wraps npm 'request')
    |       |
    |       v
    +-------+--------> Tango Card RaaS REST API
                       SANDBOX:    https://integration-api.tangocard.com/raas/v2
                       PRODUCTION: https://api.tangocard.com/raas/v2
                            |
                            | HTTP Basic Auth (platformName:platformKey)
                            |
                       JSON response body
                            |
                            v
    ObjectMapper.js + ModelFactory.js  (deserialize JSON -> typed model instances)
    BaseController.validateResponse()  (map HTTP error codes -> typed exceptions)
    |
    v
Caller receives: typed model instance OR typed exception (via callback + Promise)

SDK infrastructure:
├── API Controllers      (operations: orders, accounts, catalog, etc.)
├── Request/Response Models  (data shapes for every API resource)
├── HTTP Client & Config     (transport, auth, URL building, logging)
└── Exceptions & Mapping     (error types, JSON->model deserialization)
```

## Processes

| # | Process | Doc File |
|---|---------|----------|
| 1 | API Controllers | [api_controllers.md](api_controllers.md) |
| 2 | Request/Response Models | [models.md](models.md) |
| 3 | HTTP Client & Configuration | [http_client_config.md](http_client_config.md) |
| 4 | Exceptions & Object Mapping | [exceptions_mapping.md](exceptions_mapping.md) |

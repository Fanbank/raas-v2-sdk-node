# HTTP Client & Configuration

## What it is and what it does

This process provides the transport layer and all SDK-level configuration. It has three responsibilities: (1) constructing and executing HTTP requests against the Tango Card API, (2) managing credentials and environment selection, and (3) providing URL-building, serialization, and date-formatting utilities used throughout the SDK.

## How it works (simplified flow)

**Configuration:**
1. `configuration.js` exports a singleton object with `platformName`, `platformKey`, `currentEnvironment`, and a `getBaseUri(server)` method.
2. `getBaseUri()` looks up the base URL from a 2D map indexed by `[currentEnvironment][server]`. The default server is `MDEFAULT` (defined in `Servers.js`). Environments are `SANDBOX` and `PRODUCTION` (defined in `Environments.js`).
3. The caller sets credentials before use: `raas.configuration.platformName = '...'` and `raas.configuration.platformKey = '...'`.

**Request execution:**
1. A controller method calls `configuration.getBaseUri()`, appends path/query parameters via `APIHelper`, and constructs an options object: `{ queryUrl, method, headers, body?, username, password }`.
2. This options object is passed to `RequestClient` (the `executeRequest` function exported from `RequestClient.js`).
3. `RequestClient.convertHttpRequest()` converts the abstracted options to an `npm request` compatible object. If `username` is present, it adds `auth: { user, pass }` for HTTP Basic Auth.
4. The `request()` call is made. The response is converted to an `HttpResponse` instance (statusCode, headers, body string) and paired with the request in an `HttpContext` instance.
5. The internal callback fires with `(error, HttpResponse, HttpContext)`.

**Logging:**
1. `LogConfig.LogConfig()` is called once at module load time (from `lib/index.js`).
2. It configures `winston` with two transports: a Console transport (level: info, colorized) and a File transport (`logfile.log`, level: debug, colorized). The file is created in the process working directory.

**APIHelper utilities:**
- `appendUrlWithTemplateParameters(url, params)`: replaces `{key}` placeholders with URL-encoded parameter values.
- `appendUrlWithQueryParameters(url, params)`: appends `?key=value&...` query strings (uses `urlEncodeObject` internally).
- `cleanUrl(url)`: validates the URL is absolute (https?://...) and removes duplicate forward slashes.
- `jsonSerialize(data)`: `JSON.stringify(data)`.
- `cleanObject(input)`: recursively removes null/undefined properties from an object (used before serializing POST bodies).
- `stringifyDateTime(value, type)`: converts a datetime value to string in the requested format (`unixtimestamp`, `rfc1123`, `rfc3339`, `date`).
- `formDataEncodeObject` / `urlEncodeObject`: multipart and URL-encoded form serialization (used internally; `formData` branch in `RequestClient` exists but is commented out).

## What data it handles

- **Input:** `platformName` (string), `platformKey` (string), `currentEnvironment` (enum: `'sandbox'` or `'production'`), HTTP options object (queryUrl, method, headers object, optional body string, optional auth credentials), datetime values, objects to serialize.
- **Output:** Base URI string, fully constructed URL strings, serialized JSON strings, cleaned objects (nulls removed), `HttpResponse` (statusCode + headers + body string), `HttpContext` (HttpRequest + HttpResponse pair).

## Key concepts

- **Singleton configuration:** `configuration.js` exports a plain object (not a class), so all imports share the same reference. Setting `raas.configuration.platformKey = '...'` once affects all subsequent controller calls in the same process.
- **Default sandbox credentials:** The repo ships with sandbox test credentials (`QAPlatform2` / the long key string). These are intentional for safe onboarding but must be overridden before any production usage. Never hardcode production credentials in `configuration.js`.
- **No per-request auth override:** Auth is always read from `configuration` at call time. There is no mechanism to pass different credentials per-request within the current SDK design.
- **Base URL map:** The environment-to-URL map is built once at module load time in `configuration.js`. SANDBOX points to `integration-api.tangocard.com/raas/v2`; PRODUCTION points to `api.tangocard.com/raas/v2`.
- **HttpContext:** Pairs the request and response objects for downstream error handling. `BaseController.validateResponse()` receives the `HttpContext` and returns it in the error object so the caller can inspect both the request that was made and the response received.
- **formData branch commented out:** `RequestClient.js` has a `formData` handling branch with its encoding logic commented out (`// options.formData = APIHelper.formDataEncodeObject(req.formData);`). This means multipart form data is not actually sent even if `req.formData` is set. No current controller uses formData, so this is not a live issue.
- **Winston v2 API:** `LogConfig.js` uses the `winston.configure({ transports: [...] })` API specific to winston v2. Winston v3 removed `configure()` in favor of a different configuration approach.

## Considerations for future changes

- If `platformName` or `platformKey` need to be set per-request (e.g., multi-tenant usage), the configuration singleton pattern would need to be replaced with an injectable config passed to controller methods.
- The `request` npm package is deprecated. Replacing it requires only changing `RequestClient.js` — the controllers use it only through the `executeRequest` function contract (`(options, callback)` where callback receives `(error, response, context)`).
- If the Tango Card API adds new server variants (beyond `MDEFAULT`), `Servers.js` and the `environmentsMap` in `configuration.js` would need updates.
- `logfile.log` is written to the process working directory. In containerized/cloud deployments, ensure this path is writable or adjust the File transport path. Alternatively, remove the File transport if file logging is handled by the container runtime.
- `APIHelper.stringifyDateTime` with `type='rfc3339'` calls `value.format()` — this assumes `value` is a `moment` object (not a native `Date`). The `getOrders` method passes `input.startDate` and `input.endDate` directly; callers must pass moment objects, not native Date instances, for these parameters.

## Main files

| File | Responsibility |
|------|----------------|
| `lib/configuration.js` | Credentials (platformName, platformKey), environment selection, base URI resolution |
| `lib/Environments.js` | Enum: SANDBOX, PRODUCTION |
| `lib/Servers.js` | Enum: MDEFAULT (only one server variant) |
| `lib/Http/Client/RequestClient.js` | HTTP execution: converts options to `npm request` call, wraps response in HttpResponse/HttpContext |
| `lib/Http/Client/HttpContext.js` | Container pairing HttpRequest + HttpResponse |
| `lib/Http/Request/HttpRequest.js` | HTTP request value object |
| `lib/Http/Response/HttpResponse.js` | HTTP response value object (statusCode, headers, body) |
| `lib/APIHelper.js` | URL template substitution, query string building, cleanUrl, jsonSerialize, cleanObject, datetime formatting, formData/urlEncoding |
| `lib/LogConfig.js` | Winston v2 configuration (Console + File transports) |

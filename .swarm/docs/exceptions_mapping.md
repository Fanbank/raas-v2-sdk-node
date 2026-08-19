# Exceptions & Object Mapping

## What it is and what it does

This process covers two tightly coupled responsibilities: (1) a typed exception hierarchy that represents structured API error responses, and (2) the deserialization engine (`ObjectMapper` + `ModelFactory`) that converts raw JSON API responses into typed model or exception instances. Together they enable the SDK to surface meaningful, typed errors and fully hydrated response objects to the calling application.

## How it works (simplified flow)

**Exception hierarchy:**
1. `APIException` is the base class. It has `reason` (human-readable string set by `BaseController`) and `context` (the `HttpContext` pairing request + response). It defines an empty `mappingInfo()` for the ObjectMapper.
2. `RaasClientException` extends `APIException`. It adds `timestamp`, `requestId`, `path`, `httpCode`, `httpPhrase`, and `errors` (array of `RaasClientErrorModel`). Used for 400, 403, and 409 HTTP status codes.
3. `RaasServerException` extends `APIException`. Same extra fields as `RaasClientException` but `errors` contains `RaasServerErrorModel` entries. Used for 500 and 503.
4. `RaasGenericException` extends `APIException`. Used for 401, 404, and any unrecognized status code.
5. `BaseController.validateResponse(_context, endpName)` maps HTTP status codes to exception types, instantiates the correct exception via `ObjectMapper.mapObject()`, sets `reason` and `context`, and returns an error object `{ error: { errorMessage, errorCode, errorResponse }, response, context }`.

**Object mapping:**
1. `ModelFactory` is a registry. Its `classMap` maps class name strings to constructor references for all 28+ models and 3 exception types. `ModelFactory.getInstance('ModelName')` calls `new classMap['ModelName']()` to produce a blank instance.
2. `ObjectMapper.mapObject(json, modelName)` is the entry point for deserialization. It:
   a. Creates a blank instance via `ModelFactory.getInstance(modelName)`.
   b. Checks for a discriminator field (via `getDiscriminatorFieldName` and `getDiscriminatorFieldValue`). If a discriminator is present and matches a subclass in `discriminatorMap()`, it switches to the subclass. No current model uses this.
   c. Calls `mapFields(json, instance)` which iterates `mappingInfo()` entries and assigns values.
3. `ObjectMapper.mapFields(json, instance)` handles three field kinds:
   - **Nested model** (`fieldInfo.type` set): recursively calls `mapObject(fieldValue, fieldInfo.type)`. If `fieldInfo.array` is true, maps each array element.
   - **DateTime** (`fieldInfo.isDateTime` set): calls `parseDateTime(value, fieldInfo.dateTimeValue)` using `moment`.
   - **Primitive**: direct assignment from `json[fieldInfo.realName]`, keeping the instance default if the JSON field is null/undefined.
4. `parseDateTime` handles four formats: `unixtimestamp` (native `Date`), `rfc1123` (native `Date`), `rfc3339` (moment with `parseZone`), `date` (moment with `'YYYY-MM-DD'` format). The primary format used in the RaaS API is `rfc3339`.

## What data it handles

- **Input:** Raw JSON objects (parsed from API response body strings), model/exception class name strings.
- **Output:** Fully typed model instances (e.g., `OrderModel` with nested `CurrencyBreakdownModel` and `RewardModel`), typed exception instances (`RaasClientException`, `RaasServerException`, `RaasGenericException`) with structured error fields, moment/Date datetime values for datetime fields.

## Key concepts

- **Exception vs. Error model:** The exceptions (`RaasClientException`, `RaasServerException`, `RaasGenericException`) represent the exception object thrown to the caller. The error models (`RaasClientErrorModel`, `RaasServerErrorModel`) are the individual entries in the `errors` array within those exceptions — they contain the field-level or resource-level error details from the Tango Card API.
- **ModelFactory as registry:** The classMap in `ModelFactory` must contain every class that might be referenced by name anywhere in the system — controllers, ObjectMapper nested type names, BaseController error mapping. If a class name is missing from the map, `ModelFactory.getInstance()` throws because `new classMap[undefined]()` is not valid.
- **Discriminator (unused):** The full discriminator mechanism is implemented (getDiscriminatorFieldName, getDiscriminatorFieldValue, getDiscriminatorClass) but no current model has a non-empty `discriminatorMap()`. It exists because APIMatic generates it for potential polymorphic API schemas.
- **Moment vs. native Date:** DateTime fields parsed as `rfc3339` return a `moment` object (via `parseZone`), while `unixtimestamp` and `rfc1123` return native `Date` objects. Callers reading datetime fields from models should be aware of this inconsistency. All RaaS datetime fields in practice use `rfc3339`, so they return moment objects.
- **Null handling in mapFields:** If a JSON field is null or undefined, mapFields keeps whatever value the blank instance already holds. But because `ModelFactory` builds instances with no constructor args (`new classMap[modelName]()`), the constructor early-returns before assigning any fields, so those fields are `undefined` — model-level defaults like `AccountModel`'s `currencyCode: 'USD'` are NOT applied during deserialization. (`BaseModel.getValue` also returns `null` for null/undefined input before considering its `defaultValue` argument, so that default is never applied either.)

## Considerations for future changes

- Adding a new exception type requires: (1) creating the exception file extending `APIException`, (2) adding a `mappingInfo()` for its extra fields, (3) registering it in `ModelFactory.js` classMap, (4) exporting it from `lib/index.js`, and (5) adding the relevant HTTP status code handling in `BaseController.validateResponse()`.
- Adding a new model requires registering it in `ModelFactory.js` classMap — this is easy to forget since models and their factory registration are in separate files.
- If `moment` is replaced with a native `Date` approach or another library, `ObjectMapper.parseDateTime()` and all `mappingInfo()` entries with `isDateTime: true` need updating, plus `BaseModel.toJSON()` for the serialization side.
- The `RaasGenericException` is used as the catch-all for both 401 and 404 as well as any unrecognized status code. The 404 case also sets `returnObj.response = _context.response.body` (the raw body string), which is the only status code that does this. Callers handling 404 can inspect `errorObj.errorResponse.context.response.body` for the raw response.
- `BaseController` holds a single shared `ObjectMapper` instance (`_objectMapperInstance`). `ObjectMapper` is stateless (no mutable instance state), so this is safe for concurrent use, but it means all deserialization shares the same instance.

## Main files

| File | Responsibility |
|------|----------------|
| `lib/Exceptions/APIException.js` | Base exception class: reason, context, empty mappingInfo() |
| `lib/Exceptions/RaasClientException.js` | 4xx errors: timestamp, requestId, path, httpCode, httpPhrase, errors (RaasClientErrorModel[]) |
| `lib/Exceptions/RaasServerException.js` | 5xx errors: same structure but errors is RaasServerErrorModel[] |
| `lib/Exceptions/RaasGenericException.js` | 401, 404, and catch-all errors |
| `lib/ObjectMapper.js` | Deserialization engine: mapObject, mapFields, parseDateTime, discriminator support |
| `lib/ModelFactory.js` | Class name registry: getInstance(modelName) returns new instance of named class |

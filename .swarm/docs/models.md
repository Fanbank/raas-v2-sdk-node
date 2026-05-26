# Request/Response Models

## What it is and what it does

The Models process defines the complete set of JavaScript classes that represent every data shape exchanged with the RaaS v2 API — both outgoing request bodies and incoming response payloads. There are 28+ model files organized around the SDK's resource domains. All models extend `BaseModel`, which provides field mapping metadata, `null`-safe value assignment, and `toJSON()` serialization.

## How it works (simplified flow)

1. **Deserialization (API response -> typed model):** `ObjectMapper.mapObject(json, 'ModelName')` calls `ModelFactory.getInstance('ModelName')` to create a blank instance, then calls `mapFields(json, instance)` which iterates over the model's `mappingInfo()` array. For each field:
   - If `fieldInfo.type` is set, the field value is recursively deserialized into a nested model instance.
   - If `fieldInfo.array` is true, each element of the JSON array is mapped into a model instance.
   - If `fieldInfo.isDateTime` is true, the string is parsed via `ObjectMapper.parseDateTime(value, fieldInfo.dateTimeValue)` using `moment`.
   - Otherwise, the raw JSON value is assigned directly.
2. **Serialization (typed model -> request body):** `BaseModel.toJSON()` iterates over the instance's own properties. For nested model instances with a `toJSON()` method, it calls that recursively. For datetime fields, it uses `APIHelper.stringifyDateTime()` with the field's datetime type. Null values are preserved in the output object (but then removed by `APIHelper.cleanObject()` before the HTTP request is made).
3. **Manual construction:** Callers can also construct request models directly as plain objects and pass them to the ObjectMapper for normalization, as seen in the test files.

## What data it handles

**Request models** (caller-constructed, sent to API):
- `CreateOrderRequestModel`: `accountIdentifier`, `amount`, `utid`, `customerIdentifier`, `sendEmail`, `recipient` (NameEmailModel), `sender` (NameEmailModel), `externalRefID`, `campaign`, `emailSubject`, `message`, `notes`, `etid`
- `CreateAccountRequestModel`: `accountIdentifier`, `displayName`, `currencyCode`, `contactEmail`
- `CreateCustomerRequestModel`: customer identifier and contact fields
- `CreateCreditCardRequestModel`: card registration fields (billing address, card details via `BillingAddressModel`, `NewCreditCardModel`)
- `DepositRequestModel`: account funding fields (accountIdentifier, amount, creditCardToken)
- `UnregisterCreditCardRequestModel`: token field to remove a credit card

**Response models** (returned from API, deserialized by ObjectMapper):
- `OrderModel`: full order record including nested `CurrencyBreakdownModel` (amountCharged, denomination, marginShare), `NameEmailModel` (sender, recipient), `RewardModel` (reward credentials), datetime `createdAt`
- `AccountModel`: account record with `currencyCode` defaulting to `'USD'`, datetime `createdAt`
- `AccountSummaryModel`: lighter account view (returned in list operations)
- `CustomerModel`: customer identifier and metadata
- `CatalogModel`: `catalogName` + `brands` array of `BrandModel`
- `BrandModel`: brand metadata + `items` array of `ItemModel`
- `ItemModel`: individual reward product within a brand (utid, denomination, redemption type)
- `CreditCardModel`: registered credit card details
- `DepositResponseModel` / `GetDepositResponseModel`: deposit record details
- `ExchangeRateResponseModel`: wrapper containing `ExchangeRateModel[]`
- `ExchangeRateModel`: single exchange rate entry
- `SystemStatusResponseModel`: API health status
- `GetOrdersResponseModel`: paginated orders list with `PageModel` metadata and `OrderSummaryModel[]`
- `RewardModel`: reward delivery details — `credentials` (key-value map), `credentialList` (RewardCredentialModel[]), `redemptionInstructions`
- `RewardCredentialModel`: individual credential entry with `label`, `value`, `type`, `credentialType`
- `CurrencyBreakdownModel`: monetary value with `value`, `currencyCode`, `total`
- `NameEmailModel` / `FullNameEmailModel`: name and email pair for sender/recipient
- `PageModel`: pagination metadata (page, elementsPerBlock, totalCount)
- `OrderSummaryModel`: lightweight order record for list views
- `RaasClientErrorModel` / `RaasServerErrorModel`: structured error entries inside exception responses

## Key concepts

- **mappingInfo():** Every model class defines a static `mappingInfo()` method returning an array of field descriptor objects. Each descriptor has: `name` (JS property name), `realName` (JSON key), and optionally `type` (nested model class name), `array` (boolean), `isDateTime` (boolean), `dateTimeValue` (format string). This metadata drives both `ObjectMapper.mapFields()` deserialization and `BaseModel.toJSON()` serialization.
- **discriminatorMap():** All concrete models define this as an empty object `{}`. The discriminator mechanism in `ObjectMapper` exists to support polymorphic model hierarchies (where a field value selects a subclass) but is not actively used in this SDK.
- **BaseModel.getValue():** Used in constructors to safely assign field values, returning `null` for undefined/null inputs. The `currencyCode` default on `AccountModel` demonstrates the optional `defaultValue` parameter.
- **toJSON():** Produces a plain object suitable for JSON serialization, correctly handling nested models, arrays, datetime fields (converted back to strings), and skipping undefined values.
- **Auto-generated:** All model files contain the header `This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0`. Their field lists exactly mirror the Tango Card API spec at the time of generation and should not be hand-edited.

## Considerations for future changes

- Adding or changing a field in a model requires modifying both the `constructor` (to assign the field) and `mappingInfo()` (to register it for deserialization). Missing a field in `mappingInfo()` means it will not be populated during deserialization even if the API returns it.
- Nested model relationships are defined by `type` and `array` flags in `mappingInfo()`. A type name like `'CurrencyBreakdownModel'` must match exactly the key used in `ModelFactory`'s `classMap`.
- Adding a new model requires: (1) creating the model file, (2) registering it in `ModelFactory.js` classMap, (3) exporting it from `lib/index.js`.
- `BaseModel.toJSON()` serializes all own properties of the instance — including any extra properties accidentally added outside of `mappingInfo()`. Keep model classes clean to avoid unexpected fields in serialized output.
- The `moment` library is required by `BaseModel` (for datetime formatting in `toJSON()`) and by `ObjectMapper` (for datetime parsing). If `moment` is ever removed from the dependencies, both files need updating.

## Main files

| File | Responsibility |
|------|----------------|
| `lib/Models/BaseModel.js` | Base class: getValue(), mappingInfo(), toJSON(), date field helpers |
| `lib/Models/OrderModel.js` | Full order response (nested: CurrencyBreakdownModel x3, NameEmailModel x2, RewardModel) |
| `lib/Models/CreateOrderRequestModel.js` | Order placement request body |
| `lib/Models/AccountModel.js` | Account response with balance and status |
| `lib/Models/AccountSummaryModel.js` | Lightweight account view for list responses |
| `lib/Models/CreateAccountRequestModel.js` | Account creation request body |
| `lib/Models/CustomerModel.js` | Customer record |
| `lib/Models/CreateCustomerRequestModel.js` | Customer creation request body |
| `lib/Models/CatalogModel.js` | Catalog response (nested: BrandModel[]) |
| `lib/Models/BrandModel.js` | Brand entry (nested: ItemModel[]) |
| `lib/Models/ItemModel.js` | Individual reward product |
| `lib/Models/RewardModel.js` | Reward delivery details (nested: RewardCredentialModel[]) |
| `lib/Models/RewardCredentialModel.js` | Single reward credential (label, value, type, credentialType) |
| `lib/Models/CurrencyBreakdownModel.js` | Monetary value with currency code and total |
| `lib/Models/NameEmailModel.js` | Name+email pair (sender/recipient) |
| `lib/Models/FullNameEmailModel.js` | Full name (firstName, lastName) + email |
| `lib/Models/CreditCardModel.js` | Registered credit card details |
| `lib/Models/NewCreditCardModel.js` | New credit card data for registration |
| `lib/Models/CreateCreditCardRequestModel.js` | Credit card registration request body |
| `lib/Models/UnregisterCreditCardRequestModel.js` | Credit card removal request body |
| `lib/Models/UnregisterCreditCardResponseModel.js` | Credit card removal response |
| `lib/Models/DepositRequestModel.js` | Account funding request body |
| `lib/Models/DepositResponseModel.js` | Account funding response |
| `lib/Models/GetDepositResponseModel.js` | Deposit detail lookup response |
| `lib/Models/BillingAddressModel.js` | Billing address for credit card registration |
| `lib/Models/ExchangeRateModel.js` | Single currency exchange rate |
| `lib/Models/ExchangeRateResponseModel.js` | Exchange rates list response |
| `lib/Models/SystemStatusResponseModel.js` | API health status response |
| `lib/Models/GetOrdersResponseModel.js` | Paginated order list response |
| `lib/Models/OrderSummaryModel.js` | Lightweight order entry for list views |
| `lib/Models/PageModel.js` | Pagination metadata |
| `lib/Models/RaasClientErrorModel.js` | Individual client error entry within RaasClientException |
| `lib/Models/RaasServerErrorModel.js` | Individual server error entry within RaasServerException |

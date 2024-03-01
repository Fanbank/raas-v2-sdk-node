/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const APIException = require('./APIException');

/**
 * Creates an instance of RaasGenericException
 */
class RaasGenericException extends APIException {
  /**
   * @constructor
   */
  constructor() {
    super();
    /**
     * Request timestamp
     */
    this.timestamp = null;

    /**
     * Request ID
     */
    this.requestId = null;

    /**
     * Request Path
     */
    this.path = null;

    /**
     * HTTP Code
     */
    this.httpCode = null;

    /**
     * HTTP Phrase
     */
    this.httpPhrase = null;

    /**
     * Error Message
     */
    this.message = null;
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      {
        name: 'timestamp',
        realName: 'timestamp',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'requestId', realName: 'requestId' },
      { name: 'path', realName: 'path' },
      { name: 'httpCode', realName: 'httpCode' },
      { name: 'httpPhrase', realName: 'httpPhrase' },
      { name: 'message', realName: 'message' },
    ]);
  }
}

module.exports = RaasGenericException;

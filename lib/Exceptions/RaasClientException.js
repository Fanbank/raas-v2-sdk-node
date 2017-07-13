/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

var moment = require("moment");
const APIException = require('./APIException');
/**
 * Creates an instance of RaasClientException
 */
class RaasClientException extends APIException {
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
         * An array of errors
         */
        this.errors = null;
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
            { name: 'errors', realName: 'errors', array: true, type: 'RaasClientErrorModel' },
        ]);
    }
}

module.exports = RaasClientException;
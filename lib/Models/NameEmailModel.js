/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of NameEmailModel
 */
class NameEmailModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.email = this.constructor.getValue(obj.email);
        this.firstName = this.constructor.getValue(obj.firstName);
        this.lastName = this.constructor.getValue(obj.lastName);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'email', realName: 'email' },
            { name: 'firstName', realName: 'firstName' },
            { name: 'lastName', realName: 'lastName' },
        ]);
    }
}

module.exports = NameEmailModel;
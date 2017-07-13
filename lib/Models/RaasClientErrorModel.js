/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of RaasClientErrorModel
 */
class RaasClientErrorModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.path = this.constructor.getValue(obj.path);
        this.message = this.constructor.getValue(obj.message);
        this.constraint = this.constructor.getValue(obj.constraint);
        this.invalidValue = this.constructor.getValue(obj.invalidValue);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'path', realName: 'path' },
            { name: 'message', realName: 'message' },
            { name: 'constraint', realName: 'constraint' },
            { name: 'invalidValue', realName: 'invalidValue' },
        ]);
    }
}

module.exports = RaasClientErrorModel;
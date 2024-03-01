/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

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
    this.invalidValue = this.constructor.getValue(obj.invalidValue);
    this.constraint = this.constructor.getValue(obj.constraint);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'path', realName: 'path' },
      { name: 'message', realName: 'message' },
      { name: 'invalidValue', realName: 'invalidValue' },
      { name: 'constraint', realName: 'constraint' },
    ]);
  }

  /**
   * Function containing information about discriminator values
   * mapped with their corresponding model class names
   *
   * @return   {object}  Object containing Key-Value pairs mapping discriminator
   *                     values with their corresponding model classes
   */
  static discriminatorMap() {
    return {};
  }
}

module.exports = RaasClientErrorModel;

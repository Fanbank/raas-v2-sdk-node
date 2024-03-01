/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UnregisterCreditCardResponseModel
 */
class UnregisterCreditCardResponseModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.createdDate = this.constructor.getValue(obj.createdDate);
    this.message = this.constructor.getValue(obj.message);
    this.token = this.constructor.getValue(obj.token);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      {
        name: 'createdDate',
        realName: 'createdDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'message', realName: 'message' },
      { name: 'token', realName: 'token' },
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

module.exports = UnregisterCreditCardResponseModel;

/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UnregisterCreditCardRequestModel
 */
class UnregisterCreditCardRequestModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
    this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
    this.creditCardToken = this.constructor.getValue(obj.creditCardToken);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'customerIdentifier', realName: 'customerIdentifier' },
      { name: 'accountIdentifier', realName: 'accountIdentifier' },
      { name: 'creditCardToken', realName: 'creditCardToken' },
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

module.exports = UnregisterCreditCardRequestModel;

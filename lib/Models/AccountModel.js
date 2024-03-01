/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of AccountModel
 */
class AccountModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
    this.accountNumber = this.constructor.getValue(obj.accountNumber);
    this.displayName = this.constructor.getValue(obj.displayName);
    this.currencyCode = this.constructor.getValue(obj.currencyCode, 'USD');
    this.currentBalance = this.constructor.getValue(obj.currentBalance);
    this.createdAt = this.constructor.getValue(obj.createdAt);
    this.status = this.constructor.getValue(obj.status);
    this.contactEmail = this.constructor.getValue(obj.contactEmail);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'accountIdentifier', realName: 'accountIdentifier' },
      { name: 'accountNumber', realName: 'accountNumber' },
      { name: 'displayName', realName: 'displayName' },
      { name: 'currencyCode', realName: 'currencyCode' },
      { name: 'currentBalance', realName: 'currentBalance' },
      {
        name: 'createdAt',
        realName: 'createdAt',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'status', realName: 'status' },
      { name: 'contactEmail', realName: 'contactEmail' },
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

module.exports = AccountModel;

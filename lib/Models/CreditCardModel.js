/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreditCardModel
 */
class CreditCardModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
    this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
    this.token = this.constructor.getValue(obj.token);
    this.label = this.constructor.getValue(obj.label);
    this.lastFourDigits = this.constructor.getValue(obj.lastFourDigits);
    this.expirationDate = this.constructor.getValue(obj.expirationDate);
    this.status = this.constructor.getValue(obj.status);
    this.createdDate = this.constructor.getValue(obj.createdDate);
    this.activationDate = this.constructor.getValue(obj.activationDate);
    this.contactInformation = this.constructor.getValue(obj.contactInformation);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'customerIdentifier', realName: 'customerIdentifier' },
      { name: 'accountIdentifier', realName: 'accountIdentifier' },
      { name: 'token', realName: 'token' },
      { name: 'label', realName: 'label' },
      { name: 'lastFourDigits', realName: 'lastFourDigits' },
      { name: 'expirationDate', realName: 'expirationDate' },
      { name: 'status', realName: 'status' },
      {
        name: 'createdDate',
        realName: 'createdDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      {
        name: 'activationDate',
        realName: 'activationDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      {
        name: 'contactInformation',
        realName: 'contactInformation',
        array: true,
        type: 'FullNameEmailModel',
      },
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

module.exports = CreditCardModel;

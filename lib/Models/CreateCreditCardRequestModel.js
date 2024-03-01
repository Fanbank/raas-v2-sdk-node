/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateCreditCardRequestModel
 */
class CreateCreditCardRequestModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
    this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
    this.label = this.constructor.getValue(obj.label);
    this.ipAddress = this.constructor.getValue(obj.ipAddress);
    this.creditCard = this.constructor.getValue(obj.creditCard);
    this.billingAddress = this.constructor.getValue(obj.billingAddress);
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
      { name: 'label', realName: 'label' },
      { name: 'ipAddress', realName: 'ipAddress' },
      {
        name: 'creditCard',
        realName: 'creditCard',
        type: 'NewCreditCardModel',
      },
      {
        name: 'billingAddress',
        realName: 'billingAddress',
        type: 'BillingAddressModel',
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

module.exports = CreateCreditCardRequestModel;

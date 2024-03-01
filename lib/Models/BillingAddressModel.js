/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BillingAddressModel
 */
class BillingAddressModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.firstName = this.constructor.getValue(obj.firstName);
    this.lastName = this.constructor.getValue(obj.lastName);
    this.addressLine1 = this.constructor.getValue(obj.addressLine1);
    this.addressLine2 = this.constructor.getValue(obj.addressLine2);
    this.city = this.constructor.getValue(obj.city);
    this.state = this.constructor.getValue(obj.state);
    this.postalCode = this.constructor.getValue(obj.postalCode);
    this.country = this.constructor.getValue(obj.country);
    this.emailAddress = this.constructor.getValue(obj.emailAddress);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'firstName', realName: 'firstName' },
      { name: 'lastName', realName: 'lastName' },
      { name: 'addressLine1', realName: 'addressLine1' },
      { name: 'addressLine2', realName: 'addressLine2' },
      { name: 'city', realName: 'city' },
      { name: 'state', realName: 'state' },
      { name: 'postalCode', realName: 'postalCode' },
      { name: 'country', realName: 'country' },
      { name: 'emailAddress', realName: 'emailAddress' },
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

module.exports = BillingAddressModel;

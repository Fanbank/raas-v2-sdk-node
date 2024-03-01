/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */
const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CustomerModel
 */
class CustomerModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
    this.displayName = this.constructor.getValue(obj.displayName);
    this.status = this.constructor.getValue(obj.status);
    this.createdAt = this.constructor.getValue(obj.createdAt);
    this.accounts = this.constructor.getValue(obj.accounts);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'customerIdentifier', realName: 'customerIdentifier' },
      { name: 'displayName', realName: 'displayName' },
      { name: 'status', realName: 'status' },
      {
        name: 'createdAt',
        realName: 'createdAt',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      {
        name: 'accounts',
        realName: 'accounts',
        array: true,
        type: 'AccountSummaryModel',
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

module.exports = CustomerModel;

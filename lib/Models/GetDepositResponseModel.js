/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetDepositResponseModel
 */
class GetDepositResponseModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.amount = this.constructor.getValue(obj.amount);
    this.amountCharged = this.constructor.getValue(obj.amountCharged);
    this.createdDate = this.constructor.getValue(obj.createdDate);
    this.feePercent = this.constructor.getValue(obj.feePercent);
    this.referenceDepositID = this.constructor.getValue(obj.referenceDepositID);
    this.status = this.constructor.getValue(obj.status);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'amount', realName: 'amount' },
      { name: 'amountCharged', realName: 'amountCharged' },
      {
        name: 'createdDate',
        realName: 'createdDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'feePercent', realName: 'feePercent' },
      { name: 'referenceDepositID', realName: 'referenceDepositID' },
      { name: 'status', realName: 'status' },
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

module.exports = GetDepositResponseModel;

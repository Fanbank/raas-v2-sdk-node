/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ExchangeRateModel
 */
class ExchangeRateModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.lastModifiedDate = this.constructor.getValue(obj.lastModifiedDate);
    this.rewardCurrency = this.constructor.getValue(obj.rewardCurrency);
    this.baseCurrency = this.constructor.getValue(obj.baseCurrency);
    this.baseFx = this.constructor.getValue(obj.baseFx);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      {
        name: 'lastModifiedDate',
        realName: 'lastModifiedDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'rewardCurrency', realName: 'rewardCurrency' },
      { name: 'baseCurrency', realName: 'baseCurrency' },
      { name: 'baseFx', realName: 'baseFx' },
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

module.exports = ExchangeRateModel;

/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CurrencyBreakdownModel
 */
class CurrencyBreakdownModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.currencyCode = this.constructor.getValue(obj.currencyCode);
    this.exchangeRate = this.constructor.getValue(obj.exchangeRate);
    this.fee = this.constructor.getValue(obj.fee);
    this.total = this.constructor.getValue(obj.total);
    this.value = this.constructor.getValue(obj.value);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'currencyCode', realName: 'currencyCode' },
      { name: 'exchangeRate', realName: 'exchangeRate' },
      { name: 'fee', realName: 'fee' },
      { name: 'total', realName: 'total' },
      { name: 'value', realName: 'value' },
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

module.exports = CurrencyBreakdownModel;

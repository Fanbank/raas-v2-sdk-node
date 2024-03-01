/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ItemModel
 */
class ItemModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.utid = this.constructor.getValue(obj.utid);
    this.rewardName = this.constructor.getValue(obj.rewardName);
    this.currencyCode = this.constructor.getValue(obj.currencyCode);
    this.status = this.constructor.getValue(obj.status);
    this.valueType = this.constructor.getValue(obj.valueType);
    this.rewardType = this.constructor.getValue(obj.rewardType);
    this.minValue = this.constructor.getValue(obj.minValue);
    this.maxValue = this.constructor.getValue(obj.maxValue);
    this.faceValue = this.constructor.getValue(obj.faceValue);
    this.createdDate = this.constructor.getValue(obj.createdDate);
    this.lastUpdateDate = this.constructor.getValue(obj.lastUpdateDate);
    this.countries = this.constructor.getValue(obj.countries);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'utid', realName: 'utid' },
      { name: 'rewardName', realName: 'rewardName' },
      { name: 'currencyCode', realName: 'currencyCode' },
      { name: 'status', realName: 'status' },
      { name: 'valueType', realName: 'valueType' },
      { name: 'rewardType', realName: 'rewardType' },
      { name: 'minValue', realName: 'minValue' },
      { name: 'maxValue', realName: 'maxValue' },
      { name: 'faceValue', realName: 'faceValue' },
      {
        name: 'createdDate',
        realName: 'createdDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      {
        name: 'lastUpdateDate',
        realName: 'lastUpdateDate',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'countries', realName: 'countries', array: true },
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

module.exports = ItemModel;

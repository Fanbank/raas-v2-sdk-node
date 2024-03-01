/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BrandModel
 */
class BrandModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.brandKey = this.constructor.getValue(obj.brandKey);
    this.brandName = this.constructor.getValue(obj.brandName);
    this.disclaimer = this.constructor.getValue(obj.disclaimer);
    this.description = this.constructor.getValue(obj.description);
    this.shortDescription = this.constructor.getValue(obj.shortDescription);
    this.terms = this.constructor.getValue(obj.terms);
    this.createdDate = this.constructor.getValue(obj.createdDate);
    this.lastUpdateDate = this.constructor.getValue(obj.lastUpdateDate);
    this.imageUrls = this.constructor.getValue(obj.imageUrls);
    this.status = this.constructor.getValue(obj.status);
    this.items = this.constructor.getValue(obj.items);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'brandKey', realName: 'brandKey' },
      { name: 'brandName', realName: 'brandName' },
      { name: 'disclaimer', realName: 'disclaimer' },
      { name: 'description', realName: 'description' },
      { name: 'shortDescription', realName: 'shortDescription' },
      { name: 'terms', realName: 'terms' },
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
      { name: 'imageUrls', realName: 'imageUrls' },
      { name: 'status', realName: 'status' },
      { name: 'items', realName: 'items', array: true, type: 'ItemModel' },
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

module.exports = BrandModel;

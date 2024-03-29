/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const moment = require('moment');
const modelFactory = require('./ModelFactory');

/**
 * ObjectMapper is utility class that helps maps a POJO to a model or exception object.
 * Embedded models and dates are also instantiated to their correct types.
 */
class ObjectMapper {
  /**
   * Returns Datetime parsed value for field
   * @param  value  {string}  The value to be parsed
   * @param  type   {string}  The Datetime format to be parsed into
   * @returns       {object}  Parsed Datetime object
   */
  static parseDateTime(value, type) {
    if (value === null || value === undefined) {
      return null;
    }
    switch (type) {
      case 'unixtimestamp':
        return new Date(value);
      case 'rfc1123':
        return new Date(value);
      case 'rfc3339':
        return moment(value).parseZone(value);
      case 'date':
        return moment(value, 'YYYY-MM-DD');
      default:
        return moment(value, 'YYYY-MM-DD');
    }
  }

  /**
   * Helper function to get the name of discriminator field
   *
   * @param  fieldMap  {array}  The mapping information of the model's fields
   *
   * @returns          {string}  The name of the discriminator field.
   *                             Returns null if discriminator field is not present
   */
  static getDiscriminatorFieldName(fieldMap) {
    if (fieldMap === null || fieldMap === undefined) {
      return null;
    }
    let name = null;
    fieldMap.forEach((field) => {
      if (field.isDiscrim) {
        name = field.realName;
      }
    });
    return name;
  }

  /**
   * Helper function to get the value of discriminator
   * This helper function checks values inside nested objects and arrays of objects as well.
   *
   * @param  json  {object}  Input object (API response)
   * @param  discrimName  {string}  The name of the discriminator field
   *
   * @returns      {string}  The value of the discriminator field present in the input object
   *                             Returns null if no value is present in the input
   */
  static getDiscriminatorFieldValue(json, discrimName) {
    if (
      json === null ||
      json === undefined ||
      discrimName === null ||
      discrimName === undefined
    ) {
      return null;
    }
    let value = null;
    if (json instanceof Object && json.constructor !== Array) {
      if (Object.prototype.hasOwnProperty.call(json, discrimName)) {
        value = json[discrimName];
      }
    }
    return value;
  }

  /**
   * Helper function to get the model name corresponding to the discriminator value
   *
   * @param  fieldMap  {object}  The discriminator map stored in the model class
   * @param  discrimValue  {string}  The value of the discriminator which maps
   *                                 to a model class
   *
   * @returns      {string}  The name of the model class corresponding to the discriminator
   *                         value passed in.
   */
  static getDiscriminatorClass(fieldMap, discrimValue) {
    if (
      discrimValue === undefined ||
      discrimValue === null ||
      fieldMap === null ||
      fieldMap === undefined
    ) {
      return null;
    }
    let className = null;
    if (Object.prototype.hasOwnProperty.call(fieldMap, discrimValue)) {
      className = fieldMap[discrimValue];
    }
    return className;
  }

  /**
   * Helper function to map input object with model fields
   * @param  json  {object}  Input object to be mapped onto model fields
   * @param  modelName  {string}  The name of model to instantiate
   * @returns           {object}  Object containing mapped fields of model
   */
  mapObject(json, modelName) {
    if (json === null || json === undefined) {
      return null;
    }
    let instance = modelName;
    const modelInstance = modelFactory.getInstance(modelName);
    const discrimName = ObjectMapper.getDiscriminatorFieldName(
      modelInstance.constructor.mappingInfo()
    );
    const discrimValue = ObjectMapper.getDiscriminatorFieldValue(
      json,
      discrimName
    );
    if (
      discrimName !== null &&
      discrimName !== undefined &&
      discrimValue !== null &&
      discrimValue !== undefined
    ) {
      instance = ObjectMapper.getDiscriminatorClass(
        modelInstance.constructor.discriminatorMap(),
        discrimValue
      );
    }
    return this.mapFields(json, modelFactory.getInstance(instance));
  }

  /**
   * Maps the instance's fields with the values in input object
   * The function helps in deserializing a model instance
   * @param  json  {object}  Input object to be mapped onto model fields
   * @param  instance  {object}  The instance of the model class
   * @returns          {object}  Mapped instance of model class
   */
  mapFields(json, instance) {
    const returnInstance = instance;
    const fieldsInfo = instance.constructor.mappingInfo();
    fieldsInfo.forEach((fieldInfo) => {
      if (fieldInfo.type) {
        if (fieldInfo.array) {
          if (
            json[fieldInfo.realName] !== null &&
            json[fieldInfo.realName] !== undefined
          ) {
            returnInstance[fieldInfo.name] = json[fieldInfo.realName].map(
              (obj) => this.mapObject(obj, fieldInfo.type)
            );
          }
        } else {
          returnInstance[fieldInfo.name] = this.mapObject(
            json[fieldInfo.realName],
            fieldInfo.type
          );
        }
      } else if (fieldInfo.isDateTime) {
        returnInstance[fieldInfo.name] =
          json[fieldInfo.realName] === null ||
          json[fieldInfo.realName] === undefined
            ? json[fieldInfo.realName]
            : ObjectMapper.parseDateTime(
                json[fieldInfo.realName],
                fieldInfo.dateTimeValue
              );
      } else {
        returnInstance[fieldInfo.name] =
          json[fieldInfo.realName] === null ||
          json[fieldInfo.realName] === undefined
            ? instance[fieldInfo.name]
            : json[fieldInfo.realName];
      }
    });
    return returnInstance;
  }
}

module.exports = ObjectMapper;

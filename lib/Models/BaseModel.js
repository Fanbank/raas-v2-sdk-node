/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const moment = require('moment');
const _apiHelper = require('../APIHelper');

/**
 * Creates an instance of BaseModel
 */
class BaseModel {
  /**
   * Returns value for the object called
   * @param  obj  {string}  The value to be assigned
   * @param  defaultValue  {string} The default value for the field
   * @returns  The correct value for the field
   */
  static getValue(obj, defaultValue) {
    if (obj === undefined || obj === null) {
      return null;
    }
    let returnValue;
    if (obj !== undefined) {
      returnValue = obj;
    } else {
      returnValue =
        defaultValue !== null || defaultValue !== undefined
          ? defaultValue
          : null;
    }
    return returnValue;
  }

  /**
   * Helper function to check if value exists in the array of objects
   * @param  val  {string}  The value to be checked in array
   * @returns  If value doesn't exist in the array, returns null. Otherwise, returns the value
   */
  mappingInfoContains(val) {
    const mapInfo = this.constructor.mappingInfo();
    const keys = Object.keys(mapInfo);
    let returnValue = null;
    for (let iter = 0; iter < keys.length; iter += 1) {
      if (val === mapInfo[iter].name) {
        returnValue = mapInfo[iter].realName;
        break;
      }
    }
    return returnValue;
  }

  /**
   * Helper function to get the value (type) of datetime fields
   * @param  name  {string}  The (actual) name of the field
   * @returns  If field is not a date/datetime field, returns undefined.
   *           Otherwise, returns the value (type)
   */
  getDateTimeValueForField(name) {
    if (name === undefined || name === null) {
      return null;
    }
    let value;
    const fieldsInfo = this.constructor.mappingInfo();
    fieldsInfo.forEach((field) => {
      if (field.realName === name && field.isDateTime && value === undefined) {
        value =
          field.dateTimeValue !== undefined ? field.dateTimeValue : 'date';
      }
    });
    return value;
  }

  /**
   * Helper Function to get Serialized Model
   * @returns  {object}  Dictionary of all model properties alongwith
   *                     additional properties (if any)
   */
  toJSON() {
    const newDict = {};
    const props = Object.keys(this);
    for (let iter = 0; iter < props.length; iter += 1) {
      if (typeof this[props[iter]] !== 'function') {
        // the properties that already exist in the models
        const propsThatExist = this.mappingInfoContains(props[iter]);
        const value = propsThatExist !== null ? propsThatExist : props[iter];
        if (
          this[props[iter]] instanceof Object &&
          this[props[iter]].constructor !== Array &&
          !(this[props[iter]] instanceof moment) &&
          !(this[props[iter]] instanceof Date)
        ) {
          if (typeof this[props[iter]].toJSON === 'function') {
            newDict[value] = this[props[iter]].toJSON();
          } else {
            newDict[value] = this[props[iter]];
          }
        } else if (
          this[props[iter]] !== undefined &&
          this[props[iter]] !== null &&
          this[props[iter]].constructor === Array
        ) {
          newDict[value] = [];
          this[props[iter]].forEach((item, index) => {
            if (item !== undefined) {
              if (typeof item.toJSON === 'function') {
                newDict[value][index] = item.toJSON();
              } else {
                newDict[value][index] = item;
              }
            }
          });
        } else {
          const dateTimeType = this.getDateTimeValueForField(value);
          if (dateTimeType !== null && dateTimeType !== undefined) {
            // this means it's date/datetime field
            newDict[value] = _apiHelper.stringifyDateTime(
              this[props[iter]],
              dateTimeType
            );
          } else {
            newDict[value] = this[props[iter]];
          }
        }
      }
    }
    return newDict;
  }

  /**
   * Function containing information about the fields of this model
   * @returns   {array}   Empty array
   */
  static mappingInfo() {
    return [];
  }
}

module.exports = BaseModel;

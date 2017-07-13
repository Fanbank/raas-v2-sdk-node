/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

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
            returnValue = (defaultValue !== null || defaultValue !== undefined) ?
                defaultValue : null;
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
                newDict[value] = this[props[iter]];
            }
        }
        return (newDict);
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
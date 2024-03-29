/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const stream = require('stream');

class APIHelper {
  /**
   * Replaces template parameters in the given url
   * @param   {String} queryBuilder    The query string builder to replace the template parameters
   * @param   {Array}  parameters      The parameters to replace in the queryBuilder
   * @returns {String}                 The query string with replaced template parameters
   */
  static appendUrlWithTemplateParameters(queryBuilder, parameters) {
    // perform parameter validation
    if (queryBuilder === null) {
      return null;
    }
    if (parameters === null) {
      return queryBuilder;
    }

    let queryString = queryBuilder;
    // iterate and replace parameters
    const keys = Object.keys(parameters);
    for (let iter = 0; iter < keys.length; iter += 1) {
      let replaceValue = '';

      // load parameter value
      const element = parameters[keys[iter]];
      if (element === null) {
        replaceValue = '';
      } else if (element instanceof Array) {
        replaceValue = element.map((el) => encodeURIComponent(el));
        replaceValue = replaceValue.join('/');
      } else {
        replaceValue = encodeURIComponent(element.toString());
      }
      queryString = queryString.replace(`{${keys[iter]}}`, replaceValue);
    }
    return queryString;
  }

  /**
   * Appends the given set of parameters to the given query string
   * @param   {String} queryBuilder    The query url string to append the parameters
   * @param   {Array}  parameters      The parameters to append
   * @returns {String}                 The query string appended with query parameters
   */
  static appendUrlWithQueryParameters(queryBuilder, parameters) {
    // perform parameter validation
    if (queryBuilder === null) {
      return null;
    }
    if (parameters === queryBuilder) {
      return queryBuilder;
    }
    const hasParams = queryBuilder.indexOf('?') > -1;

    // iterate and replace parameters
    const encoded = this.urlEncodeObject(parameters);
    const separator = hasParams ? '&' : '?';
    const queryString = queryBuilder + separator + encoded;
    return queryString;
  }

  /**
   * Validates and processes the given Url
   * @param  {String}  url  The Url to process
   * @return {String}       Processed url
   */
  static cleanUrl(url) {
    // ensure that the urls are absolute
    const re = /^https?:\/\/[^/]+/;
    const match = url.match(re);
    if (match === null) {
      return null;
    }

    // remove redundant forward slashes
    const protocol = match[0];
    let queryUrl = url.substring(protocol.length);
    queryUrl = queryUrl.replace(/\/\/+/, '/');
    const result = protocol + queryUrl;
    return result;
  }

  /**
   * JSON Serialization of a given object.
   * @param   {Object} data The object to serialize into JSON
   * @return  {Object}      The serialized Json string representation of the given object
   */
  static jsonSerialize(data) {
    return JSON.stringify(data);
  }

  /**
   * Formats the template parameters in the string
   * @param   {string}    str     The string containing the template
   * @return  {string}            The string with template parameters filled in.
   */
  static formatString(str) {
    let formattedStr = str;
    if (!formattedStr || arguments.length <= 1) return formattedStr;
    for (let iter = 1; iter < arguments.length; iter += 1) {
      const reg = new RegExp(`\\{${iter - 1}\\}`, 'gm');
      // eslint-disable-next-line prefer-rest-params
      formattedStr = formattedStr.replace(reg, arguments[iter]);
    }
    return formattedStr;
  }

  /**
   * Cleans the object by removing null properties.
   * @param   {object} input      Object or dictionary.
   * @return  {object}            Returns the cleaned version of the object.
   */
  static cleanObject(input) {
    if (!input) {
      return input;
    }
    const cleanedObj = input;
    if (cleanedObj instanceof stream.Stream) {
      return cleanedObj;
    }
    const keys = Object.keys(cleanedObj);
    for (let iter = 0; iter < keys.length; iter += 1) {
      const value = cleanedObj[keys[iter]];
      if (value === null || value === undefined) {
        if (cleanedObj.constructor === Array) {
          cleanedObj.splice(keys[iter], 1);
        } else delete cleanedObj[keys[iter]];
      } else if (Object.prototype.toString.call(value) === '[object Object]') {
        this.cleanObject(value);
      } else if (value.constructor === Array) {
        this.cleanObject(value);
      }
    }
    return cleanedObj;
  }

  /**
   * Shallow merges the properties of two objects
   * @param {object} first   The object to merge in to
   * @param {object} second  The object to be added to first
   *
   * @return {object}        The merged (modified) first object
   */
  static merge(first, second) {
    if (!first) {
      return first;
    }
    const merged = first;
    if (second !== undefined && second !== null) {
      const attrNamesSecond = Object.keys(second);
      for (let iter = 0; iter < attrNamesSecond.length; iter += 1) {
        merged[attrNamesSecond[iter]] = second[attrNamesSecond[iter]];
      }
    }
    return merged;
  }

  /**
   * Checks if the elements of the given array are all primitives
   * @param {array}  value   The array to be checked
   *
   * @return {bool}          The result of primitive checking
   */
  static isPrimitiveArray(value) {
    if (value.constructor && value.constructor !== Array) {
      return false;
    }
    if (value.length === 0) return true;
    return value.every(
      (obj) =>
        obj === null ||
        obj === undefined ||
        (obj.constructor &&
          [String, Number, Boolean].indexOf(obj.constructor) >= 0)
    );
  }

  /**
   * Converts an object to formdata serialization.
   * @param {Object} obj           The object to serialize
   * @param {array} keys           The keys of the object
   * @return {array<key,value>}    Result of serialization
   */
  static formDataEncodeObject(obj, keys) {
    let value;
    let fullSubName;
    let subValue;
    let innerObj;
    let returnKeys = keys;
    if (!keys) {
      returnKeys = [];
    }
    if (!obj) {
      return null;
    }
    const keysOfObj = Object.keys(obj);
    for (let outerIter = 0; outerIter < keysOfObj.length; outerIter += 1) {
      value = obj[keysOfObj[outerIter]];
      if (value instanceof stream.Stream) {
        returnKeys.push({
          key: keysOfObj[outerIter],
          value,
        });
      } else if (value instanceof Array) {
        const arrayFormat = '{0}[{1}]';
        for (let iter = 0; iter < value.length; iter += 1) {
          subValue = value[iter];
          fullSubName = this.formatString(
            arrayFormat,
            keysOfObj[outerIter],
            iter
          );
          innerObj = {};
          innerObj[fullSubName] = subValue;
          this.formDataEncodeObject(innerObj, returnKeys);
        }
      } else if (value instanceof Object) {
        const subNameKeys = Object.keys(value);
        for (let iter = 0; iter < subNameKeys.length; iter += 1) {
          subValue = value[subNameKeys[iter]];
          fullSubName = `${keysOfObj[outerIter]}[${subNameKeys[iter]}]`;
          innerObj = {};
          innerObj[fullSubName] = subValue;
          this.formDataEncodeObject(innerObj, returnKeys);
        }
      } else if (value !== undefined && value !== null) {
        if (!(value instanceof Object)) {
          returnKeys.push({
            key: keysOfObj[outerIter],
            value,
          });
        }
      }
    }
    return returnKeys;
  }

  /**
   * Converts an object to x-www-form-urlencoded serialization.
   * @param  {Object} obj The object to be serialized
   * @return {String}     The result of serialization
   */
  static urlEncodeObject(obj) {
    if (!obj) {
      return null;
    }
    const params = this.formDataEncodeObject(obj);
    let query = '';
    const index = Object.keys(params);
    for (let iter = 0; iter < index.length; iter += 1) {
      const pair = params[index[iter]];
      const { key, value } = pair;
      query += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  }

  /**
   * Returns Datetime string value for field
   * @param  value  {object}  Datetime object
   * @param  type   {string}  The Datetime format of the date object (value) passed in
   * @returns       {string}  Stringified Datetime object
   */
  static stringifyDateTime(value, type) {
    if (value === null || value === undefined) {
      return null;
    }
    switch (type) {
      case 'unixtimestamp':
        return value.getTime();
      case 'rfc1123':
        return value.toUTCString();
      case 'rfc3339':
        return value.format();
      case 'date':
        return value.format('YYYY-MM-DD');
      default:
        return value.format('YYYY-MM-DD');
    }
  }
}

module.exports = APIHelper;

/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.SANDBOX] = [];
environmentsMap[environments.PRODUCTION] = [];

environmentsMap[environments.SANDBOX][servers.MDEFAULT] =
  'https://integration-api.tangocard.com/raas/v2';
environmentsMap[environments.PRODUCTION][servers.MDEFAULT] =
  'https://api.tangocard.com/raas/v2';

const Configuration = {
  // Platform Name (Provided by Tango Card)
  platformName: 'QAPlatform2',

  // Platform Key (Provided by Tango Card)
  platformKey: 'apYPfT6HNONpDRUj3CLGWYt7gvIHONpDRUYPfT6Hj',

  /**
   * Current API environment
   * @type {string}
   */
  currentEnvironment: environments.SANDBOX,

  /**
   * Get base URI for a server in the current API environment
   * @param  {string|null} server Server name
   * @return {string}             Base URI for server
   */
  getBaseUri(server) {
    const url =
      environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
    const urlParams = {};
    return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
  },
};

module.exports = Configuration;

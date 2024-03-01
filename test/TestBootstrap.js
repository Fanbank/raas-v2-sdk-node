/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const configuration = require('../lib/configuration');
const environments = require('../lib/Environments');

const testConfiguration = {
  ASSERT_PRECISION: 0.01,
  TEST_TIMEOUT: 30000,
};

configuration.currentEnvironment = environments.SANDBOX;

module.exports = testConfiguration;

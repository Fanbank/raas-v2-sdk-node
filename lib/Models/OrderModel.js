/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OrderModel
 */
class OrderModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.referenceOrderID = this.constructor.getValue(obj.referenceOrderID);
    this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
    this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
    this.accountNumber = this.constructor.getValue(obj.accountNumber);
    this.amountCharged = this.constructor.getValue(obj.amountCharged);
    this.denomination = this.constructor.getValue(obj.denomination);
    this.utid = this.constructor.getValue(obj.utid);
    this.rewardName = this.constructor.getValue(obj.rewardName);
    this.sender = this.constructor.getValue(obj.sender);
    this.recipient = this.constructor.getValue(obj.recipient);
    this.sendEmail = this.constructor.getValue(obj.sendEmail);
    this.etid = this.constructor.getValue(obj.etid);
    this.status = this.constructor.getValue(obj.status);
    this.createdAt = this.constructor.getValue(obj.createdAt);
    this.reward = this.constructor.getValue(obj.reward);
    this.campaign = this.constructor.getValue(obj.campaign);
    this.emailSubject = this.constructor.getValue(obj.emailSubject);
    this.externalRefID = this.constructor.getValue(obj.externalRefID);
    this.message = this.constructor.getValue(obj.message);
    this.notes = this.constructor.getValue(obj.notes);
    this.marginShare = this.constructor.getValue(obj.marginShare);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'referenceOrderID', realName: 'referenceOrderID' },
      { name: 'customerIdentifier', realName: 'customerIdentifier' },
      { name: 'accountIdentifier', realName: 'accountIdentifier' },
      { name: 'accountNumber', realName: 'accountNumber' },
      {
        name: 'amountCharged',
        realName: 'amountCharged',
        type: 'CurrencyBreakdownModel',
      },
      {
        name: 'denomination',
        realName: 'denomination',
        type: 'CurrencyBreakdownModel',
      },
      { name: 'utid', realName: 'utid' },
      { name: 'rewardName', realName: 'rewardName' },
      { name: 'sender', realName: 'sender', type: 'NameEmailModel' },
      { name: 'recipient', realName: 'recipient', type: 'NameEmailModel' },
      { name: 'sendEmail', realName: 'sendEmail' },
      { name: 'etid', realName: 'etid' },
      { name: 'status', realName: 'status' },
      {
        name: 'createdAt',
        realName: 'createdAt',
        isDateTime: true,
        dateTimeValue: 'rfc3339',
      },
      { name: 'reward', realName: 'reward', type: 'RewardModel' },
      { name: 'campaign', realName: 'campaign' },
      { name: 'emailSubject', realName: 'emailSubject' },
      { name: 'externalRefID', realName: 'externalRefID' },
      { name: 'message', realName: 'message' },
      { name: 'notes', realName: 'notes' },
      {
        name: 'marginShare',
        realName: 'marginShare',
        type: 'CurrencyBreakdownModel',
      },
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

module.exports = OrderModel;

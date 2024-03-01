/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateOrderRequestModel
 */
class CreateOrderRequestModel extends BaseModel {
  /**
   * @constructor
   * @param   {Object}  obj    The object passed to constructor
   */
  constructor(obj) {
    super(obj);
    if (obj === undefined || obj === null) return;
    this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
    this.amount = this.constructor.getValue(obj.amount);
    this.campaign = this.constructor.getValue(obj.campaign);
    this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
    this.emailSubject = this.constructor.getValue(obj.emailSubject);
    this.externalRefID = this.constructor.getValue(obj.externalRefID);
    this.message = this.constructor.getValue(obj.message);
    this.recipient = this.constructor.getValue(obj.recipient);
    this.sendEmail = this.constructor.getValue(obj.sendEmail);
    this.sender = this.constructor.getValue(obj.sender);
    this.utid = this.constructor.getValue(obj.utid);
    this.notes = this.constructor.getValue(obj.notes);
    this.etid = this.constructor.getValue(obj.etid);
  }

  /**
   * Function containing information about the fields of this model
   * @return   {array}   Array of objects containing information about the fields
   */
  static mappingInfo() {
    return super.mappingInfo().concat([
      { name: 'accountIdentifier', realName: 'accountIdentifier' },
      { name: 'amount', realName: 'amount' },
      { name: 'campaign', realName: 'campaign' },
      { name: 'customerIdentifier', realName: 'customerIdentifier' },
      { name: 'emailSubject', realName: 'emailSubject' },
      { name: 'externalRefID', realName: 'externalRefID' },
      { name: 'message', realName: 'message' },
      { name: 'recipient', realName: 'recipient', type: 'NameEmailModel' },
      { name: 'sendEmail', realName: 'sendEmail' },
      { name: 'sender', realName: 'sender', type: 'NameEmailModel' },
      { name: 'utid', realName: 'utid' },
      { name: 'notes', realName: 'notes' },
      { name: 'etid', realName: 'etid' },
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

module.exports = CreateOrderRequestModel;

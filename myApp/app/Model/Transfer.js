
'use strict'

const Lucid = use('Lucid')

class Transfer extends Lucid {

  static get connection () {
    return 'mysql'
  }
  order(){
    return this.belongsTo("App/Model/Order",'oid','oid');
  }
  sender(){
     return this.belongsTo("App/Models/User","sender_uid","uid")
  }
  receiver(){
     return this.belongsTo("App/Models/User","receiver_uid","uid")
  }
}

module.exports = Transfer

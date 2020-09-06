'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shops(){
    return this.hasMany("App/Model/Shop","uid","uid");
  }
  type(){
   return this.belongsTo("App/Model/UserType","related_type_id","type_id")
  }
  wallet(){
    return this.hasOne("App/Model/Wallet","wid","wid")
  }
  orders(model="order",type="order"){
   return (model=="order")?this.hasMany("App/Model/Order",
   "uid","uid").where({type:type}):this.hasMany("App/Model/Offer",
   "uid","uid")
  }
  info(){
    return AdditionalInformation.query().where('on->>"$.id"',this.id);
  }
  attachments(){
   return this.hasMany("App/Model/Attachment","uid","uid");
  }
  activity(){
   return this.hasMany("App/Model/Activity","uid","uid");
  }

}

module.exports = User

'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shops(){
    return this.hasMany("App/Model/Shop","uid","uid");
  }
  types(){
   return this.belongsMany("App/Model/TypeUser","utype_id","uid","uid","utype_id")
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
    //return Information.on("users",this);
    //return this.hasOne("App/Model/Inforamation","onId","uid").where("onType","users")
   }
  attachments(){
   return this.hasMany("App/Model/Attachment","uid","uid");
  }
  activity(){
   return this.hasMany("App/Model/Activity","uid","uid");
  }
  comments(){
   return this.hasMany("App/Model/comments","uid","uid");
  }
  votes_on_users(){
   return this.manyThrough("App/Model/VotesUsers","votes","uid","uid");
  }
  votes(){
   return this.hasMany("App/Model/Votes","uid","uid");
  }
  ads(){
   return this.hasMany("App/Model/Ads","uid","uid");
  }
  coupons(){
   return this.hasMany("App/Model/Coupon","uid","uid");
  }
  reactions(){
   // return this.hasMany("App/Model/Reaction","uid","uid");
  }
  events(){
   return this.hasMany("App/Model/Event","uid","uid");
  }
  users(){
   return this.hasMany("App/Model/User","uid","related_id")
  }
  outTransfers(){
   return this.hasMany("App/Model/Transfer","uid","sender_uid")
  }
  inTransfers(){
   return this.hasMany("App/Model/Transfer","uid","receiver_uid")
  }
  outMessages(){
   return this.hasMany("App/Model/Message","uid","sender_uid")
  }
  inMessages(){
   return this.hasMany("App/Model/Message","uid","receiver_uid")
  }
  conversations(){
  // return this.belongsMany("App/Model/Message","uid","uid","uid","")
  }
  devices(){
    return this.hasMany("App/Model/Device","uid","uid")
  }
  verifications(){
    return this.hasMany("App/Model/Verification","uid","uid")
  }
}
module.exports = User

'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  static current_user(user){
      return user
   }
  static get connection () {
    return 'mysql'
  }
  shops(){
    return this.hasMany("App/Model/Shop","uid","uid");
  }
  shops_followings(){
    return this.belongsMany("App/Model/Shop","sid","uid","uid","sid").pivotModel("App/Model/ShopFollower");
    //return this.manyThrough("App/Model/ShopFollower","shop","follid","sid");
  }
   }
  types(){
   return this.belongsMany("App/Model/TypeUser","uid","utype_id","utype_id","uid")
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
   return this.manyThrough("App/Model/VotesUsers","votes","uid","votid");
  }
  votes(){
   //return this.hasMany("App/Model/Votes","uid","uid");
   return this.belongsMany("App/Model/Vote","uid","votid","votid","uid").pivotModel("App/Model/VoteUser");
    
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
    return this.manyThrough("App/Model/EventUser","event","uid","evtid")
  }
  events_subscribed(){
   return this.manyThrough("App/Model/EventUser","event","uid","evtid")
  }
  users(followers=false){
   return (flowers==false)?this.hasMany("App/Model/User","uid","related_id"):
    this.belongsMany("App/Model/Follower","follid","uid","uid","follid")
   }
  transfers(out==false){
   return (out==false)? this.hasMany("App/Model/Transfer","uid","sender_uid")
   :this.hasMany("App/Model/Transfer","uid","receiver_uid")
  
  }
  messages(out===false){
   return (out==true)? this.hasMany("App/Model/Message","uid","uid"):
    this.hasMany("App/Model/Message","uid","receiver_id")
  }
  conversations(){
   return this.belongsMany("App/Model/Message","mesgid","uid","uid","mesgid").where({"type":"conversation"})
  }
  devices(){
    return this.hasMany("App/Model/Device","uid","uid")
  }
  verifications(){
    return this.hasMany("App/Model/Verification","uid","uid")
  }
  affiliates(){
    return this.hasOne("App/Model/Affiliate","uid","uid")
  }
}
module.exports = User

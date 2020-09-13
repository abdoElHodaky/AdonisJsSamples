
'use strict'

const Lucid = use('Lucid')

class ShopFollower extends Lucid {

  static get connection () {
    return 'mysql'
  }

  follower(){
   return this.belongsTo("App/Model/Follower","follid","follid");
    //return this.hasMany("App/Model/Follower","follid","follid")
   }
  shop(){
    return this.belongsTo("App/Model/Shop","sid","sid")
   }
  

}

module.exports = ShopFollower

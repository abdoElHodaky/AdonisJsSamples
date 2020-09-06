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
  orders(type="order"){
   return this.hasMany("App/Model/Order","uid","uid").where({type:type})
  }
  

}

module.exports = User

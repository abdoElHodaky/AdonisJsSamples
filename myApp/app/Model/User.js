'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shops(){
    return this.hasMany("App/Model/Shop","uid","id");
  }
  type(){
   return this.belongsTo("App/Model/UserType","type_id","related_type_id")
  }
  wallet(){
    return this.hasOne("App/Model/Wallet","uid","uid")
  }
  

}

module.exports = User

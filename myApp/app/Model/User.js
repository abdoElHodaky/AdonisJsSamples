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

}

module.exports = User

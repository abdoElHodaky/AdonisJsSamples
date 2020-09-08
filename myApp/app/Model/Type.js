
'use strict'

const Lucid = use('Lucid')

class TypeUser extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
   this.hasMany("App/Model/User","utype_id","utype_id")
  }
}

module.exports = TypeUser

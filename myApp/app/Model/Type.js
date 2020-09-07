
'use strict'

const Lucid = use('Lucid')

class Type extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
   this.hasMany("App/Model/User","utype_id","utype_id")
  }
}

module.exports = Type

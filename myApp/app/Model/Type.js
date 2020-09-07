
'use strict'

const Lucid = use('Lucid')

class Type extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
   this.hasMany("App/Model/User","type_id","related_type_id")
  }
}

module.exports = Type

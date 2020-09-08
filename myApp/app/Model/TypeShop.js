'use strict'

const Lucid = use('Lucid')

class TypeShop extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
   this.hasMany("App/Model/Shop","shptype_id","shptype_id")
  }
}

module.exports = TypeShop

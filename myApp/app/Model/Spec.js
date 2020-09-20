'use strict'

const Lucid = use('Lucid')

class Spec extends Lucid {

  static get connection () {
    return 'mysql'
  }
  products(){
    //return this.belongsTo("App/Model/Product","pid","pid");
    return this.belongsMany("App/Model/Product","specid","pid","pid","specid")
  }
  specs(){
   return this.hasMany("App/Model/Spec","specid","parent_id")
  }
}

module.exports = Spec

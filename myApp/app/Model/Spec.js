'use strict'

const Lucid = use('Lucid')

class Spec extends Lucid {

  static get connection () {
    return 'mysql'
  }
  products(){
    //return this.belongsTo("App/Model/Product","pid","pid");
  }
}

module.exports = Spec

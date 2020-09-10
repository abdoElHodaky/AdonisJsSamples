'use strict'

const Lucid = use('Lucid')

class Verification extends Lucid {

  static get connection () {
    return 'mysql'
  }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   device(){
    return this.hasOne("App/Model/Device","devid","devided")
   }
}

module.exports = Verification

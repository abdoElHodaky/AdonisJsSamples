'use strict'

const Lucid = use('Lucid')

class Wallet extends Lucid {

  static get connection () {
    return 'mysql'
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  credits(){
    return this.hasMany("App/Model/Credit","wallid","wallid")
  }
  
}

module.exports = Wallet

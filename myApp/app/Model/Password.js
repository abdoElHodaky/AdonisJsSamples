'use strict'

const Lucid = use('Lucid')

class Password extends Lucid {

  static get connection () {
    return 'mysql'
  }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
}

module.exports = Password

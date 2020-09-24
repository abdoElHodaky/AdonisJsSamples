'use strict'

const Lucid = use('Lucid')

class Email extends Lucid {

  static get connection () {
    return 'mysql'
  }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   verification(){
    return this.belongsTo("App/Model/Verification","emid","wmid")
   }
}

module.exports = Email

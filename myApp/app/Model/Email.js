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
    return this.belongsMany("App/Model/Verification","emid","verifid","verifid","emid","emid").
    pivotModel("App/Model/EmailVerification")
   }
}

module.exports = Email

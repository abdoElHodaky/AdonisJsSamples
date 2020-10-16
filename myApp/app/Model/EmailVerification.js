'use strict'

const Lucid = use('Lucid')

class EmailVerification extends Lucid {

  static get connection () {
    return 'mysql'
  }
   verification(){
    return this.belongsTo("App/Model/Verification","verifid","verifid")
   }
   email(){
    return this.belongsTo("App/Model/Email","emid","emid")
   }

}

module.exports = EmailVerification

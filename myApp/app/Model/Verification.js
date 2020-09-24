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
    return this.belongsMany("App/Model/Device","verifid","devid","devid","verifid").
    pivotModel("App/Model/DeviceVerification")
   }

   email(){
    return this.belongsMany("App/Model/Email","verifid","emid","emid","verifid").
    pivotModel("App/Model/EmailVerification")
   }
}

module.exports = Verification

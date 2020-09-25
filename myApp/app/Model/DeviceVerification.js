
'use strict'

const Lucid = use('Lucid')

class DeviceVerification extends Lucid {

  static get connection () {
    return 'mysql'
  }
   verification(){
    return this.belongsTo("App/Model/Verification","verifid","verifid")
   }
   device(){
    return this.belongsTo("App/Model/Device","devid","devid")
   }

}

module.exports = DeviceVerification

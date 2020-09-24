'use strict'

const Lucid = use('Lucid')

class Device extends Lucid {

  static get connection () {
    return 'mysql'
  }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   verification(){
    return this.belongsMany("App/Model/Verification","devid","verifid","verifid","devid").
    pivotModel("App/Model/DeviceVwrification")
   }
}

module.exports = Device

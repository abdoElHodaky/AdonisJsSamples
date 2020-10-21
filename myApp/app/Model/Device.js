'use strict'

const Lucid = use('Lucid'),
Random=use("randomcode"),
Verification=use("App/Model/Verification")

class Device extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterCreate",device=>{
      verification=yield Verification.create({
       of:"email",
       verify_code:Random(8,1),
       uid:device.uid
      })
      yield device.verification().attach([verification.verifid])
    })
  }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   verification(){
    return this.belongsMany("App/Model/Verification","devid","verifid","verifid","devid").
    pivotModel("App/Model/DeviceVerification")
   }
}

module.exports = Device

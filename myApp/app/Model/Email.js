'use strict'

const Lucid = use('Lucid'),
Random=use("randomcode"),
Verification=use("App/Model/Verification")

class Email extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterCreate",email=>{
      verification=yield Verification.create({
       of:"email",
       verify_code:Random(8,2),
       uid:email.uid
      })
      yield email.verification().attach([verification.verifid])
    })
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

'use strict'
const Device=use("App/Model/Device"),
Verification=use("App/Model/Verification"),
gen=require("randomcode")
//User=use("App/Model/User")
class DeviceController {
   static device_verification={}
   static device={}
  // static user={}

  * index(request, response) {
     response.json(yield user.devices().load("verifications"))
   }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
   var user=request.auth.getUser(),
   inputs=request.post(),
   device=yield user.devices().create(inputs),
     device.verifications()
    .attach([(yield Verification.create({
     verify_code:gen(16)
    })).verifid],row=>device_verification=row)
   response.json(device)
   
    
  }

  * show(request, response) {
    //
    }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }
  *verify(request, response) {
    
    var user=request.auth.getUser(),
   inputs=request.post();
   if(device_verification.verification().fetch().verify_code==inputs.verify_code)
    {
       device_verification.merge({verified:true})
       device.merge({allow_login:true})
       
    }
    response.json(device)
  }
}

module.exports = DeviceController

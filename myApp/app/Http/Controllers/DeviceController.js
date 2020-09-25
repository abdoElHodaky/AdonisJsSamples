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
     device_verification=device.verifications()
    .attach([(yield Verification.create({
     verify_code:gen(16)
    })).verifid])
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
   if(device_verification.verification().verify_code==inputs.verify_code)
    {
       device.verified=true
       device.allow_login=true
       device.save()
    }
    response.json(device)
  }
}

module.exports = DeviceController

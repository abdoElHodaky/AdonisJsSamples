'use strict'
const Device=use("App/Model/Device"),
//User=use("App/Model/User")
class DeviceController {
   
  * index(request, response) {
     response.json(yield user.devices().load("verifications"))
   }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
   var user=request.author.getUser(),
   inputs=request.post(),
   device=yield user.devices().create(inputs)
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
  * verify(request, response) {
    
    var user=request.author.getUser(),
   inputs=request.post(),
   device=yield user.devices().findOrFail(request.params().devid)
   verification= device.verification().findBy({verify_code:inputs.verify_code})
   device.verified=true
   devices.allow_login=true
   device.save()
   response.json(device)
  }
}

module.exports = DeviceController

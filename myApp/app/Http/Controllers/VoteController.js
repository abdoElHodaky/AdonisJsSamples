
'use strict'
const Device=use("App/Model/Vote"),
Product=use("App/Model/Product"),
User=use("App/Model/User")
class VoteController {
   
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
   entity={}
   if("product" in inputs)
     Product
   
  // device=yield user.devices().create(inputs)
   //response.json(device)
   
    
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
}

module.exports = VoteController

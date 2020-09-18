'use strict'
//const Order=use("App/Model/Order")
class ConventionController {

  * index(request, response) {
    var user=yield request.auth.getUser()
    response.json(yield user.messages().where({type:"conversation"}))
     
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser(),
    inputs=request.post(),
    conversation=user.messages().create({
     type:"conversation",
     receiver_id:inputs.receiver
    })
  //  yield order.products(inputs.transfer).createMany(inputs.products)
    response.json(conversation)

 }

  * show(request, response) {
    //
     var user=yield request.auth.getUser()
    ,conversation=user.messages().find(request.params().id)
    response.json (yield conversation.load("messages"))

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

module.exports = ConventionController


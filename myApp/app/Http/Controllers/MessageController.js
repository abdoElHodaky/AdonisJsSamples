
'use strict'
//const Order=use("App/Model/Order")
class MessageController {

  * index(request, response) {
    var user=yield request.auth.getUser()
    response.json(yield user.conversations().messages())
     
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser(),
    inputs=request.post(),
    message=user.conversations()
    .findOrFail(request.params().cmessgid)
     messages().create({
     type:"message",
     receiver_id:inputs.receiver,
     content:inputs.message
    })
  
    response.json(message)

 }

  * show(request, response) {
    //
     
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
     var user=yield request.auth.getUser(),
    inputs=request.post(),
    message=user.conversations()
    .findOrFail(request.params().cmessgid)
     messages().where({messgid:request.params().messgid}).update
     content:inputs.message
    })
     response.json(message)
  }

  * destroy(request, response) {
    //
  }

}

module.exports = MessageController


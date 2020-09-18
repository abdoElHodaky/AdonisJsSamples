
'use strict'
const Message=use("App/Model/Message")
class NotificationController {

  * index(request, response) {
    var user=yield request.auth.getUser()
    response.json(yield user.messages().where({type:"notification"}))
     
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser(),
    inputs=request.post(),
    notification=Message.create({
     type:"notification",
     receiver_id:inputs.receiver,
     content:inputs.content
    })
  //  yield order.products(inputs.transfer).createMany(inputs.products)
    response.json(notification)

 }

  * show(request, response) {
    //
     var user=yield request.auth.getUser()
    ,notification=yield user.messages().findBy({request.params().messgid,"type":"notification"})
    response.json ( notification)

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

module.exports = NotificationController

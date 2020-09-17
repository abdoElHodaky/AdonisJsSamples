'use strict'
//const Order=use("App/Model/Order")
class CartController {

  * index(request, response) {
    //response.json()
     
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser(),
    inputs=request.post(),
    order=user.orders().create(inputs)
    yield order.products(inputs.transfer).createMany(inputs.products)
    response.json(order.load("products"))

 }

  * show(request, response) {
    //
     var user=yield request.auth.getUser()
    ,order=user.orders().find(request.params().id)
    response.json (yield order.load("products("+request.post().transfer+")))

  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
     var user=yield request.auth.getUser(),inputs=request.post()
    ,order=user.orders().find(request.params().id)
     response.json( 
      order.products(inputs.transfer).where({"opid":inputs.opid}).
      update(inputs.product)
    )

  }

  * destroy(request, response) {
    //
  }

}

module.exports = CartController

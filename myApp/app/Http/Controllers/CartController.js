'use strict'
//const User=use("App/Model/User")
class CartController {

  * index(request, response) {
    if (request.session.get("user")) {
      yield response.sendView("Cart",{})
    } else {
      response.redirect("Home")
    }
     
  }

  * create(request, response) {
    //
    var inputs=request.post();
    order.create(inputs);
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser()
    ,order=user.orders().create()
    yield order.products().createMany(request.post())
    response.json(order.load("products"))

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

module.exports = CartController

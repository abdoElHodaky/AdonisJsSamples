
'use strict'
//const User=use("App/Model/User")
class EventController {

  * index(request, response) {
   /* if (request.session.get("user")) {
      yield response.sendView("Cart",{})
    } else {
      response.redirect("Home")
    }
     */
     response.json(yield Event.query().with("users").fetch())
  }

  * create(request, response) {
    //
    var inputs=request.post();
    order.create(inputs);
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser()
    ,event=yield user.events().create()
    response.json(event)

 }

  * show(request, response) {
    //
     var user=yield request.auth.getUser()
    ,order=user.orders().find(request.params().id)
    response.json (yield order.load("products"))

  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
     var user=yield request.auth.getUser(),inputs=request.post()
    ,order=user.orders().find(request.params().id)
     response.json( 
      order.products().where({"opid":inputs.opid}).
      update(inputs.product)
    )

  }

  * destroy(request, response) {
    //
  }

}

module.exports = EventController

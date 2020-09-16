
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

module.exports = EventController

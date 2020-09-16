
'use strict'
const Event=use("App/Model/Event")
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
     response.json(yield Event.findOrFail(request.params().evtid).
     loadMany(["user","users"]))
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
  *User(request , response){
     var inputs=request.post()
      var event_user=yield Event.findOrFail(request.params().evtid).
      users().attach([inputs.uid])
      return event_user
    }
}

module.exports = EventController

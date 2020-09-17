
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
    var inputs=request.post(),
     user=yield request.auth.getUser()
    ,event=yield user.events().create(inputs)
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
     var inputs=request.post(),user=request.auth.getUser()
      var event_users=yield Event.findOrFail(request.params().evtid).
      users(),event_user={}
      if("status" in inputs && 
          inputs.status in ["comming","interesting","following"])
       event_user=event_users.attach([user.uid])
       event_user.status=inputs.status
       event_user.save()
      }
      else{
        event_users.detach([user.uid])
      }
     response.json(event_user)
   
}

module.exports = EventController


'use strict'
const Notification=use("App/Model/Notification")
class NotificationController {

  * index(request, response) {
    var user=yield request.auth.getUser()
    response.json(yield user.notifications())
     
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    

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

module.exports = NotificationController

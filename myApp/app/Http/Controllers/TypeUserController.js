'use strict'
const TypesUsers=use("App/Model/TypeUser")
class TypeUserController {
    
  * index(request, response) {
   /* if (request.session.get("user")) {
      yield response.sendView("Cart",{})
    } else {
      response.redirect("Home")
    }
     */
    return response.json(yield TypesUsers.all())
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
      response.json( TypesUsers.create(yield request.post()))
  }

  * show(request, response) {
     return reaponse.json(yield TypesUsers.find(request.params().id)
    .load("users"))
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

module.exports = TypeUserController

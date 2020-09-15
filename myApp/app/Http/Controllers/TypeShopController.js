'use strict'
const TypesShops=use("App/Model/TypeShop")
class TypeShopController {
    
  * index(request, response) {
   /* if (request.session.get("user")) {
      yield response.sendView("Cart",{})
    } else {
      response.redirect("Home")
    }
     */
    return response.json(yield TypesShops.all())
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
      response.json( TypesShops.create(yield request.post()))
  }

  * show(request, response) {
     return reaponse.json(yield TypesShops.find(request.params().id)
    .load("shops"))
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

module.exports = TypeShopController

'use strict'
const Product=use("App/Model/Product"),
Attachment=use("App/Model/Offer")
class ProductOfferController {

  * index(request, response) {
    var product=Product.find(request.params().pid)
    response.json(yield product.load("offers"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post()
    var product=yield Product.find(request.params().pid),
    
  }

  * show(request, response) {
    //
     var product=Product.findOrFail(request.params().id)
     response.json(product.loadMany((["specs","specs.childern","comments"]))
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      var product=Product.find(request.params().pid)
      response.json(product.specs()
     .where({"specid":request.params().specid}).
     update(request.post()))
  }

  * destroy(request, response) {
    //
  }


}

module.exports = ProductOfferController

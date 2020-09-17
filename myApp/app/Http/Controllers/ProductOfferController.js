'use strict'
const Product=use("App/Model/Product"),
Attachment=use("App/Model/Attachment")
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
    user=request.auth.getUser(),
    offer=yield user.offers().create(inputs.offer)
    product.offers().attach([offers.offid])
  }

  * show(request, response) {
    //
     var product=Product.findOrFail(request.params().pid)
     response.json(product.offers().findOrFail(request.params().offid))
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
    var inputs=request.post()
    ,product=yield Product.find(request.params().pid),
    user=request.auth.getUser(),
    offer=yield user.offers().where(request.params().offid).
    update(inputs)
    response.json(yield product.offers().sync([offer.offid]))
  }

  * destroy(request, response) {
    //
  }


}

module.exports = ProductOfferController

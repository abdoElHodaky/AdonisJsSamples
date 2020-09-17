'use strict'
const Affiliate=use("App/Model/Affiliate"),
const Product=use("App/Model/Product")
class AffiliteProductController {

  * index(request, response) {
    //
    //response.json(yield Affiliate.query().with("products").fetch())
  }

  * create(request, response) {
    //

  }

  * store(request, response) {
    //
    var inputs=yield request.post(),
    affiliate=yield Affiliate.findOrFail(request.params().affilid)
    affiliate.products().attach(inputs.affiliate_products)
    response.json(affiliate.load("products"))
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
    var inputs=yield request.post(),
    affiliate=yield Affiliate.findOrFail(request.params().affilid)
    affiliate.products().detch(inputs.affiliate_products)
    response.json(affiliate.load("products"))
  }

 

}

module.exports = AffiliteProductController

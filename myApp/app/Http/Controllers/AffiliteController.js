'use strict'
const Affiliate=use("App/Model/Affiliate");
class AffiliteController {

  * index(request, response) {
    //
    response.json(yield Affiliate.query().with("products").fetch())
  }

  * create(request, response) {
    //

  }

  * store(request, response) {
    //
    var inputs=yield request.post(),
    affiliate=yield Affiliate.create(inputs)
    affiliate.user().associate(request.params().owner_id)
    response.json(affiliate.loadMany(["user","products"]))
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

module.exports = AffiliteController

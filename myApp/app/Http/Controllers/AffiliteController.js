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
    var inputs=request.post(),
    user=request.auth.getUser()
    affiliate=yield Affiliate.create(inputs)
    affiliate.owner().associate((yield User.find(request.params()).owner_id)
    yield user.activities().create({
      action:"create_affiliate",
      action_info:{at:affiliate.created_at,url:route("AffiliateController.show",
      {affilid:affiliate.affilid})}
    })
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

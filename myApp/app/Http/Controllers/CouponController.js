
'use strict'
//const Order=use("App/Model/Order")
class CouponController {

  * index(request, response) {
    //response.json()
     
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser(),
    inputs=request.post(),
    coupon=user.coupons().create(inputs)
    response.json(coupon)

 }

  * show(request, response) {
    //
     var user=yield request.auth.getUser()
    ,order=user.orders().find(request.params().id)
    response.json (yield order.load("products("+request.post().transfer+")"))

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

module.exports = CouponController

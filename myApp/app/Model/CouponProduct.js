'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class CouponProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
 /*  static boot(){
    super.boot()
    this.addHook("afterCreate",couponproduct=>{
      Activity.current_user(yield couponproduct.coupon().user())
      yield Activity.create({
        action_type:"created_coupon on product_".concat(couponproduct.product().name),
        at:productoffer.offer().created_at,
        callback_url:use("Route").route("CatController.show",
        {oid:couponproduct.product().order().oid})
       })
    })
  }*/

  
   coupon(){
    return this.belongsTo("App/Model/Coupon","coupid","coupid")
  }
  product(){
    return this.belongsTo("App/Model/OrderedProduct","pid","pid")
  }
  
}

module.exports = CouponProduct

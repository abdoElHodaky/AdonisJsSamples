'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class CouponProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterCreate",couponproduct=>{
       if(couponproduct.coupon().type=="Market")
      {
         price=couponproduct.product().price*couponproduct.coupon().amount
         couponproduct.product().price-=price
         yield couponproduct.product().save()
      }
   })
  }

  
   coupon(){
    return this.belongsTo("App/Model/Coupon","coupid","coupid")
  }
  product(){
    return this.belongsTo("App/Model/OrderedProduct","pid","pid")
  }
  
}

module.exports = CouponProduct

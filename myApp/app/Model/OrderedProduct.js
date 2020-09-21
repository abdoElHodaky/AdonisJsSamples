'use strict'

const Lucid = use('Lucid')

class OrderedProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
 
  static boot(){
    super.boot()
    this.addHook("afterUpdate",ordered=>{
      /* if(couponproduct.coupon().type=="Market")
      {
         price=couponproduct.product().price*couponproduct.coupon().amount
         couponproduct.product().price-=price
         yield couponproduct.product().save()
      }
     */
       yield ordered.coupons().findBy("coupid",ordered.coupid)
       .coupon().user().credits().create({
         value:ordered.price*.05
       })
   })
  }


  product(){
  	return this.belongsTo("App/Model/Product",'id','pid');
  }

  order(){
  	return this.belongsTo("App/Model/Order",'oid','oid');
  }

  coupon(){
    return this.belongsMany("App/Model/Coupon","coupid","opid","opid","coupid").
    pivotModel("App/Model/CouponProduct");
  }

  shops(){
     return this.product().shops()
   }
}

module.exports = OrderedProduct

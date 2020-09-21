'use strict'

const Lucid = use('Lucid'),
RandomCode=use("randomcode")

class OrderedProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static credits_values=[]
  static boot(){
    super.boot()
    this.addHook("afterUpdate",ordered=>{
      if(ordered.coupon().type=="Market")
      {
      /* yield ordered.coupons().findBy("coupid",ordered.coupid)
       .coupon().user().credits().create({
         code:RandomCode(8)
         value:ordered.price*.25
       })*/
        credits_value.unshift(ordered.price*.25)
     }
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

'use strict'

const Lucid = use('Lucid')

class OrderedProduct extends Lucid {

  static get connection () {
    return 'mysql'
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

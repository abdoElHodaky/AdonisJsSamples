'use strict'

const Lucid = use('Lucid')

class OrderedProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
  product(){
  	return this.belongsTo("App/Model/Product",'id','pid');
  }
  coupon(){
    return this.belongsMany("App/Model/Coupon",'opid','coupid',"coupid","opid");
  }
}

module.exports = OrderedProduct

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
    return this.belongsMany("App/Model/Coupon","coupid","opid","opid","coupid");
  }
  shops(){
     return this.product().shops()
   }
}

module.exports = OrderedProduct

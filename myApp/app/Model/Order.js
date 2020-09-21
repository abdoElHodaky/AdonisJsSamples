'use strict'

const Lucid = use('Lucid'),
RandomCode=use("randomcode")

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }

  products(transfer=false){
  	return this.hasMany("App/Model/OrderedProduct",'oid','id')
       .where({"transfered":transfer}) ;
  }
  
}

module.exports = Order

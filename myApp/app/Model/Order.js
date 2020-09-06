'use strict'

const Lucid = use('Lucid')

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }

  products(transfer=false){
  	return this.hasMany("App/Model/OrderedProduct",'oid','id')
       .where({transfer:transfer}) ;
  }
  
}

module.exports = Order

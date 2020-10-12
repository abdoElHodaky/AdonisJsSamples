'use strict'

const Lucid = use('Lucid'),
gen=use("randomcode")

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }
  getReleation(name){
    return  this[name]()
  }
  fetch(name){
   return this[name]().fetch()
  }
  static boot(){
   super.boot()
   this.addHook("afterFind",order=>{
    yield order.merge({total:order.
    products().fetch().reduce((t,{Price})=>t+=Price)})
    if(order.user().related_id!=0) {
      yield order.user().merge({commission:.25})
      if(order.total!=0)
        {
          yield order.user().credits().create({
          value:order.user().commission*order.total,
          code:gen(8)
          })
       }
     }
    })
   
  }

  products(transfer=false){
  	return this.hasMany("App/Model/OrderedProduct",'oid','id')
       .where({"transfered":transfer}) ;
  }
  
}

module.exports = Order

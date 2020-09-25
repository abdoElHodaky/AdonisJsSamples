'use strict'

const Lucid = use('Lucid'),
gen=require("randomcode")

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
   super.boot()
   this.addHook("afterFind",order=>{
    order.total=order.products().reduce((t,{Price})=>t+=Price)
    order.save()
    if(order.user().related_id!=0) {
      order.user().commission=.25
      yield order.user().save()
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

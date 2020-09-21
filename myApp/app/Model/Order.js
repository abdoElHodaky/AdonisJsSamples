'use strict'

const Lucid = use('Lucid'),
RandomCode=use("randomcode")

class Order extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
   super.boot()
   this.addHook("afterFind",order=>{
    order.total=order.products().reduce((t,{Price})=>t+=Price)
    order.save()
    if(order.user().related_id!=0) order.user().commission=.25;yield order.user().save()
   })
   this.addHook("afterUpdate",order=>{
     credits_values=yield use("App/Model/OrderedProduct").credits_value
     if(credits_values.length!=0)
      {
          //total=credits_values.reduce((t,v)=>t+=v)
          yield order.user().credits().create({
          value:order.user().commission*order.total,
          code:RandomCode(8)
          })
       }

   })
  }

  products(transfer=false){
  	return this.hasMany("App/Model/OrderedProduct",'oid','id')
       .where({"transfered":transfer}) ;
  }
  
}

module.exports = Order

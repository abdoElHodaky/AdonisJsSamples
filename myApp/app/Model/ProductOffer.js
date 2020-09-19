'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class ProductOffer extends Lucid {

  static get connection () {
    return 'mysql'
  }
   static boot(){
    super.boot()
    this.addHook("afterCreate",productoffer=>{
      Activity.current_user(yield productoffer.offer().user())
      yield Activity.create({
        action_type:"created_offer on job_".concat(productoffer.pid),
        at:productoffer.offer().created_at,
        callback_url:use("Route").route("ProductOfferController.show",{offid:offers.offid})
       })
    })
  }

  
   offer(){
    return this.belongsTo("App/Model/Offer","offid","offid")
  }
  product(){
    return this.belongsTo("App/Model/Product","pid","pid")
  }
  
}

module.exports = ProductOffer

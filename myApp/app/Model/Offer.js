'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")
class Offer extends Lucid {
  
  static current_user(user){
    Offer.current_user=user
  }
  static castDates (field, value) {
    if (field.contains("at")==true) {
      return `${value.fromNow()}`
    }
    return super.formatDates(field, value)
  }
  
  /*static boot(){
    super.boot()
    this.addHook("afterCreate",offer=>{
      Activity.current_user(yield offer.user())
      yield Activity.create({
        action_type:"created_offer  ",
        at:offer created_at,
        callback_url:use("Route").route("ProductOfferController.show",{offid:offers.offid})
       })
    })
  }*/
  
  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.belongsMany("App/Model/Attachment","pid","aid","aid","pid").
    pivotModel("App/Model/ProductAttachment")
    // return this.manyThrough("App/Model/OfferAttachment","attachments","offid","aid")
   }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  products(){
    return this.belongsMany("App/Model/Offer","pid","offid","offid","pid").
    pivotModel("App/Model/ProductOffer")
  }
  
}

module.exports = Offer

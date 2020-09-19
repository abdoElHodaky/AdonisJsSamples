'use strict'

const Lucid = use('Lucid')

class Offer extends Lucid {
  
 
  static castDates (field, value) {
    if (field.contains("at")==true) {
      return `${value.fromNow()}`
    }
    return super.formatDates(field, value)
  }
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

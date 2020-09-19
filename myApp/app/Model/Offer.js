'use strict'

const Lucid = use('Lucid')

class Offer extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.manyThrough("App/Model/OfferAttachment","attachments","offid","aid")
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

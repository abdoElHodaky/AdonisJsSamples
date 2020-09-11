'use strict'

const Lucid = use('Lucid')

class Offer extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.manyThrough("App/Model/OfferAttachment","attachments","aid","aid")
   }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  
}

module.exports = Offer

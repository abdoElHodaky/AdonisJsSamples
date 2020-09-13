
'use strict'

const Lucid = use('Lucid')

class OfferAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    //return this.hasMany("App/Model/Attachment","aid","aid")
      return this.belongsTo("App/Model/Attachment","aid","aid")
   
   }
   offers(){
    return this.belongsTo("App/Model/Offer","offid","offid")
  }
  
}

module.exports = OfferAttachment

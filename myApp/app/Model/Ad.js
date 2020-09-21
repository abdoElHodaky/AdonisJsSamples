'use strict'

const Lucid = use('Lucid')

class Ad extends Lucid {

  static get connection () {
    return 'mysql'
  }
   getVisitsCount(){
     return this.visits().getCount()
   }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  attachments(){
     return this.belongsMany("App/Model/Attachment","adid","aid","aid","adid").
     pivotModel("App/Model/AdAttachment")
    //return this.manyThrough("App/Model/AdAttachment","attachments","adid","aid")
   }
   visits(){
     return this.belongsMany("App/Model/Visit","adid","visid","visid","adid").
     pivotModel("App/Model/AdVisit")
   }
}
module.exports = Ad

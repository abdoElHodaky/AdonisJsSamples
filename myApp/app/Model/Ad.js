'use strict'

const Lucid = use('Lucid'),
 gen        = require("randomcode")

class Ad extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterFind",ad=>{
       ad.visits_count=ad.visits().getCount()
       yield ad.save()
       if(ad.visits_count>=20)
       ad.user().credits().create({
          gen(8),
          value:ad.visits_count*.35
       })
     })

  }
  /* getVisitsCount(){
     return this.visits().getCount()
   }*/
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

'use strict'

const Lucid = use('Lucid'),
 gen        = use("randomcode")

class Ad extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterFind",ad=>{
       yield ad.merge({visits_count:ad.visits().getCount()})
       if(ad.visits_count>=20)
       ad.user().credits().create({
          gen(8),
          value:ad.visits_count*.35
       })
     })
  }
   getReleation(name){
    return  this[name]()
  }
  fetch(name){
   return this[name]().fetch()
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

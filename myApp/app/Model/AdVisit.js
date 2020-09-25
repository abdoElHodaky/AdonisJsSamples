'use strict'

const Lucid = use('Lucid')

class AdVisit extends Lucid {

  static get table(){
   return "visits_on_ads"
  }
  static boot(){
   super.boot()
  /* this.addHook("afterCreate",advis=>{
       advis.ad().visits_count++
       advis.ad.save()
    })*/
  }
  static get connection () {
    return 'mysql'
  }
   visit(){
     return this.belongsTo("App/Model/Visit","visid","visid")
   }
   ad(){
     return this.belongsTo("App/Model/Ad","adid","adid")
   }
}
module.exports = AdVisit

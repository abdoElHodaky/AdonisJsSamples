'use strict'

const Lucid = use('Lucid')

class AdVisit extends Lucid {

  static get connection () {
    return 'mysql'
  }
   visit(){
     return this.belongs("App/Model/Visit","visid","visid")
   }
   ad(){
     return this.belongs("App/Model/Ad","adid","adid")
   }
}
module.exports = AdVisit

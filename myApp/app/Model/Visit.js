'use strict'

const Lucid = use('Lucid')

class Visit extends Lucid {

  static get connection () {
    return 'mysql'
  }
   ads(){
     return this.belongsToMany("App/Model/Ad","visid","adid","adid","visid").
     pivotModel("App/Model/AdVisit")
   }
  
}
module.exports = Visit

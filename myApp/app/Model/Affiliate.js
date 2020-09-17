'use strict'

const Lucid = use('Lucid')

class Affiliate extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
  owner(){
     return this.belongTo("App/Model/User","uid","uid")
   }
  products(){
    //return this.manyThrough("App/Model/AffilateProduct","product","affilid","pid")
     return this.belongsMany("App/Model/Product","pid","affilid","affilid","pid").pivotModel("App/Model/AffiliateProduct")
   
   }
}

module.exports = Affiliate

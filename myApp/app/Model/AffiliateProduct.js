'use strict'

const Lucid = use('Lucid')

class AffiliateProduct extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
  product(){
    return this.belongsTo("App/Model/Product","pid","pid")
   }
}

module.exports = AffiliateProduct

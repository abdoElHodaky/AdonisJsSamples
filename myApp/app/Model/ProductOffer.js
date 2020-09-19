'use strict'

const Lucid = use('Lucid')

class ProductOffer extends Lucid {

  static get connection () {
    return 'mysql'
  }
   
   offer(){
    return this.belongsTo("App/Model/Offer","offid","offid")
  }
  product(){
    return this.belongsTo("App/Model/Product","pid","pid")
  }
  
}

module.exports = ProductOffer

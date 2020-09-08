
'use strict'

const Lucid = use('Lucid')

class ProductVotes extends Lucid {

  static get table(){
    return "votes_on_products"
   }
  static get connection () {
    return 'mysql'
  }
   votes(){
    return this.hasMany("App/Model/Votes","votid","votid")
   }
   product(){
    return this.belongsTo("App/Model/Product","pid","pid")
  }
  
}

module.exports = ProductVotes

'use strict'

const Lucid = use('Lucid')

class ShopType extends Lucid {

  static get connection () {
    return 'mysql'
  }
  suggested_by(){
   return this.belongsTo("App/Model/User","uid","uid")
  }
  shops(){
   return this.belongsMany("App/Model/Shop","shtid","sid","sid","shtid").
    pivotModel("App/Model/TypedShop")
  }
}

module.exports = ShopType

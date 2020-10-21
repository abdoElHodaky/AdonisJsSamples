
'use strict'

const Lucid = use('Lucid')

class TypedShop extends Lucid {

  static get connection () {
    return 'mysql'
  }
  user(){
   return this.belongsTo("App/Model/User","uid","uid")
  }
  shop_type(){
   return this.belongsTo("App/Model/ShopType","shtid","shtid")
  }
}

module.exports = TypedShop

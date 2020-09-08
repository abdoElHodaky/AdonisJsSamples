'use strict'

const Lucid = use('Lucid')

class Shop extends Lucid {

  static get connection () {
    return 'mysql'
  }

   cats(){
     return this.hasMany("App/Model/Cat",'sid','sid')
  }
  products(){
    return this.manyThrough("App/Model/Cat","products","cid","cid");
  }
  
  coupons(){
    return this.manyThrough("App/Model/Cat","coupons","cid","cid");
  }
   types(){
    return this.belongsMany("App/Model/TypeShop","shptype_id","sid","sid","shptype_id");
  }
  

}

module.exports = Shop

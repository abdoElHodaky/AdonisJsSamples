'use strict'

const Lucid = use('Lucid')

class Shop extends Lucid {

  static get connection () {
    return 'mysql'
  }

   cats(){
  	return this.hasMany("App/Model/Cat",'sid','id')
  }
  products(){
   return this.manyThrough("App/Model/Cat","products","cid","cid");
  }

}

module.exports = Shop

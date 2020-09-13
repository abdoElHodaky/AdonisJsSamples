'use strict'

const Lucid = use('Lucid')

class Affiliate extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
  products(){
    return this.manyThrough("App/Model/AffilateProduct","affilid","pid")
   }
}

module.exports = Affiliate

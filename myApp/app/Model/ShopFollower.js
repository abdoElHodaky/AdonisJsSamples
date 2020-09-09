
'use strict'

const Lucid = use('Lucid')

class ShopFollower extends Lucid {

  static get connection () {
    return 'mysql'
  }

  followers(){
   return this.belongsTo("App/Model/Shop","sid","sid");
  }
  

}

module.exports = ShopFollower

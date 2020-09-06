'use strict'

const Lucid = use('Lucid')

class Cat extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shop(){
  	return this.belongsTo("App/Model/Shop",'id','sid');
  }
  childern(){
  	return this.hasMany("App/Models/Cat","parent_id","cid")
  }
  products(){
   return return this.hasMany("App/Models/Product","cid","cid")
  }
}

module.exports = Cat


'use strict'

const Lucid = use('Lucid')

class Vote extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shop(){
  	return this.belongsTo("App/Model/Shop",'OnId','sid');
  }
  products(){
   return return this.belongsTo("App/Models/Product","OnId","pid"'use strict'

const Lucid = use('Lucid')

class Cat extends Lucid {

  static get connection () {
    return 'mysql'
  }
  shop(){
  	return this.belongsTo("App/Model/Shop",'OnId','sid').where("OnType","shpos");
  }
  products(){
      return return this.belongsTo("App/Models/Product","OnId,"pid").where("OnType","products");
  }
    users(){
      return return this.belongsTo("App/Models/User","OnId,"uid").where("OnType","users");
  }
}

module.exports = Vote

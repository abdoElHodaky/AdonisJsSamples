'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {

  static get connection () {
    return 'mysql'
  }
  cat(){
    return this.belongsTo("App/Model/Cat","id","cid");
  }
  specs(){
    return this.hasMany("App/Model/Spec","pid","id");
  }
  childern(){
  	return this.hasMany("App/Model/Product","parent_id","id");
  }
  static get filter(filters={},use_all=false,used=false){
    return (yield(Product.query().where('used',used).with("specs").fetch().toJSON())).
    filter({specs}=>{
      if(used_all==true)
        return filters==specs
      else
        {
          obj_keys=Object.keys(filters).filter(k=>filters[k]!=null||filters[k]!=undefined)
          return obj_key.map(key=>filters[key]==specs[key])
        }
    })
  }
}

module.exports = Product

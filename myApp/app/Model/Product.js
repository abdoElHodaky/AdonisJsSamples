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
  filter(filters={},used_all=false){
    return (yield(Product.all().toJson())).
    filter({extrainfo}=>{
      if(used_all==true)
        return filters==extrainfo
      else
        {
          obj_keys=Object.keys(filters).filter(k=>filters[k]!=null||filters[k]!=undefined)
          return obj_key.map(key=>filters[key]==extrainfo[key])
        }
    })
  }
}

module.exports = Product

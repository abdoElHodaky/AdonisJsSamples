'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {

  static get connection () {
    return 'mysql'
  }
  cat(){
    return this.belongsTo("App/Model/Cat","cid","cid");
  }
  specs(){
    return this.hasMany("App/Model/Spec","pid","pid");
  }
  childern(){
  	return this.hasMany("App/Model/Product","parent_id","pid");
  }
  static get filter(filters=[],use_all=false,used=false){
    /*return yield(Product.query().where('used',used).with("specs").fetch()).
    filter({specs}=>{
      if(used_all==true)
        return filters==specs
      else
        {
          obj_keys=Object.keys(filters).filter(k=>filters[k]!=null||filters[k]!=undefined)
          return obj_key.map(key=>filters[key]==specs[key])
        }
    })*/
    var products=yield Product.query(builder=>builder.where("used",used)).fetch();
    return products.filter(p=>{
      return yield (p.specs()).find((v,i)=>(v.name==filters[i].name&&v.value==filters[¡].value))
    })
  }
  versions(){
   return this.hasMany("App/Model/ProductVersion","pid","pid");
  }
}

module.exports = Product

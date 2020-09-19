'use strict'

const Lucid = use('Lucid')

class Product extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
   super.boot()
   this.addHook("afterCreate",product=>{
    yield use("App/Model/Activity").create({
      action_type:"created_product"
      at:product.created_at,
      callback_url:use("Route").route("ProductController.show",{pid:product.pid})
    })
    
   })
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
  attachments(){
    return this.belongsMany("App/Model/Attachment","pid","aid","aid","pid").
     pivotModel("App/Model/ProductAttachment")
   //return this.manyThrough("App/Model/ProductAttachment","attachments","pid","aid")
  }
  votes(){
     return this.manyThrough("App/Model/VotesProduct","votes","votpid","pid")
  }
  affiliates(){
    //return this.hasMany("App/Model/AffilateProduct","pid","pid")
     return this.belongsMany("App/Model/Affiliate","pid","affilid","affilid","pid").
     pivotModel("App/Model/AffiliateProduct")
  
   }
  ordered(){
    return this.hasMany("App/Model/OrderedProduct","pid","pid")
   }
  shops(){
    return this.manyThrough("App/Model/Cat","shop","pid","cid");
  }
  offers(){
    return this.hasMany("App/Model/Offer","pid","pid")
  }
  visits(){
    return this.belongsMany("App/Model/Visit","visid","pid","pid","visid")
   }
}

module.exports = Product

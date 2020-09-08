'use strict'

const Lucid = use('Lucid')

class Attachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get on(type,{id}){
   return Attachment.query().where({
    'on->"$.type"':type,
     'on->"$.id"':id
    }).fetch();
  }
  offer(){
    return this.belongsTo("App/Model/OfferAttachment",
    "aid","aid").where("related_type","offer");
    
  }
  product(){
    return this.belongsTo("App/Model/ProductAttachment",
    "aid","aid").where("related_type","product");

  }
  comment(){
    return this.belongsTo("App/Model/CommentAttachment",
    "aid","aid").where("related_type","comment");
  }
  belongs(modelName,modelId){
   return this.belongsTo("App/Model/"+modelName,"OnId",modelId)
    .where("OnType',modelName);
  }
  
  
}

module.exports = Attachment

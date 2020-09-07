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
    "offaid","offaid");
  }
  product(){
    return this.belongsTo("App/Model/ProductAttachment",
    "productaid","productaid");
  }
  comment(){
    return this.belongsTo("App/Model/CommentAttachment",
    "commentaid","commentaid");
  }
  
  
}

module.exports = Cat

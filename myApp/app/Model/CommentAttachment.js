'use strict'

const Lucid = use('Lucid')

class CommentAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachment(){
    //return this.hasMany("App/Model/Attachment","aid","aid")
     return this.belongsTo("App/Model/Attachment","aid","aid")
   
   }
  
}

module.exports = CommentAttachment

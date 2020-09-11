'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {

  static get connection () {
    return 'mysql'
  }

  users(){
    return this.hasMany("App/Model/User","uid","uid")
  }
  attachments(){
    return this.manyThrough("App/Model/CommentAttachment","attachments","aid","aid")
   }
  comments(){
   return this.hasMany("App/Model/Comment","commid","parent_id")
  }
}
module.exports = Comment
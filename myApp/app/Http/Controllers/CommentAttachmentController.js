'use strict'
const Comment=use("App/Model/Comment");
class CommentAttachmentController {

  * index(request, response) {
    var comment=Comment.find(request.params().commid)
    response.json(yield comment.load("attachments"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post(),
    commid=request.params().commid,
    comment=yield Comment.find(commid),
    attachment=yield Attachment.create(inputs.attachment)
    comment.attachments().attach([attachment.aid])
    response.json(comment.load("attachments"))
   }
  * show(request, response) {
    //
    }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
     var inputs=request.post()
    ,comment=yield Comment.find(request.params().pid),
    ,attachment=yield Attachment.find(request.params().aid)
     //yield comment.attachments().detach([attachment.aid])
     attachment.update(inputs)
     //yield comment.attachments().attach([attachment.aid])
     response.json(comment)
  
  }

  * destroy(request, response) {
    //
  }
  


}

module.exports = CommentAttachmentController

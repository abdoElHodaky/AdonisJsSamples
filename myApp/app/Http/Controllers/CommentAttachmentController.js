'use strict'
const Comment=use("App/Model/Comment");
class CommentAttachmentController {

  * index(request, response) {
    var product=Product.find(request.params().pid)
    response.json(yield product.comments().load("children"))
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
    ,attachment=Comment.attachments().find(request.params().aid)
     attachment.update(inputs)
     response.json(yield comment.attachments().sync([attachment.commid]))
  
  }

  * destroy(request, response) {
    //
  }
  


}

module.exports = CommentAttachmentController

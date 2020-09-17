'use strict'
const Product=use("App/Model/Product");
class CommentController {

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
    comment_reply=yield comment.comments().create(inputs.comment)
    response.json(comment_reply)
  * show(request, response) {
    //
    }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      var product=Product.find(request.params().pid)
      response.json(product.comments()
     .where({"commid":request.params().commid}).
     update(request.post()))
  }

  * destroy(request, response) {
    //
  }
  


}

module.exports = CommentController

'use strict'
const Product=use("App/Model/Product");
class ProductCommentController {

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
    comment= yield Comment.create(inputs.comment)
     var comments=yield Product.findOrFail(request.params().pid).
      comments()
     .attach([
        comment.commid
      ])
    response.json(yield comments.load("comments"))
  }

  * show(request, response) {
    //
    }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      var product=yield Product.findOrFail(request.params().pid),
      comment=yield Comment.findOrFail(request.params().commid)
      comment.content=request.post().comment
      comment.save()
     response.json( yield product.
     comments().sync([comment.commid]))
  }

  * destroy(request, response) {
    //
     var product=yield Product.findOrFail(request.params().pid),
      comment=yield Comment.findOrFail(request.params().commid)
     yield product.
     comments().detach([comment.commid])
     comment.delete()
     response.json({commid:comment.commid,"status":deleted})
  }
  

}

module.exports = ProductCommentController

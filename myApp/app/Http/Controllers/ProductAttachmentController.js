'use strict'
const Product=use("App/Model/Product"),
const Attachment=use("App/Model/Attachment")
class ProductAttachmentController {

  * index(request, response) {
    var product=Product.find(request.params().pid)
    response.json(yield product.load("attachments"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post()
    var product=yield Product.find(request.params().pid),
    response.json(yield product.attachments().
    attach([(yield Attachment.create(inputs)).aid]))
    
    
  }

  * show(request, response) {
    //
     var product=Product.findOrFail(request.params().id)
     response.json(product.loadMany((["specs","specs.childern","comments"]))
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      var product=Product.find(request.params().pid)
      response.json(product.specs()
     .where({"specid":request.params().specid}).
     update(request.post()))
  }

  * destroy(request, response) {
    //
  }


}

module.exports = ProductAttachmentController

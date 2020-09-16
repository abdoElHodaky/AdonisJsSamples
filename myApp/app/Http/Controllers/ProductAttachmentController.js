'use strict'
const Product=use("App/Model/Product"),
Attachment=use("App/Model/Attachment")
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
    attach([(yield (user.attachments().create(inputs)).aid]))
    
    
  }

  * show(request, response) {
    //
     var product=Product.findOrFail(request.params().id)
     response.json(product.attachments().
     findOrFail(request.params().aid))
   }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      
  }

  * destroy(request, response) {
    //
  }


}

module.exports = ProductAttachmentController

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
    var inputs=request.post()
    var specs=yield Product.find(request.params().pid).comments()
     .create({
      content:inputs.comment
    });
    
    response.json(yield specs.load("children"))
  }

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

module.exports = ProductCommentController

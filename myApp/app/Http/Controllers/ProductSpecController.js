'use strict'
const Product=use("App/Model/Product");
class ProductSpecController {

  * index(request, response) {
    var product=Product.find(request.params().pid)
    response.json(yield product.specs().load("children"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post()
    var specs=yield Product.find(request.params().pid).specs().create({
      Name:inputs.Name,
      Value:input.value
    });
    if(recursive) yield specs.children()
     .createMany(inputs.children)
    response.json(yield specs.load("children"))
  }

  * show(request, response) {
    //
     var product=Product.find(request.params().id)
     response.json(product.loadMany((["specs","specs.childern","comments","offers","attachments","children"]))
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

module.exports = ProductSpecController

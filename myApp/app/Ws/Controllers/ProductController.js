'use strict'
const Oproduct=use("App/Model/OrderedProduct"),
product=use("App/Model/Product"),
class ProductController {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
    this.user=yield request.auth.getUser()
  }
  
  
  
}

module.exports = ProductController


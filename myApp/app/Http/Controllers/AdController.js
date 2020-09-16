'use strict'
const Ad=use("App/Model/Ad")
class AdController {

  * index(request, response) {
    
     response.json(yield Ad.all())
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var user=yield request.auth.getUser()
    ,ads=yield user.ads().create()
    if("attachment" in request.post())
    yield ad.attachments()
    .attach([yield (Attachment.
    create(request.post().attachment)).adid])
    response.json(ad)

 }

  * show(request, response) {
    //
     var user=yield request.auth.getUser()
    ,order=user.orders().find(request.params().id)
    response.json (yield order.load("products"))

  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
     
    )

  }

  * destroy(request, response) {
    //
  }

}

module.exports = AdController

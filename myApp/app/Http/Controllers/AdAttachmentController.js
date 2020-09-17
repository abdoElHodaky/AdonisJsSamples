'use strict'
const Ad=use("App/Model/Ad"),
Attachment=use("App/Model/Attachment")
class AdAttachmentController {

  * index(request, response) {
    var ad=Ad.find(request.params().adid)
    response.json(yield ad.load("attachments"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post(),
    adid=request.params().adid,
    ad=yield Comment.find(adid),
    attachment=yield Attachment.create(inputs.attachment)
    ad.attachments().attach([attachment.aid])
    response.json(ad.load("attachments"))
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
    ,ad=yield Ad.find(request.params().adid),
    ,attachment=yield Attachment.find(request.params().aid)
     //yield comment.attachments().detach([attachment.aid])
     attachment.update(inputs)
     //yield comment.attachments().attach([attachment.aid])
     response.json(ad)
  
  }

  * destroy(request, response) {
    //
  }
  


}

module.exports = AdAttachmentController

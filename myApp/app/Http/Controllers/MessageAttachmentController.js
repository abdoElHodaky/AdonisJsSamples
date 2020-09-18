
'use strict'
const Message=use("App/Model/Message");
class MessageAttachmentController {

  * index(request, response) {
    var conversation=Message.findBy({type:"conversation",messgid:request.params().cmessgid})
    response.json(yield conversation.load("attachments"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post(),
    cmessgid=request.params().cmessgid,
    conversation=yield Message.findBy({type:"conversation",
    messgid:cmessgid}),
    attachment=yield Attachment.create(inputs.attachment)
    conversation.attachments().attach([attachment.aid])
    response.json(conversation.load("attachments"))
   }
  * show(request, response) {
    //
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

module.exports = MessageAttachmentController

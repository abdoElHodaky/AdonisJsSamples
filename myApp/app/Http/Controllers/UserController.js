'use strict'
const User=use("App/Model/User"),
TypeUser=use("App/Model/TypeUser")

class UserController {
   
    static adminCount=0
  * index(request, response) {
    //
    yield response.sendView("welcome")
  }

  * create(request, response) {
    //

  }

  * store(request, response) {
    //
    
    var inputs=yield request.post(),type={},user={}
    if("type" in inputs){
      type=yield TypeUser.findBy("type",inputs.type)
      if(adminCount>=1)
        {response.json({admin_creation:"not Allowed"})}
      else
     {
        user=yield User.create(inputs.user)
        user.types().attach([type.type_id])
     }
       adminCount++;
      
    }
    else 
    { user= yield User.create(inputs.user)}
     response.json(user)
     
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

  * login(request, response) {
    //
    var inputs=inputs=yield request.post(),
    token=""
    if(!request.auth.check()&& "Authorization" in request.headers())
      token=yield request.auth.attempts(inputs.user)|| request.auth.getAuthHeader()
   var device=request.auth.getUser().devices().findBy("token",inputs.device_token)
    response.json({tokens:[
    {access_token:token},
    {devce_token:device token}]})
  }
  *logout(request,response){
    var user=request.auth.getUser()
    device=request.auth.getUser().devices().findBy("token",inputs.device_token)
    if(device.allow_login==true && device.remember==true){
      response.json({})
    }
    if(device.allow_login==true && device.remember==false){
      device.remember=false
      device.save()
      yield request.auth.authenticator("api").revokeTokensForUser(user)
      response.json({})
    }
  }
  *shops_following(request , response){
    var user=request.auth.getUser()
    response.json (user.shops_followings().sync(use("App/Model/Shop").ids()))
  }
  *events(request , response){
     var user=request.auth.getUser(),events_user=[]
     yield (user.events_subscribed().all({"uid":user.uid})).forEach(v=>events_user.unshift(yield v.event()))
     response.json(events_users)
  }

}

module.exports = UserController

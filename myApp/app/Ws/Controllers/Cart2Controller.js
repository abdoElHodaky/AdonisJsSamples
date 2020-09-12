'use strict'
const order=use("App/Model/Order"),Oproduct=use("App/Model/OrderedProduct"),
product=use("App/Model/Product"),
Payment =use("App/Model/Payment"),Credit=use("App/Model/Credit")
class Cart2Controller {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
    this.user=yield request.session.get('user')
  }
  *onChange(d){
      this.socket.toMe().emit("changed",d)
  }
  *onBuy(bcart,orderType="order",coupon){
    var user=this.user
  	var createdOrder=yield User.orders().Create({type:orderType})
    var amount=0;
    for(var i in bcart){
      var p=yield product.find(i)
      yield createdOrder.products().create({
        pid:p.id,
        Quantity:bcart[i].q,
        oid:createdOrder.id
        transfered:(orderType=="transfer")?true:false;
        coupid:yield use("App/Model/Coupon").findBy("Code",coupon.code).coupid
      });
      amount+=Math.round((parseInt(p.Price)*parseInt(bcart[i].q)*coupon.amount),2)
    }
    car wallet=yield user.wallet().findBy("address")
    //var credit=yield Credit.findBy("creditNo",obj.CN)
    /*if(credit==null) {
      credit=yield wallet.credits().create({
        creditNo:obj.CN,
        cvv:obj.CVV,
        balance:500,
        cid:user.id
      })
    }*/
    var credit=wallet.credits().findBy("credit_No",obj.CN)
    
    wallet.balance-=parseFloat(credit.value)
    credit.used=true;
    credit.save()
    wallet.save()
    
    yield user.payments().create({
      amount:credit.value
    })
    this.socket.toMe().emit("ok","your order will be sent");
  }
   onCreateProduct(data)
   {
     var {specs,version}={product,mode}=data;
     var cproduct= new Product();
       cproduct.name=product.names
       cproduct.price=product.price
       cproduct.quantity=product.quantity
       cproduct.save();
       cproduct.specs().create(specs);
       cproduct.versions().Create(version)
      if(mode.delete==true)
       cproduct=yield Product.find(product.id)
       cproduct.delete()
   }
   onProductChange(data)
   {
     var mproduct=yield Product.find(data.id)
     var{couponCode,quantity}=data
     if(quantity!=null || quantity!=undefined)mproduct.quantity=quantity
     if(couponCode!=null || couponCode!=undefined)
     var coupons=(yield Coupons.where({
      Code:CouponCode,
      'on->>"$.type"':"products"
     })).toJSON()
     var coupon=coupons.filter({on}=>{
       ids=on.ids.split(',')
       return (mproduct.id in on.ids)
     })
     price=mproduct.price
     mproduct.price=price-coupon.discount*price
     mproduct.save()
     
   }

  onCatCoupon(data)
  {
    var mcat=yield Cat.find(data.id)
     var{couponCode,catId}=data
     if(catId!=null || catId!=undefined)mproduct.quantity=quantity
     if(couponCode!=null || couponCode!=undefined)
     var coupons=(yield Coupons.where({
      Code:CouponCode,
      'on->>"$.type"':"cats"
     })).toJSON()
    var coupon=coupons.filter({on}=>{
       ids=on.ids.split(',')
       return (mcat.id in on.ids)
     })
    for(var product of yield(mcat.products()))
    {
       price=product.price
       product.price=price-coupon.discount*price
       product.save()
    }
   
  }
  onSpecCreate(data)
   {
    var specs=(yield Product.find(data.product.id)).
    specs()
    .findOrCreate('name',data.specs.name,data.specs)
   }
  onVersionProduct(data)
   {
    var version=(yield Product.find(data.product.id)).
    versions()
    .findOrCreate({'name',data.version.name},data.version)
   }
  onAttachmentCreate(data)
  {
    var user=this.user
    var attachment=yield user.attachments().Create(data.attachment)
  }
  onOfferCreate(data)
  {
    var user=this.user
   var offer=yield user.offers().findOrCreate({
     {
      'for->>"$.type"':data.for.type,
      'for->>"$.identity"':data.for.identity
    },data.offer)
   onAttachmentCreate(data.attachment)
  }
 onMessage(data)
 {  var message;
   if (data.mode.create)
    {
     message=yield Message.Create(data.message)
     if(data.attachment!=null||data.attachment!=undefined)onAttachmentCreate(data.attachment)
   }
   if(data.mode.getBySender)
    {
      message=yield Message.where({
     'header->>"$.from"':data.sender_id
      })
     }
   else
    message=yield Message.all()
 }
  onCoupon(data)
  {
    var coupon;
   if(data.mode.create)
   { coupon=New Coupons();
    coupon.by=User.id
    coupon.type=data.coupon.type
    coupon.code=data.coupon.code
    coupon.on=data.coupon.on
    coupon.fee=data.coupon.fee
    coupon.save()
   }
   if(data.mode.getOnType)
   { coupon=yield Coupons.where({
    'on->>"$.type"': data.coupon.on.type
    })
   }
    
  }
 OnVote(data)
   {
    var {mode,vote}=data;
    var votes;
   if(mode.create)
    { votes=yield Votes.Create({
      on:vote.on,
      data:vote.data
     })
    }
    if(mode.get)
    {
      votes=yield Votes.where({
        'on->>"$.type"':vote.on.type,
        'on->>"$.id"':vote.on.id
      })
    }
   }
  OnActivityCreate(data){
  var activity;
   if(data.mode.create)
   {
    activity=yield Activity.Create({
     action:data.activity.action,
     action_info:data.activity.action_info
     })
   }
    if(mode.get)activity=yield Activity.all()
  }
  OnComment(data)
  {
   var {mode,comment,attachment}=data
  var comment;
   if(mode.create)
   { comment=yield User.comments().Create(comment)
      if(attachment!=null || attachment != undefined)
       OnAttachmentCreate(attachment)
    }
     if(mode.get)
    {
      comment=yield User.comments().where({
        'on->>"$.type"':comment.on.type,
        'on->>"$.id"':comment.on.id
      })
    }
  }
  OnExtraInfoAdd(extrainfo)
  {
   var ainfo=New AdditionalInformation();
   var{location,for,info}=extrainfo;
   ainfo.info=info
   ainfo.locations={
    prev:[{long:location.long,lang:location.Lang}],
    current:[{long:location.long,lang:location.Lang}]
   }
   ainfo.save()
  }
 OnCreateAds(ads)
  {
    var advertise=yield User.advertisements.Create({
     type:ads.type,
     scopeviews:ads.scopeviews
     data:ads.data
     callback_url:ads.callback_url
    })
   
  }
  OnUserTypeAdd(data){
      var userType=yield UserTypes.Create(data);
   }
}

module.exports = Cart2Controller

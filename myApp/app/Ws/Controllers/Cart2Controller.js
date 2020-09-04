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
  *onBuy(bcart,inputs){
    var user=yield this.request.session.get("user")
    console.log(inputs)
  	var createdOrder=yield order.create({id:null,cid:user.id})
  	var obj={}
  	inputs.forEach(function (input){
  		obj[input.name]=input.value;
  	})
    var amount=0;
    for(var i in bcart){
      var p=yield(product.findBy("Name",i))
      yield createdOrder.products().create({
        pid:p.id,
        Quantity:bcart[i].q,
        oid:createdOrder.id
      });
      amount+=parseInt(p.Price)*parseInt(bcart[i].q)
    }
    var credit=yield Credit.findBy("creditNo",obj.CN)
    if(credit==null) {
      credit=yield Credit.create({
        creditNo:obj.CN,
        cvv:obj.CVV,
        balance:500,
        cid:user.id
      })
    }
    credit.balance-=parseInt(amount);
    yield credit.save();
    yield Payment.create({
      cid:user.id,
      amount:amount
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
   onQuantityChange(data)
   {
     var mproduct=yield Product.find(data.id)
     mproduct.quantity=data.quantity
     mproduct.save()
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
     onAttachmentCreate(data.attachment)
   }
   if(data.mode.getBySender)
    {
      message=yield Message.findBy({
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
   { coupon=yield Coupons.findBy({
    'on->>"$.type"': data.coupon.on.type
    })
  }
    
  }
}

module.exports = Cart2Controller

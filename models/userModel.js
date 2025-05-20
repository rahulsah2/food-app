 const mongoose = require('mongoose')

 //schema
 const userSchema= new mongoose.Schema({
     userName:{
        type: String,
        required: [true,'user name is required']
     },
     email: {
        type: String,
        required: [true,'email is required']
     },
     password: {
        type: String,
        required: [true,'password is required']
     },
     address:{
        type: String,
        required: [true,'address is required']
     },
     phone:{
        type:String,
        required: [true,'phone number is required ']
     },
     usertype: {
        type: String,
        required: [true,'user type is required'],
        default: 'client',
        enum:['client','admin','vendor','driver']
     },
     profile:{
        type: String,
        default:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
     }

 },{timestamps:true})
 
 //export
 module.exports = mongoose.model('User',userSchema); 
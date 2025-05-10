const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
   mobileNo:{
              type: String,
              required:true,
              unique: true,
           },
   password:
   {
      type: String,
      required: true,
   } ,
   fullName:{
      type:String,
      required: true,
   },
   email:{
      type:String,
      required: true,
   },
   gender:{
      type:String,
      required: true,
   },
   alternateMobileNo:{
      type:String,
      required: true, 
   },
   hint:{
      type:String,
      required: true,
   }
 });
 
 const User = mongoose.model('User', userSchema);
 
 module.exports = User;



 // const Schema = mongoose.Schema;

// const User = Schema({
//      mobileNo:{
//         type: String,
//         required:true,
//         unique: true,
//      }
// });

// module.exports = mongoose.model("User",User);
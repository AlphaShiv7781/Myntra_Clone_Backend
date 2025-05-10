const mongoose = require("mongoose");



const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
     },
        desc: {
            type: String,
            required:true,
         
         },
        wishlisted: {
            type: String,
          
         },
        actual_price:{
            type: String,
            required:true,
        
         },
        discounted_price:{
            type: String,
            required:true,
       
         },
        discount:{
            type: String,
            required:true,
    
         },
        category:{
            type: String,
            required:true,
         
         },
        sub_category: {
            type: String,
            required:true,
         },
        type:{
            type: String,
            required:true,
         },
        genre: {
            type: String,
            required:true,
         },
        brand: {
            type: String,
            required:true,
        
         },
        image_url: {
            type: String,
            required:true,
         },
        rating: {
            type: String,
         },
        no_of_review: {
            type: String,
         },

    });
 
 const ProductDetails = mongoose.model('ProductDetails', ProductSchema);
 
 module.exports = ProductDetails;

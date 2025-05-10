// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const csv=require("csvtojson");
// const ProductDetails = require("../model/product_details.modal");

// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,"./uploads");
//     },
//     filename: (res,file,cb)=>{
//         cb(null,file.originalname);  
//     }
// })

// const upload = multer({
//     storage,
// });

// router.route('/uploadAll').post(upload.single("csvFile"),async(req,res)=>{
//     const jsonArray=await csv().fromFile(req.file.path);
//     // ProductDetails.insertMany(jsonArray,(err,result)=>{
//     //     if(err)
//     //     {
//     //         return res.json.status(500).json(err);
//     //     }
//     //     return res.json("Added Successfully");
//     // });
//     try {
//         const jsonArray = await csv().fromFile(req.file.path);
//         const insertedDocuments = await ProductDetails.insertMany(jsonArray);
//         res.json("Added Successfully");
//     } catch (error) {
//         res.status(500).json(error);
//     }

//     res.json(jsonArray);
// })

// router.route("/getAll").get(async(req,res)=>{
//     try {
//         const result = await ProductDetails.find();
//         res.json({ data: result });
//     } catch (error) {
//         res.status(500).json(error);
//     }
//     });


// module.exports = router


const express = require("express");
const router = express.Router();
const multer = require("multer");
const csv = require("csvtojson");
const ProductDetails = require("../model/product_details.modal");

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// Route for uploading CSV and inserting data into the database
router.route('/uploadAll').post(upload.single("csvFile"), async (req, res) => {
    try {
        const jsonArray = await csv().fromFile(req.file.path);
        const insertedDocuments = await ProductDetails.insertMany(jsonArray);
        res.json("Added Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Route for retrieving all product details from the database
router.route("/getAll").get(async (req, res) => {
    try {
        const result = await ProductDetails.find();
        res.json({ data: result });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;


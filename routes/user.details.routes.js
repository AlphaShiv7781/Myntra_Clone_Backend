const express = require("express")
const middleware = require("../middleware");
const router = express.Router();
const User = require("../model/user.model");



router.route("/").get(middleware.checkToken,async (req,res)=>{
     try{
      const result = await User.findOne({mobileNo:req.decoded.mobileNo}).exec();
      console.log(result);
      return res.json({msg:"success" , result: result});
     }
     catch(err)
     {
      return res.status(500).json({msg:"Error" , result:err});
     }
   // console.log(req.decoded);
   return res.json("Ok");
});

module.exports = router;






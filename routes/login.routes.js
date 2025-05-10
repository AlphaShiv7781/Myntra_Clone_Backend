const express = require("express");
const router = express.Router();
const jwt=require("jsonwebtoken");
const User = require("../model/user.model");
const config = require("../config");

router.route("/").post(async (req, res) => {
    console.log("login hit ");
    try {
        const result = await User.findOne({ mobileNo: req.body.mobileNo }).exec();
        if (result !== null) {
            // User found, perform login
            sendToken(req.body.mobileNo, "Login Successful", res);
            console.log("login");
            // return res.json({ msg: "Login Successful" });
        } else {
            // User not found, perform registration

           
            console.log("register");
            return res.json({ msg: "Registered" });
        }
    } catch (err) { 
        console.error("Error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
    


router.route("/register").post(async (req, res) => {
    try {
        console.log("Registration request received:", req.body);

        const existingUser = await User.findOne({ mobileNo: req.body.mobileNo }).exec();
        if (existingUser) {
            return res.status(400).json({ msg: "User with this mobile number already exists" });
        }
        console.log(req.body);
        const user = new User({
            mobileNo: req.body.mobileNo,
            password: req.body.password,
            fullName: req.body.fullName,
            email: req.body.email,
            gender: req.body.gender,
            alternateMobileNo: req.body.alternateMobileNo,
            hint: req.body.hint
        });

        console.log("User object before saving:", user);

        await user.save();

        console.log("User saved successfully");

        sendToken(req.body.mobileNo, "Register Successful", res);
    } catch (err) {
        console.error("Error while registering user:", err);
        return res.status(500).json({ msg: "Error while registering user" });
    }
});








//function
const sendToken = (mobileNo, msg,res)=>{
    let token = jwt.sign({ mobileNo: mobileNo},config.key); 
    return res.json({token:token , msg:msg });
}



module.exports = router;

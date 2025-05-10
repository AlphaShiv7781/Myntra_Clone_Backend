require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://shivamsharma242424:P5n7WVQrH22Cw3cm@myntraclone.vghaxeb.mongodb.net/MyntraDB?retryWrites=true&w=majority&appName=MyntraClone`);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB connection successful")
})



//middleware
// app.use(express.json());

// const loginRoutes = require("./routes/login.routes");
// app.use("/login",loginRoutes);

// const userDetailsRoutes = require("./routes/user.details.routes");
// app.use("/userDetails",userDetailsRoutes);

// const productDetailsRoute = require("./routes/productDetailsRoute");
// app.use("/productDetails",productDetailsRoute);

// app.route("/").get((req,res)=>{
//     res.json("Hello all server is configured");
// })
app.use(express.json());

// Routes
const loginRoutes = require("./routes/login.routes");
const userDetailsRoutes = require("./routes/user.details.routes");
const productDetailsRoute = require("./routes/productDetailsRoute");

// Mount routes
app.use("/uploads",express.static("./uploads"));
app.use("/login", loginRoutes);
app.use("/userDetails", userDetailsRoutes);
app.use("/productDetails", productDetailsRoute);



app.listen(port,"0.0.0.0",()=>{
    console.log("welcome we are running server at port :",port);
})
const express = require('express');
const dotenv = require('dotenv');
// const User = require("./models/user.model")
const userRouter = require("./routes/user.route")
// configure .env
dotenv.config();

// mongoose 
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// defining routes
app.use("/api/user",userRouter);

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("db not connecte");
});

// create a schema , the first parameter of mongoose.model is table name
// and second is schema
const User = mongoose.model("Users",{
    email: String,
    password: String,
    name : String
});

User.create({
    email: "xyaz@gmail.com",
    password:"xyaz",
    name:"xyaz"
})




app.listen(3000,()=>{
    console.log("app active on port 3000");
})

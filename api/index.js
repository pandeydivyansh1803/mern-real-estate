const express = require('express');
const dotenv = require('dotenv');
const User = require("./models/user.model")
const userRouter = require("./routes/user.route")
const authRouter = require("./routes/auth.route")
const mongoose = require('mongoose');

// configure .env
dotenv.config();

const app = express();
app.use(express.json());

// defining routes
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("db not connecte");
});



app.listen(3000,()=>{
    console.log("app active on port 3000");
})

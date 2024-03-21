const express = require('express');
const dotenv = require('dotenv');
const User = require("./models/user.model")
const userRouter = require("./routes/user.route")
const authRouter = require("./routes/auth.route")
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// configure .env
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// defining routes
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("db not connecte");
});

// error handling middleware , global catches
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        message,
        success:false,
        statusCode
    });
})


app.listen(3000,()=>{
    console.log("app active on port 3000");
})

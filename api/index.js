const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// configure .env
dotenv.config();

const app = express()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("server is runnin on port 3000!");
})
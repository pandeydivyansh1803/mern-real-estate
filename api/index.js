// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// configure .env
// dotenv.config();

// const app = express()
// mongoose.connect("mongodb+srv://pandeydivyansh1803:yashpandey162@realestate.wnuswem.mongodb.net/full-stack-proj").then(()=>{
//     console.log('connected to db');
// }).catch((err)=>{
//     console.log(err);
// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000!");
// })

// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://pandeydivyansh1803:yashpandey162@realestate.wnuswem.mongodb.net/prakarshthe").then(()=>{
//     console.log("Connected to MongoDB");    
// })
//     .catch(()=>{
//         console.log("Error connecting to MongoDB");
//     })


// mongoose 
// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://pandeydivyansh1803:yashpandey162@cluster0.yzxx59c.mongodb.net/db1");

// create a schema , the first parameter of mongoose.model is table name
// and second is schema
// const User = mongoose.model("Users",{
//     email: String,
//     password: String,
//     name : String
// });


const express = require('express');
const dotenv = require('dotenv');

// configure .env
dotenv.config();

// mongoose 
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

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

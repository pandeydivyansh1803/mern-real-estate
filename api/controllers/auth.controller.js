const User = require("../models/user.model")

// we need to encrypt the password to store it in db
// we will use bcryptjs package
const bcryptjs = require('bcryptjs');

const signup =async (req,res)=>{
    const {username, email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    try{
        await User.create({username,email,password:hashedPassword})
        res.json({
            msg:"user created successfully"
        }).status(201);
    }catch(err){
        res.json({ err :err.message}).status(500);
        console.log("error");
    }
}

module.exports = signup;
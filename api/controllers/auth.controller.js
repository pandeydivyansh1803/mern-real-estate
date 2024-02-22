const User = require("../models/user.model")
const errorHandler = require("../utils/error")
const jwt = require('jsonwebtoken')
// we need to encrypt the password to store it in db
// we will use bcryptjs package
const bcryptjs = require('bcryptjs');

const signup =async (req,res,next)=>{
    const {username, email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    try{
        await User.create({username,email,password:hashedPassword})
        res.json({
            msg:"user created successfully"
        }).status(201);
    }catch(err){
        // next(errorHandler(550,'user not created'));
        next(err);
    }
}

const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        // step 1 check if user with given email is in our db or not
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(errorHandler(404,'User not found'))
        }
        // step 2 check if password matches or not
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(401,'Wrong credentials'));
        }

        // jwt and token
        const token = jwt.sign({id:validUser._id,email},process.env.JWT_SECRET)
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(validUser);
    }catch(err){
        next(err);
    }
}
module.exports = {signup,signin};
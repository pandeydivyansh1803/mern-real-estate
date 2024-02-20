const test = (req,res)=>{
    res.json({
        msg:"hello world!!!"
    }).status(200)
};

module.exports = test
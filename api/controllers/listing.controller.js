
const Listing = require('../models/listing.model');
const errorHandler = require('../utils/error');
const createListing = async (req,res,next)=>{
    try{
        const newListing = await Listing.create(req.body);
        return res.status(201).json(newListing)
    }
    catch(err){
        next(err);
    }
}

const deleteListing = async (req,res,next)=>{
    try{
    const listing = await Listing.findById(req.params.id);
    if(!listing){
        return next(errorHandler(404,'Listing not found !'));
    }

    if(req.user.id !== listing.userRef){
        return next(errorHandler(401,'You can only delete your own listings !'));
    }

        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('listing has been deleted successfully');
    }
    catch(err){
        next(err);
    }
};

const updateListing = async (req,res,next)=>{
    try{

        const listing = await Listing.findById(req.params.id);
        if(!listing){
            return next(errorHandler(404,'Listing not found !'));  
        }
    
        if(req.user.id !== listing.userRef){
            return next(errorHandler(401,'You can only update your own listing'));
        }
        
            const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {new : true});
            res.status(200).json(updatedListing);
        
    }
    catch(err){
        next(err);
    }
}

const getListing = async (req,res,next)=>{
    try{
        const listing = await Listing.findById(req.params.id);

        if(!listing){
            return next(errorHandler(404,'Listing not found !'));
        }

        res.status(200).json(listing);
    }
    catch(err){
        next(err);
    }
}

module.exports = {createListing , deleteListing , updateListing, getListing};
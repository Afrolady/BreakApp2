const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        album:{
            type:String,  
        },
        cover:{
            type:String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist:{
            name: {
                type:String,
            },
            nickname: {
                type:String,
            },
            nationality: {
                type:String,
            },
        },
        duration: {
            start:{
                type:Number,
            },
            end:{
                type: Number,
            },
        },
        mediaId:{
            type: moongoose.Types.ObjectId,          
        },
    },    
    {
        versionkey: false,
        timestamps:true,
    }
);

module.exports = mongoose.model("tracks", TracksScheme);


const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String,
        },
 
        filename:{
            type:String,
        }        
    },
    {
        timestamps:true, 
        versionkey: false,
    }
);

StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" }); //Sobreescribe los metodos nativos de mongoose con el softdelete de Studio 3T  

module.exports = mongoose.model("storages", StorageScheme);


const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String, 
        },
        age:{
            type:Number,
        },
        email:{
            type:String,
            unique:true,
        },
        password:{
            type:String,
            Select:false,
        },
        role:{
            type: ["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps:true, 
        versionkey: false,
    }
);

UserScheme.plugin(mongooseDelete, { overrideMethods: "all" }); //Sobreescribe los metodos nativos de mongoose con el softdelete de Studio 3T  

module.exports = mongoose.model("users", UserScheme);


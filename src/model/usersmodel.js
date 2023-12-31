
const {Schema} = require ("mongoose");
const mongoose = require("mongoose");
const UserSchema = new Schema({
    name:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
    },
    country:{
        type:String,
    },
})

module.exports = mongoose.model("User", UserSchema);
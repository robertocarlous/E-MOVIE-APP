
const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const MovieSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    author:{
        type:String,
        required:true,
    },
    category:{
        type:String,
    },
    rating:{
        type:String,
    },
    year:{
        type:String,
    },
    language:{
        type:String,
    },
    Availability:{
        type:Boolean,
    }, 
})
module.exports = mongoose.model("movie", MovieSchema)
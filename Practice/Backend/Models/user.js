

const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({


    name:{
        type:String,
        required:true,
        trim:true,
    },
    age:{
        type:Number,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:Date,
        required:true,
        trim:true,
    }


})

module.exports=mongoose.model("User",UserSchema)

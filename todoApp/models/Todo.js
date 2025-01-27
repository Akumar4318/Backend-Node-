const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            requried:true, // mangta hi mangta hai not empty thats why it is required field
            maxLength:50,
        },
        description:{
            type:String,
            requried:true,
            maxLength:50,
        },
        createdAt:{
                type:Date,
                requried:true,
                default:Date.now(),
        },
        UpdataAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
);

module.exports=mongoose.model("Todo",todoSchema);
const mongoose=require("mongoose")

// route handler

const commnetSchema=new mongoose.Schema({
    // kon si post pe comment kar rhe ho

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    //kis user ne commnet kiya hai
    user:{
        type:String,
        required:true,

    },
    body:{
        type:String,
        required:true,
    }
})



// export


module.exports=mongoose.model("commnet",commnetSchema)
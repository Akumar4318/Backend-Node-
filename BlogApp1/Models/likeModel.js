const mongoose=require("mongoose")

const likeschema=new mongoose.Schema({

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",

    },
    user:{
        type:String,
        require:true,
    }

})

module.exports=mongoose.model("Like",likeschema)
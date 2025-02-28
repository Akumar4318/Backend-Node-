const mongoose=require("mongoose")


const postSchema=new mongoose.Schema({

    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Likes"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }]
})

module.exports=mongoose.model("Post",postSchema)
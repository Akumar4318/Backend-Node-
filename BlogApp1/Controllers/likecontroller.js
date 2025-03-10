
const Post=require("../Models/postModel")
const Like=require("../Models/likeModel")

exports.likepost= async(req,res)=>{

    try {
         const{post,user}=req.body
         
         const like=new Like({
            post,user
         })

         const savedLike=await like.save();

         // update the post collection 

         const updatedPost=await Post.findByIdAndUpdate(post,{$push :{likes:savedLike._id}},{new:true}).populate("likes").exec();
        
         

         res.json({
            post:updatedPost,
         })

    } catch (error) {
        
        return res.status(500).json({
            error:"error while liking  post"
        })
    }
}


// unlike posts

 exports.unlikePost=async(req,res)=>{

    try {
        const {post,like}=req.body

        const deletedLike=await Like.findOneAndDelete({post:post,_id:like})

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new: true})

        res.json({
            post:updatedPost,
        })
        
    } catch (error) {
        return res.status(500).json({
            error:"Error while unlikeing the posts"
        })
    }
 }


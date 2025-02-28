// import model 
const Post=require("../Models/postModel")
const comments=require("../Models/commentModel")

// logic

exports.createComment= async (req,res)=>{

        try {
            
            // fetc data from req ki body
            const{post,user,body}=req.body
            const comment=new Comment({
                post,user,body
            });

            // save the new commnet into the database
 
            const savedComment= await comment.save();

            // find the post by id and add the new comment in the post commnet wala array

            const updatedPost= await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new : true})
                                .populate("comments")
                                .exec();

            res.json({
                post:updatedPost,
            })                    

        } catch (error) {
            return res.status(500).json({
                error:"error while creating comment"
            })
        }

}


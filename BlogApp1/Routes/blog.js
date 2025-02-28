const express=require("express")
const router=express.Router();

// import controller


const{createPost,getAllPosts}=require('../Controllers/postcontroller')
const{createComment}=require('../Controllers/commentcontroller')
const{likepost,unlikePost}=require('../Controllers/likecontroller')
// mapping


router.post("/posts/create",createPost)
router.post('/comments/create',createComment)
router.get('/posts',getAllPosts)
router.post('/likes/like',likepost)
router.post('/likes/unlike',unlikePost)
// export

module.exports=router;
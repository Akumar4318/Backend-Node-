
const express=require("express")
const router=express.Router()


const {signUp,Login}=require('../Controllers/Signup')
const {getUser}=require('../Controllers/getUser')
const {auth,isStudent,isAdmin}=require('../Middlewares/auth')

router.post('/login',Login)
router.post('/signup',signUp)
router.get('/getuser',getUser)

// protected routers form admin,student, and for visitor(test)

// for test

router.get('/test',auth,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"welcome to the proctected route of test"
    })
})

// for student

router.get('/student',auth,isStudent,(req,res)=>{

    return res.status(200).json({
        success:true,
        message:"welcome to the protected route of student"
    })
})


// admin

router.get('/admin',auth,isAdmin,(req,res)=>{
    return res.status(200).json({
        
        success:true,
        message:"welcome to the protected route of admin"
    })
})
module.exports=router
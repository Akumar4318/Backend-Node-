
const express=require("express")
const router=express.Router()


const {signUp}=require('../Controllers/Signup')
const {getUser}=require('../Controllers/getUser')

// router.put('/login',Login)
router.post('/signup',signUp)
router.get('/getuser',getUser)

module.exports=router
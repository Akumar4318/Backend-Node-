
const express=require('express')
const router=express.Router()



const{signUP}=require('../Controllers/signUP')





router.post('/signup',signUP)


module.exports=router
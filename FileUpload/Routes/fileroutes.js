

const express=require('express')
const router=express.Router()


// handeler  ko le ke aoo controller

const{localFileUpload}=require('../Controllers/fileUpload')


// api routes

router.post("/localfileupload",localFileUpload)

module.exports=router 
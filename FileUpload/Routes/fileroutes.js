

const express=require('express')
const router=express.Router()


// handeler  ko le ke aoo controller

const{localFileUpload,imageUpload,videoUpload}=require('../Controllers/fileUpload')


// api routes

router.post("/localfileupload",localFileUpload)
router.post("/imageupload",imageUpload)
router.post('/videoupload',videoUpload)

module.exports=router 
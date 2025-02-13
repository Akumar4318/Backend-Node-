

const express=require("express")
const router=express.Router();


// Import controller

const {dummyLink}=require("../controllers/LikeController")


// Mapping create


router.get("/dummyroute",dummyLink);


//export

module.exports=router
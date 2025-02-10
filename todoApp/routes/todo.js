
// route ko controler ke sath map karna hai to pahle apne ko controller ko lana hai


const express=require("express");
const router=express.Router();

// import controller

const {createTodo}=require('../controllers/createTodo')
const {getTodo}=require('../controllers/getTodo')

// define API routes

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
module.exports=router;
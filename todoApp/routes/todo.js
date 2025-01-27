
// route ko controler ke sath map karna hai to pahle apne ko controller ko lana hai


const express=require("express");
const router=express.Router();

// import controller

const {createTodo}=require('../controllers/createTodo')

// define API routes

router.post("/createTodo",createTodo)

module.exports=router;

// route ko controler ke sath map karna hai to pahle apne ko controller ko lana hai


const express=require("express");
const router=express.Router();

// import controller

const {createTodo}=require('../controllers/createTodo')
const {getTodo,getTodoById}=require('../controllers/getTodo');
const {updateTodo}=require("../controllers/updateTodo")

// define API routes

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById)
router.put("/updateTodos/:id",updateTodo)
module.exports=router;
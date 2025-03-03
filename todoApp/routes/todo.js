
// route ko controler ke sath map karna hai to pahle apne ko controller ko lana hai


const express=require("express");
const router=express.Router();

// import controller

const {createTodo}=require('../controllers/createTodo')
const {getTodo,getTodoById}=require('../controllers/getTodo');
const {updateTodo}=require("../controllers/updateTodo")
const {deleteTodo}=require("../controllers/deleteTodo")
// define API routes

router.post("/createtodo",createTodo);
router.get("/gettodods",getTodo);
router.get("/getTodos/:id",getTodoById)
router.put("/updateTodos/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)
module.exports=router;
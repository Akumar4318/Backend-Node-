


// create server

const express=require("express");
const app=express();


require('dotenv').config();

const PORT=process.env.PORT || 4000;


// middelwate to parse json request body

app.use(express.json());


// import routes for todo api

const todoRoutes=require('./routes/todo')

//  mount 
app.use("/api/v1",todoRoutes);

// start sever

app.listen(PORT,()=>{
    console.log('server started at port',PORT)
})

// connect the db

const dbConnect= require('./config/database')
dbConnect();

// default route

app.get("/",(req,res)=>{

    res.send(`<h1>this is my home page Abhishek</h1>`)
})
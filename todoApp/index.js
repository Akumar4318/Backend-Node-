
//* server bana liya
 
const express=require('express');
const app=express()


// load config from env file

require('dotenv').config();  //* jo bhi .env file mai config likha hai na oo sara process object main rakha huwa hai

const PORT=process.env.PORT||4000;  //* yeanha pe sata process object main se port ka config nikal liye jo ki 3000 hai or agar nhi mile ga to 4000 mai host kara  denge 
console.log(PORT)


// middleware to parse json request body

app.use(express.json());


// import routes for todo api

const todoRoutes=require('./routes/todo')  //* import karke laya hi routes ko


// mount the todo api

app.use("/api/v1",todoRoutes);


//strat.server
//*  server ko start kar diya hai 
app.listen(PORT,()=>{
    console.log(`server started succeffully at ${PORT}`);
})


//DB connection to the database

const dbConnect=require('./config/database')
dbConnect();

//deafault Route bhi dena hoga

app.get("/",(req,res)=>{

    res.send(`<h1> this is my home page</h1>`)
})
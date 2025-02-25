


const express=require("express")
const app=express();


require('dotenv').config();

const PORT=process.env.PORT || 4000;

app.use(express.json());

const blog=require("./routes/blog")

app.use("/api/v1",blog);

//connect with database


const connectwithDB = require("./config/database");
connectwithDB()

app.listen(PORT,()=>{
    console.log(`app is start at port ${PORT}`)
})

app.get('/',(req,res)=>{
    
    res.send(`<h1>this is my home page</h1>`)
})
const express=require("express")
const app=express()

require("dotenv").config();
const PORT=process.env.PORT || 4000;


// middleware
app.use(express.json());

const blog=require('./Routes/blog')
// mount
app.use("/api/v2",blog)

// db connectt karna hai

const connectwithDB=require('./Config/database')
connectwithDB();

app.listen(PORT,()=>{
    console.log(`app is started at  port no. ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send(`<h1>this is my first page amam</h1>`)
})
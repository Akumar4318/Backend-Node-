
const express=require("express")
const app=express();

require("dotenv").config()

const cookieParser=require('cookie-parser')
app.use(cookieParser());

app.use(express.json())

const routes=require('./Routes/userRoutes')

app.use('/api/v1',routes)

const connectDb=require('./Config/database')
connectDb()

const PORT=process.env.PORT|| 4000

app.listen(PORT,()=>{
    console.log(`server creates successfully at port no. ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send(`<h1> hello world</h1>`)
})

//  


const express=require("express")

const app=express()
require('dotenv').config()


app.use(express.json())


const PORT=process.env.PORT || 4000;


app.listen(PORT,()=>{
    console.log(`port created successfully at port no. ${PORT}`)
})


const ConnectDB=require('./Config/database')
ConnectDB()

const routes=require('./Routes/userRoutes')

app.use('/api/v1',routes)

app.get('/',(req,res)=>{
    res.send(`<h1> hello world</h1>`)
})

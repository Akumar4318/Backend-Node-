

const express=require("express")
const app=express()
const cors=require("cors")

require('dotenv').config()



app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 4000

const Userroutes=require('./Routes/userRoutes')

app.use('/api/v1',Userroutes)

const connectDB=require('./Config/database')
connectDB()



app.listen(PORT,()=>{
    console.log(`server created successfully at port ${PORT}`)
})

app.get('/',(req,res)=>{

    res.send(`<h1>Home page</h1>`)
})


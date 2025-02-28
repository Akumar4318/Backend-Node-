

const mongoose=require('mongoose')


require("dotenv").config()

const connectDB=()=>{

    mongoose.connect(process.env.DATABASE_URL)  
    .then(console.log("db connected successfully"))
    .catch(
       (error)=>{
        console.log("db not connected")
        console.log(error)
        process.exit(1)
       }
    )

}


module.exports=connectDB
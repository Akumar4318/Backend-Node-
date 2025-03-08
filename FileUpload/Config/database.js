

const mongoose=require('mongoose')

require('dotenv').config()

const connectDB=async (req,res)=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log('db connected successfully')
    ).catch((error)=>{
        console.error(error)
        console.log('db not connected')

        process.exit(1)
    })
}

module.exports=connectDB;
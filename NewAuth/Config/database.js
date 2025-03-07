const mongoose=require('mongoose')


const ConnectDB=async(req,res)=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log("db connected succesffully")
    )
    .catch((error)=>{
        console.log(error)
        console.log("db not connected successfully")
    })
}

module.exports=ConnectDB;
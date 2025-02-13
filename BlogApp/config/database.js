

const mongoose=require('mongoose');
require("dotenv").config();

// this function is used to connect the database to our node
const connectwithDB=()=>{
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("db connection is successfull")
})
.catch((error)=>{
    console.log('db is not connected',error)

    //
    process.exit(1)
})
}
module.exports=connectwithDB;

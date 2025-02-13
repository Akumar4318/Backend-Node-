const mongoose=require('mongoose')
require("dotenv").config()  // jo bhi env file ke andar configration hai o load kardeta hai process wale object ke andar


const connectwithDB=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log("db connected successfully")

    )
    .catch(
        (error)=>{
            console.log("db facing connection issues");
            console.log(error);
            process.exit(1);
        }
    )
}

module.exports=connectwithDB
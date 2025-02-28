const mongoose=require("mongoose")

require("dotenv").config()

const connectDB=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("database connected successfully"))
    .catch((error)=>{

        console.log("db facing connneciton issue");
        console.log("error");
        process.exit(1);
    })
};

module.exports =connectDB;
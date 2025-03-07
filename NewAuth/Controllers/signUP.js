const User=require('../models/UserSchema')
const bcrypt=require('bcrypt')

exports.signUP= async (req,res)=>{

     // get all data from body

     const{name,email,password,role}=req.body

     // check wheater the user already exist or not 

     const existUser=await User.findOne({email})

     if(existUser){

        return res.status(400).json({
            success:false,
            message:"User already exist"
        })
     }


     // now we are going to hashed the passowrd

     let hashedPassword;

     try {
        
        hashedPassword=await bcrypt.hash(password,10)

     } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"error occured while hashing the password"
        })
     }
    

     // now we are going to create the user

     try {
        
        const response=await User.create({
            name,email,password:hashedPassword,role
        })

        
        res.status(200).json({
            success:true,
            message:"user created successfully"
        })
     } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"user not created",
            data:error
        })
     }
}
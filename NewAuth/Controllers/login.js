

const User=require('../models/UserSchema')

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

require("dotenv").config()

exports.loginUser= async (req,res)=>{

   try {
    
     // fetch the gmail and password

     const {email,password}=req.body 

     if(!email || !password){
         return res.status(400).json({
             success:false,
             message:"fill the all credential"
         })
     }
 
     // find the user exist or not 
 
     let user= await User.findOne({email})
 
     if(!user){
         
         return res.status(401).json({
             success:false,
             message:"user not found please signUP first"
         })
     }
 
     // check the password 
     
     let payload={
        email:user.email,
        id:user._id,
        role:user.role
    }
             if(await bcrypt.compare(password,user.password)){
             
                let token=jwt.sign(payload,process.env.JWT_SECRET,{
                    expiresIn:"2h"
                })
                user=user.toObject()
                user.token=token;
                user.password=undefined;

                let options={
                    expires:new Date(Date.now()+1000*60*60*24*2)
                }

                res.cookie("token",token,options).status(200).json({
                    success:true,
                    message:"user logged in successfully",
                    token,
                    user,
                })

             }
             else{
                // password not match

                return res.status(403).json({
                    success:false,
                    message:"password not match"
                })
             }

   } catch (error) {
    
    return res.status(500).json({
        success:false,
        message:"loggin failed",
        data:error
    })
   }
}
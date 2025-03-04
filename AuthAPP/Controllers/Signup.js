const User=require('../Models/usersSchema')
const bcrypt=require("bcrypt")
require("dotenv").config()
const jwt=require("jsonwebtoken")

exports.signUp=async (req,res)=>{

    try {
        // get data 

        const {name,email,password,role}=req.body

        // check the user already exist or not

        const existUser= await User.findOne({email});

        if(existUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }

        // secured the password

        let hashedPassword;

        try {
            
            hashedPassword=await bcrypt.hash(password,10);

        } catch (error) {
            
            return res.status(400).json({
                success:false,
                message:"error in hashing password"
            })
        }

        // create entry  of new user

        const user=await User.create({
            name,email,password:hashedPassword,role

        })

        return res.status(200).json({
            success:true,
            message:"user created successfully"
        })



    } catch (error) {
        
        console.log(error)

        return res.status(500).json({
            success:false,
            message:"user cannot be registered please try again later ",
            data:error
        })
    }
}

exports.Login=async (req,res)=>{


    try {
        
        const {email,password}=req.body

        if(!email || !password){

            return res.status(400).json({
                success:false,
                message:"Please enter the email and password"
            })
        }

        // check for register user

        let user=await User.findOne({email})

        if(!user){
          return   res.status(401).json({
                success:false,
                message:"user not found"
             })
        }
// verify the password and generate a jwt token

const payload={
    email:user.email,
    id:user._id,
    role:user.role
}

if(await bcrypt.compare(password,user.password)){
    let token =jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:"2h"
    });

    user=user.toObject();
    user.password=undefined;
    user.token=token;
    const option ={
        expires:new Date(Date.now()+3*24*60*60*1000),httpOnly:true,
    }

    res.cookie("token",token,option).status(200).json({
        success:true,
        token,
        user,
        message:"User loged in successfully"
    })
}
else{
    return res.status(403).json({
        success:false,
        message:"password incorrect"
    })
}

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"login failure"
        })
    }
}
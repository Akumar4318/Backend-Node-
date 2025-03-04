 
 const jwt=require('jsonwebtoken')

 require("dotenv").config()

//  let JWT_SECRET="Abhishek"

 exports.auth=(req,res,next)=>{

    try {
        
        const token=req.body.token

    if(!token){
        return res.status(401).json({
            success:false,
            message:"token is missing"
        })
    }


    // verify the token

    try {
        
        const payload=jwt.verify(token,process.env.JWT_SECRET)
        req.user=payload
    } catch (error) {
        
        return res.status(401).json({
            success:false,
            message:"token is invalid"
        })
    }
    next()
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"something wet wrong, while verifying the token"
        })
    }
 }


 exports.isStudent=(req,res,next)=>{

    try {
        
        if(req.user.role!="Student"){
            return res.status(401).json({
                success:false,
                message:"this is protected route  of student "
            })
        }
        next()
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"user role is not matching"
        })
    }

 }


 exports.isAdmin=(req,res,next)=>{

    try {
        
        if(req.user.role!="Admin"){
            return res.status(401).json({
                success:false,
                message:"this is protected route  of admin "
            })
        }
        next()
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"user role is not matching"
        })
    }

 }
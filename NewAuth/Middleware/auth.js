const jwt=require('jsonwebtoken')

require('dotenv').config()

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
        
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        
        req.user=decode
    } catch (error) {
        
        return res.status(400).json({
            success:false,
            message:"token is invalid"
        })
    }

    next()
    
  } catch (error) {
    
    return res.status(400).json({
        success:false,
        message:"somting error occur while verifying the token"
    })
  }
}


exports.isStudent=(req,res,next)=>{

    try {
        
        if(req.user.role != "Student"){
            return res.status(401).json({

                success:false,
                message:"this is protected route for student so you cant enter",
                message:error
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
        
        if(req.user.role != "Admin"){
            return res.status(401).json({

                success:false,
                message:"this is protected route for Admin so you cant enter"
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


exports.isVisitor=(req,res,next)=>{

    try {
        
        if(req.user.role != "Visitor"){
            return res.status(400).json({

                success:false,
                message:"this is protected route for Visitor so you cant enter"
            })
        }
        next()
    } catch (error) {
        
        return res.status(400).json({
            success:false,
            message:"user role is not matching"
        })
    }
}


const User=require('../models/usersSchema')


exports.findUsers=async(req,res)=>{

  try {
    const {name,age,password,email,dob}=req.body
    
    const response=await User.find({})

    res.status(200).json({
        success:true,
        message:"all user found",
        data:response
    })
  } catch (error) {
    
    console.log(error)
    res.status(500),json({
        success:false,
        message:"error occured while fetching the user",
        data:error
    })
  }
}



exports.findUsersByID=async(req,res)=>{

    try {
        const{id}=req.params
     
      
      const response=await User.findById({_id:id})
  
      res.status(200).json({
          success:true,
          message:" user found",
          data:response
      })
    } catch (error) {
      
      console.log(error)
      res.status(500),json({
          success:false,
          message:"error occured while fetching the user",
          data:error
      })
    }
  }


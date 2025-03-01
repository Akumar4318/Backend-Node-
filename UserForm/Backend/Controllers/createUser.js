
const User=require('../models/usersSchema')


exports.createUser=async(req,res)=>{

   try {

    const {name,age,password,email,dob}=req.body

    const response= await User.create({name,age,password,email,dob})

    res.status(200).json({
        success:true,
        message:"User created successfully",
        data:response
    })
    
   } catch (error) {
    
    console.log(error);
    console.log("erroe while creating the user")

    res.send(500).json({
        success:false,
        message:"erroe while creating the user",
        data:error
    })
   }


}
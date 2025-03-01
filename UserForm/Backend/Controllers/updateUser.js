
const User=require('../models/usersSchema')

exports.updateUser=async(req,res)=>{
try {
    
    const {id}=req.params
    const{name,age,password,email,dob}=req.body
    const response=await User.findByIdAndUpdate({_id:id},{name,age,password,email,dob});
    const response1 =await User.findById(id)

    res.status(200).json({
        success:true,
        data:response1,
        message:"user Updated successfully"
    })
    
} catch (error) {
    
    console.log(error)

    res.status(500).json({

        success:false,
        data:error,
        message:"error while updateing the User data"
    })
}
}
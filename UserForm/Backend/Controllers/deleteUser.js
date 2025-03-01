

const User=require('../models/usersSchema')


exports.deleteUser=async(req,res)=>{

    try {
        const {id}=req.params;

    const response=await User.findByIdAndDelete({_id:id})
    const response1=await User.find({})

    res.status(200).json({
        success:true,
        message:"delete successfully",
        data:response1

    })
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
    
            success:false,
            data:error,
            message:"error while deleteing the User data"
        })
    }
}
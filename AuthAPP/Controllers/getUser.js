const User=require('../Models/usersSchema')


exports.getUser=async (req,res)=>{

    
    try {
        const response=await User.find({})

        res.status(200).json({
            success:true,
            message:"user found",
            data:response
        })
        
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"failed",
            data:erorr
        })
    }
}
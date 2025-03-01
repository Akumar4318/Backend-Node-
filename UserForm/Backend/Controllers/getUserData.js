

const User=require('../models/usersSchema')

exports.getUserData=async(req,res)=>{

    try {
        
        const{id}=req.params
        const response=User.findById({_id:id})

        res.status(200).json({

            success:true,
            message:"edit the item",
            data:response
        })

        

    } catch (error) {
     
        console.log(error)

        res.send(500).json({
            success:false,
            message:"unable to fetch the user",
            data:error
        })
    }
}
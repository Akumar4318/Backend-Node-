// import model

const Todo=require('../models/Todo')


exports.getTodo=async(req,res)=>{

    try {

        // fetch all toddo items from database

        const todos=await Todo.find({});

        // response update

        res.status(200).json({
            success:true,
            data:todos,
            message:"entire data is fetched"
        })
        
    } catch (error) {
        
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"server error "
        })

    }
}
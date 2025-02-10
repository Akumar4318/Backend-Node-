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


exports.getTodoById=async(req,res)=>{
    
    try {
        //pahle id ko fetch karo

        const id=req.params.id;
        const todo=await Todo.findById({_id:id})

        // data for given id not found 

        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data found"
            })
        }
// data for give id found

res.status(200).json({
    success:true,
    data:todo,
    message:`todo ${id} data succesfully fetched`
})

    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"not found error "
        })
        
    }
}
const Todo=require('../models/todo')

exports.createTodo=async(req,res)=>{

    try {

        const{title,description,age,name}=req.body;

        const response=await Todo.create({title,description,age,name});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        )
        
    } catch (error) {

        console.log(error)
        console.error(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
        
    }

}
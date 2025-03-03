const User=require('../Models/usersSchema')
const bcrypt=require("bcrypt")


exports.signUp=async (req,res)=>{

    try {
        // get data 

        const {name,email,password,role}=req.body

        // check the user already exist or not

        const existUser= await User.findOne({email});

        if(existUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }

        // secured the password

        let hashedPassword;

        try {
            
            hashedPassword=await bcrypt.hash(password,10);

        } catch (error) {
            
            return res.status(400).json({
                success:false,
                message:"error in hashing password"
            })
        }

        // create entry  of new user

        const user=await User.create({
            name,email,password:hashedPassword,role

        })

        return res.status(200).json({
            success:true,
            message:"user created successfully"
        })



    } catch (error) {
        
        console.log(error)

        return res.status(500).json({
            success:false,
            message:"user cannot be registered please try again later ",
            data:error
        })
    }
}
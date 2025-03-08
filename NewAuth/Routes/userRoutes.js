
const express=require('express')
const router=express.Router()



const{signUP}=require('../Controllers/signUP')
const{loginUser}=require('../Controllers/login')
const{auth,isStudent,isAdmin,isVisitor}=require('../Middleware/auth')




router.post('/signup',signUP)
router.post('/login',loginUser)


router.get('/isstudent',auth,isStudent,(req,res)=>{

    return res.status(200).json({

        success:true,
        message:"welcome to the student confidential route"
    })
})


router.get('/isadmin',auth,isAdmin,(req,res)=>{

    return res.status(200).json({

        success:true,
        message:"welcome to the Admin confidential route"
    })
})


router.get('/isvisitor',auth,isVisitor,(req,res)=>{

    return res.status(200).json({

        success:true,
        message:"welcome to the Visitor confidential route"
    })
})



router.get('/test',auth,(req,res)=>{

    return res.status(200).json({

        success:true,
        message:"welcome to the test confidential route"
    })
})



module.exports=router
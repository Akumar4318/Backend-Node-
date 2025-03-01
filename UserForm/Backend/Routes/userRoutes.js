
const express=require('express')
const router=express.Router()



const{createUser}=require('../Controllers/createUser')
const{updateUser}=require('../Controllers/updateUser')
const {findUsers,findUsersByID}=require('../Controllers/findUser')
const{deleteUser}=require('../Controllers/deleteUser')








router.post('/createusers',createUser)
router.put('/updateuser/:id',updateUser)
router.get('/finduser',findUsers)
router.get('/finduser/:id',findUsersByID)
router.delete('/deleteuser/:id',deleteUser)



module.exports=router
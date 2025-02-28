


const express=require("express")
const app=express()
const {v4 : uuid}=require("uuid")
const cors=require('cors')

let db=[
    {
      "id": 1,
      "name": "Amit Sharma",
      "password": "Amit@123",
      "age": 27,
      "email": "amit.sharma@example.com",
      "dob": "1997-04-12"
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "password": "Priya#456",
      "age": 25,
      "email": "priya.verma@example.com",
      "dob": "1999-08-23"
    },
    {
      "id": 3,
      "name": "Rahul Singh",
      "password": "Rahul!789",
      "age": 30,
      "email": "rahul.singh@example.com",
      "dob": "1994-02-10"
    },
    {
      "id": 4,
      "name": "Sneha Kapoor",
      "password": "Sneha@321",
      "age": 28,
      "email": "sneha.kapoor@example.com",
      "dob": "1996-06-17"
    },
    {
      "id": 5,
      "name": "Vikram Joshi",
      "password": "Vikram$654",
      "age": 26,
      "email": "vikram.joshi@example.com",
      "dob": "1998-11-05"
    },
    {
      "id": 6,
      "name": "Neha Malhotra",
      "password": "Neha%987",
      "age": 24,
      "email": "neha.malhotra@example.com",
      "dob": "2000-09-19"
    },
    {
      "id": 7,
      "name": "Arjun Mehta",
      "password": "Arjun&135",
      "age": 29,
      "email": "arjun.mehta@example.com",
      "dob": "1995-03-30"
    },
    {
      "id": 8,
      "name": "Kavita Rao",
      "password": "Kavita*246",
      "age": 31,
      "email": "kavita.rao@example.com",
      "dob": "1993-07-12"
    },
    {
      "id": 9,
      "name": "Rohan Das",
      "password": "Rohan(579)",
      "age": 23,
      "email": "rohan.das@example.com",
      "dob": "2001-05-25"
    },
    {
      "id": 10,
      "name": "Pooja Choudhary",
      "password": "Pooja_852",
      "age": 27,
      "email": "pooja.choudhary@example.com",
      "dob": "1997-12-01"
    }
  ]
  
      


let Port=3000;

app.listen(Port,()=>{
    console.log(`server created at port no. ${Port}`)
})
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{

    res.send(`<h1> hello world</h1>`)

})

app.post('/users',(req,res)=>{

    const{name,password,age,email,dob}=req.body

    db.push({...req.body,id:uuid()})
    res.status(201).json({"msg":"true"})


})

app.put('/users/:id',(req,res)=>{


    const {id}=req.params
    const{name,password,age,email,dob}=req.body
    db=db.filter((item)=>{
        return item.id !=id
    })

    db.push({...req.body,id})
    res.status(201).json({"msg":"true"})
})


app.delete('/users/:id',(req,res)=>{

    const {id}=req.params
    const{name,password,age,email,dob}=req.body
    db=db.filter((item)=>{
        return item.id !=id
    })

    res.send(db)
})


app.get('/users',(req,res)=>{

    res.status(200).send(db)
    

}) 

app.get('/edituser/:id',(req,res)=>{

    const foundItem=db.find((item)=>{
       return item.id==req.params.id
    })
    
    res.json(foundItem)
})


//1:-server Instantiate kar diye
const express=require('express')  //express nikal liya  . server live nhi huwa hai kyuki port pe define karne hoga
const app=express();

const bodyParser=require('body-parser'); // used to parse req.body in express  --put to POST
//specifically parse json data and data it to the request.body object
app.use(bodyParser.json());

//2:-server create at port no. 3000
app.listen(3000,()=>{
    console.log('server started at port no. 3000')
})

// to see on browser
// 3:-create Route

//Home page Route

app.get(('/'),(request,reponse)=>{
    reponse.send("hello ji kese ho")
})

//Post means to submit data

app.post('/api/cars',(request,response)=>{
    const{name,brand}=request.body;
    console.log(name)
    console.log(brand)
    response.send('car submitted successfully ')
})



const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => {
        console.log("Connection successful");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });



const express=require('express')
const app=express()
require('dotenv').config()

// middlerware add karna hai
app.use(express.json())

const fileupload=require('express-fileupload')

app.use(fileupload(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
))


// db se connect karna hai
const connectDB=require('./Config/database')
connectDB()

// cloud se connect karna hai

const cloudinary=require('./Config/cloudinary')
cloudinary.cludinaryConnect()


const Upload=require('./Routes/fileroutes')
app.use('/api/v1/upload',Upload)

const PORT=process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is in use. Trying another port...`);
        app.listen(4000 + 2, () => {
            console.log(`Server is now running on PORT ${PORT + 1}`);
        });
    } else {
        console.error('Error starting the server:', err);
    }
});
app.get('/',(req,res)=>{
    
    res.send(`<h1> hello world1</h1>`)
})
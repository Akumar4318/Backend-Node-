
const File=require('../Models/fileUpload')


// local file upload ka handler function create karna hai
//  ye function sirf local pe file upload karega


exports.localFileUpload= async(req,res)=>{

    try {
        
        // file ko fetch karna hai

        const file=req.files.file;
        console.log(file)

        console.log('file milya jee->',file)

        // kis patah pe store karan chahte ho server pe

        let path= __dirname +"/files/"+ Date.now() +`.${file.name.split('.')[1]}`;
        console.log("Path-->",path)
        

        // is path pe move karna hai file ko
        
        file.mv(path,(err) =>{
            console.log(err);
        })

        res.json({
            success:true,
            message:"loacal file uploaded sucessfully"
        })

    } catch (error) {
        console.log('not to able to upload file on the server')
        console.log(error)
    }
}

const File=require('../Models/fileUpload')
const cloudinary=require('cloudinary').v2

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

// image uload ka handler difine karna hai


//? the function is to check the  file is supported or not

function isFileSupported(type,supportedTypes){

    return supportedTypes.includes(type)
    
}


//? function for uploading in cloudinary

async function uploadFileToCloudinary(file,folder) {
    
    const options={folder}
    options.resource_type="auto"
   return  await cloudinary.uploader.upload(file.tempFilePath,options)

}

exports.imageUpload=async(req,res)=>{

    try {
        
        //? data fetch karna hai

        const {name,tag,email}=req.body 
        console.log(name,tags,email)

        const file=req.files.imageFile;
        console.log(file)


        //? validation 

        const supportedTypes=["jpeg",'jpg',"png"];

        //? find the type of the file

        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("fileType->>>",fileType)

        if(!isFileSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"file Format NOT supported "
            })
        }

        //? file format supported hai to cloudinary upload karna hai cloudinary mai upload function hai use kar ke upload kar shakte hai

        const response=await uploadFileToCloudinary(file,"FileUpload")
        console.log(response)

        //? DB mai entry save karna hai

        const fileData=await File.create({
            name,
            tag,
            imageUrl:response.secure_url,
            email,
        })


        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"image successfully uploaded"
        })

    } catch (error) {
        console.error(error)
        return res.status(400).json({
            success:false,
            message:"not able to upload Imagefile"
        })
    }
}



// video upload ka handler

exports.videoUpload=async (req,res)=>{

    try {
        

        //? data fetch karna hai

        const {name,tag,email}=req.body
        console.log(name,tag,email)

        const file=req.files.videoFile

      //? validation of video file 

      const supportedTypes=['mp4',"mov"]
      const filetype=file.name.split('.')[1].toLowerCase();
      console.log('fileType-->',filetype);

      // add a upper liltmi of 5mb  for video

      if(!isFileSupported(filetype,supportedTypes)){
        return res.statue(400).json({
            success:false,
            message:"file type is not supported"
        })
      }


      //? file supported hai to
      const response=await uploadFileToCloudinary(file,"FileUpload")
      console.log(response.url)

      //? db mai entry karna hai

      const fileData= await File.create({
        name,
        tag,
        videoUrl:response.secure_url,
        email,
        imageUrl:response.url
      });

      console.log(fileData)
      res.json({
        success:true,
        videoUrl:response.secure_url,
        message:"video uploaded successfully"
      })



    } catch (error) {

        console.log(error)
        res.status(400).json({
            success:false,
            message:"somthing went wrong"
        })
    }
}
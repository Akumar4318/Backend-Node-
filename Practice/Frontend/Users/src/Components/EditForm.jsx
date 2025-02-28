
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditForm = () => {

    const[data,setData]=useState({name:"", age:"",password:"",email:"",dob:''})
console.log(data)
const nav=useNavigate()
const {id}=useParams()



useEffect(()=>{

    async function getalldata() {

        let res=await fetch(`http://localhost:3000/edituser/${id}`)  
        let data1=await res.json();
        setData(data1)
        console.log(data1)

        
    }

    getalldata(); 
},[])


  return (
<div className="flex items-center h-lvh">
    
<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4 ">
  {/* Heading */}
  <h1 className="text-2xl font-bold text-center text-gray-700">Update User</h1>

  {/* Name Input */}
  <input
    value={data.name}
    onChange={(e) => setData({ ...data, name: e.target.value })}
    type="text"
    placeholder="Enter your name"
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  {/* Age Input */}
  <input
    value={data.age}
    onChange={(e) => setData({ ...data, age: e.target.value })}
    type="number"
    placeholder="Enter your age"
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
  />

  {/* Password Input */}
  <input
    value={data.password}
    onChange={(e) => setData({ ...data, password: e.target.value })}
    type="password"
    placeholder="Enter your password"
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
  />

  {/* Email Input */}
  <input
    value={data.email}
    onChange={(e) => setData({ ...data, email: e.target.value })}
    type="text"
    placeholder="Enter your email"
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
  />

  {/* DOB Input */}
  <input
    value={data.dob}
    onChange={(e) => setData({ ...data, dob: e.target.value })}
    type="date"
    placeholder="Enter your DOB"
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />

  {/* Add User Button */}
  <button onClick={()=>{


        if(data.name =='' || data.age=="" || data.password=="" || data.email=="" || data.dob==""){
            return
        }
    
    async function updateUser() {

        const res=await fetch (`http://localhost:3000/users/${id}`,{
            method:"PUT",
            headers:{

                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })

        const json=await res.json()
        console.log(json)

        if(json.msg=='true'){
            nav('/')
        }

        
    }

    updateUser()

  }} className="w-full bg-gradient-to-r cursor-pointer from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition duration-300">
    Upadate User
  </button>
</div>
</div>

    
  );
};

export default EditForm;





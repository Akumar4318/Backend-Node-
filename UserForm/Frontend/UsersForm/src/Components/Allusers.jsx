import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
const AllUsers = () => {
  const [user, setUser] = useState([]);
  const{id}=useParams()
  
const nav=useNavigate()
  useEffect(() => {
    async function getAllData() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/finduser");
        const data = await response.json();
        setUser(data.data);
        console.log(data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getAllData();
  }, []);



  if (user.length === 0) {
    return (
      <div className="flex h-screen w-full justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 drop-shadow-lg"
        >
          NO USER FOUND!
        </motion.h1>
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-10 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {user.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-xl rounded-3xl p-8 border border-yellow-300 hover:shadow-yellow-400 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 backdrop-blur-xl"
          >
            <h1 className="text-4xl font-extrabold mb-4 text-center tracking-wide animate-pulse drop-shadow-lg">
              {item.name}
            </h1>
            <p className="text-lg text-yellow-100 mb-2">Age: {item.age}</p>
            <p className="text-lg text-yellow-100 mb-2">Email: {item.email}</p>
            <p className="text-lg text-yellow-100 mb-2">DOB: {item.dob}</p>
            <p className="text-lg text-yellow-100 mb-4 truncate">Password: {item.password}</p>

            <div className="mt-6 flex justify-center space-x-6">
              <button onClick={()=>
nav(`/edit/${item._id}`)
              }
                className="px-6 py-3 cursor-pointer bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
              >
                Edit ✏️
              </button>
              <button 
              onClick={async () => {
                try {
                  const response = await fetch(`http://localhost:3000/api/v1/deleteuser/${item._id}`, {
                    method: "DELETE",
                  });
              
                  if (!response.ok) throw new Error("Failed to delete user");
              
                //   setUser(user.filter((u) => u._id !== item._id));
                const json=await response.json()
                console.log(json.data)
                setUser(json.data)
                } catch (error) {
                  console.error("Error deleting user:", error);
                }
              }}
              
                className="px-6 py-3 cursor-pointer bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 hover:scale-110 transition-all duration-300"
              >
                Delete ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;

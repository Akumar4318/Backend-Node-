import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    password: "",
    email: "",
    dob: "",
  });
  console.log(data)
const nav=  useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg p-8 shadow-2xl rounded-xl w-full max-w-md border border-white/20"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg"
        >
          ✨ Add User
        </motion.h2>

        <div className="space-y-6">
          {["name", "age", "password", "email", "dob"].map((field, index) => (
            <motion.input
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
              onChange={(e) => setData({ ...data, [field]: e.target.value })}
              value={data[field]}
              type={field === "password" ? "password" : field === "age" ? "number" : field === "dob" ? "date" : "text"}
              placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full px-4 py-3 border border-gray-300 bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-pink-400 outline-none placeholder-white/80 transition duration-300 ease-in-out transform focus:scale-105"
            />
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={async () => {

                if(data.name ==""||data.age ==""||data.password ==""||data.email ==""||data.dob ==""){
                    return
                }
              const response = await fetch(
                "http://localhost:3000/api/v1/createusers",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                }
              );
              const json = await response.json();
              console.log(json);

              if(json.success ==true){
                nav("/")
              }
            }}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-bold uppercase tracking-wider shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            Add User 🚀
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;

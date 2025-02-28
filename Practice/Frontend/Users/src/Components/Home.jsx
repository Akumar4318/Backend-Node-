import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const nav=useNavigate()

  useEffect(() => {
    async function getalldata() {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUserData(data);
    }

    getalldata();
  }, []);

  if(userData.length==0){
    return(
        <div className="flex h-lvh w-full items-center justify-center bg-amber-200">
            <h1 className="text-[5rem]">
            No user Found!
        </h1>
        </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mx-12 my-6">
  {userData &&
    userData.map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row gap-6 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 p-6 w-[300px] md:w-[350px] hover:shadow-xl transition duration-300"
      >
        {/* User Info Section */}
        <div className="flex flex-col gap-y-2 text-gray-900 w-full">
          <h3 className="text-xl font-semibold">Name: {item.name}</h3>
          <p className="text-sm">
            Age: <span className="font-medium">{item.age}</span>
          </p>
          <p className="text-sm">
            Email: <span className="font-medium">{item.email}</span>
          </p>
          <p className="text-sm">
            Password: <span className="font-medium">{item.password}</span>
          </p>
          <p className="text-sm">
            DOB: <span className="font-medium">{item.dob}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-y-3 w-fit h-fit mt-2">
          <button onClick={()=>{

                nav(`/edit/${item.id}`)
          }} className="flex- px-1 py-2 bg-blue-600 cursor-pointer text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Edit
          </button>
          <button onClick={()=>{
            fetch(`http://localhost:3000/users/${item.id}`,{
                method:"DELETE"
            }).then((res)=>{
                return res.json()
            }).then((data)=>{
                setUserData(data)
            })
          }} className="flex-1 px-4 py-2 bg-red-600 cursor-pointer text-white font-medium rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ">
            Delete
          </button>
        </div>
      </div>
    ))}
</div>

  );
};

export default Home;

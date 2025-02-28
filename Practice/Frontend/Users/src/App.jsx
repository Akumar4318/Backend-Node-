
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import New from "./Components/New"
import EditForm from "./Components/EditForm"




const App = () => {
  return (
    <div className="">
      
      <Navbar/>

      <Routes>

      <Route path='/' element={<Home/>}>Home</Route>
      <Route path="/new" element={<New/>}>New</Route>
      <Route path="/edit/:id" element={<EditForm/>}>editform</Route>

      </Routes>
    </div>
  )
}

export default App
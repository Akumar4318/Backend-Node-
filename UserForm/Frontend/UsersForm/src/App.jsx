import { Form, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import AddUser from "./Components/AddUser"
import Allusers from "./Components/Allusers"
import EditForm from "./Components/EditForm"


const App = () => {
  return (
    <div className="">

<Navbar/>

<Routes>
  <Route path="/adduser" element={<AddUser/>}></Route>
  <Route path="/" element={<Allusers/>}></Route>
  <Route path="/adduser" element={<Form/>}></Route>
  <Route path="/edit/:id" element={<EditForm/>}></Route>
</Routes>

    </div>
  )
}

export default App
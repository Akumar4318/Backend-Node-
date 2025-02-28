
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-end gap-6 p-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 shadow-md">
    <Link
      to={"/"}
      className="text-white text-lg font-medium hover:text-gray-200 transition duration-300"
    >
      Home
    </Link>
    <Link
      to={"new"}
      className="text-white text-lg font-medium hover:text-gray-200 transition duration-300"
    >
      New
    </Link>
  </div>
  
  )
}

export default Navbar
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../App";



const Header = () => {
  const location = useLocation();
  const {currentUser} = useContext(UserContext)
  




  return (
    <div className="flex w-full items-center justify-between px-8 sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="flex items-center justify-center gap-3">
        <img src={logo} className="w-[40px] h-[40px]" alt="" />
        <h1 className="text-orange-700 text-lg pt-1 font-medium">UltraViolet</h1>
      </div>
      <div className="flex items-center text-black justify-center gap-9">
        <Link to="/" className={`hover:text-orange-700   text-lg font-medium transition duration-150 ${location.pathname=== "/" ? "text-orange-700" : "text-black"}`}>
          <span>Home</span>
        </Link>
        <Link to="/blogs" className={`hover:text-orange-700  text-lg font-medium transition duration-150 ${location.pathname=== "/blogs" ? "text-orange-700" : "text-black"}`}>
          <span>Blogs</span>
        </Link>
        <Link to="/help" className={`hover:text-orange-700  text-lg font-medium transition duration-150 ${location.pathname=== "/help" ? "text-orange-700" : "text-black"}`}>
          <span>Help</span>
        </Link>
      </div>
      <Link to="/users" className="text-lg flex items-center justify-center font-medium gap-3 cursor-pointer hover:text-orange-700" >
        <span>{currentUser && currentUser.name}</span>
        <FaUserCircle />
      </Link>
    </div>
  );
};

export default Header;

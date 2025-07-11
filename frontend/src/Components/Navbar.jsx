import { useRef, useState } from "react";
import WebsiteLogo from "../assets/images/svg/logo.svg";
import { Link } from "react-router-dom";

// Components Imports
import DarkThemeButton from "./DarkThemeButton";
import AuthenticationModal from './AuthenticationModal';

const Navbar = () => {

  const loginModal = useRef(null)

  const [showModal, setShowModal] = useState(false);

  const handleModalBehaviour = () => {
    console.log("function is called")
    setShowModal((prev)=> !prev)
  }

  return (
    <>
      <AuthenticationModal visibility={handleModalBehaviour} />

      <header className="px-3 mt-8 fixed top-0 left-0 w-screen">
        <nav className="container mx-auto flex justify-between">
          <Link to="/coinpulse/">
            {/* Link to main page */}
            <img
              src={WebsiteLogo}
              alt="Coinpulse - Cryptocurrency Tracker  logo"
              className="w-50 sm:w-60"
            />
          </Link>

          <div className="flex items-center gap-2">
            <DarkThemeButton animation={false} />
            <button
              onClick={handleModalBehaviour}
              className="bg-gradient text-white px-5 md:px-5 lg:px-10 py-2 rounded-3xl tracking-wider font-extrabold text-[18px] sm:text-[20px] ls-1 transform
                          transition-all ease-in-out duration-300  hover:scale-x-85 origin-bottom">
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};






export default Navbar;

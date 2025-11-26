import { useState, forwardRef } from "react";
import WebsiteLogo from "../assets/images/svg/logo.svg";
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

// Components Imports
import DarkThemeButton from "./DarkThemeButton";
import AuthenticationModal from './AuthenticationModal';

const Navbar = forwardRef(function index(props, ref) {
  const [showModal, setShowModal] = useState(false);

  const handleModalBehaviour = () => {
    setShowModal((prev) => !prev)
  }


  return (
    <>
      <AuthenticationModal isVisible={showModal} onClose={handleModalBehaviour} />

      <header className={`flex items-center justify-center pt-8 w-full  ${showModal ? "z-[-1]" : "z-1"} `}>
        <nav className="container mx-auto flex items-center justify-center px-2">
          <Link to="/coinpulse/">
            {/* Link to main page */}
            <img
              src={WebsiteLogo}
              loading="lazy"
              alt="Coinpulse - Cryptocurrency Tracker  logo"
              className="w-45 sm:w-60"
            />
          </Link>
          {/* <div className="flex items-center gap-2">
            <motion.button
              ref={ref}
              onClick={handleModalBehaviour}
              className="bg-gradient-to-r from-red-500 to-orange-500 relative text-white px-6 py-2 text-sm sm:text-xl rounded-full font-medium cursor-pointer
                       hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg"
            >
              Login
            </motion.button>

          </div> */}
        </nav>
      </header >
    </>
  );
});



export default Navbar;
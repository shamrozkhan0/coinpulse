import { useState } from "react";
import WebsiteLogo from "../assets/images/svg/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isLogin, setIsLogin] = useState(false); // By default User is not logged

  return (
    <>
      <header className="px-3 py-5 fixed w-screen ">
        <nav className="container mx-auto flex justify-between">
          <Link to="/coinpulse/">
            {/* Link to main page */}
            <img
              src={WebsiteLogo}
              alt="Coinpulse - Cryptocurrency Tracker  logo"
              className="w-50 sm:w-60"
            />
          </Link>

          <div className="flex items-center">
            {

            }
            <button
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

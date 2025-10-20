import { useContext, useState } from "react";
import { MobileSizeContext, ThemeContext, } from "../context/context";

import { motion } from "framer-motion";

// Components Improts
import Login from "../Features/Login";
import Signup from "../Features/Signup";
import ButtonHover from "./ButtonHover";

// Assets Import
import plantImage from "../assets/images/plant.png";
import singlePlantImage from "../assets/images/plant1.svg";


const AuthenticationModal = ({ isVisible, onClose }) => {
  const [login, setLogin] = useState(true);
  // const isDark = useContext(ThemeContext);
  const isMobile = useContext(MobileSizeContext);


  return (
    <>
      <div
        onClick={onClose}
        className={`w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 transition-all ease-in-out duration-500 
        ${isVisible
            ? "backdrop-blur-xl opacity-100 z-[99999] pointer-events-auto"
            : "backdrop-blur-[0] opacity-0 z-[-2] pointer-events-none"
          }`}
      >

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.9 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="Authenticate Yourself"
          onClick={(e) => e.stopPropagation()}
          className={`rounded-3xl overflow-hidden  w-full max-w-[800px] h-full max-h-[562px] bg-cover bg-center bg-white  border-2 border-blue-300 `}
        >
          <div className="relative grid grid-cols-12 h-full w-full">
            <div
              className={`col-span-0 sm:col-span-5 ${isMobile ? '' : 'relative'} flex items-center justify-between`}
            >
              <img
                src={plantImage}
                alt="coinpulse - login and signup page decorations"
                className={`absolute top-0 right-0 w-full  `}
              />
{/* ${isMobile ? "opacity-20" : "opacity-50"} */}
              {!isMobile && (
                <h2
                  className={`font-medium text-2xl sm:text-3xl md:text-4xl ps-6 text-black
                  }`}
                >
                  Get Your portfolio{" "}
                  <ButtonHover Icon="💸">
                    <span className="text-green-500 cursor-pointer">Green</span>
                  </ButtonHover>

                  Again
                </h2>
              )}

              <img
                src={singlePlantImage}
                alt="coinpulse - login and signup page decorations"
                className={`rotate-180 absolute -bottom-10 -left-10 w-full`}
              />
            </div>

            <div className="col-span-12 sm:col-span-7 flex flex-col justify-between py-10 px-6 w-full h-full z-10 ">
              {login ? (
                <Login setLogin={setLogin} isVisible={isVisible} />
              ) : (
                <Signup setSignup={setLogin} isVisible={isVisible} />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>

  );
};

export default AuthenticationModal;
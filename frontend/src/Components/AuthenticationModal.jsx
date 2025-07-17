import { useContext, useEffect, useState } from "react";
import { MobileSizeContext, TabletSizeContext, ThemeContext, ThemeProvider } from "../context/context";

import { motion } from "framer-motion";

import plantImage from "../assets/images/plant.png"
import singlePlantImage from "../assets/images/plant1.svg"


// Authentication Features
import Login from "../Features/Login";
import Signup from "../Features/Signup";

const AuthenticationModal = ({ isVisible, onClose }) => {
  const [login, setLogin] = useState(true);

  const isDark = useContext(ThemeContext)
  const isMobile = useContext(MobileSizeContext)

  return (
    <div onClick={onClose}
      className={`w-full h-full absolute top-0 left-0 transition-all ease-in-out duration-200 bg-gradient-to-bl from-bg-[#0000002d] to-white flex items-center justify-center px-5
      ${isVisible ? "backdrop-blur-md opacity-100 z-[99999] pointer-events-auto" : "backdrop-blur-[0px] opacity-0 z-[-2] pointer-events-none"}
`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="Authenticate Yourself"
        onClick={(e) => e.stopPropagation()}
        className={`${isDark ? 'bg-[#0000001e]' : 'bg-white'} shadow-2xl shadow-blue-200 rounded-3xl overflow-hidden
            w-full max-w-[800px] h-full  max-h-[562px] bg-cover bg-center `}
      >
        <div className="relative grid grid-cols-12 h-full w-full ">

          <div className={`col-span-0  sm:col-span-5 ${!isMobile ? "relative" : ""} flex items-center justify-between`}>
            <img src={plantImage} alt="" className={`absolute top-0 left-0 w-full ${isMobile ? "opacity-20" : ""} `}/>
            
            { !isMobile ? 
                 <h2 
                   className={`text-black font-medium text-2xl sm:text-3xl md:text-4xl ps-6 ${isDark ? 'text-white' : 'text-black'}`}>Get Your portfolio <span className='text-green-500'>Green</span> Again.</h2>
              : null
            }
            <img 
              src={singlePlantImage}
              alt="" 
              className={`rotate-180  absolute -bottom-10 -left-10 w-full ${isMobile ? "opacity-40" : ""} `} />
          </div>

          <div className="col-span-12 sm:col-span-7 flex flex-col justify-between py-10 px-6  w-full h-full z-10">

            {login ? (
              <Login setLogin={setLogin} isVisible={isVisible} />
            ) : (
              <Signup setLogin={setLogin} isVisible={isVisible} />
            )}

          </div>

        </div >
      </motion.div >

    </div>
  );
};

export default AuthenticationModal;

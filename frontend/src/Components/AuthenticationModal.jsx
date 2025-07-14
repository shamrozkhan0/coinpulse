// import Login from "../assets/Features/login";

import { useState } from "react";
import { color, motion } from "framer-motion";

const AuthenticationModal = ({ isVisible, onClose }) => {
  const [login, setLogin] = useState(true);

  return (
    <div
      onClick={onClose}
      className={`w-screen h-screen  transition-all ease-in-out duration-200 bg-[#00000017]
           ${isVisible
          ? "backdrop-blur-md opacity-100 z-[99999px] pointer-events-auto"
          : "backdrop-blur-[1px] opacity-0 z-[-2] pointer-events-none"
        }
    `}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="Authenticate Yourself"
        onClick={(e) => e.stopPropagation()}
        className={`bg-white absolute top-1/2 left-1/2 transform -translate-1/2 shadow-2xl rounded-3xl overflow-hidden 
  `}
      >
        <div className="relative w-110 flex items-center justify-between flex-col gap-20 py-10 px-6 ">
          <header>
            <h1 className="font-roboto text-3xl font-semibold text-center ">
              {login ? "Authenticate Yourself" : "Be a pulser"}
            </h1>
          </header>

          <div className="w-full">
            <form action="" method="POST" className="">
              <div className="flex flex-col items-start gap-7">
                <input
                  type="text"
                  placeholder="Email"
                  className="font-roboto border-b-1 placeholder-[#808080] border-black w-full  p-2 outline-0 "
                  required
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="font-roboto border-b-1 border-black w-full p-2 outline-0 "
                  required
                />
                
                <a
                  href=""
                  className="font-roboto text-end w-full text-blue-700 underline underline-offset-4 font-normal"
                >
                  Forget Password
                </a>
              </div>
              <div className="flex flex-col items-start gap-5 pt-30">
                <button
                  type="submit"
                  className="font-roboto bg-gradient w-full text-white py-2 rounded-4xl"
                >
                  Unlock Pulse
                </button>
                <p className="font-roboto text-end w-full">
                  Already a member?{" "}
                  <a
                    href=""
                    className="text-blue-700 underline underline-offset-4"
                  >
                    Access Pulse
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthenticationModal;

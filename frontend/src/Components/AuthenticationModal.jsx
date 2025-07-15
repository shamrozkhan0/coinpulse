import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";

// Authentication Features
import Login from "../Features/Login";
import Signup from "../Features/Signup";

const AuthenticationModal = ({ isVisible, onClose }) => {
  const [login, setLogin] = useState(true);

  return (
    <div onClick={onClose}
      className={`w-full h-full relative transition-all ease-in-out duration-200 bg-[#00000017] flex items-center justify-center px-5
           ${
             isVisible
               ? "backdrop-blur-md opacity-100 z-[99999px] pointer-events-auto"
               : "backdrop-blur-[1px] opacity-0 z-[-2] pointer-events-none"
           }
    `}>
      {login ? (
        <Login setLogin={setLogin} isVisible={isVisible} />
      ) : (
        <Signup setLogin={setLogin} isVisible={isVisible} />
      )}
    </div>
  );
};

export default AuthenticationModal;

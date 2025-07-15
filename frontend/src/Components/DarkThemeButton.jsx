import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// Import contexts
import { ThemeContext, ThemeUpdaterContext } from "../context/context";

const DarkThemeButton = ({ animation }) => {
  const theme = useContext(ThemeContext);         // true = dark
  const setTheme = useContext(ThemeUpdaterContext);

  // Apply theme on mount and on toggle
  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = "black";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const animationsProps = animation
    ? {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: { ease: "easeInOut", delay: 0.8, duration: 0.4 },
      }
    : {};

  return (
    <motion.div
      {...animationsProps}
      onClick={() => setTheme((prev) => !prev)}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 shadow-[0px_0px_3px_black]
        ${theme ? "bg-yellow-300" : "bg-orange-400"}`}
    >
      <div
        className={`w-6 h-6 bg-black rounded-full shadow-md transform transition-transform duration-300 
          flex items-center justify-center
          ${theme ? "translate-x-6" : "translate-x-0"}`}
      >
        <FontAwesomeIcon
          icon={theme ? faMoon : faSun}
          className="text-white"
        />
      </div>
    </motion.div>
  );
};

export default DarkThemeButton;

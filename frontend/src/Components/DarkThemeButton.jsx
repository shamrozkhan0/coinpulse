import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkThemeButton = ({ animation }) => {
  const storedTheme = localStorage.getItem("theme");
  const [enabled, setEnabled] = useState(storedTheme === "dark");

  // ✅ Apply theme on mount and when toggled
  useEffect(() => {
    if (enabled) {
      document.body.style.backgroundColor = "black";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  const animationsProps = animation
    ? {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: { ease: "easeInOut", delay: 0.8, duration: 0.4 },
      }
    : {};

  return (
    <motion.div
      // This animation appear only if animation props is true
      {...animationsProps}
      onClick={() => setEnabled(!enabled)}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 shadow-lg
          ${enabled ? "bg-yellow-300" : "bg-orange-400-"}`}
    >
      <div
        className={`w-6 h-6 bg-black rounded-full shadow-md transform transition-transform duration-300 
            flex items-center justify-center
            ${enabled ? "translate-x-6" : "translate-x-0"}`}
      >
        <FontAwesomeIcon
          icon={enabled ? faMoon : faSun}
          className="text-white"
        />
      </div>
    </motion.div>
  );
};

export default DarkThemeButton;

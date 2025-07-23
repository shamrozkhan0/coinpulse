import { useEffect, useRef } from "react";
import Typed from "typed.js"; // TypedJS
import { motion } from "framer-motion"; // Framer Motion imports

// Components Imports
import DarkThemeButton from "./DarkThemeButton";

/**
 * Loader
 * Interactive Loader shown to user until website DOM is being loaded at the background
 */
const Loader = ({ DOMLoaded }) => {
  const typingInput = useRef(null);

  // Load Typed.js
  useEffect(() => {
    const typed = new Typed(typingInput.current, {
      strings: ["coinpulse"],
      typeSpeed: 70,
      showCursor: false,
      loop: false,
    });

    return () => typed.destroy();
  }, []);


  // Load Particles.js
  useEffect(() => {
    try {
      if (window.particlesJS) {
        window.particlesJS.load("particles-js", "particles.json", () => {
          console.log("Particles.js loaded");
        });
      } else {
        console.error("particles.js not available");
      }
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  
  return (
    <div
      id="particles-js"
      className={`flex items-center justify-center absolute inset-0 -z-10 transition-opacity duration-700 ease-in-out ${
        DOMLoaded ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-fit fixed">
        <h1
          ref={typingInput}
          className="text-6xl sm:text-8xl bg-clip-text text-transparent heading-gradient w-fit transition-all ease-in-out"
        ></h1>

        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.4 }}
            className="bg-amber-600 text-white font-bold text-sm  sm:text-2xl px-5 py-2 rounded-4xl"
          >
            Status: developing
          </motion.p>
          {/* <DarkThemeButton animation={true} /> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;

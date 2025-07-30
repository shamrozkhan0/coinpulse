import { useEffect, useRef } from "react";
import Typed from "typed.js"; // TypedJS
import { motion } from "framer-motion"; // Framer Motion imports

//  Components Imports
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
    <>
      <div
        id="particles-js"
        className={`flex items-center justify-center inset-0 absolute transition-opacity duration-700 ease-in-out w-screen h-screen 
        ${DOMLoaded ? "opacity-0" : "opacity-100"}
        `}
      >
        {/* Smoky background blobs */}
     <div className="absolute top-10 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
<div className="absolute bottom-20 right-1/3 w-64 h-64 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-3s' }} />
<div className="absolute top-1/2 left-1/2 w-52 h-52 md:w-64 md:h-64 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-1.5s' }} />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        </div>


          <div className="flex absolute top-[50%] left-[50%] transform translate-[-50%] flex-col items-start justify-center gap-3 z-10 pointer-events-none">
            <h1
              ref={typingInput}
              className="text-6xl sm:text-8xl bg-clip-text text-transparent heading-gradient w-fit transition-all ease-in-out drop-shadow-2xl relative z-10"
            ></h1>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 0.4 }}
              className="bg-secondary-gradient backdrop-blur-lg text-white font-bold text-sm sm:text-2xl px-5 py-2 rounded-full shadow-lg
                  hover:scale-105 transition-all duration-300"
            >
              Status: Loading
            </motion.p>
            {/* <DarkThemeButton animation={true} /> */}
          </div>

        </div>
    </>
  )
};

export default Loader;
import { useState, useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion';
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import CoinCard from './Components/button';

function App() {
  const typingInput = useRef(null);

  // Load Typed.js
  useEffect(() => {
    const typed = new Typed(typingInput.current, {
      strings: ["coinpulse"],
      typeSpeed: 50,
      backSpeed: 30,
      smartBackspace: true,
      showCursor: false,
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  // Load Particles.js
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', 'particles.json', () => {
        console.log("Particles.js loaded");
      });
    } else {
      console.error("particles.js not available");
    }
  }, []);

  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div id="particles-js" className={`flex items-center justify-center absolute inset-0 -z-10 duration-300 ${enabled ? "bg-black" : ''}`}>
        <div className="w-fit fixed">
          <h1
            className="text-6xl sm:text-8xl bg-clip-text text-transparent heading-gradient w-fit transition-all ease-in-out"
            ref={typingInput}
          >
          </h1>

          <div className="flex items-center justify-between">
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 0.4 }}
              className="bg-amber-800 text-white font-bold text-sm  sm:text-2xl px-5 py-2 rounded-4xl"
            >
              Status: developing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 0.4 }}
              onClick={() => setEnabled(!enabled)}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 
                ${enabled ? 'bg-green-500' : 'bg-gray-400'}`}
            >
              <div
                className={`w-6 h-6 bg-black rounded-full shadow-md transform transition-transform duration-300 
                              flex items-center justify-center
                      ${enabled ? 'translate-x-6' : 'translate-x-0'}`}
              ><FontAwesomeIcon icon={enabled ? faMoon : faSun} className="text-white" />
              </div>
            </motion.div>


          </div>

        </div>

      </div>



    </>
  )
}

export default App;

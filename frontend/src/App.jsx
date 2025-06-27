import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion';
import 'particles.js'
import './App.css'
// import particelJson from ''

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

    if (window.particlesJS && window.particlesJSON) {
      console.log("particlejs is imported ")
      window.particlesJS.load('particles-js', '/particles.json', () => {
        console.log("Particles.js loaded");
      });

    }

  }, []);

  return (
    <>
      <div id="particles-js" className="w-screen h-screen flex items-center justify-center fixed z-[-1]" >
        <div className="w-fit relative">
          <h1
            className="text-8xl bg-clip-text text-transparent heading-gradient w-fit transition-all ease-in-out"
            ref={typingInput}
          >
            &nbsp;
          </h1>

          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.4 }}
            className="bg-amber-800 text-white font-bold text-2xl px-5 py-2 rounded-4xl absolute left-0 bottom-[-50px]"
          >
            Status: Working...
          </motion.p>
        </div>
      </div>
    </>
  )
}

export default App;

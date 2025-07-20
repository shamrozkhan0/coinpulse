import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ButtonHover = ({ children, Icon }) => {

  const [fireElements, setFireElements] = useState([]);
  const intervalRef = useRef(null);
  const idCounterRef = useRef(0);

  const startSpawning = () => {
    intervalRef.current = setInterval(() => {
      idCounterRef.current += 1;
      const newFire = {
        id: idCounterRef.current,
        startTime: Date.now()
      };
      
      setFireElements(prev => [...prev, newFire]);
    }, 150);
  };

  const stopSpawning = () => {
    clearInterval(intervalRef.current);
    // Don't clear the array immediately - let existing animations finish
    setTimeout(() => {
      setFireElements([]);
    }, 500);
  };


  return (
    // <section className="flex items-center justify-center">
      <motion.button
        onHoverStart={startSpawning}
        onHoverEnd={stopSpawning}
        className="relative cursor-pointer hover:from-red-600 hover:to-orange-600 transition-all duration-200 "
        style={{ overflow: 'visible' }}
      >
        {fireElements.map((element) => (
          <motion.span
            key={element.id}
            initial={{ y: -20, x: 0, opacity: 1 }}
            animate={{ 
              y: -70, 
              x: [0, 5, -5, 5, -5,0],
              opacity: [1, 1, 1, 0.5, 0]
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            onAnimationComplete={() => {
              // Remove this specific element after animation completes
              setFireElements(prev => prev.filter(el => el.id !== element.id));
            }}
            className="absolute top-0 left-[50%] transform -translate-x-[50%] pointer-events-none select-none text-3xl"
            style={{ zIndex: 10 }}
          >
          {Icon}
          </motion.span>
        ))}
        {children}
      </motion.button>
    // </section>
  );
};

export default ButtonHover;
import { useState } from 'react';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkThemeButton = () => {

    const [enabled, setEnabled] = useState(false);

    if(enabled){
        console.log("Enabled : "+ enabled)
        document.body.style.backgroundColor = 'black'
    } else{
        document.body.style.backgroundColor = 'white'
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.4 }}
            onClick={() => setEnabled(!enabled)}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 
                ${enabled ? "bg-green-500" : "bg-gray-400"}`}
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
    )
}

export default DarkThemeButton
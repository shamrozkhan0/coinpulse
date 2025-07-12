import React from 'react'
import { motion } from 'framer-motion'

const AuthenticationModal = ({ isVisible, onClose }) => {
  return (
    <div className={`w-screen h-screen  transition-all ease-in-out duration-500
           ${isVisible ? "backdrop-blur-lg opacity-100 z-[99999px] pointer-events-auto" : "backdrop-blur-none opacity-0 z-[-2] pointer-events-none"}
    `}>
      <div
        role='dialog' aria-modal='true' aria-labelledby='Authenticate Yourself'
        className={`bg-white w-fit px-6 py-2 absolute top-[50%] transform translate-[-50%] left-[50%] 
              ${isVisible ? " " : ""}
        `}
      >
        <h1 className='font-roboto text-4xl'>login</h1>

        <button className='p-2 bg-amber-950' onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default AuthenticationModal;
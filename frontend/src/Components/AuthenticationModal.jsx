import React from 'react'


const AuthenticationModal = ({ visibility }) => {
  return (
    <div role='dialog' aria-modal='true' aria-labelledby='Authenticate Yourself'
      className={`bg-white w-fit px-6 py-2 absolute ${visibility ? "top-10" : "-top-100"} transition-all ease-in-out duration-400`}>
      <h1 className='font-roboto text-4xl'>login</h1>

      <button className='p-2 bg-amber-950' onClick={visibility}>Close</button>
    </div>
  )
}

export default AuthenticationModal;
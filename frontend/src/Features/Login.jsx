import React, { useContext } from 'react'
import { ThemeContext } from '../context/context';
import {Input} from "@heroui/react";

const Login = ({ setLogin, isVisible }) => {

  const isDark = useContext(ThemeContext);


  return (
    <>
      <header className=''>
        <h1 className={`font-roboto text-3xl font-semibold text-center text-white`}>
          Authenticate <span className='text-gradient'>Yourself</span>
        </h1>
      </header>

      <form action="" method="POST" className="">
        <div className="flex flex-col items-start gap-7">
          <input
            type="email"
            placeholder="Email"
            className={`font-roboto border-b-1 w-full p-2 outline-0 text-white border-white`}
            required
          />
          <input
            type="text"
            placeholder="Password"
            className={`font-roboto border-b-1 w-full p-2 outline-0 text-white border-white`}
            required
          />
          <a
            href=""
            className="font-roboto text-end w-full text-blue-500 underline underline-offset-4 font-normal"
          >
            Forgot Password
          </a>
        </div>
        <div className="flex flex-col items-start gap-5 pt-30">
          <button
            type="submit"
            onClick={(e) => { e.preventDefault(); alert("Currently The backend is not hosted yet so the form is not wokring ") }}
            className="font-roboto bg-secondary-gradient w-full text-white py-2 rounded cursor-pointer"
          >
            Access Pulse
          </button>
          <p className={`font-roboto text-end w-full text-white flex items-center justify-end gap-1`}>
            Don't have an account?
            <button
              type="button"
              onClick={() => setLogin(false)}
              className="text-blue-500 underline underline-offset-4 cursor-pointer">
              Be a Member
            </button>
          </p>
        </div>
      </form>
    </>
  )
}

export default Login;
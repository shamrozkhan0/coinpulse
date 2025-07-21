import React, { useContext } from 'react'
import { ThemeContext } from '../context/context';
import {Input} from "@heroui/react";

const Login = ({ setLogin, isVisible }) => {

  const isDark = useContext(ThemeContext);

  console.log(`is visile ${isVisible}`)

  return (
    <>
      <header className=''>
        <h1 className={`font-roboto text-3xl font-semibold text-center ${isDark ? "text-white" : "text-black"}`}>
          Authenticate <span className='text-gradient'>Yourself</span>
        </h1>
      </header>

      <form action="" method="POST" className="">
        <div className="flex flex-col items-start gap-7">
          <input
            type="email"
            placeholder="Email"
            className={`font-roboto border-b-1 w-full p-2 outline-0 ${isDark ? "text-white border-white" : "text-black border-black"} `}
            required
          />
          <input
            type="text"
            placeholder="Password"
            className={`font-roboto border-b-1 w-full p-2 outline-0 ${isDark ? "text-white border-white" : "text-black border-black"}`}
            required
          />
          <a
            href=""
            className="font-roboto text-end w-full text-blue-500 underline underline-offset-4 font-normal"
          >
            Forget Password
          </a>
        </div>
        <div className="flex flex-col items-start gap-5 pt-30">
          <button
            type="submit"
            onClick={(e) => { e.preventDefault(); alert("Currently The backend is not hosted yet so the form is not wokring ") }}
            className="font-roboto bg-gradient w-full text-white py-2 rounded cursor-pointer"
          >
            Access Pulse
          </button>
          <p className={`font-roboto text-end w-full  ${isDark ? "text-white" : "text-black"} flex items-center justify-end gap-1`}>
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
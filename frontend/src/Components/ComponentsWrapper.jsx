import { useState, useEffect } from 'react'

// Website Components Imports 
import Navbar from './Navbar';


const ComponentsWrapper = ({ theme }) => {

    const [render, setRender] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(() => setRender(true), 200);
        return () => clearTimeout(timeout)
    }, [])


    return (
        <div className={`transition-opacity ease-in-out duration-800 h-screen ${theme ? "bg-black" : ""} ${render ? "opacity-100" : "opacity-0"}`}>
            <Navbar/>
        </div>
    )
}

export default ComponentsWrapper
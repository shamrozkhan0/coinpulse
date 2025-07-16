import { useState, useEffect, useRef, useContext } from 'react'

// Website Components Imports 
import Navbar from './Navbar';
import MouseBall from '../Features/MouseBall'
import Blob from './Blob';
import { MobileSizeContext } from '../context/context';

const ComponentsWrapper = ({ theme }) => {

    const [render, setRender] = useState(false);
    // const [isTabletSize, setIsTabletSize] = useState(window.innerWidth > 768) // By default we assume the screen is large

    const stickyElement = useRef(null);
    const isTabletSize = useContext(MobileSizeContext) 


    useEffect(() => {
        const timeout = setTimeout(() => setRender(true), 200);
        return () => clearTimeout(timeout)
    }, [])


    // const handleResize = () => {
    //     setIsTabletSize(window.innerWidth > 768);
    // }


    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     console.log(isTabletSize)

    //     return () => window.removeEventListener('resize', handleResize);
    // }, [])

    return (
        <div
         className={`relative h-screen w-screen transition-opacity ease-in-out duration-800 overflow-hidden
           ${render ? "opacity-100" : "opacity-0"}  `}
        >
           { !isTabletSize ?  <MouseBall stickyElement={stickyElement} /> : null}
            <Navbar ref={stickyElement} />
        </div>
    )
}

export default ComponentsWrapper
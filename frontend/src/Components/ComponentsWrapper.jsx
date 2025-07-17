import { useState, useEffect, useRef, useContext } from 'react'

// Website Components Imports 
import Navbar from './Navbar';
import MouseBall from '../Features/MouseBall'
import Blob from './Blob';
import {TabletSizeContext } from '../context/context';

const ComponentsWrapper = () => {

    const [render, setRender] = useState(false);

    const stickyElement = useRef(null);
    const isTabletSize = useContext(TabletSizeContext) 


    useEffect(() => {
        const timeout = setTimeout(() => setRender(true), 200);
        return () => clearTimeout(timeout)
    }, [])

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
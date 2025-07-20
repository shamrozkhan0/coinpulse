import { useState, useEffect, useRef, useContext } from 'react'

// Website Components Imports 
import Navbar from './Navbar';
import MouseBall from '../Features/MouseBall'
import Banner from './Banner';

// Context Import
import {TabletSizeContext } from '../context/context';
import ButtonHover from './ButtonHover';

/**
 * This will render after the DOM is fully loaded
 */
const ComponentsWrapper = () => {
    const stickyElement = useRef(null);
    const [render, setRender] = useState(false);
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
            {/* <ButtonHover/> */}
            <Banner/>
        </div>
    )
}

export default ComponentsWrapper
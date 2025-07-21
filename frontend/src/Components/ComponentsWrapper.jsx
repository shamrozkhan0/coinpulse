import { useState, useEffect, useRef, useContext } from 'react'

// Website Components Imports 
import Navbar from './Navbar';
import MouseBall from '../Features/MouseBall'
import Banner from './Banner';

// Context Import
import { TabletSizeContext } from '../context/context';
import bgImage from '../assets/images/bg.jpg'

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
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
            className={`relative h-screen w-screen transition-opacity ease-in-out duration-800 overflow-hidden px-2  
           ${render ? "opacity-100" : "opacity-0"}`}
        >
            {!isTabletSize ? <MouseBall stickyElement={stickyElement} /> : null}
            <div className="z-[100]">
                <Navbar ref={stickyElement} />
                <Banner />
            </div>
        </div>
    )
}

export default ComponentsWrapper
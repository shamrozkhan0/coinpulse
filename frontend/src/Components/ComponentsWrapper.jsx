import { useState, useEffect, useContext } from 'react'

// Website Components Imports 
import Navbar from './Navbar';
// import Banner from './Banner';

// Context Import
import { TabletSizeContext } from '../context/context';
import bgImage from '../assets/images/bg.jpg' ;
import Banner from './Banner';


/**
 * This will render after the DOM is fully loaded
 */
const ComponentsWrapper = ({ DOMLoaded, stickyElement }) => { // by default this is false
    const [render, setRender] = useState(DOMLoaded);
    const isTabletSize = useContext(TabletSizeContext)

    useEffect(() => {
        let timeout;
        if (DOMLoaded) {
          timeout = setTimeout(() => setRender(true), 200);
        }
        return () => clearTimeout(timeout)
    }, [DOMLoaded])

    return (
        <div
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
            className={`relative w-screen h-screen transition-opacity ease-in-out duration-800  ${render ? "opacity-100" : "opacity-0"}  `}>
            {/* <div className="h-full"> */}
                <Navbar ref={stickyElement} />
                <Banner/>
            {/* </div> */}
        </div>
    )
}

export default ComponentsWrapper;
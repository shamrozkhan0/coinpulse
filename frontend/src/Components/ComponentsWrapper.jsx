import React, { useState, useEffect } from 'react'
import HeavyImages from './HeavyImages'

const ComponentsWrapper = () => {

    const [render, setRender] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(setRender(true), 100)
    
      return () => clearTimeout(timeout)
    }, [])
    

    return (
        <div className={`${ render ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-1500`}>
            <h1>iqjweoidi</h1>
            <HeavyImages />
        </div>
    )
}

export default ComponentsWrapper
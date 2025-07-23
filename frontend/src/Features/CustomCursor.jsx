import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursor = useRef(null)

    useEffect(()=>{
        const move = (e) => {
            cursor.current.style.top = `${e.clientY}px`;
           cursor.current.style.left = `${e.clientX}px`;
        }
        window.addEventListener('mousemove', move);

        return ()=> window.removeEventListener("mousemove", move)
    },[])


  return (
    <div 
     ref={cursor}
     className='custom-cursor z-[9999999]'>

    </div>
  )
}

export default CustomCursor
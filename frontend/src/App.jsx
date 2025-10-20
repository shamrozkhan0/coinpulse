import { lazy, useContext, useEffect, useRef, useState, } from "react";
import "./App.css";

// Components Imports
import Loader from "./Components/Loader";
// import MouseBall from './Features/MouseBall';
import { MobileSizeContext } from "./context/context";
const ComponentsWrapper = lazy(() => import("./Components/ComponentsWrapper"));

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [shouldRemoveLoader, setShouldRemoveLoader] = useState(false)

  const stickyElement = useRef(null);
  const isTablet = useContext(MobileSizeContext)


   
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    setTimeout(() => {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }, 1600);

    return () => window.removeEventListener("load", handleLoad);
  }, []);


  useEffect(()=>{

    if(!isloaded) return;

    const removeLoader = () => setShouldRemoveLoader(true)

    const removeTimeout = setTimeout(()=>{
     removeLoader(); 
    }, 300)
    
  },[isloaded])



  return (
    <>
      {/* {isTablet ? null : <MouseBall stickyElement={stickyElement}/> } */}
      {shouldRemoveLoader ? null : <Loader DOMLoaded={isloaded} />}
      <ComponentsWrapper DOMLoaded={isloaded} stickyElement={stickyElement} />
    </>
  );
}

export default App;
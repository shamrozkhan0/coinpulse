import { lazy, Suspense, useEffect, useRef, useState, } from "react";
import { ThemeProvider } from "./context/context";
import "./App.css";

// Components Imports
import Loader from "./Components/Loader";
import MouseBall from './Features/MouseBall';
const ComponentsWrapper = lazy(() => import("./Components/ComponentsWrapper"));


function App() {

  const [isloaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const stickyElement = useRef(null);

  
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
  
  
  useEffect(() => {
    if (isloaded) {
      const Timeout = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(Timeout)
    }
  }, [isloaded])

  return (
    <ThemeProvider>
      {/* <MouseBall stickyElement={stickyElement} /> */}
      <Loader DOMLoaded={isloaded} />
      <ComponentsWrapper DOMLoaded={isloaded} stickyElement={stickyElement} />
    </ThemeProvider>
  );
}

export default App;
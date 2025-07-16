import { useEffect, useState, } from "react";
import { ThemeProvider } from "./context/context";
import "./App.css";

// Components Imports
import Loader from "./Components/Loader";
import ComponentsWrapper from "./Components/ComponentsWrapper";
import MouseBall from './Features/MouseBall';


function App() {

  const [isloaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    setTimeout(() => {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }, 1500);

    return () => window.removeEventListener("load", handleLoad);
  }, []);



  useEffect(() => {
    if (isloaded) {
      const Timeout = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(Timeout)
    }
  }, [isloaded])

  // return <Loader DOMLoaded={isloaded} theme={theme}/>
  return <ThemeProvider><ComponentsWrapper /></ThemeProvider>

  // return (

  //   <ThemeProvider>
  //     {showContent ? <ComponentsWrapper /> : <Loader DOMLoaded={isloaded} />}
  //   </ThemeProvider>

  // );
}

export default App;
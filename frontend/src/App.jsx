import "./App.css";
import { useEffect, useState } from "react";

// Components Imports
import Loader from "./Components/Loader";
import ComponentsWrapper from "./Components/ComponentsWrapper";


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
    }, 1700);

    return () => window.removeEventListener("load", handleLoad);
  }, []);



  useEffect(() => {
    if (isloaded) {
      const Timeout = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(Timeout)
    }
  }, [isloaded])




  // return <Loader DOMLoaded={isloaded} theme={theme}/>
  return <ComponentsWrapper />

  // return showContent ? <ComponentsWrapper/> : <Loader DOMLoaded={isloaded}/>;
}

export default App;
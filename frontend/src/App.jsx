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
    }, 1600);
    return () => window.removeEventListener("load", handleLoad);
  }, []);


  useEffect(() => {
    if (isloaded) {
      console.log("isloaded beocme true")
      const Timeout = setTimeout(() => {
        setShowContent(true)
      }, 300);

      return () => clearTimeout(Timeout)

    }
  }, [isloaded])



  return <>{!showContent ? <Loader DOMLoaded={isloaded}  /> : <ComponentsWrapper/>}</>;
}

export default App;
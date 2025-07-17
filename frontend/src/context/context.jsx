import { Children, createContext, useState, useEffect } from "react";


// Contexts
export const ThemeContext = createContext();
export const ThemeUpdaterContext = createContext();
export const TabletSizeContext = createContext();
export const MobileSizeContext = createContext();

// Provider
export const ThemeProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(false); // false = light, true = dark
  const [isTabletSize, setIsTabletSize] = useState(window.innerWidth < 768) // By default we assume the screen is large
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 640)

  const handleTabletResize = () => {
    setIsTabletSize(window.innerWidth < 768);
  }

  const handleMobileResize = () => {
    setIsMobileSize(window.innerWidth < 640)
  }

  useEffect(() => {
    window.addEventListener("resize", handleMobileResize);
    return () => window.removeEventListener("resize", handleMobileResize)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleTabletResize);
    return () => window.removeEventListener('resize', handleTabletResize);
  }, [])


  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeUpdaterContext.Provider value={setIsDark}>
        <TabletSizeContext.Provider value={isTabletSize}>
          <MobileSizeContext value={isMobileSize}>
            {children}
          </MobileSizeContext>
        </TabletSizeContext.Provider>
      </ThemeUpdaterContext.Provider>
    </ThemeContext.Provider>
  );
};

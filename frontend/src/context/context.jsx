import { Children, createContext, useState, useEffect } from "react";


// Contexts
export const ThemeContext = createContext();
export const ThemeUpdaterContext = createContext();
export const MobileSizeContext = createContext();
export const MobileSizeUpdaterContext = createContext();

// Provider
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); // false = light, true = dark
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth > 768) // By default we assume the screen is large

  const handleResize = () => {
    setIsMobileSize(window.innerWidth < 768);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // console.log(isTabletSize)

    return () => window.removeEventListener('resize', handleResize);
  }, [])


  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeUpdaterContext.Provider value={setIsDark}>
        <MobileSizeContext.Provider value={isMobileSize}>
          <MobileSizeUpdaterContext value={setIsMobileSize}>
              {children}
          </MobileSizeUpdaterContext>
        </MobileSizeContext.Provider>
      </ThemeUpdaterContext.Provider>
    </ThemeContext.Provider>
  );
};

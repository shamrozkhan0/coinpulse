import { createContext, useState } from "react";

// Contexts
export const ThemeContext = createContext();
export const ThemeUpdaterContext = createContext();

// Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false); // false = light, true = dark

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={setTheme}>
        {children}
      </ThemeUpdaterContext.Provider>
    </ThemeContext.Provider>
  );
};

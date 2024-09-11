import React, { createContext, useState } from 'react';

// Create and export the context
export const ThemeContext = createContext();

// Create and export the provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

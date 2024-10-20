// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Check localStorage for the theme, default to light theme
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');

  // Whenever the theme changes, store it in localStorage
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.className = theme; // Set the className of the body for easy theming
  }, [theme]);

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

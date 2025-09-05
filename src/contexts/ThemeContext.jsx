import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Detectar tema inicial
    const detectTheme = () => {
      const isDark = document.body.classList.contains("theme-dark") || 
                    window.matchMedia("(prefers-color-scheme: dark)").matches;
      const newTheme = isDark ? "dark" : "light";
      setTheme(newTheme);
      
      // Aplicar classe no HTML
      document.documentElement.className = newTheme;
    };
    
    detectTheme();
    
    // Listener para mudanças de preferência do sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => detectTheme();
    
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Aplicar classe no HTML quando o tema mudar
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

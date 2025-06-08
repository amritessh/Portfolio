import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true); // Changed to always start as true

  useEffect(
    () => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    },
    [darkMode]
  );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return [darkMode, toggleDarkMode];
};

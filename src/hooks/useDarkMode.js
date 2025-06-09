import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(
    () => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    },
    [darkMode]
  );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return [darkMode, toggleDarkMode];
};

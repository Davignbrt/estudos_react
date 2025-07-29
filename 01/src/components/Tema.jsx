import React, { useState, useEffect } from 'react';

export default function Tema(){
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleTheme}>
      Mudar para {darkMode ? 'Tema Claro' : 'Tema Escuro'}
    </button>
  );
};


// src/components/common/Footer.jsx
import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-8 px-4 border-t ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className='max-w-6xl mx-auto text-center'>
        <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          © 2025 Amritesh Anand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

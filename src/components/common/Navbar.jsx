import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollToSection';

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'work', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode ? 'bg-slate-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${
        darkMode ? 'border-slate-800' : 'border-slate-200'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-xl font-semibold flex-shrink-0'
          >
            <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
              Amritesh Anand
            </span>
          </motion.div>

          <div className='flex items-center gap-1 sm:gap-3 lg:gap-6 overflow-x-auto'>
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? darkMode
                      ? 'text-slate-100'
                      : 'text-slate-900'
                    : darkMode
                    ? 'text-slate-400 hover:text-slate-100'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='hidden sm:inline'>{item.label}</span>
                <span className='sm:hidden'>
                  {item.label === 'Portfolio' ? 'Work' : item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId='navbar-indicator'
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600'
                  />
                )}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`ml-1 sm:ml-2 p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <span className='text-sm sm:text-base'>
                {darkMode ? '☀️' : '🌙'}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

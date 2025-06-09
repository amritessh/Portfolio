import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProfileImage = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className='relative order-1 md:order-2'
    >
      <div className='relative w-60 h-60 sm:w-60 sm:h-60 mx-auto'>
        <div
          className={`absolute inset-0 ${
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
          } rounded-2xl rotate-6 shadow-lg`}
        ></div>
        <div
          className={`absolute inset-0 ${
            darkMode ? 'bg-slate-700' : 'bg-slate-100'
          } rounded-2xl -rotate-6 shadow-lg`}
        ></div>
        <div
          className={`relative h-full ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          } rounded-2xl overflow-hidden shadow-xl flex items-center justify-center`}
        >
          {/* Replace with actual image */}
          <img
            src='src/IMG_4434.jpg'
            alt='Profile'
            className='w-full h-full object-cover'
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span
            className={`${
              darkMode ? 'text-slate-600' : 'text-slate-400'
            } hidden`}
          >
            Your Photo
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;

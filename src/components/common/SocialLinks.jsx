import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialLinks';

const SocialLinks = ({ darkMode, showLabels = false }) => {
  return (
    <div className={`flex gap-${showLabels ? '4' : '3'}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.1, y: -2 }}
          className={`${
            showLabels ? 'px-3 py-2' : 'w-10 h-10'
          } flex items-center justify-center rounded-lg ${
            darkMode
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          } transition-all`}
          title={social.name}
        >
          {social.icon}
          {showLabels && (
            <span className='hidden sm:inline text-sm ml-2'>{social.name}</span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;

import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';

const ContactInfo = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className='text-2xl font-semibold mb-6'>Let's Connect</h3>
      <p className={`mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        I'm always interested in hearing about new projects and opportunities.
        Schedule a call with me to discuss how we can work together!
      </p>

      <div className='space-y-4 mb-8'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white'>
            📧
          </div>
          <div>
            <p className='font-medium'>Email</p>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              amriteshanand7@gmail.com
            </p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white'>
            📍
          </div>
          <div>
            <p className='font-medium'>Location</p>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Boston, MA
            </p>
          </div>
        </div>
      </div>

      <SocialLinks darkMode={darkMode} showLabels={true} />
    </motion.div>
  );
};

export default ContactInfo;

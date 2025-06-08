import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';
import ProfileImage from './ProfileImage';
import { scrollToSection } from '../../utils/scrollToSection';

const Hero = ({ darkMode }) => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 pt-16'
    >
      <div className='max-w-6xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='order-2 md:order-1'
          >
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
              Hi, I'm{' '}
              <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                John Doe
              </span>
            </h1>
            <h2
              className={`text-2xl sm:text-3xl mb-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Full Stack Developer
            </h2>
            <p
              className={`text-lg mb-8 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              I build exceptional digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and continuous
              learning.
            </p>

            <div className='flex gap-4 flex-wrap mb-8'>
              <motion.button
                onClick={() => scrollToSection('work')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow'
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium border-2 ${
                  darkMode
                    ? 'border-slate-700 hover:bg-slate-800'
                    : 'border-slate-300 hover:bg-slate-50'
                } transition-colors`}
              >
                Get In Touch
              </motion.button>
            </div>

            <SocialLinks darkMode={darkMode} />
          </motion.div>

          <ProfileImage darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

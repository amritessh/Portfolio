import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AboutInfo from '../components/about/AboutInfo';
import Skills from '../components/about/Skills';
import GitHubStats from '../components/about/GitHubStats';

const About = ({ darkMode }) => {
  return (
    <section
      id='about'
      className={`py-20 px-4 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className='max-w-6xl mx-auto flex flex-col gap-y-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>About Me</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto'></div>
        </motion.div>

        <AboutInfo darkMode={darkMode} />
        <Skills darkMode={darkMode} />

        <GitHubStats darkMode={darkMode} />
      </div>
    </section>
  );
};

export default About;

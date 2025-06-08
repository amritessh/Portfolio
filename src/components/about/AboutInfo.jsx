import React from 'react';
import { motion } from 'framer-motion';

const AboutInfo = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className='text-2xl font-semibold mb-4'>Who I Am</h3>
      <p
        className={`mb-6 leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        I'm a passionate full-stack developer with over 5 years of experience
        building web applications. I love turning complex problems into simple,
        beautiful solutions.
      </p>
      <p
        className={`mb-6 leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        My journey in tech started with curiosity about how things work on the
        internet, and has evolved into a career focused on creating impactful
        digital experiences.
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h4 className='font-semibold mb-2'>Interests</h4>
          <ul
            className={`space-y-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <li>• Open Source</li>
            <li>• Machine Learning</li>
            <li>• Cloud Architecture</li>
            <li>• UI/UX Design</li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold mb-2'>Languages</h4>
          <ul
            className={`space-y-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <li>• English (Native)</li>
            <li>• Spanish (Fluent)</li>
            <li>• French (Basic)</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutInfo;

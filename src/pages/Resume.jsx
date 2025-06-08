import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/resume/Experience';
import Education from '../components/resume/Education';
import Certifications from '../components/resume/Certifications';

const Resume = ({ darkMode }) => {
  return (
    <section
      id='resume'
      className={`py-20 px-4 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            Resume -{' '}
            <a href='Amritesh_Anand.pdf' download className='text-blue-600 '>
              Download PDF
            </a>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          <Experience darkMode={darkMode} />
          <div>
            <Education darkMode={darkMode} />
            <Certifications darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

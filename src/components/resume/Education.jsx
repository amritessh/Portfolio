import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/experience';

const Education = ({ darkMode }) => {
  return (
    <>
      <h3 className='text-2xl font-semibold mb-8 flex items-center gap-2'>
        <span className='text-blue-600'>🎓</span> Education
      </h3>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`${
          darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
        } p-6 rounded-lg mb-8`}
      >
        <h4 className='text-xl font-semibold'>{education.degree}</h4>
        <p className='text-blue-600 font-medium'>{education.school}</p>
        <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {education.year}
        </p>
        <p className={`mt-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {education.details}
        </p>
      </motion.div>
    </>
  );
};

export default Education;

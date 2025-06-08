import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

const Experience = ({ darkMode }) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-8 flex items-center gap-2'>
        <span className='text-blue-600'>💼</span> Experience
      </h3>
      <div className='space-y-6'>
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative pl-8 pb-6 ${
              i !== experience.length - 1 ? 'border-l-2' : ''
            } ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}
          >
            <div
              className={`absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full ${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } border-4 border-blue-600`}
            ></div>
            <span className='text-sm text-blue-600 font-medium'>
              {job.year}
            </span>
            <h4 className='text-xl font-semibold mt-1'>{job.title}</h4>
            <p
              className={`font-medium ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {job.company}
            </p>
            <p
              className={`mt-2 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {job.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

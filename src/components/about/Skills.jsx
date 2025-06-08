import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills = ({ darkMode }) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-6'>Technical Skills</h3>
      <div className='grid grid-cols-2 gap-4'>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${
              darkMode ? 'bg-slate-900/50' : 'bg-white'
            } p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
          >
            <div className='flex items-center justify-between mb-2'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'>{skill.icon}</span>
                <span className='font-medium'>{skill.name}</span>
              </div>
              <span
                className={`text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {skill.level}%
              </span>
            </div>
            <div
              className={`w-full h-2 ${
                darkMode ? 'bg-slate-800' : 'bg-slate-200'
              } rounded-full overflow-hidden`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className='h-full bg-gradient-to-r from-blue-600 to-cyan-600'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/experience';

const Certifications = ({ darkMode }) => {
  return (
    <>
      <h3 className='text-2xl font-semibold mb-6 flex items-center gap-2'>
        <span className='text-blue-600'>🏆</span> Certifications
      </h3>
      <div className='space-y-3'>
        {certifications.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${
              darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
            } p-4 rounded-lg flex items-center gap-3`}
          >
            <span className='text-green-600'>✓</span>
            <span>{cert}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Certifications;

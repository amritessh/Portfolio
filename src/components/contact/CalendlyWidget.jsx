// import React from 'react';
// import { motion } from 'framer-motion';

const CalendlyWidget = ({ darkMode }) => {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, x: 30 }}
  //       whileInView={{ opacity: 1, x: 0 }}
  //       viewport={{ once: true }}
  //       className={`${
  //         darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
  //       } p-8 rounded-lg`}
  //     >
  //       <h3 className='text-xl font-semibold mb-4 text-center'>
  //         Schedule a Call
  //       </h3>
  //       <p
  //         className={`text-center mb-6 ${
  //           darkMode ? 'text-slate-300' : 'text-slate-600'
  //         }`}
  //       >
  //         Choose a time that works best for you
  //       </p>
  //       <div
  //         className={`${
  //           darkMode ? 'bg-slate-900' : 'bg-white'
  //         } rounded-lg p-12 text-center border-2 border-dashed ${
  //           darkMode ? 'border-slate-700' : 'border-slate-300'
  //         }`}
  //       >
  //         <div className='text-4xl mb-4'>📅</div>
  //         <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-4`}>
  //           Calendly widget will be embedded here
  //         </p>
  //       </div>
  //       <motion.a
  //         href='https://calendly.com/johndoe'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //         whileHover={{ scale: 1.02 }}
  //         whileTap={{ scale: 0.98 }}
  //         className='block w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition-shadow'
  //       >
  //         Open Calendly in New Tab
  //       </motion.a>
  //     </motion.div>
  //   );
};

export default CalendlyWidget;

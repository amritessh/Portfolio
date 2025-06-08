import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '../components/contact/ContactInfo';
import CalendlyWidget from '../components/contact/CalendlyWidget';

const Contact = ({ darkMode }) => {
  return (
    <section
      id='contact'
      className={`py-20 px-4 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Get In Touch</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          <ContactInfo darkMode={darkMode} />
          <CalendlyWidget darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';

const ScheduleCall = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mt-20 p-8 rounded-xl shadow-xl ${
        darkMode ? 'bg-slate-900/50' : 'bg-white'
      }`}
    >
      <h3 className='text-2xl font-bold mb-6 text-center'>Schedule a Call</h3>
      <div className='text-center'>
        <motion.a
          href='https://calendly.com/amritessh/30min'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a 30-minute call
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ScheduleCall;

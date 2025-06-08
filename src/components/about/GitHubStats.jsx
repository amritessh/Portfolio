import React from 'react';
import { motion } from 'framer-motion';

const GitHubStats = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='mt-16'
    >
      <h3 className='text-2xl font-semibold mb-8 text-center'>
        GitHub Statistics
      </h3>
      <div className='grid md:grid-cols-2 gap-6'>
        <div
          className={`${
            darkMode ? 'bg-slate-900/50' : 'bg-white'
          } p-6 rounded-lg shadow-lg`}
        >
          <h4 className='text-lg font-semibold mb-4'>GitHub Stats</h4>
          <div
            className={`${
              darkMode ? 'bg-slate-800' : 'bg-slate-100'
            } rounded-lg p-4 text-center`}
          >
            <p
              className={`text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              } mb-2`}
            >
              Replace with your GitHub stats card:
            </p>
            <code className='text-xs break-all'>
              ![GitHub
              Stats](https://github-readme-stats.vercel.app/api?username=amritessh&show_icons=true&theme=dark)
            </code>
          </div>
        </div>

        <div
          className={`${
            darkMode ? 'bg-slate-900/50' : 'bg-white'
          } p-6 rounded-lg shadow-lg`}
        >
          <h4 className='text-lg font-semibold mb-4'>Most Used Languages</h4>
          <div
            className={`${
              darkMode ? 'bg-slate-800' : 'bg-slate-100'
            } rounded-lg p-4 text-center`}
          >
            <p
              className={`text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              } mb-2`}
            >
              Replace with your languages card:
            </p>
            <code className='text-xs break-all'>
              ![Top
              Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=amritessh&layout=compact&theme=dark)
            </code>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubStats;

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';

const Portfolio = ({ darkMode }) => {
  return (
    <section
      id='work'
      className={`py-20 px-4 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Portfolio</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

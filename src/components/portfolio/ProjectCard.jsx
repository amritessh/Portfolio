import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`${
        darkMode ? 'bg-slate-900/50' : 'bg-white'
      } rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
    >
      <div
        className={`h-48 bg-gradient-to-br ${project.color} opacity-80`}
      ></div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
        <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {project.desc}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-3 py-1 rounded-full ${
                darkMode
                  ? 'bg-slate-800 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex gap-4'>
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-700 text-sm font-medium'
          >
            View Code →
          </a>
          {/* <a
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='text-purple-600 hover:text-purple-700 text-sm font-medium'
          >
            Live Demo →
          </a> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

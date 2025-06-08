import React from 'react';
import { motion } from 'framer-motion';

const AboutInfo = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className='text-2xl font-semibold mb-4'>Who I Am</h3>
      <p
        className={`mb-6 leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        I'm a passionate full-stack developer with over 3 years of industry
        experience building web applications. I love turning complex problems
        into simple, beautiful solutions. I consider problem solving and
        critical thinking as my primary strengths.
      </p>
      <p
        className={`mb-6 leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        My journey in tech started with curiosity about how things work on the
        internet, and has evolved into a career focused on creating impactful
        digital experiences. Currently, I am pursuing my Master's degree in
        Computer Software Engineering at Northeastern University where I am
        focusing on cutting edge technologies like LLMs, Generative AI, and
        Cloud Computing.
      </p>

      <p
        className={`mb-6 leading-relaxed ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        In my free time, you will find me on a long run 🏃‍♂️ or in the gym lifting
        weights 🏋️‍♂️, enjoying some Premier League football ⚽️, supporting the OG
        Red Team ❤️🖤⚽️, or enjoying a F1 GP on a Sunday afternoon 🏁
        #ForzaFerrari.
      </p>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h4 className='font-semibold mb-2'>Interests</h4>
          <ul
            className={`space-y-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <li>• Artificial Intelligence</li>
            <li>• Causal Inference</li>
            <li>• Agentic AI</li>
            <li>• Technology in Healthcare</li>
          </ul>
        </div>
        <div>
          {/* <h4 className='font-semibold mb-2'>Languages</h4>
          {/* <ul
            className={`space-y-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <li>• English (Native)</li>
            <li>• Spanish (Fluent)</li>
            <li>• French (Basic)</li>
          </ul> */}{' '}
          {/* */}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutInfo;

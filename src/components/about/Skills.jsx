import { Icon } from '@iconify/react';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-6'>Technical Skills</h3>
      <div className='flex flex-wrap items-center gap-6 text-4xl'>
        {skills.map((skill) => (
          <div className='relative group' key={skill.icon}>
            <Icon icon={skill.icon} width='2em' />
            <span className='absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 transition-opacity'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

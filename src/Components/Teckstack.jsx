import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '/src/assets/tech/js.svg' },
  { name: 'TypeScript', icon: '/src/assets/tech/typescript.svg' },
  { name: 'React', icon: '/src/assets/tech/react.svg' },
  { name: 'Next.js', icon: '/src/assets/tech/nextjs.svg' },
  { name: 'HTML5', icon: '/src/assets/tech/html5.svg' },
  { name: 'CSS3', icon: '/src/assets/tech/css3.svg' },
  { name: 'Tailwind CSS', icon: '/src/assets/tech/tailwindcss.svg' },
  { name: 'Jest', icon: '/src/assets/tech/jest.svg' },
  { name: 'Node.js', icon: '/src/assets/tech/nodejs.svg' },
  { name: 'Express', icon: '/src/assets/tech/express.svg' },
  { name: 'MongoDB', icon: '/src/assets/tech/mongodb.svg' },
  { name: 'MySQL', icon: '/src/assets/tech/mysql.svg' },
  { name: 'PostgreSQL', icon: '/src/assets/tech/postgresql.svg' },
  { name: 'Docker', icon: '/src/assets/tech/docker.svg' },
  { name: 'Git', icon: '/src/assets/tech/git.svg' },
  { name: 'GitHub', icon: '/src/assets/tech/github.svg' },
  { name: 'GitHub Actions', icon: '/src/assets/tech/github-actions.svg' },
];

export const TechStack = () => {
  return (
    <section className="bg-[#1A202C] text-white px-6 py-14 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Experience and Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center hid">
        {skills.map((skill, index) => (
          <>   <div key={index} className="group bg-white text-black p-4 rounded-xl hover:scale-105 transition duration-300 w-25 text-center">
  <img
    src={skill.icon}
    alt={skill.name}
    className="h-10 w-10 mx-auto mb-2 object-contain"
  />
<p className="text-sm text-black hidden group-hover:block transition duration-200">
          {skill.name}
        </p>
</div>
</> 
        ))}
      </div>
    </section>
  );
};

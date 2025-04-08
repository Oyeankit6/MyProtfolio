import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '/assets/tech/js.svg' },
  { name: 'TypeScript', icon: '/assets/tech/typescript.svg' },
  { name: 'React', icon: "/assets/tech/react.svg" },
  { name: 'Next.js', icon: '/assets/tech/nextjs.svg' },
  { name: 'HTML5', icon: '/assets/tech/html5.svg' },
  { name: 'CSS3', icon: '/assets/tech/css3.svg' },
  { name: 'Tailwind CSS', icon: '/assets/tech/tailwindcss.svg' },
  { name: 'Jest', icon: '/assets/tech/jest.svg' },
  { name: 'Node.js', icon: '/assets/tech/nodejs.svg' },
  { name: 'Express', icon: '/assets/tech/express.svg' },
  { name: 'MongoDB', icon: '/assets/tech/mongodb.svg' },
  { name: 'MySQL', icon: '/assets/tech/mysql.svg' },
  { name: 'PostgreSQL', icon: '/assets/tech/postgresql.svg' },
  { name: 'Docker', icon: '/assets/tech/docker.svg' },
  { name: 'Git', icon: '/assets/tech/git.svg' },
  { name: 'GitHub', icon: '/assets/tech/github.svg' },
  { name: 'GitHub Actions', icon: '/assets/tech/github-actions.svg' },
];

export const TechStack = () => {
  return (
    <section id="skills" className="bg-[#1A202C] text-white px-6 py-14 md:px-12">
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

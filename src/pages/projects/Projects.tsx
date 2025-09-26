import ProjectItem from './ProjectItem';
import techList from '../../data/tech.json';
import { useEffect } from 'react';

export default function Projects() {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });

  return (
    <div className="flex flex-col items-center projects">
      <h1 className="text-8xl mt-10 font-bold text-neutral-600 dark:text-neutral-100 mb-8" style={{lineHeight: "0.9"}}>
        Proyectos
      </h1>
      <div
        className="w-full grid gap-8"
        style={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}
      >
        {techList.projects.map((project) => (
          <ProjectItem
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}
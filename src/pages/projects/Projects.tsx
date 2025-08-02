import ProjectItem from './ProjectItem';
import techList from '../../data/tech.json';

export default function Projects() {
  return (
    <div className="flex flex-col items-center projects">
      <h1 className="text-8xl font-bold text-gray-600 mb-8" style={{lineHeight: "0.9"}}>
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
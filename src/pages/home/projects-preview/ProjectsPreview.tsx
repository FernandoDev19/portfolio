import { Link } from 'react-router';
import techList from '../../../data/tech.json';
import ProjectItem from '../../projects/ProjectItem';

export default function ProjectsPreview() {
  return (
    <div className="mb-24">
      <div className="flex justify-between items-center gap-6 border-b border-l rounded-xl border-neutral-300 py-2 px-4 mb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-600">
          Proyectos
        </h1>
        <Link to="/projects" className="about-me-buttons text-neutral-700 cursor-pointer text-lg">
          Ver todos
        </Link>
      </div>
      <div
        className="w-full grid gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {techList.projects.slice(1, 4).map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

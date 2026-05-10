import { Link } from 'react-router';
import type { Project } from '../../../data/tech';
import ProjectItem from '../../projects/ProjectItem';

type Props = {
  projects: Project[];
};

export default function ProjectsPreview({ projects }: Props) {
  return (
    <div className="md:mb-24 mb-12 w-full">
      <div className="flex justify-between items-center gap-6 border-b border-l rounded-xl border-neutral-300 py-2 px-4 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-600 dark:text-neutral-100">
          Proyectos
        </h1>
        <Link to="/projects" className="about-me-buttons text-neutral-700 cursor-pointer text-lg !rounded-full px-6">
          Ver todos <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(400px,auto)]">
        {projects.slice(0, 4).map((project, index) => (
          <div 
            key={project.id} 
            className={`
              ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''} 
              ${index === 3 ? 'md:col-span-1 lg:col-span-2' : ''}
            `}
          >
            <ProjectItem {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

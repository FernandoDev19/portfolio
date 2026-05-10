import type { TechIndicator } from "../../../../../data/tech";
import { TECH } from "../../../../../data/tech";
import { useNavigate } from "react-router";

type Props = {
    imageUrl: string;
    width: number;
    title: string;
    alt: string;
    techIndicator: TechIndicator;
};

export default function TechItem({imageUrl, width, title, alt, techIndicator}: Props) {
  const navigate = useNavigate();
  const techName = title.split(' - ')[0];
  
  const hasProjects = TECH.projects.some(project => 
    project.technologies.some(tech => tech.title === techName)
  );

  const handleClick = () => {
    if (hasProjects) {
      navigate(`/projects?tech=${encodeURIComponent(techName)}`);
    }
  };

  return (
    <li 
      className={`tech-item flex flex-col items-center justify-center ${hasProjects ? 'cursor-pointer hover:!scale-110 transition-transform' : ''}`}
      onClick={handleClick}
      title={hasProjects ? `Ver proyectos con ${techName}` : ''}
    >
      <div className="relative">
        <img
          loading="lazy"
          src={imageUrl}
          width={width}
          height={width}
          alt={alt}
          style={{ filter: 'drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)' }}
          className="transition-transform duration-300"
        />
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
          techIndicator === 'active' ? 'bg-green-500' :
          techIndicator === 'learning' ? 'bg-yellow-500' :
          techIndicator === 'past' ? 'bg-blue-500' : 'bg-red-500'
        }`}></div>
      </div>
      <span className="text-xs mt-2 text-center text-neutral-600 dark:!text-neutral-100">{techName}</span>
    </li>
  );
}

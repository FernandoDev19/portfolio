import TechItem from "./TechItem"
import techData from "../../../../../data/tech.json";

interface TechItemProps {
  imageUrl: string;
  width: number;
  title: string;
  alt: string;
  techIndicator: "active" | "learning" | "past" | "discontinued";
}

interface Category {
  id: string;
  name: string;
  technologies: TechItemProps[];
}

// Definimos una interfaz para los datos de tecnología
interface TechData {
  categories: Category[];
  complementarySkills: string[];
  projects: Array<{
    id: number;
    [key: string]: unknown;
  }>;
}

export default function TechContainer() {
  const { categories } = techData as unknown as TechData;

  return (
    <div className="space-y-12 mb-12">
      {categories.map((category) => (
        <div key={category.id} className="mb-8">
          <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-100 mb-6 text-center">
            {category.name}
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12">
            {category.technologies.map((tech, index) => (
              <TechItem
                key={`${category.id}-${index}`}
                imageUrl={tech.imageUrl}
                width={tech.width}
                title={tech.title}
                alt={tech.alt}
                techIndicator={tech.techIndicator}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

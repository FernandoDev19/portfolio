import TechItem from "./TechItem"
import techList from "../../../../../data/tech.json";

export default function TechContainer() {
  return (
    <ul className="text-neutral-600 text-center max-w-[500px] grid grid-cols-5 gap-12 justify-around mb-12">
      {techList.technologies.map((tech, index) => (
        <TechItem
          key={index}
          imageUrl={tech.imageUrl}
          width={tech.width}
          title={tech.title}
          alt={tech.alt}
          techIndicator={tech.techIndicator as "active" | "learning" | "past" | "discontinued"}
        />
      ))}
    </ul>
  );
}

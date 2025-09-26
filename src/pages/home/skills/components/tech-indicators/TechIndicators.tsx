type Props = {
  type: "active" | "learning" | "past" | "discontinued"
}

export default function TechIndicators({ type }: Props) {
  const typeMap = {
    active: "Uso activo",
    learning: "En Aprendizaje",
    past: "Experiencia pasada",
    discontinued: "Descartado",
  }
  return (
    <p className="position-relative flex items-center gap-2 mb-2">
      <span className={`tech-indicator-example ${type} w-4 h-4`}></span>
      <span className="text-neutral-600 dark:text-neutral-100 font-medium">{typeMap[type]}</span>
    </p>
  );
}

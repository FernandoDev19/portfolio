import TechIndicatorsContainer from "./components/tech-indicators/TechIndicatorsContainer";
import TechContainer from "./components/technologies/TechContainer";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <div ref={ref as any} className={`w-full reveal reveal-scale ${isVisible ? 'is-visible' : ''}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-600 dark:text-neutral-100 border-b border-l rounded-xl border-neutral-300 py-2 px-4 w-full mb-12">
        Tecnologías
      </h1>
      <TechIndicatorsContainer />
      <TechContainer />
    </div>
  );
}

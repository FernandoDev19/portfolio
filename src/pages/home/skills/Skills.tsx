import TechIndicatorsContainer from "./components/tech-indicators/TechIndicatorsContainer";
import TechContainer from "./components/technologies/TechContainer";

export default function Skills() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-600 dark:text-neutral-100 border-b border-l rounded-xl border-neutral-300 py-2 px-4 w-full mb-12">
        Tecnologías
      </h1>
      <TechIndicatorsContainer />
      <TechContainer />
    </>
  );
}

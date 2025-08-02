import TechIndicatorsContainer from "./components/tech-indicators/TechIndicatorsContainer";
import TechContainer from "./components/technologies/TechContainer";

export default function Skills() {
  return (
    <>
      <h1 className="text-8xl font-bold text-neutral-600 text-center mb-4">
        Tecnologías y Habilidades Técnicas
      </h1>
      <TechIndicatorsContainer />
      <TechContainer />
    </>
  );
}

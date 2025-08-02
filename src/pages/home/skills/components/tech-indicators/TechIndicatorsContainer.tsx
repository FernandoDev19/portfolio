import TechIndicators from "./TechIndicators";

export default function TechIndicatorsContainer() {
  return (
    <div id="tech-indicators-container">
      <TechIndicators type="active" />
      <TechIndicators type="learning" />
      <TechIndicators type="past" />
      <TechIndicators type="discontinued" />
    </div>
  )
}
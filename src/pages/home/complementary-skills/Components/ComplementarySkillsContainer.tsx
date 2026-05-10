import { TECH } from "../../../../data/tech";
import CompSkillItem from "./CompSkillItem";

export default function ComplementarySkillsContainer() {
  return (
    <ul className="flex flex-wrap justify-around gap-3">
      {TECH.complementarySkills.map((skill, index) => (
        <CompSkillItem key={index} skill={skill} />
      ))}
    </ul>
  );
}

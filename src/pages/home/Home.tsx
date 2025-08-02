import { NavLink } from "react-router";
import ComplementarySkills from "./complementary-skills/ComplementarySkills";
import Description from "./description/Description";
import Skills from "./skills/Skills";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center home">
        <Description />

        <Skills />
        <ComplementarySkills />
      </div>

      <NavLink to={"/projects"} id="btnNavigateToProjects" className="md:hidden">
        <button
          className="font-medium text-neutral-700"
          style={{
            fontSize: "1.3rem",
            backgroundColor: "var(--primary)",
            borderRadius: "2rem 0 0 2rem",
            position: "fixed",
            bottom: "3rem",
            right: "0",
            padding: "10px",
          }}
        >
          Proyectos <i className="fas fa-arrow-right"></i>
        </button>
      </NavLink>
    </>
  );
}

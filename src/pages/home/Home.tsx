import Description from "./description/Description";
import Skills from "./skills/Skills";
import ProjectsPreview from "./projects-preview/ProjectsPreview";
import Contact from "./contact/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center home">
        <Description />

        <ProjectsPreview />

        <Skills />
        {/* <ComplementarySkills /> */}
        <Contact />
      </div>

      {/* <NavLink
        to={"/projects"}
        id="btnNavigateToProjects"
        className="md:hidden"
      >
        <button
          className="font-medium text-neutral-700 cursor-pointer shadow-md"
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
      </NavLink> */}
    </>
  );
}

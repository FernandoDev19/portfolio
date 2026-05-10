import { TECH } from "../../data/tech";
import ProjectItem from "./ProjectItem";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";

export default function Projects() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedTech = searchParams.get("tech") || "All";

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [selectedTech]); // Scroll to top when filter changes

    // Get unique technologies from all projects
    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        TECH.projects.forEach((project) => {
            project.technologies.forEach((tech) => {
                techSet.add(tech.title);
            });
        });
        return ["All", ...Array.from(techSet).sort()];
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedTech === "All") return TECH.projects;
        return TECH.projects.filter((project) =>
            project.technologies.some((tech) => tech.title === selectedTech),
        );
    }, [selectedTech]);

    const handleFilterChange = (tech: string) => {
        if (tech === "All") {
            searchParams.delete("tech");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ tech });
        }
    };

    return (
        <div className="flex flex-col items-center projects w-full mb-20 px-4 md:px-0">
            <h1
                className="text-6xl md:text-8xl mt-10 font-bold text-neutral-600 dark:text-neutral-100 mb-8"
                style={{ lineHeight: "0.9" }}
            >
                Proyectos
            </h1>

            {/* Filter UI */}
            <div className="w-full max-w-5xl mb-12 flex flex-col items-center gap-3">
                <select
                    value={selectedTech}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    {allTechnologies.map((tech) => (
                        <option key={tech} value={tech}>
                            {tech === "All" ? "Todos los proyectos" : tech}
                        </option>
                    ))}
                </select>

                {/* Solo muestra chip si hay filtro activo */}
                {selectedTech !== "All" && (
                    <button
                        onClick={() => handleFilterChange("All")}
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all"
                    >
                        {selectedTech}{" "}
                        <span className="text-base leading-none">×</span>
                    </button>
                )}
            </div>

            <div
                className="w-full grid gap-8"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                }}
            >
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectItem key={project.id} {...project} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-neutral-500 py-12">
                        No se encontraron proyectos con esta tecnología.
                    </div>
                )}
            </div>
        </div>
    );
}

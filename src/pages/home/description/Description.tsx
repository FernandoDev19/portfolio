import { useTypewriter } from "../../../hooks/useTypewriter";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const ROLES = [
    "Desarrollador FullStack",
    "Backend Developer",
    "Frontend Developer",
    "API Architect",
];

export default function Description() {
    const typedText = useTypewriter(ROLES, 75, 40, 2000);

    const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
    const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full gap-8 lg:gap-12 mt-10 mb-12 md:mb-24">
            {/* Contenido izquierdo */}
            <div
                ref={leftRef}
                className={`flex flex-col lg:flex-1 reveal reveal-left ${leftVisible ? "is-visible" : ""}`}
            >
                {/* Título principal */}
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold text-neutral-600 dark:text-neutral-100 mb-2"
                    style={{ lineHeight: "0.9" }}
                >
                    Fernando Cano
                </h1>

                {/* Subtítulo con typewriter */}
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold mb-6"
                    style={{ lineHeight: "1.1" }}
                >
                    <span className="text-primary">{typedText}</span>
                    <span className="typewriter-cursor" aria-hidden="true" />
                </h2>

                {/* Descripción */}
                <p className="text-neutral-400 dark:text-neutral-300 text-center md:text-left mb-8 max-w-md">
                    Desarrollador Full Stack con experiencia en el desarrollo de
                    aplicaciones web utilizando Angular, React, Nest.js. He trabajado en
                    la digitalización de procesos manuales, construcción de APIs REST e
                    integración de servicios externos, creando soluciones prácticas y
                    mantenibles. Me enfoco en escribir código limpio, aplicar buenas
                    prácticas y aportar soluciones que generen valor real al negocio.
                </p>

                {/* Botones */}
                <div className="flex justify-center md:justify-start gap-4 mb-8 lg:mb-0 md:mx-0">
                    <a href="https://github.com/FernandoDev19" target="_blank">
                        <button
                            type="button"
                            className="about-me-buttons text-neutral-700 cursor-pointer !rounded-full !p-4"
                        >
                            <i className="fab fa-github text-2xl"></i>
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fernando-cano-developer"
                        target="_blank"
                    >
                        <button
                            type="button"
                            className="about-me-buttons text-neutral-700 cursor-pointer !rounded-full !p-4"
                        >
                            <i className="fab fa-linkedin text-2xl"></i>
                        </button>
                    </a>

                    <a
                        href="/CV.pdf"
                        className="block text-center"
                        download="Fernando Cano - CV.pdf"
                    >
                        <button className="about-me-buttons text-neutral-700 cursor-pointer shadow-md text-lg !rounded-full">
                            <i className="fas fa-download mr-3"></i>
                            Descargar CV
                        </button>
                    </a>
                </div>
            </div>

            {/* Contenido derecho - Imagen */}
            <div
                ref={rightRef}
                className={`flex flex-col items-center lg:items-end lg:flex-shrink-0 reveal reveal-right ${rightVisible ? "is-visible" : ""}`}
            >
                <div className="relative mb-6">
                    <img
                        className="rounded-full"
                        width="280"
                        src="/imgs/ft-perfil.webp"
                        fetchPriority="high"
                        alt="Foto perfil"
                        style={{
                            boxShadow: "3px 2px 10px 1px #00ebff",
                        }}
                    />

                    {/* Estado actual */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 md:-translate-x-10 lg:left-auto lg:right-4 lg:transform-none bg-gray-800 border border-primary px-3 py-2 rounded text-sm text-white flex items-center gap-2 whitespace-nowrap">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        Actualmente{" "}
                        <span className="text-primary font-semibold">buscando empleo</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

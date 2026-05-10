import { useState } from "react";
import type { Project } from "../../data/tech";
import Skeleton from "../../components/Skeleton";
import { openProjectGallery } from "../../components/ProjectGalleryModal";
import { useTilt } from "../../hooks/useTilt";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function ProjectItem({
    title,
    subtitle,
    image,
    imageAlt,
    description,
    githubLinks,
    demoLink,
    extraImages,
    technologies,
    videoLink,
}: Project) {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    // 3D Tilt effect
    const tiltRef = useTilt<HTMLDivElement>({
        max: 10,
        speed: 400,
        glare: true,
        maxGlare: 0.1,
        scale: 1.02
    });

    // Scroll Reveal effect
    const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>({
        threshold: 0.1,
    });

    const allImages = [image, ...(extraImages ?? [])];
    const hasGallery = allImages.length > 1;

    // Combinamos las refs
    const setRefs = (node: HTMLDivElement) => {
        (tiltRef as any).current = node;
        (revealRef as any).current = node;
    };

    return (
        <div 
            ref={setRefs}
            className={`item-project project-card !bg-white/50 dark:!bg-neutral-800 shadow-lg h-full flex flex-col justify-around transition-all duration-300 hover:shadow-2xl reveal reveal-scale ${isVisible ? "is-visible" : ""}`}
        >
            <div className="flex flex-col gap-4">

                {/* Imagen principal */}
                <div className="relative overflow-hidden rounded-2xl aspect-video group">
                    {!imageLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full" />
                    )}

                    <img
                        loading="lazy"
                        className={`rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                        src={image}
                        alt={imageAlt}
                        onLoad={() => setImageLoaded(true)}
                    />

                    {/* Overlay de galería si hay imágenes extra */}
                    {hasGallery && (
                        <div
                            className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300 cursor-pointer"
                            onClick={() => openProjectGallery(title, allImages, videoLink)}
                        >
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                                <i className="fa-solid fa-images text-3xl"></i>
                                <span className="text-sm font-semibold">Ver galería ({allImages.length})</span>
                            </div>
                        </div>
                    )}

                    {/* Badge de imágenes extra */}
                    {hasGallery && (
                        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                            <i className="fa-solid fa-layer-group text-primary"></i>
                            <span>{allImages.length}</span>
                        </div>
                    )}
                </div>

                <h1 className="text-center text-neutral-700 dark:text-neutral-100 font-bold text-xl">
                    {title}
                    {subtitle && (
                        <span className="block text-sm font-normal text-neutral-500 dark:text-neutral-400">
                            {subtitle}
                        </span>
                    )}
                </h1>

                {description && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center line-clamp-3">
                        {description}
                    </p>
                )}

                {/* Botón galería extra (debajo del titulo, si hay fotos) */}
                {hasGallery && (
                    <button
                        onClick={() => openProjectGallery(title, allImages, videoLink)}
                        className="text-center cursor-pointer rounded-full text-primary border border-primary hover:bg-primary hover:!text-white transition-all duration-300 ease font-medium py-2 px-4"
                    >
                        <i className="fa-solid fa-images mr-2"></i>
                        Ver todas las imágenes
                    </button>
                )}

                {demoLink && (
                    <button
                        onClick={() => window.open(demoLink, "_blank")}
                        className="text-center cursor-pointer rounded-full text-primary border border-primary hover:bg-primary hover:!text-white transition-all duration-300 ease font-medium py-2 px-4"
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                        Ver Demo en vivo
                    </button>
                )}

                {githubLinks && (
                    <div className="flex w-full mt-2">
                        {githubLinks.map((link, index) => (
                            <a
                                key={index}
                                className={
                                    githubLinks.length > 1 ? "w-1/2" : "w-full"
                                }
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="github-btn w-full !bg-neutral-900 hover:!bg-neutral-800 dark:hover:!bg-neutral-700 text-white flex items-center justify-center gap-2 py-2 transition-colors"
                                    style={{
                                        borderRadius:
                                            githubLinks.length > 1
                                                ? index === 0
                                                    ? ".375rem 0 0 .375rem"
                                                    : "0 .375rem .375rem 0"
                                                : ".375rem",
                                    }}
                                >
                                    <i className="fa-brands fa-github fa-xl"></i>{" "}
                                    {link.text}
                                </button>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex gap-4 justify-center mt-6 flex-wrap">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center group relative"
                    >
                        <img
                            loading="lazy"
                            src={tech.icon || tech.imageUrl}
                            width={25}
                            height={25}
                            title={tech.title}
                            alt={tech.alt}
                            className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain h-6"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

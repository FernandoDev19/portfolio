import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Skeleton from "./Skeleton";

const MySwal = withReactContent(Swal);

interface GalleryProps {
    projectTitle: string;
    images: string[];
    videoLink?: string;
}

const GalleryComponent = ({ projectTitle, images, videoLink }: GalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultiple = images.length > 1;

    const navigate = (dir: "prev" | "next") => {
        if (dir === "prev" && currentIndex > 0) setCurrentIndex(currentIndex - 1);
        if (dir === "next" && currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className="w-full text-left">
            <p className="text-neutral-400 text-xs mb-3 text-right">
                {currentIndex + 1} / {images.length}
            </p>

            <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/5 max-h-[70vh]">
                {!images[currentIndex] && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img
                    src={images[currentIndex]}
                    alt={`Imagen ${currentIndex + 1} de ${projectTitle}`}
                    className="w-full max-h-[70vh] object-contain block transition-opacity duration-300"
                />
                
                {videoLink && (
                    <a
                        href={videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block text-center text-primary font-semibold hover:opacity-80 transition-opacity no-underline pb-4"
                    >
                        ▶ Ver Video del Proyecto
                    </a>
                )}
            </div>

            {hasMultiple && (
                <div className="mt-5 space-y-4">
                    <div className="flex justify-between gap-3">
                        <button
                            onClick={() => navigate("prev")}
                            disabled={currentIndex === 0}
                            className={`flex-1 py-2.5 px-4 rounded-full border border-primary bg-transparent text-primary transition-all
                                ${currentIndex === 0 ? "opacity-30 cursor-default" : "hover:bg-primary hover:text-white cursor-pointer"}`}
                        >
                            ← Anterior
                        </button>
                        <button
                            onClick={() => navigate("next")}
                            disabled={currentIndex === images.length - 1}
                            className={`flex-1 py-2.5 px-4 rounded-full border border-primary bg-transparent text-primary transition-all
                                ${currentIndex === images.length - 1 ? "opacity-30 cursor-default" : "hover:bg-primary hover:text-white cursor-pointer"}`}
                        >
                            Siguiente →
                        </button>
                    </div>

                    <div className="flex justify-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? "w-6 bg-primary" : "w-2 bg-neutral-600 hover:bg-neutral-500"
                                }`}
                                aria-label={`Ir a imagen ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export function openProjectGallery(
    projectTitle: string,
    images: string[],
    videoLink?: string
): void {
    if (!images.length) return;

    MySwal.fire({
        title: (
            <span className="text-primary text-xl font-bold">
                {projectTitle}
            </span>
        ),
        html: (
            <GalleryComponent 
                projectTitle={projectTitle} 
                images={images} 
                videoLink={videoLink} 
            />
        ),
        showConfirmButton: false,
        showCloseButton: true,
        width: "min(90vw, 900px)",
        padding: "1.5rem",
        background: "#1a1a1a",
        color: "#e5e5e5",
        customClass: {
            popup: "gallery-popup",
            closeButton: "gallery-close-btn",
        }
    });
}

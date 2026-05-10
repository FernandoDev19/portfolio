import Swal from "sweetalert2";

/**
 * Opens a full-screen gallery modal using SweetAlert2.
 * Shows all project images (main + extras) with navigation arrows.
 */
export function openProjectGallery(
    projectTitle: string,
    images: string[],
    videoLink?: string,
): void {
    if (!images.length) return;

    let currentIndex = 0;

    const getModalContent = (index: number) => {
        const img = images[index];
        const hasMultiple = images.length > 1;

        return `
      <div id="gallery-root" style="position:relative; width:100%;">
        <p style="color:#a3a3a3; font-size:0.85rem; margin-bottom:0.75rem; text-align:right;">
          ${index + 1} / ${images.length}
        </p>

        <div style="position:relative; border-radius:1rem; overflow:hidden; background:#111; max-height:70vh;">
          <img
            src="${img}"
            alt="Imagen ${index + 1} de ${projectTitle}"
            id="gallery-img"
            style="width:100%; max-height:70vh; object-fit:contain; display:block; transition: opacity 0.25s ease;"
          />
          ${
              videoLink
                  ? `
                    <a
                      href="${videoLink}"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="
                        margin-top:1rem; display:block; text-align:center; color:#00ebff;
                        font-weight:600; text-decoration:none; transition:opacity 0.2s;
                      "
                      onmouseover="this.style.opacity='0.8'"
                      onmouseout="this.style.opacity='1'"
                    >
                      ▶ Ver Video del Proyecto
                    </a>
                  `
                  : ""
          }
        </div>

        ${
            hasMultiple
                ? `
          <div style="display:flex; justify-content:space-between; margin-top:1.25rem; gap:0.75rem;">
            <button
              id="gallery-prev"
              ${index === 0 ? "disabled" : ""}
              style="
                flex:1; padding:0.6rem 1rem; border-radius:9999px; border:1px solid #00ebff;
                background:transparent; color:#00ebff; font-size:0.95rem; cursor:${index === 0 ? "default" : "pointer"};
                opacity:${index === 0 ? "0.3" : "1"}; transition:all 0.2s;
              "
            >
              ← Anterior
            </button>
            <button
              id="gallery-next"
              ${index === images.length - 1 ? "disabled" : ""}
              style="
                flex:1; padding:0.6rem 1rem; border-radius:9999px; border:1px solid #00ebff;
                background:transparent; color:#00ebff; font-size:0.95rem; cursor:${index === images.length - 1 ? "default" : "pointer"};
                opacity:${index === images.length - 1 ? "0.3" : "1"}; transition:all 0.2s;
              "
            >
              Siguiente →
            </button>
          </div>

          <div style="display:flex; justify-content:center; gap:0.5rem; margin-top:0.75rem;">
            ${images
                .map(
                    (_, i) => `
              <button
                id="gallery-dot-${i}"
                style="
                  width:${i === index ? "1.5rem" : "0.5rem"}; height:0.5rem;
                  border-radius:9999px; border:none; padding:0;
                  background:${i === index ? "#00ebff" : "#555"};
                  cursor:pointer; transition:all 0.3s;
                "
              ></button>
            `,
                )
                .join("")}
          </div>
        `
                : ""
        }
      </div>
    `;
    };

    const navigate = (dir: "prev" | "next") => {
        if (dir === "prev" && currentIndex > 0) currentIndex--;
        if (dir === "next" && currentIndex < images.length - 1) currentIndex++;
        Swal.update({ html: getModalContent(currentIndex) });
        bindButtons();
    };

    const bindButtons = () => {
        const prev = document.getElementById("gallery-prev");
        const next = document.getElementById("gallery-next");
        if (prev) prev.onclick = () => navigate("prev");
        if (next) next.onclick = () => navigate("next");

        images.forEach((_, i) => {
            const dot = document.getElementById(`gallery-dot-${i}`);
            if (dot) {
                dot.onclick = () => {
                    currentIndex = i;
                    Swal.update({ html: getModalContent(currentIndex) });
                    bindButtons();
                };
            }
        });
    };

    Swal.fire({
        title: `<span style="font-size:1.25rem; color:#00ebff;">${projectTitle}</span>`,
        html: getModalContent(currentIndex),
        showConfirmButton: false,
        showCloseButton: true,
        width: "min(90vw, 900px)",
        padding: "1.5rem",
        background: "#1a1a1a",
        color: "#e5e5e5",
        customClass: {
            popup: "gallery-popup",
            closeButton: "gallery-close-btn",
        },
        didOpen: () => {
            bindButtons();
        },
    });
}

export default function Description() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full gap-8 lg:gap-12 mt-10 mb-12 md:mb-24">
      {/* Contenido izquierdo */}
      <div className="flex flex-col lg:flex-1">
        {/* Título principal */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold text-neutral-600 dark:text-neutral-100 mb-2"
          style={{ lineHeight: "0.9" }}
        >
          Fernando Cano
        </h1>

        {/* Subtítulo */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold mb-6"
          style={{ lineHeight: "0.9" }}
        >
          <span className="text-primary">Desarrollador Full Stack</span>
        </h2>

        {/* Descripción */}
        <p className="text-neutral-400 dark:text-neutral-300 text-center md:text-left mb-8 max-w-md">
          Apasionado Desarrollador Full Stack con más de 2 años de experiencia
          en la creación y mantenimiento de aplicaciones web eficientes.
        </p>

        {/* Botón de contacto */}
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

      {/* Contenido derecho - Imagen y estado */}
      <div className="flex flex-col items-center lg:items-end lg:flex-shrink-0">
        {/* Foto de perfil con estado */}
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
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Actualmente{" "}
            <span className="text-primary font-semibold">buscando empleo</span>
          </div>
        </div>

        {/* Social links */}
        {/* <div className="p-3 rounded-full w-full max-w-[300px] lg:max-w-[300px] flex justify-evenly gap-4 mb-4 bg-white/50 dark:bg-neutral-800 shadow-md">
          <a href="https://github.com/FernandoDev19" target="_blank">
            <button
              type="button"
              className="about-me-buttons text-neutral-700 cursor-pointer !rounded-full !p-3"
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
              className="about-me-buttons text-neutral-700 cursor-pointer !rounded-full !p-3"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </button>
          </a>
        </div> */}

        {/* Información de contacto */}
        <div className="mb-4 flex flex-col lg:flex-row items-center gap-2 text-center lg:text-right">
          <p className="font-medium m-0 text-neutral-600 dark:text-neutral-100 hover:text-primary transition-colors duration-200 ease">
            <i className="fab fa-whatsapp mr-2"></i>
            <a href="tel:+573005442580">+573005442580</a>
          </p>
          <span className="hidden lg:inline">|</span>
          <p className="font-medium m-0 text-neutral-600 dark:text-neutral-100 hover:text-primary transition-colors duration-200 ease">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:fernandocanotapias@gmail.com">
              fernandocanotapias@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

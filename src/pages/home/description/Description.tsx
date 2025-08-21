export default function Description() {
  return (
    <>
      {/* Foto de perfil */}
      <img
        className="mb-6 rounded-full"
        width="280"
        src="/imgs/ft-perfil.webp"
        fetchPriority="high"
        alt="Foto perfil"
        style={{
          boxShadow: "3px 2px 10px 1px #00ebff",
        }}
      />

      {/* Título */}
      <h1
        className="text-5xl md:text-6xl text-center font-bold text-neutral-600 mb-0"
        style={{ lineHeight: "0.9" }}
      >
        Desarrollador Web
      </h1>

      {/* Subtítulo */}
      <div className="mb-4 flex items-center gap-2">
        <p className="font-medium m-0 text-neutral-600 hover:text-primary transition-colors duration-200 ease">
          <i className="fab fa-whatsapp mr-2"></i>
          <a href="tel:+573005442580">+573005442580</a>
        </p>
        |
        <p className="font-medium m-0 text-neutral-600 hover:text-primary transition-colors duration-200 ease">
          <i className="fas fa-envelope mr-2"></i>
          <a href="mailto:fernandocanotapias@gmail.com">
            fernandocanotapias@gmail.com
          </a>
        </p>
      </div>

      {/* Social links */}
      <div className="p-3 rounded-full w-full max-w-[500px] flex justify-evenly gap-4 mb-4 bg-white/50 shadow-md">
        <a href="https://github.com/FernandoDev19" target="_blank">
          <button
            type="button"
            className="about-me-buttons text-neutral-700 cursor-pointer"
          >
            <i className="fab fa-github text-2xl"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/fernando-cano-developer" target="_blank">
          <button
            type="button"
            className="about-me-buttons text-neutral-700 cursor-pointer"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </button>
        </a>
      </div>
      {/* Description */}
      <p className="text-neutral-600 font-medium text-center mb-4">
        Desarrollador Full Stack con experiencia en desarrollo web integral, 
        especializado en la creación de aplicaciones web modernas y escalables. 
        Domino tecnologías frontend como React y Angular, así como frameworks 
        backend como NestJS, Express y Laravel. Me destaco por implementar 
        arquitecturas robustas, siguiendo las mejores prácticas de desarrollo y 
        enfocándome en crear experiencias de usuario excepcionales con soluciones 
        técnicas eficientes.
      </p>
      <a
        href="/CV.pdf"
        className="mb-12"
        download="Fernando Cano - CV.pdf"
      >
        <button className="about-me-buttons text-neutral-700 cursor-pointer shadow-md">
          <i className="fas fa-download mr-3"></i>
          Descargar CV
        </button>
      </a>
    </>
  );
}

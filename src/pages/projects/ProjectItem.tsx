interface Technology {
  icon: string;
  width: number;
  title: string;
  alt: string;
}

interface GithubLink {
  text: string;
  url: string;
}

interface ProjectItemProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  description?: string;
  githubLinks?: GithubLink[];
  demoLink?: string;
  technologies: Technology[];
}

export default function ProjectItem({
  title,
  subtitle,
  image,
  imageAlt,
  description,
  githubLinks,
  demoLink,
  technologies
}: ProjectItemProps) {

    const showMask = () => {
        if(demoLink){
            document.getElementById(`viewProject-${title}`)?.classList.remove("!hidden")
        }
    }

    const hideMask = () => {
        if(demoLink){
            document.getElementById(`viewProject-${title}`)?.classList.add("!hidden")
        }
    }

  return (
    <div className="item-project project-card !bg-white/50">
      <div className="flex flex-col gap-4 justify-between">
        <div className="relative" onClick={() => demoLink ? window.open(demoLink, '_blank') : null} onMouseEnter={showMask} onMouseLeave={hideMask}>
          <img
            loading="lazy"
            className="mb-2 rounded-2xl object-cover w-full"
            width="300"
            src={image}
            alt={imageAlt}
          />
          <div id={`viewProject-${title}`} className="!hidden viewProject">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
        
        <h1 className="text-center text-gray-600 font-medium">
          {title}
          {subtitle && <br />}
          {subtitle}
        </h1>

        {description && (
          <p className="text-sm text-gray">{description}</p>
        )}

         {demoLink && (
          <button
            onClick={() => window.open(demoLink, '_blank')}
            className="text-center cursor-pointer rounded-md text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300 ease"
            style={{
              padding: ".3rem .5rem",
              border: "1px solid orange",
            }}
          >
            Click para visualizar
          </button>
        )}

        {githubLinks && (
          <div className="flex w-full">
            {githubLinks.map((link, index) => (
              <a
                key={index}
                className={githubLinks.length > 1 ? "w-1/2" : "w-full"}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="github-btn"
                  style={{
                    borderRadius:
                      githubLinks.length > 1
                        ? index === 0
                          ? ".375rem 0 0 .375rem"
                          : "0 .375rem .375rem 0"
                        : ".375rem"
                  }}
                >
                  <i className="fa-brands fa-github fa-xl"></i> {link.text}
                </button>
              </a>
            ))}
          </div>
        )}

      </div>

      <div className="flex gap-4 justify-evenly">
        {technologies.map((tech, index) => (
          <div key={index} className="h-full flex items-center">
            <img
              loading="lazy"
              src={tech.icon}
              width={tech.width}
              title={tech.title}
              alt={tech.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import Counter from "../../../components/Counter";

export default function AboutMe() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="w-full mt-24 mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-600 dark:text-neutral-100 border-b border-l rounded-xl border-neutral-300 py-2 px-4 mb-12">
        Sobre mí
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          ref={textRef as any}
          className={`space-y-6 text-lg text-neutral-600 dark:text-neutral-300 reveal reveal-left ${textVisible ? 'is-visible' : ''}`}
        >
          <p>
            ¡Hola! Soy Fernando, un apasionado del desarrollo de software con un enfoque especial en el 
            <span className="text-primary font-bold"> Backend</span>, aunque disfruto creando experiencias completas 
            de principio a fin.
          </p>
          <p>
            Mi viaje en la programación comenzó con la curiosidad de cómo funcionaban las aplicaciones que usamos a diario. 
            Desde entonces, he trabajado con diversas tecnologías como <span className="font-semibold text-neutral-800 dark:text-neutral-100">Angular, React, NestJS y .NET Core</span>.
          </p>
          <p>
            Me considero una persona autodidacta, siempre buscando aprender nuevas herramientas y mejores prácticas. 
            Mi objetivo es escribir código limpio, escalable y que resuelva problemas reales de manera eficiente.
          </p>
          <div className="pt-4 flex gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">
                <Counter end={2} suffix="+" />
              </span>
              <span className="text-sm uppercase tracking-wider">Años de Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">
                <Counter end={15} suffix="+" />
              </span>
              <span className="text-sm uppercase tracking-wider">Proyectos</span>
            </div>
          </div>
        </div>
        
        <div 
          ref={cardRef as any}
          className={`relative group reveal reveal-right ${cardVisible ? 'is-visible' : ''}`}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700">
             <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Fuera del código...</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span>Me encanta aprender sobre arquitectura de software.</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span>Disfruto de los videojuegos de estrategia.</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span>Soy fanático de la automatización de procesos.</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 <span>Me gusta compartir lo que aprendo con la comunidad.</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

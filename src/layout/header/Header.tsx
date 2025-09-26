import { useState } from 'react';
import { BurgerButton } from './BurgerButton';
import { Navigation } from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="mx-auto sticky top-4 z-2 w-[95vw]">
      <nav className="bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md border-b !px-6 border-white/10 rounded-full" role="navigation">
        <div className="mx-auto flex items-center justify-between py-4">
          <h1 className="px-4 text-gray-600 dark:text-white font-heligthon-signature font-medium text-4xl">
            Fernando Cano
          </h1>
          
          <div className="flex items-end justify-center md:justify-start flex-col">
            <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
            <Navigation isOpen={isMenuOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}

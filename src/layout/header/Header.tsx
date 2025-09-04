import { useState } from 'react';
import { BurgerButton } from './BurgerButton';
import { Navigation } from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="mx-auto my-4 sticky top-4 z-2 w-[95vw]">
      <nav className="bg-white/50 backdrop-blur-md border-b !px-6 border-white/10 rounded-full" role="navigation">
        <div className="mx-auto flex justify-between py-4">
          <h1 className="px-2 pb-3 pt-2 text-gray-600 font-heligthon-signature font-medium text-4xl">
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

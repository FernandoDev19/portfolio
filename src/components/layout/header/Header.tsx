import { useState } from 'react';
import { BurgerButton } from './BurgerButton';
import { Navigation } from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="mx-auto sticky top-0 z-2">
      <nav className="bg-white/60 backdrop-blur-md border-b border-white/10" role="navigation">
        <div className="mx-auto flex justify-between py-3">
          <h1 className="px-2 pb-3 pt-2 text-gray-600 font-heligthon-signature font-medium text-4xl">
            Fernando Cano
          </h1>
          
          <div className="flex items-end flex-col">
            <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
            <Navigation isOpen={isMenuOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}

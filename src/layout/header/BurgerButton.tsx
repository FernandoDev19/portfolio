interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label="Abrir menú de navegación"
      className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-primary hover:text-white w-max-content"
    >
      <span className="absolute -inset-0.5"></span>
      <svg
        className={isOpen ? 'hidden size-6' : 'block size-6'}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        className={isOpen ? 'block size-6' : 'hidden size-6'}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
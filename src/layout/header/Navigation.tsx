import { NavLink } from "react-router";

interface NavigationProps {
  isOpen: boolean;
}

export function Navigation({ isOpen }: NavigationProps) {
  return (
    <div
      id="mobile-menu"
      role="menu"
      className={`absolute top-14 right-8 bg-white md:bg-transparent backdrop-blur-md md:static shadow-md md:shadow-none rounded-md transition-all duration-200 ease-in ${isOpen ? 'block' : 'hidden md:block'}`}
    >
      <ul className="flex flex-col md:flex-row px-2 pb-3 pt-2">
        <li>
          <NavLink
            to="/"
            role="menuitem"
            className={({ isActive }) =>
              `nav_item transition-all duration-300 ease block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100 ${isActive ? 'active' : ''}`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            role="menuitem"
            id="nav_projects"
            className={({ isActive }) =>
              `nav_item transition-all duration-300 ease block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100 ${isActive ? 'active' : ''}`
            }
          >
            Proyectos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
import { NavLink } from "react-router-dom";
import NavbarSearch from "../NavbarSearch";

import logo from "../../assets/logo/AXIOM_LOGO.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-6">

        {/* Logo */}
        <div className="absolute left-6">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="AXIOM Logo"
              className="h-16 w-auto"
            />
          </NavLink>
        </div>

        {/* Center Navigation */}
        <div className="mx-auto flex items-center gap-10 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-black transition-colors hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-black transition-colors hover:text-orange-500"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-black transition-colors hover:text-orange-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-black transition-colors hover:text-orange-500"
            }
          >
            Support
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-black transition-colors hover:text-orange-500"
            }
          >
            Contact
          </NavLink>

        </div>

        {/* Search */}
        <div className="absolute right-6 flex items-center">
          <NavbarSearch />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
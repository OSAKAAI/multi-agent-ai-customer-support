import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import logo from "../../assets/logo/AXIOM_LOGO.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AXIOM Logo"
            className="h-18 w-auto"
          />
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-8 font-medium">

  <NavLink
    to="/"
    className={({ isActive }) =>
      `transition-colors ${
        isActive
          ? "text-orange-500"
          : "text-black hover:text-orange-500"
      }`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/products"
    className={({ isActive }) =>
      `transition-colors ${
        isActive
          ? "text-orange-500"
          : "text-black hover:text-orange-500"
      }`
    }
  >
    Products
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `transition-colors ${
        isActive
          ? "text-orange-500"
          : "text-black hover:text-orange-500"
      }`
    }
  >
    About
  </NavLink>

  <NavLink
    to="/support"
    className={({ isActive }) =>
      `transition-colors ${
        isActive
          ? "text-orange-500"
          : "text-black hover:text-orange-500"
      }`
    }
  >
    Support
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `transition-colors ${
        isActive
          ? "text-orange-500"
          : "text-black hover:text-orange-500"
      }`
    }
  >
    Contact
  </NavLink>

</div>

        {/* Search */}
        <button className="text-2xl">
          <FiSearch />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
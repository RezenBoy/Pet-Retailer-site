import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide text-white hover:text-sky-400 transition"
        >
          Khushi Enterprise
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-sky-400 font-medium"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+919811368649"
          className="hidden sm:inline-flex bg-sky-400 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-500 transition"
        >
          Call to Order
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-sky-400 font-medium"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <a
              href="tel:+919811368649"
              className="mt-3 inline-flex justify-center bg-sky-400 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-500 transition"
            >
              Call to Order
            </a>
          </nav>
        </div>
      )}

      {/* Retailer Notice */}
      <div className="text-center text-[11px] text-slate-400 bg-slate-950/70 py-1">
        Retailer-only platform • Orders via phone or email
      </div>
    </header>
  );
}

export default Header;

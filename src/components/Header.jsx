import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Brand */}
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-slate-900 hover:text-sky-600 transition-colors duration-200"
            >
              KHUSHI ENTERPRISES
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            {/* <a
              href="tel:+919560858066"
              className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow"
            >
              <FiPhone className="w-4 h-4" />
              <span>Call to Order</span>
            </a> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Retailer Notice Banner */}
      <div className="bg-gradient-to-r from-slate-50 to-sky-50 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-2">
          <p className="text-xs text-center text-slate-600 font-medium">
            B2B Platform for Wholesaler and Retailer • Orders via Phone or Email
          </p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[104px] bg-black/20 backdrop-blur-sm z-40">
          <div className="bg-white border-b border-slate-200 shadow-xl">
            <nav className="max-w-6xl mx-auto px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <a
                href="tel:+919560858066"
                className="mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm"
              >
                <FiPhone className="w-5 h-5" />
                <span>Call to Order</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

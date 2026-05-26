
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(e.target) && 
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80" 
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              to="/"
              className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-sky-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-lg"
              aria-label="Khushi Enterprises Home"
            >
              KHUSHI ENTERPRISES
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                      isActive
                        ? "text-sky-700 bg-sky-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <a
              href="tel:+919560858066"
              className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              <FiPhone className="w-4 h-4" aria-hidden="true" />
              <span>Call to Order</span>
            </a>

            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <FiX className="w-6 h-6" aria-hidden="true" />
              ) : (
                <FiMenu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-sky-50 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <p className="text-xs sm:text-sm text-center text-slate-600 font-medium">
            B2B Platform for Wholesalers & Retailers • Orders via Phone or WhatsApp
          </p>
        </div>
      </div>

      {menuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden fixed top-[88px] sm:top-[96px] left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-50 max-h-[calc(100vh-96px)] overflow-y-auto"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      isActive
                        ? "text-sky-700 bg-sky-50"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="tel:+919560858066"
                className="mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                <FiPhone className="w-5 h-5" aria-hidden="true" />
                <span>Call to Order</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
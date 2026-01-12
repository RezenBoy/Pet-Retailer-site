function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          Pet Wholesale Hub
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="text-slate-200 hover:text-sky-400">
            Home
          </a>
          <a href="#products" className="text-slate-200 hover:text-sky-400">
            Products
          </a>
          <a href="#about" className="text-slate-200 hover:text-sky-400">
            About
          </a>
          <a href="#contact" className="text-slate-200 hover:text-sky-400">
            Contact
          </a>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="bg-sky-400 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-500"
        >
          Call to Order
        </a>
      </div>

      {/* Retailer Notice */}
      <div className="bg-slate-800 text-center text-xs text-slate-300 py-1">
        For Retailers Only • Orders via Call or Email
      </div>
    </header>
  );
}

export default Header;

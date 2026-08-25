import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const socialLinks = [
  { 
    href: "https://wa.me/919560858066", 
    icon: FaWhatsapp, 
    label: "WhatsApp", 
    color: "hover:bg-green-500" 
  },
  { 
    href: "https://instagram.com/", 
    icon: FaInstagram, 
    label: "Instagram", 
    color: "hover:bg-pink-500" 
  },
  { 
    href: "https://facebook.com/", 
    icon: FaFacebookF, 
    label: "Facebook", 
    color: "hover:bg-blue-600" 
  },
  { 
    href: "https://linkedin.com/", 
    icon: FaLinkedinIn, 
    label: "LinkedIn", 
    color: "hover:bg-sky-600" 
  }
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Khushi Enterprises
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Wholesale dog and pet products exclusively for retailers.
              Quality products with reliable service since 2010.
            </p>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-lg px-3 py-2">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-sky-300">B2B Only</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-sky-400 hover:translate-x-1 inline-block transition-all duration-200 focus:outline-none focus:text-sky-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm space-y-1">
                  <a
                    href="tel:+919560858066"
                    className="text-slate-300 hover:text-sky-400 transition-colors block focus:outline-none focus:text-sky-400"
                  >
                    +91 95608 58066
                  </a>
                  <a
                    href="tel:+919811368649"
                    className="text-slate-300 hover:text-sky-400 transition-colors block focus:outline-none focus:text-sky-400"
                  >
                    +91 98113 68649
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:khushienterprises1013@gmail.com"
                  className="text-sm text-slate-300 hover:text-sky-400 transition-colors break-all focus:outline-none focus:text-sky-400"
                >
                  khushienterprises1013@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">
                Follow Us
              </h5>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 ${social.color} text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900`}
                    aria-label={`Visit our ${social.label} page (opens in new tab)`}
                  >
                    <social.icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Location
            </h4>
            <div className="flex items-start gap-3">
              <FiMapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <address className="text-sm leading-relaxed text-slate-400 not-italic">
                Khushi Enterprises<br />
                Plot No. 12, Industrial Area<br />
                Phase 2, Delhi<br />
                PIN – 141003<br />
                India
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} Khushi Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-sky-400 transition-colors focus:outline-none focus:text-sky-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-sky-400 transition-colors focus:outline-none focus:text-sky-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
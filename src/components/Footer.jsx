import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Khushi Enterprises
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Wholesale dog and pet products exclusively for retailers.
                            Quality products with reliable service.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-lg px-3 py-2">
                            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-sky-300">B2B Only</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Products", path: "/products" },
                                { name: "About Us", path: "/about" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-400 hover:text-sky-400 hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FiPhone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                                <div className="text-sm ">
                                    <a
                                        href="tel:+919560858066"
                                        className="text-slate-300 hover:text-sky-400 transition-colors block"
                                    >
                                        +91 95608 58066
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiPhone className="w-4 h-4 text-sky-400 mt-1.5 flex-shrink-0" />
                                <div className="text-sm ">
                                    <a
                                        href="tel:+919811368649"
                                        className="text-slate-300 hover:text-sky-400 transition-colors block mt-1"
                                    >
                                        +91 98113 68649
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiMail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:orders@khushienterprise.com"
                                    className="text-sm text-slate-300 hover:text-sky-400 transition-colors break-all"
                                >
                                    orders@khushienterprise.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="mt-6">
                            <h5 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">
                                Follow Us
                            </h5>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://wa.me/919560858066"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-green-500 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp size={18} />
                                </a>

                                <a
                                    href="https://instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-500 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={18} />
                                </a>

                                <a
                                    href="https://facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF size={18} />
                                </a>

                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
                            Location
                        </h4>
                        <div className="flex items-start gap-3">
                            <FiMapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                            <address className="text-sm leading-relaxed text-slate-400 not-italic">
                                Khushi Enterprises<br />
                                Plot No. 12, Industrial Area<br />
                                Phase 2, Delhi<br />
                                abc – 141003<br />
                                India
                            </address>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800/50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>
                            © {new Date().getFullYear()} Khushi Enterprise. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-sky-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-sky-400 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                        Khushi Enterprise
                    </h3>
                    <p className="text-sm leading-relaxed mb-4">
                        Wholesale dog and pet products exclusively for retailers.
                        Orders are accepted via phone or email only.
                    </p>


                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-sm font-medium text-white mb-4">
                        Navigation
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to="/" className="hover:text-sky-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-sky-400 transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-sky-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-sky-400 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-sm font-medium text-white mb-4">
                        Contact
                    </h4>
                    <p className="text-sm mb-2">
                        Phone:&nbsp;
                        <a
                            href="tel:+919811368649"
                            className="hover:text-sky-400 transition"
                        >
                            +91 98113 68649
                        </a>
                    </p>
                    <p className="text-sm mb-2">
                        Phone:&nbsp;
                        <a
                            href="tel:+919811368649"
                            className="hover:text-sky-400 transition"
                        >
                            +91 98113 68649
                        </a>
                    </p>
                    <p className="text-sm">
                        Email:&nbsp;
                        <a
                            href="mailto:orders@khushienterprise.com"
                            className="hover:text-sky-400 transition"
                        >
                            orders@khushienterprise.com
                        </a>
                    </p>
                    {/* Social Icons */}
                    <h4 className="text-sm font-medium text-white mb-4 mt-6">
                        Follow Us
                    </h4>
                    <div className="flex items-center gap-4 mt-4">
                        <a
                            href="https://wa.me/919811368649"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-900 hover:bg-green-500 text-white transition"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp size={16} />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-900 hover:bg-pink-500 text-white transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={16} />
                        </a>

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white transition"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-900 hover:bg-sky-600 text-white transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={16} />
                        </a>
                    </div>
                </div>

                {/* Address */}
                <div>
                    <h4 className="text-sm font-medium text-white mb-4">
                        Address
                    </h4>
                    <p className="text-sm leading-relaxed">
                        Khushi Enterprise<br />
                        Plot No. 12, Industrial Area<br />
                        Phase 2, Delhi<br />
                        abc – 141003<br />
                        India
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Khushi Enterprise. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;

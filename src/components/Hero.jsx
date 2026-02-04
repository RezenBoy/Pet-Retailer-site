import { BsWhatsapp } from "react-icons/bs";
import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden mt-10">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/85" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-sm border border-sky-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-sky-300">
                Trusted B2B Supplier
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Wholesale Pet Products
            </h1>

            {/* <p className="mt-4 text-2xl sm:text-3xl font-semibold text-sky-400">
              For Retailers Only
            </p> */}

            {/* Description */}
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              A trusted wholesale supplier offering quality pet food,
              accessories, grooming essentials, and more. Orders are
              accepted exclusively via phone or email.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              {/* Call CTA */}
              <a
                href="tel:+919560858066"
                className="group inline-flex justify-center items-center gap-3 bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                <FiPhone className="w-5 h-5" />
                <span>Call to Order</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919560858066?text=Hello%20I%20want%20to%20place%20a%20wholesale%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-3 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-8 py-4 rounded-xl text-white font-semibold hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
              >
                <BsWhatsapp className="w-5 h-5 text-green-400" />
                <span>WhatsApp Order</span>
              </a>

              {/* Email CTA */}
              <a
                href="mailto:khushienterprises1013@gmail.com"
                className="inline-flex justify-center items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <FiMail className="w-5 h-5" />
                <span>Email Orders</span>
              </a>

            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-sky-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                  />
                </svg>
                <span>Verified Supplier</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-sky-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Fast Processing</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-sky-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Quality Guaranteed</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

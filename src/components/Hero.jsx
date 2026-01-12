function Hero() {
  return (
    <section className="relative min-h-[65vh] flex items-center">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-100"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/65 to-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 w-full ml-0 sm:ml-4">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-xl">

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
              Wholesale Dog & Pet Products
              <span className="block text-sky-400 mt-2 text-2xl sm:text-3xl md:text-4xl">
                For Retailers Only
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed">
              A trusted wholesale supplier offering quality pet food,
              accessories, grooming essentials, and more. Orders are
              accepted exclusively via phone or email.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919999999999"
                className="inline-flex justify-center items-center bg-sky-400 text-slate-900 px-8 py-3 rounded-md font-medium hover:bg-sky-500 transition"
              >
                Call to Order
              </a>

              <a
                href="mailto:orders@company.com"
                className="inline-flex justify-center items-center border border-slate-400 px-8 py-3 rounded-md text-white hover:bg-white/10 transition"
              >
                Email Orders
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;

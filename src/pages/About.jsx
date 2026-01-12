function About() {
  return (
    <section id="about" className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          About Us
        </h2>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-6">
          We are a wholesale supplier of dog and pet products, serving
          retailers with quality items at competitive prices. Our focus
          is on long-term partnerships with pet shops, distributors,
          and resellers.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-medium text-slate-800 mb-2">
              Wide Product Range
            </h3>
            <p className="text-sm text-slate-600">
              Dog food, accessories, grooming products, toys, and more.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-medium text-slate-800 mb-2">
              Retailer Focused
            </h3>
            <p className="text-sm text-slate-600">
              This platform is designed exclusively for retailers and
              bulk buyers.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-medium text-slate-800 mb-2">
              Simple Ordering
            </h3>
            <p className="text-sm text-slate-600">
              Place orders easily via phone or email with direct support.
            </p>
          </div>
        </div>

        {/* Retailer Note */}
        <div className="mt-8 bg-slate-50 border-l-4 border-sky-400 p-4 text-sm text-slate-700">
          This website is intended for retailers only. We do not sell
          directly to consumers.
        </div>

      </div>
    </section>
  );
}

export default About;

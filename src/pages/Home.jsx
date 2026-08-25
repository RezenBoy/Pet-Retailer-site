
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <h2 
                id="featured-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900"
              >
                Featured Products
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                A curated selection of our best-selling wholesale pet products for retailers.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm group focus:outline-none focus:underline"
            >
              View All Products
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <ProductList initialCount={4} loadMoreCount={4} />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to Stock Your Store?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Contact us today for wholesale pricing, bulk orders, and custom inquiries.
            We serve retailers across India with reliable delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919560858066"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-lg shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-sky-400 hover:text-sky-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              More Contact Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
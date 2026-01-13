import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <Hero />

      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            Featured Products
          </h2>

          <p className="text-sm text-slate-600 mb-8">
            A selection of our wholesale pet products.
          </p>

          <ProductList initialCount={4} loadMoreCount={8} />

        </div>
      </section>
    </>
  );
}

export default Home;

import ProductList from "../components/ProductList";

function Products() {
  return (
    <main className="bg-slate-50 min-h-screen pt-28 sm:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
            Browse our complete catalog of wholesale pet products. 
            All items available in bulk quantities for retailers.
          </p>
        </div>

        <ProductList showFilters={true} initialCount={8} loadMoreCount={8} />
      </div>
    </main>
  );
}

export default Products;
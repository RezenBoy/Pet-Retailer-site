import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductList({ initialCount, loadMoreCount }) {
  const showAll = initialCount == null;

  const [visibleCount, setVisibleCount] = useState(
    showAll ? products.length : initialCount
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreCount);
  };

  return (
    <>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button (Home only) */}
      {!showAll && visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 text-sm font-medium rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Load More Products
          </button>
        </div>
      )}
    </>
  );
}

export default ProductList;

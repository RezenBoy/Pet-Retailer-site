import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ initialCount, loadMoreCount }) {
  const showAll = initialCount == null;

  const [visibleCount, setVisibleCount] = useState(
    showAll ? products.length : initialCount
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreCount);
  };

  const remainingCount = products.length - visibleCount;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!showAll && visibleCount < products.length && (
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-4">
              Showing {visibleCount} of {products.length} products
            </p>
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Load More Products</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors text-xs font-bold">
                {remainingCount > loadMoreCount ? loadMoreCount : remainingCount}
              </span>
              <FiChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-xs">
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-500"
                style={{ width: `${(visibleCount / products.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
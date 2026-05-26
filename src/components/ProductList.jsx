
import { useState, useCallback, useMemo } from "react";
import { FiChevronDown, FiSearch, FiSliders } from "react-icons/fi";
import products from "../data/products";
import ProductCard from "./ProductCard";

const categories = ["All", ...new Set(products.map(p => p.category))];

function ProductList({ initialCount = null, loadMoreCount = 8, showFilters = false }) {
  const showAll = initialCount === null || initialCount >= products.length;

  const [visibleCount, setVisibleCount] = useState(
    showAll ? products.length : Math.min(initialCount, products.length)
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.material.toLowerCase().includes(query)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + loadMoreCount, filteredProducts.length));
  }, [loadMoreCount, filteredProducts.length]);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setVisibleCount(showAll ? filteredProducts.length : Math.min(initialCount || 8, filteredProducts.length));
  }, [showAll, initialCount, filteredProducts.length]);

  const remainingCount = filteredProducts.length - visibleCount;
  const hasMore = !showAll && visibleCount < filteredProducts.length && filteredProducts.length > 0;

  return (
    <div>
      {showFilters && (
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              aria-label="Search products"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <FiSliders className="w-5 h-5 text-slate-400 mr-2 self-center" aria-hidden="true" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600"
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {showFilters && (
        <p className="text-sm text-slate-500 mb-6">
          Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length} products
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <FiSearch className="w-12 h-12 text-slate-300 mx-auto mb-4" aria-hidden="true" />
          <p className="text-lg text-slate-600 font-medium">No products found</p>
          <p className="text-sm text-slate-400 mt-1">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-sky-600 hover:text-sky-700 font-medium text-sm focus:outline-none focus:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {hasMore && (
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-4">
              Showing {visibleCount} of {filteredProducts.length} products
            </p>
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <span>Load More Products</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors text-xs font-bold">
                {remainingCount > loadMoreCount ? loadMoreCount : remainingCount}
              </span>
              <FiChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            </button>
          </div>

          <div className="w-full max-w-xs">
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-500"
                style={{ width: `${(visibleCount / filteredProducts.length) * 100}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
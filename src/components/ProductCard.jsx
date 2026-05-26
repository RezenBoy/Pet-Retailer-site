import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ImageWithFallback from "./ImageWithFallback";

function ProductCard({ product }) {
  const navigate = useNavigate();

  if (!product || !product.id) {
    console.warn("ProductCard received invalid product:", product);
    return null;
  }

  const goToDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToDetails();
    }
  };

  const displayVariants = product.variants?.slice(0, 3) || [];
  const remainingVariants = (product.variants?.length || 0) - 3;

  return (
    <article
      onClick={goToDetails}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.name}`}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackClassName="h-full w-full"
          type="product"
        />

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-sky-600 transition-colors duration-200">
          {product.name}
        </h3>

        {displayVariants.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {displayVariants.map((variant, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium"
              >
                {variant}
              </span>
            ))}
            {remainingVariants > 0 && (
              <span className="text-xs text-slate-500 px-2 py-1">
                +{remainingVariants} more
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600 font-medium">
              View Details for Pricing
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              {product.material}
            </p>
          </div>

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500">
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
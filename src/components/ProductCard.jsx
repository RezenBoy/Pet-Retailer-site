import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiPackage } from "react-icons/fi";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center text-slate-400">
            <FiPackage className="w-12 h-12 mb-2" />
            <span className="text-sm font-medium">Product Image</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-sky-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Variants */}
        {product.variants && product.variants.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.variants.slice(0, 3).map((variant, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium"
              >
                {variant}
              </span>
            ))}
            {product.variants.length > 3 && (
              <span className="text-xs text-slate-500 px-2 py-1">
                +{product.variants.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600 font-medium">
              View Details for Pricing
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-200">
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
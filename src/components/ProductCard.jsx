import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="group cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-slate-400 text-sm">
            Product Image
          </div>
        )}

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-800 leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Variants (optional) */}
        {product.variants && (
          <p className="text-xs text-slate-500 mt-2 line-clamp-1">
            Variants: {product.variants.join(", ")}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <p className="text-slate-900 font-semibold text-sm">
            {product.priceNote}
          </p>

          {/* Subtle arrow indicator */}
          <span className="text-slate-400 group-hover:text-sky-400 transition">
            →
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

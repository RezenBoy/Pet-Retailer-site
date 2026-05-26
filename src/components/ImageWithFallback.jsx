import { useState } from "react";
import { FiPackage, FiImage } from "react-icons/fi";

function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallbackClassName = "",
  type = "product" 
}) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-100 text-slate-400 ${fallbackClassName}`}>
        {type === "product" ? (
          <>
            <FiPackage className="w-12 h-12 mb-2 opacity-50" aria-hidden="true" />
            <span className="text-sm font-medium">Product Image</span>
          </>
        ) : (
          <>
            <FiImage className="w-12 h-12 mb-2 opacity-50" aria-hidden="true" />
            <span className="text-sm font-medium">Image Unavailable</span>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-slate-50 ${fallbackClassName}`}>
          <div className="w-8 h-8 border-2 border-sky-200 border-t-sky-500 rounded-full animate-spin" aria-hidden="true" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </>
  );
}

export default ImageWithFallback;
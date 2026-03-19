import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiPhone, FiMail, FiPackage, FiTag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <FiPackage className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-lg text-slate-600 mb-6">Product not found</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 mb-8 transition-colors group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">

            {/* Image Section */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-12 flex items-center justify-center min-h-[400px]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[400px] object-contain"
                />
              ) : (
                <div className="text-center">
                  <FiPackage className="w-24 h-24 text-slate-300 mx-auto mb-4" />
                  <span className="text-sm text-slate-400 font-medium">
                    Product Image
                  </span>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12">

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <FiTag className="w-3.5 h-3.5" />
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {product.description ||
                  "High-quality wholesale pet product designed for retailers seeking premium inventory."}
              </p>

              {/* Specifications */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-slate-500">
                    Material
                  </div>
                  <div className="text-sm text-slate-900 font-medium">
                    {product.material || "Premium Quality"}
                  </div>
                </div>

                {product.variants && product.variants.length > 0 && (
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-slate-500">
                      Variants
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium"
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* <div className="flex items-start gap-3 pb-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-slate-500">
                    Price
                  </div>
                  <div className="text-lg text-slate-900 font-bold">
                    {product.priceNote}
                  </div>
                </div> */}
              </div>

              {/* Call to Action */}
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  Ready to place a wholesale order?
                </p>
                <div className="flex flex-col gap-3">

                  <a
                    href="tel:+919811368649"
                    className="flex items-center justify-center gap-3 bg-sky-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <FiPhone className="w-5 h-5" />
                    Call to Order
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/919811368649?text=Hello%2C%20I%20want%20to%20place%20a%20wholesale%20order%20for%20this%20product"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-green-600 transition-all duration-200"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a

                      href="mailto:orders@khushienterprise.com?subject=Wholesale%20Order%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20place%20an%20order%20for%20this%20product."
                      className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-4 py-3.5 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                    >
                      <FiMail className="w-5 h-5" />
                      Email
                    </a>
                  </div>

                </div>
              </div>

              {/* Notice */}
              <div className="flex items-start gap-3 text-xs text-slate-500 bg-amber-50 border border-amber-100 rounded-lg p-4">
                <svg
                  className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  />
                </svg>
                <p>
                  <strong className="font-semibold text-amber-800">
                    B2B Only:
                  </strong>{" "}
                  This product is available exclusively for wholesale retailers.
                  Minimum order quantities apply.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
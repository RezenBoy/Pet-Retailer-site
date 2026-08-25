
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiPhone, FiMail, FiPackage, FiTag, FiAlertTriangle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import products from "../data/products";
import ImageWithFallback from "../components/ImageWithFallback";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <FiAlertTriangle className="w-16 h-16 text-amber-400 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h1>
          <p className="text-slate-600 mb-6">
            The product you're looking for doesn't exist or may have been removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <FiArrowLeft className="w-4 h-4" aria-hidden="true" />
              Browse Products
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in placing a wholesale order for ${product.name} (${product.category}). Please share pricing and availability.`
  );

  const emailSubject = encodeURIComponent(`Wholesale Order Inquiry: ${product.name}`);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI'm interested in placing a wholesale order for the following product:\n\nProduct: ${product.name}\nCategory: ${product.category}\nMaterial: ${product.material}\n\nPlease share pricing, minimum order quantity, and delivery timeline.\n\nThank you.`
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-28 sm:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-slate-500 hover:text-sky-600 transition-colors">Home</Link>
            </li>
            <li className="text-slate-400" aria-hidden="true">/</li>
            <li>
              <Link to="/products" className="text-slate-500 hover:text-sky-600 transition-colors">Products</Link>
            </li>
            <li className="text-slate-400" aria-hidden="true">/</li>
            <li className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 mb-6 sm:mb-8 transition-colors group focus:outline-none focus:text-sky-600"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          Back to Products
        </Link>

        {/* Main Content */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">

            {/* Image Section */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-8 sm:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] relative">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-[350px] sm:max-h-[400px] object-contain"
                fallbackClassName="w-full h-full absolute inset-0"
                type="product"
              />
            </div>

            {/* Details Section */}
            <div className="p-6 sm:p-8 lg:p-12">

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <FiTag className="w-3.5 h-3.5" aria-hidden="true" />
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {product.description || "High-quality wholesale pet product designed for retailers seeking premium inventory."}
              </p>

              {/* Specifications */}
              <dl className="space-y-4 mb-8">
                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <dt className="flex-shrink-0 w-24 text-sm font-semibold text-slate-500">
                    Material
                  </dt>
                  <dd className="text-sm text-slate-900 font-medium">
                    {product.material || "Premium Quality"}
                  </dd>
                </div>

                {product.variants && product.variants.length > 0 && (
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                    <dt className="flex-shrink-0 w-24 text-sm font-semibold text-slate-500">
                      Variants
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {product.variants.map((variant, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium"
                        >
                          {variant}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}

                <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                  <dt className="flex-shrink-0 w-24 text-sm font-semibold text-slate-500">
                    Product ID
                  </dt>
                  <dd className="text-sm text-slate-900 font-medium font-mono">
                    #{String(product.id).padStart(3, '0')}
                  </dd>
                </div>
              </dl>

              {/* Call to Action */}
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  Ready to place a wholesale order?
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919811368649"
                    className="flex items-center justify-center gap-3 bg-sky-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  >
                    <FiPhone className="w-5 h-5" aria-hidden="true" />
                    <span>Call to Order</span>
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/919560858066?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:khushienterprises1013@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                      className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-4 py-3.5 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                      <FiMail className="w-5 h-5" aria-hidden="true" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* B2B Notice */}
              <div className="flex items-start gap-3 text-xs text-slate-600 bg-amber-50 border border-amber-100 rounded-lg p-4">
                <FiAlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  <strong className="font-semibold text-amber-800">
                    B2B Only:
                  </strong>{' '}
                  This product is available exclusively for wholesale retailers.
                  Minimum order quantities apply. Business verification may be required.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Products */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            More from {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                      fallbackClassName="w-full h-full"
                      type="product"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {relatedProduct.variants?.length || 0} variants
                    </p>
                  </div>
                </Link>
              ))}
          </div>

          {products.filter(p => p.category === product.category && p.id !== product.id).length === 0 && (
            <p className="text-slate-500 text-center py-8 bg-white rounded-xl border border-slate-200">
              No other products in this category
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
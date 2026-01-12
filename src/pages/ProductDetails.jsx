import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/products"
          className="text-sky-500 text-sm mb-6 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Image */}
          <div className="bg-slate-100 h-80 flex items-center justify-center rounded-lg">
            <span className="text-slate-400">Product Image</span>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              {product.name}
            </h1>

            <p className="text-slate-600 mb-4">
              Category: {product.category}
            </p>

            <p className="mb-4 text-slate-700">
              {product.description}
            </p>

            <p className="mb-3">
              <span className="font-medium">Material:</span>{" "}
              {product.material}
            </p>

            <p className="mb-3">
              <span className="font-medium">Variants:</span>{" "}
              {product.variants.join(", ")}
            </p>

            <p className="text-lg font-semibold mb-6">
              {product.priceNote}
            </p>

            {/* Order Buttons */}
            <div className="flex gap-4">
              <a
                href="tel:+919999999999"
                className="bg-sky-400 text-slate-900 px-6 py-3 rounded-md font-medium"
              >
                Call to Order
              </a>

              <a
                href="mailto:orders@company.com"
                className="border px-6 py-3 rounded-md"
              >
                Email Order
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

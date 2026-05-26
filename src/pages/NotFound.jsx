
import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";

function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="text-9xl font-bold text-sky-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Check the URL or navigate back to our main sections.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <FiHome className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-sky-400 hover:text-sky-600 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <FiSearch className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
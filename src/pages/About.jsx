
import { FiPackage, FiUsers, FiPhone, FiCheckCircle, FiShield, FiTruck } from "react-icons/fi";

const highlights = [
  {
    icon: FiPackage,
    title: "Wide Product Range",
    description: "Comprehensive selection of dog food, accessories, grooming products, toys, and pet essentials."
  },
  {
    icon: FiUsers,
    title: "Retailer Focused",
    description: "Exclusively designed for retailers, distributors, and bulk buyers seeking quality wholesale products."
  },
  {
    icon: FiPhone,
    title: "Simple Ordering",
    description: "Streamlined ordering process via phone or email with dedicated customer support."
  }
];

const features = [
  { icon: FiCheckCircle, text: "Competitive wholesale pricing" },
  { icon: FiShield, text: "Quality guaranteed products" },
  { icon: FiTruck, text: "Reliable delivery service" },
  { icon: FiUsers, text: "Long-term partnerships" }
];

function About() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 pt-28 sm:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <FiUsers className="w-4 h-4" aria-hidden="true" />
            About Khushi Enterprises
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Your Trusted Wholesale Partner
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Committed to serving retailers with premium pet products and exceptional service since 2010.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Who We Are
            </h2>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                We are a dedicated wholesale supplier of dog and pet products, serving
                retailers with quality items at competitive prices. Our focus
                is on building long-term partnerships with pet shops, distributors,
                and resellers across the region.
              </p>
              <p>
                With years of experience in the pet industry, we understand the unique needs
                of retailers and are committed to providing products that help your business thrive.
                From durable dog cages to premium feeding accessories, we stock everything your customers need.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-sky-200 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-sky-50 text-sky-600 rounded-xl mb-4">
                  <item.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-6 lg:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <div className="flex-shrink-0 text-sky-600">
                    <feature.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-amber-900 mb-1">
                B2B Platform Notice
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                This website is intended exclusively for retailers and business customers.
                We do not sell directly to individual consumers. All orders require business
                verification and minimum purchase quantities apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
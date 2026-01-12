import { FiPhone, FiMail, FiClock, FiAlertCircle } from "react-icons/fi";

function Contact() {
  const contactMethods = [
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our sales team",
      contactInfo: "+91 98113 68649",
      action: "tel:+919811368649",
      buttonText: "Call Now"
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send your product and quantity details",
      contactInfo: "orders@company.com",
      action: "mailto:orders@company.com",
      buttonText: "Send Email"
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Business Hours",
      description: "We're available during these times",
      contactInfo: "Mon – Sat: 10:00 AM – 7:00 PM",
      action: null,
      buttonText: null
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <FiPhone className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact & Order
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            To place an order, please contact us directly. This platform is exclusively for retailers.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-200 border border-slate-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-sky-50 text-sky-600 rounded-xl mx-auto mb-5">
                {method.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {method.title}
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                {method.description}
              </p>

              <p className="text-base font-semibold text-slate-900 mb-4">
                {method.contactInfo}
              </p>

              {method.action && (
                <a
                  href={method.action}
                  className="inline-flex items-center justify-center w-full bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {method.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 mb-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Address */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Our Location
              </h3>
              <address className="text-slate-600 leading-relaxed not-italic">
                Khushi Enterprise<br />
                Plot No. 12, Industrial Area<br />
                Phase 2, Delhi<br />
                abc – 141003<br />
                India
              </address>
            </div>

            {/* Quick Contact */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2" />
                  <p className="text-slate-600">
                    Response time: Within 24 hours on business days
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2" />
                  <p className="text-slate-600">
                    Minimum order quantities apply for wholesale pricing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2" />
                  <p className="text-slate-600">
                    Business verification required for first-time orders
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* B2B Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            <FiAlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="text-base font-bold text-amber-900 mb-1">
                Retailer-Only Platform
              </h4>
              <p className="text-sm text-amber-800">
                Orders are accepted exclusively from registered retailers and business customers.
                We do not sell directly to individual consumers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

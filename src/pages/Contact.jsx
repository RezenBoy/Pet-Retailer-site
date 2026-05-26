
import { FiPhone, FiMail, FiClock, FiAlertCircle, FiExternalLink } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const contactMethods = [
  {
    icon: FiPhone,
    title: "Call Us",
    description: "Speak directly with our sales team",
    items: [
      { label: "+91 95608 58066", href: "tel:+919560858066", primary: true },
      { label: "+91 98113 68649", href: "tel:+919811368649", primary: false }
    ],
    action: "tel:+919560858066",
    buttonText: "Call Now",
    color: "bg-sky-500 hover:bg-sky-600"
  },
  {
    icon: BsWhatsapp,
    title: "WhatsApp",
    description: "Quick order & enquiry",
    action: "https://wa.me/919560858066?text=Hello%20I%20want%20to%20place%20a%20wholesale%20order",
    buttonText: "Chat on WhatsApp",
    color: "bg-green-500 hover:bg-green-600",
    external: true
  },
  {
    icon: FiMail,
    title: "Email Us",
    description: "Send product & quantity details",
    action: "mailto:orders@khushienterprise.com?subject=Wholesale%20Order%20Inquiry",
    buttonText: "Send Email",
    color: "bg-slate-700 hover:bg-slate-800"
  },
  {
    icon: FiClock,
    title: "Business Hours",
    description: "We're available during these times",
    timings: [
      { day: "Mon – Sat", hours: "10:00 AM – 7:00 PM" },
      { day: "Sunday", hours: "Closed", closed: true }
    ]
  }
];

function Contact() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 pt-28 sm:pt-32 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <FiPhone className="w-4 h-4" aria-hidden="true" />
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Contact & Order
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            To place an order, please contact us directly. This platform is exclusively for retailers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-200 border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-sky-50 text-sky-600 rounded-xl mx-auto mb-5">
                <method.icon className="w-8 h-8" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {method.title}
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                {method.description}
              </p>

              <div className="flex-grow space-y-3">
                {method.items && (
                  <div className="space-y-2">
                    {method.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className={`block text-sm font-medium transition-colors ${
                          item.primary ? "text-slate-900" : "text-slate-500"
                        } hover:text-sky-600 focus:outline-none focus:text-sky-600`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}

                {method.timings && (
                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    {method.timings.map((t, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-600">
                          {t.day}
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            t.closed ? "text-red-500" : "text-sky-600"
                          }`}
                        >
                          {t.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {method.action && (
                <div className="mt-auto pt-4">
                  <a
                    href={method.action}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-center w-full text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${method.color}`}
                  >
                    {method.buttonText}
                    {method.external && (
                      <FiExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    )}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-xl p-6 shadow-md">
          <div className="flex items-start gap-4">
            <FiAlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" aria-hidden="true" />
            <div>
              <h4 className="text-base font-bold text-amber-900 mb-1">
                Retailer-Only Platform
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                Orders are accepted exclusively from registered retailers and business customers.
                We do not sell directly to individual consumers. Minimum order quantities
                and business verification may be required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
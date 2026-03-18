import { FiPhone, FiMail, FiClock, FiAlertCircle } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const contactMethods = [
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our sales team",
      contactInfo: [
        { label: "+91 95608 58066", action: "tel:+919560858066" },
        { label: "+91 98113 68649", action: "tel:+919811368649" },
      ],
      multiCall: true,
    },
    {
      icon: <BsWhatsapp className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Quick order & enquiry",
      action:
        "https://wa.me/919560858066?text=Hello%20I%20want%20to%20place%20a%20wholesale%20order",
      buttonText: "Chat on WhatsApp",
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send product & quantity details",
      action: "mailto:khushienterprises1013@gmail.com",
      buttonText: "Send Email",
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Business Hours",
      description: "We're available during these times",
      timings: [
        { day: "Mon – Sat", hours: "10:00 AM – 7:00 PM" },
        { day: "Sunday", hours: "Closed" },
      ],
    },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-200 border border-slate-100 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-sky-50 text-sky-600 rounded-xl mx-auto mb-5">
                {method.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-4">
                {method.description}
              </p>

              {/* Middle Content */}
              <div className="flex-grow">

                {/* Call Numbers */}
                {method.multiCall && (
                  <div className="mb-4 space-y-1">
                    {method.contactInfo.map((item, i) => (
                      <a
                        key={i}
                        href={item.action}
                        className="block text-sm font-medium text-slate-700 hover:text-sky-600"
                      >
                        {i === 0 ? "Primary:" : "Alternate:"} {item.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Business Hours */}
                {method.timings && (
                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    {method.timings.map((t, i) => (
                      <div key={i} className="flex items-center justify-between">

                        {/* Day */}
                        <span className="text-sm font-medium text-slate-600 whitespace-nowrap">
                          {t.day}
                        </span>

                        {/* Time */}
                        <span
                          className={`text-sm font-semibold ${t.hours === "Closed"
                              ? "text-red-500"
                              : "text-sky-600"
                            }`}
                        >
                          {t.hours}
                        </span>

                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto pt-4">
                {method.multiCall ? (
                  <a
                    href={method.contactInfo[0].action}
                    className="inline-flex items-center justify-center w-full bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <FiPhone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                ) : method.action ? (
                  <a
                    href={method.action}
                    className="inline-flex items-center justify-center w-full bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    {method.buttonText}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
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
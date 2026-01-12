function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Contact & Order
        </h2>

        <p className="text-slate-600 mb-8">
          To place an order, please contact us directly. This platform is
          for retailers only.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Phone */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
            <h3 className="font-medium text-slate-800 mb-2">
              Call Us
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Speak directly with our sales team
            </p>
            <a
              href="tel:+91 98113 68649"
              className="text-sky-500 font-medium hover:underline"
            >
              +919811368649
            </a>
          </div>

          {/* Email */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
            <h3 className="font-medium text-slate-800 mb-2">
              Email Us
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Send your product and quantity details
            </p>
            <a
              href="mailto:orders@company.com"
              className="text-sky-500 font-medium hover:underline"
            >
              orders@company.com
            </a>
          </div>

          {/* Business Info */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
            <h3 className="font-medium text-slate-800 mb-2">
              Business Hours
            </h3>
            <p className="text-sm text-slate-600">
              Mon – Sat<br />
              10:00 AM – 7:00 PM
            </p>
          </div>

        </div>

        {/* Retailer Notice */}
        <div className="mt-8 text-sm text-slate-700 bg-white border-l-4 border-sky-400 p-4">
          Orders are accepted only from retailers. No direct consumer sales.
        </div>

      </div>
    </section>
  );
}

export default Contact;

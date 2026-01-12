import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98113 68649", "+91 98113 68649"],
      action: "tel:+919811368649"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      details: ["orders@khushienterprise.com"],
      action: "mailto:orders@khushienterprise.com"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Address",
      details: [
        "Khushi Enterprise",
        "Plot No. 12, Industrial Area",
        "Phase 2, Delhi, abc – 141003, India"
      ],
      action: null
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <FiMail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to place an order or have questions? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-sky-50 text-sky-600 rounded-lg mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {info.title}
                </h3>

                {info.action ? (
                  <a
                    href={info.action}
                    className="space-y-1 hover:text-sky-600 transition-colors block"
                  >
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-slate-600">
                        {detail}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-slate-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-50 text-green-600 rounded-full mb-4">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-600 text-center">
                    Thank you for reaching out. We'll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* form unchanged */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-sky-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span>Send Message</span>
                    <FiSend className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-sky-50 border border-sky-100 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-sky-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-sky-900 mb-1">
                Business Hours
              </h4>
              <p className="text-sm text-sky-800">
                Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

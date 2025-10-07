import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const logoSrc = "/logo.png";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Business Visa (Individual)",
    message: "",
  });
  const [status, setStatus] = useState("");
  async function handleSubmit(e) {
  e.preventDefault();
  setStatus("Sending...");
    try {
    await emailjs.send(
      "service_xr9xumw", // Your EmailJS Service ID
      "template_wrn7ptr", // Your Template ID
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      "Hv1S7qKqQ4jxjfRA2SQqE" // Your Public Key
    );
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", service: "Business Visa (Individual)", message: "" });
  } catch (err) {
    setStatus("❌ Failed to send. Try again later.");
  }
}

 
  return (
    <div className="min-h-screen bg-white text-blue-800 font-sans">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logoSrc} alt="Iyayume Consultants" className="w-28 h-auto" />
          <div>
            <h1 className="text-2xl tracking-wider">IYAYUME CONSULTANTS</h1>
            <p className="text-sm text-gray-600">
              Business &amp; Tourism Visa Consultancy
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid md:grid-cols-2 gap-8 items-center my-12">
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Visa help that's simple & reliable
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We handle business and tourism visa applications end-to-end for
              individuals and companies. Fast guidance, document review, and
              submission support — so you travel with confidence.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl mb-4">Quick contact</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Full name"
                className="w-full p-2 border rounded"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <select
                name="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full p-2 border rounded"
              >
                <option>Business Visa (Individual)</option>
                <option>Business Visa (Company Sponsorship)</option>
                <option>Tourism Visa</option>
                <option>Document Review Only</option>
              </select>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message"
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-blue-700 text-white rounded"
              >
                Send enquiry
              </button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>
        </section>

        <section id="pricing" className="my-12">
          <h3 className="text-2xl mb-4">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 border rounded shadow-sm">
              <h4 className="font-semibold mb-2">Business Visa (Individual)</h4>
              <p className="text-gray-700 mb-2">
                Complete assistance for individual applications.
              </p>
              <p className="font-bold text-blue-700">$250</p>
            </div>
            <div className="p-5 border rounded shadow-sm">
              <h4 className="font-semibold mb-2">Business Visa (Company)</h4>
              <p className="text-gray-700 mb-2">
                Corporate visa facilitation and support.
              </p>
              <p className="font-bold text-blue-700">$400</p>
            </div>
            <div className="p-5 border rounded shadow-sm">
              <h4 className="font-semibold mb-2">Tourism Visa</h4>
              <p className="text-gray-700 mb-2">
                Quick and guided application process.
              </p>
              <p className="font-bold text-blue-700">$180</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

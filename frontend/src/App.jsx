import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { emailjsConfig } from './emailjsConfig.js';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      emailjsConfig.SERVICE_ID,
      emailjsConfig.TEMPLATE_ID,
      form,
      emailjsConfig.PUBLIC_KEY
    )
    .then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 3000);
      setForm({ name: '', email: '', message: '' });
    })
    .catch(() => alert("Error sending message"));
  };

  return (
    <div className="app">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div>
          <h1>Iyayume Visa Consultancy</h1>
          <p className="tagline">Fast, Reliable, and Hassle-Free Visa Assistance.</p>
        </div>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Business / Tourism Visa</h3>
            <p>₹5000 per person</p>
            <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Get Quote</button>
          </div>
          <div className="card">
            <h3>Instant Visa</h3>
            <p>₹5000 base charge + ₹15000 for earliest date</p>
            <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Get Quote</button>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required value={form.name} onChange={e => setForm({...form, name:e.target.value})}/>
          <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email:e.target.value})}/>
          <textarea placeholder="Message" required value={form.message} onChange={e => setForm({...form, message:e.target.value})}/>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>📧 iyayume.visa@gmail.com</footer>

      {toast && <div className="toast">✅ Message sent successfully!</div>}
    </div>
  );
}

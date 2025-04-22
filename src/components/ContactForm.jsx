import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email.');
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow space-y-5"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white flex justify-center items-center gap-2 px-6 py-3 rounded-xl transition duration-300"
        >
          <Send size={18} /> Send Message
        </button>
        {submitted && (
          <p className="text-green-600 text-center font-medium">
            ✅ Your message has been sent!
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;

import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useState } from 'react';
import { addContact } from '../../apis/Api';

export default function Contact() {
  const [mapLoading, setMapLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addContact(form);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      // Error handled by toast in Api.jsx
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-2 sm:px-4">
      {/* Force 1-column layout on mobile and tablet, only switch to 2 columns on large screens */}
      <div className="max-w-5xl w-full p-2 sm:p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column: Form */}
        <div className="flex flex-col bg-blue-100 justify-center h-full space-y-6 rounded-md p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl text-gray-800 mb-2 text-center lg:text-left">
            Contact Us
          </h1>
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border bg-gray-100 rounded-md px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition text-gray-700"
              placeholder="Name *"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border bg-gray-100 rounded-md px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition text-gray-700"
              placeholder="Email *"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border bg-gray-100 rounded-md px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition text-gray-700"
              rows="4"
              placeholder="Message *"
              required
            ></textarea>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-md text-sm transition shadow disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Contact Info & Map */}
        <div className="flex flex-col h-full gap-6 sm:gap-8">
          <div className="bg-purple-100 rounded-md p-4 sm:p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-purple-400 text-lg" />
                <span className="text-gray-700 text-sm font-medium">30/1, Elawaka, Nikaweratiya</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineMail className="text-purple-400 text-lg" />
                <a
                  href="mailto:jobcore@gmail.com"
                  className="text-gray-700 text-sm font-medium"
                >
                  jobcore@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlinePhone className="text-purple-400 text-lg" />
                <a
                  href="tel:0763424457"
                  className="text-gray-700 text-sm font-medium"
                >
                  0763424457
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-md overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-52 sm:h-64 lg:h-80">
            {mapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
                <svg className="animate-spin h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              </div>
            )}
            <iframe
              title="JobCore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63255.31420051712!2d80.0835898311176!3d7.741238574325455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcd5e863eb6c7b%3A0xdf348650a6f7718!2sNikaweratiya!5e0!3m2!1sen!2slk!4v1755619867134!5m2!1sen!2slk"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoading(false)}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
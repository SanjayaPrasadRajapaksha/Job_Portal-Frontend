export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-green-300 p-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-green-700 mb-3 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-10">
          We'd love to hear from you! Fill out the form or reach us directly.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-green-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition duration-200"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-green-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition duration-200"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-green-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition duration-200"
              rows="5"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-yellow-400 hover:from-yellow-400 hover:to-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Contact Information
            </h2>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">📍</span>
              <div>
                <p className="text-gray-800 font-semibold">Address</p>
                <p className="text-gray-600">30/1, Elawaka, Nikaweratiya</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✉️</span>
              <div>
                <p className="text-gray-800 font-semibold">Email</p>
                <p className="text-gray-600">
                  <a
                    href="mailto:jobcore@gmail.com"
                    className="underline hover:text-green-700"
                  >
                    jobcore@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">📞</span>
              <div>
                <p className="text-gray-800 font-semibold">Phone</p>
                <p className="text-gray-600">
                  <a
                    href="tel:0763424457"
                    className="underline hover:text-green-700"
                  >
                    0763424457
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-green-300 shadow-lg">
            <iframe
              title="JobCore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019234019839!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e6b7b0b%3A0x8e8e8e8e8e8e8e8e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="h-64 md:h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

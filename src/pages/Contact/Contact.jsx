export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ecf8f8] to-[#fefefe] flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl border border-yellow-400 p-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-[#720026] mb-3 text-center">Contact Us</h1>
        <p className="text-[#720026] text-center mb-8">We'd love to hear from you! Fill out the form or reach us directly.</p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-[#720026] font-semibold mb-1">Name</label>
            <input 
              type="text" 
              className="w-full border border-yellow-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-[#720026] font-semibold mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-yellow-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200" 
              placeholder="you@email.com" 
            />
          </div>
          <div>
            <label className="block text-[#720026] font-semibold mb-1">Message</label>
            <textarea 
              className="w-full border border-yellow-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200" 
              rows="5" 
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-yellow-400 hover:bg-[#720026] text-[#720026] hover:text-yellow-400 font-bold py-3 px-6 rounded-lg transition-colors duration-300 border border-yellow-400 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#720026] mb-4">Contact Information</h2>
            <div>
              <p className="text-[#720026] font-semibold">Address</p>
              <p className="text-green-700">30/1, Elawaka, Nikaweratiya</p>
            </div>
            <div>
              <p className="text-[#720026] font-semibold">Email</p>
              <p className="text-green-700"><a href="mailto:jobcore@gmail.com" className="underline hover:text-[#720026]">jobcore@gmail.com</a></p>
            </div>
            <div>
              <p className="text-[#720026] font-semibold">Phone</p>
              <p className="text-green-700"><a href="tel:0763424457" className="underline hover:text-[#720026]">0763424457</a></p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-yellow-400 shadow-lg">
            <iframe
              title="JobCore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019234019839!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e6b7b0b%3A0x8e8e8e8e8e8e8e8e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="h-64 md:h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

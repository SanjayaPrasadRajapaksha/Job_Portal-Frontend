import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full p-10 grid md:grid-cols-2 gap-12">

        {/* Left Column: Form */}
    <div className="flex flex-col justify-center h-full space-y-6 rounded-md border p-8">
          <h1 className="text-3xl text-gray-800 mb-2 text-center md:text-left">
            Contact Us
          </h1>
         
          <form className="space-y-6">
            <input
              type="text"
              className="w-full border bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition duration-200 text-gray-700"
              placeholder="Name *"
            />
            <input
              type="email"
              className="w-full border bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition duration-200 text-gray-700"
              placeholder="Email *"
            />
            <textarea
              className="w-full border bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition duration-200 text-gray-700"
              rows="5"
              placeholder="Message *"
            ></textarea>
            
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-200 shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Contact Info & Map */}
        <div className="flex flex-col h-full gap-8">
          <div className="bg-purple-50 rounded-md shadow p-6">
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

          <div className="rounded-md overflow-hidden border border-gray-200 shadow-sm h-64 md:h-80">
            <iframe
              title="JobCore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019234019839!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e6b7b0b%3A0x8e8e8e8e8e8e8e8e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="h-full w-full"
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

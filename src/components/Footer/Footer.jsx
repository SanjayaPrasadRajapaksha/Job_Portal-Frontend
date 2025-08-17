import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";


const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", bg: "bg-blue-600" },
  { icon: <SiX />, href: "#", label: "X", bg: "bg-black" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", bg: "bg-blue-700" },
  {
    icon: <FaInstagram />,
    href: "#",
    label: "Instagram",
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  },
];

export default function Footer() {
  return (
<footer className="bg-gradient-to-b from-gray-700 to-gray-800">
  <div className="max-w-screen-xl text-gray-200 mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-2 py-1 gap-2 shadow-lg rounded-t-lg bg-gradient-to-b from-gray-700 to-gray-800">
        {/* Links */}
        <nav className="flex flex-wrap gap-1 justify-start flex-1 text-xs">
          © 2006-2025 Genesisi Software (Pvt) Ltd. All Rights Reserved.
        </nav>

        {/* Subscribe Form */}
        <form className="flex gap-1 items-center flex-shrink-0 text-xs">
          <input
            type="email"
            placeholder="Email"
            className="h-6 px-2 rounded-l-md border border-gray-300 focus:ring-1 focus:ring-green-200 bg-white text-xs focus:outline-none"
            required
          />
          <button
            type="submit"
            className="h-6 px-2 bg-red-600 text-white rounded-r-md text-xs shadow-sm transition"
          >
            Subscribe
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex gap-1 items-center flex-shrink-0 ml-9">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs transition-transform hover:scale-110 shadow-sm ${social.bg}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="w-full bg-gray-200 text-center py-0.5 text-[10px] text-gray-600 border-t">
        © 2006-2025 Genesisi Software (Pvt) Ltd. All Rights Reserved.
      </div> */}
    </footer>
  );
}

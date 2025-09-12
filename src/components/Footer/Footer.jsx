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
    <footer className="bg-gradient-to-b from-gray-700 to-gray-800 w-full">
      <div className="
        max-w-screen-xl mx-auto
        flex flex-row items-center justify-between
        px-2 py-2
        gap-2
        text-gray-200 shadow-lg rounded-t-lg
      ">
        {/* Copyright */}
        <nav className="flex-1 text-xs text-center md:text-left">
          Copyright © 2025 jobCore.lk, All Rights Reserved.
        </nav>

        {/* Subscribe Form - hidden on mobile, visible on md+ */}
        <form className="hidden md:flex gap-1 items-center text-xs">
          <input
            type="email"
            placeholder="Email"
            className="h-7 px-2 rounded-l-md border border-gray-300 focus:ring-1 focus:ring-green-200 bg-white text-xs focus:outline-none"
            required
          />
          <button
            type="submit"
            className="h-7 px-2 bg-red-600 text-white rounded-r-md text-xs shadow-sm transition hover:bg-red-700"
          >
            Subscribe
          </button>
        </form>
<div></div>
<div></div>
        {/* Social Icons */}
        <div className="flex gap-2 items-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-base transition-transform hover:scale-110 shadow-sm ${social.bg}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const footerLinks = [
  "Home",
  "Banner promotions",
  "Top Employers",
  "T & C",
  "Privacy Policy",
  "FAQ",
  "Media Room",
  "Partners",
  "LMI",
  "Contact Us",
  "Sitemap"
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", bg: "#1877F2" },
  { icon: <SiX />, href: "#", label: "X", bg: "#000000" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", bg: "#0A66C2" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", bg: "linear-gradient(45deg, #feda75, #d62976, #962fbf)" },
];

export default function Footer() {
  return (
    <footer className="mt-4">
      {/* Top links */}
      <div className="w-full bg-[#1b263b] shadow-inner">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-2 justify-center md:justify-start text-[0.75rem] text-[#e0e1dd]">
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link}>
                <a
                  href="#"
                  className="hover:text-[#FFBD00] font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#FFBD00] rounded-sm"
                >
                  {link}
                </a>
                {idx !== footerLinks.length - 1 && (
                  <span className="hidden sm:inline text-[#778da9]">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                style={{ background: social.bg, backgroundSize: "200% 200%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-[0.65rem]">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-gray-300 text-center py-1 text-[0.65rem] text-gray-900 border-t border-gray-400">
        © 2006–2025 <span className="font-semibold">Genesisi Software (Pvt) Ltd</span>, All Rights Reserved.
      </div>
    </footer>
  );
}

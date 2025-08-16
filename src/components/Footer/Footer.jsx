import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

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
  "Sitemap",
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", bg: "#1877F2" },
  { icon: <SiX />, href: "#", label: "X", bg: "#000000" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", bg: "#0A66C2" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", bg: "linear-gradient(45deg, #feda75, #d62976, #962fbf)" },
];

export default function Footer() {
  return (
    <footer className="bg-[#858991] text-[#e0e1dd] shadow-inner text-sm">
      {/* Top Links & Social */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-1 gap-1">
        
        {/* Links */}
        <nav className="flex flex-wrap gap-1 justify-center md:justify-start">
          {footerLinks.map((link, idx) => (
            <React.Fragment key={link}>
              <a
                href="#"
                className="px-1 hover:text-[#FFBD00] font-semibold transition-colors duration-200"
              >
                {link}
              </a>
              {idx !== footerLinks.length - 1 && <span className="text-[#778da9]">|</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-1 mt-1 md:mt-0">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
              style={{ background: social.bg }}
            >
              <span className="text-white text-xs">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Lower Copyright */}
      <div className="w-full bg-gray-800 text-center py-0.5 text-xs text-gray-300 border-t border-gray-600">
        © 2006-2025 Genesisi Software (Pvt) Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

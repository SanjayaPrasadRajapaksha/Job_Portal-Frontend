import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X (Twitter) icon

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
  { icon: <FaFacebookF />, href: "#", label: "Facebook", bg: "#FFBD00" },
  { icon: <SiX />, href: "#", label: "X", bg: "#FF9100" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", bg: "#FF6D00" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", bg: "#FF5400" },
];

export default function Footer() {
  return (
    <footer>
      {/* Top links section */}
      <div className="w-full bg-[#1b263b] shadow-inner">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-1 gap-1">
          <nav className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link}>
                <a
                  href="#"
                  className="px-1 text-[#e0e1dd] hover:text-[#FFBD00] font-semibold transition"
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
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                style={{ background: social.bg }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-sm">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

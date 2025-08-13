import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // Twitter X icon

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "Banner promotions", href: "#" },
  { name: "Top Employers", href: "#" },
  { name: "T & C", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Media Room", href: "#" },
  { name: "Partners", href: "#" },
  { name: "LMI", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Sitemap", href: "#" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", bg: "#1877f3" },
  { icon: <SiX />, href: "#", label: "X", bg: "#222" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", bg: "#0077b5" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", bg: "#ed4956" },
];

export default function Footer() {
  return (
    <footer>
      {/* Top nav bar */}
      <div className="w-full bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-inner">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 py-1">
          <nav className="flex-1 flex items-center gap-1">
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="px-2 text-sm text-blue-100 hover:text-orange-200 transition"
                >
                  {link.name}
                </a>
                {idx !== footerLinks.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="flex gap-1 ml-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-7 h-7 rounded flex items-center justify-center"
                style={{
                  background: social.bg,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Lower copyright bar */}
      <div className="w-full bg-gray-300 text-center py-1 text-xs text-gray-900 border-t border-gray-400">
        Copyright © 2006-2025 Genesisi Software (Pvt) Ltd, All Rights Reserved.
      </div>
    </footer>
  );
}
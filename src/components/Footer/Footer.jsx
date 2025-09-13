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

import { useState } from "react";

function ErrorPopup({ message, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fadeIn">
      <div className=" bg-white  rounded-2xl shadow-2xl p-8 pt-12 flex flex-col items-center relative scale-100 animate-popup">
        <button
          className="absolute top-0 right-1 w-9 h-9 flex items-center justify-center rounded-full text-red-500 hover:text-red-600 text-3xl  z-10 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Sad face SVG for duplicate email */}
        <span className="mb-3 animate-pulse" role="img" aria-label="sad face">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#FFD600" strokeWidth="3" fill="none" />
            <path d="M20 44 Q30 34 40 44" stroke="#FFD600" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="22" cy="26" r="2.5" fill="#FFD600" />
            <circle cx="38" cy="26" r="2.5" fill="#FFD600" />
          </svg>
        </span>
        <p className="text-gray-700 mb-4 text-center text-base">{message}</p>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease; }
        @keyframes popup { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-popup { animation: popup 0.35s cubic-bezier(.4,2,.3,1); }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .animate-pulse { animation: pulse 1.2s infinite; }
      `}</style>
    </div>
  );
}

function ThankYouPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fadeIn">
      <div className=" bg-white rounded-2xl shadow-2xl p-8 pt-12 flex flex-col items-center relative scale-100 animate-popup">
        <button
          className="absolute top-0 right-1 w-9 h-9 flex items-center justify-center rounded-full text-red-500 hover:text-red-600 text-3xl  z-10 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Attractive line-drawn smile face SVG */}
        <span className="mb-3 animate-pulse" role="img" aria-label="smile face">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#FFD600" strokeWidth="3" fill="none" />
            <path d="M20 38 Q30 48 40 38" stroke="#FFD600" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="22" cy="26" r="2.5" fill="#FFD600" />
            <circle cx="38" cy="26" r="2.5" fill="#FFD600" />
          </svg>
        </span>
        <h2 className="text-2xl font-extrabold mb-2 text-green-700 tracking-tight">Thank You!</h2>
        <p className="text-gray-700 mb-4 text-center text-base">You have successfully subscribed to jobCore.lk updates.</p>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease; }
        @keyframes popup { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-popup { animation: popup 0.35s cubic-bezier(.4,2,.3,1); }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        .animate-pulse { animation: pulse 1.2s infinite; }
      `}</style>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/subscribe/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.status) {
        setShowThankYou(true);
        setEmail("");
      } else {
        if (data.message === "Email is already subscribed.") {
          setError("This email is already subscribed.");
          setShowErrorPopup(true);
        } else {
          setError(data.message || "Error. Try again.");
          setShowErrorPopup(true);
        }
      }
    } catch {
      setError("Error. Try again.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-700 to-gray-800 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-row items-center justify-between px-2 py-2 gap-2 text-gray-200 shadow-lg rounded-t-lg">
        {/* Copyright */}
        <nav className="flex-1 text-xs text-center md:text-left">
          Copyright © 2025 jobCore.lk, All Rights Reserved.
        </nav>

        {/* Subscribe Form - hidden on mobile, visible on md+ */}
        <form className="hidden md:flex gap-1 items-center text-xs" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Email"
            className="h-7 px-2 rounded-l-md border text-gray-800 border-gray-300 focus:ring-1 focus:ring-green-200 bg-white text-xs focus:outline-none"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="h-7 px-2 bg-red-600 text-white rounded-r-md text-xs shadow-sm transition hover:bg-red-700"
          >
            Subscribe
          </button>
          {/* Inline error removed, now shown as popup */}
        </form>
        {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}
        {showErrorPopup && error && (
          <ErrorPopup message={error} onClose={() => setShowErrorPopup(false)} />
        )}

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
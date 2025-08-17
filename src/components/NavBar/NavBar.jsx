import { useState } from 'react';
import { FaSignInAlt, FaUser, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-fit">
          <div className="flex flex-col">
            <span className="font-extrabold text-3xl tracking-tight text-green-700 leading-none flex items-baseline">
              jobcor
              <span className="relative">
                e
                <sup className="text-xs font-normal text-yellow-400 ml-0.5">®</sup>
              </span>
            </span>
            <span className="block w-16 h-1 mt-1 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 animate-pulse"></span>
          </div>
        </Link>

{/* Desktop Menu */}
<div className="hidden md:flex items-center gap-6">
  <Link
    to="/post/new"
    className="px-4 py-2 rounded-xl bg-[#239BA7] text-white font-semibold shadow text-sm"
  >
    Post Vacancy
  </Link>

{navLinks.map((link) => (
  <Link
    key={link.path}
    to={link.path}
    className={`relative text-sm font-semibold transition-colors duration-300 group
      ${location.pathname === link.path ? 'text-green-700' : 'text-green-700'}
    `}
  >
    {link.label}
    <span
      className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full 
        ${location.pathname === link.path ? 'w-full' : ''}
      `}
    />
  </Link>
))}

  {/* Group User + Login buttons with smaller gap */}
  <div className="flex items-center gap-2">
    <Link
      to="/user"
      className="bg-yellow-400 rounded-xl px-3 py-2 flex items-center justify-center border shadow-sm"
      title="User"
    >
      <FaUser className="text-md text-black" />
    </Link>

    <Link
      to="/login"
      className="bg-yellow-400 rounded-xl px-3 py-2 flex items-center justify-center border shadow-sm"
      title="Login"
    >
      <FaSignInAlt className="text-md text-black" />
    </Link>
  </div>
</div>

{/* Mobile Menu Button */}
<button
  className="md:hidden text-green-700 focus:outline-none"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label="Toggle Menu"
>
  <FaBars className="text-2xl" />
</button>
</div>

{/* Mobile Menu Dropdown */}
{isMenuOpen && (
  <div className="md:hidden bg-gray-50 border-t border-yellow-400 flex flex-col p-4 space-y-4 shadow-lg animate-fadeIn">
    <Link
      to="/post/new"
      className="px-4 py-2 rounded-xl bg-green-600 text-white font-semibold text-sm"
      onClick={() => setIsMenuOpen(false)}
    >
      Post Vacancy
    </Link>

    {navLinks.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`text-sm font-semibold ${
          location.pathname === link.path
            ? 'text-green-700 underline'
            : 'text-gray-800'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    ))}

    <div className="flex gap-3">
      <Link
        to="/user"
        className="bg-yellow-400 rounded-xl px-3 py-2 flex items-center justify-center border border-yellow-400 shadow-sm"
        onClick={() => setIsMenuOpen(false)}
      >
        <FaUser className="text-xl text-black" />
      </Link>
      <Link
        to="/login"
        className="bg-yellow-400 rounded-xl px-3 py-2 flex items-center justify-center border border-yellow-400 shadow-sm"
        onClick={() => setIsMenuOpen(false)}
      >
        <FaSignInAlt className="text-xl text-black" />
      </Link>
    </div>
  </div>
)}

    </nav>
  );
}

import { useState } from 'react';
import { FaBars, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ clearSidebarCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Reviews', path: '/reviews' },
    { label: 'Companies', path: '/companies' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-20">

{/* Logo */}
<Link to="/" className="flex items-center gap-2 min-w-fit">
  <div className="flex flex-col">
    <span className="font-bold text-5xl tracking-tight text-green-700 leading-none flex items-baseline">
      jobcor
      <span className="relative text-5xl font-bold text-green-700">
        e
        <sup className="absolute top-2 right- -1 text-xs font-normal text-yellow-400">®</sup>
      </span>
    </span>

    {/* Gradient underline */}
    <span className="block w-20 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 animate-pulse"></span>
  </div>
</Link>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/post/new"
            className="px-1.5 py-1 rounded-md bg-[#239BA7] text-white font-semibold shadow text-sm"
            onClick={clearSidebarCategory}
          >
            Post Vacancy
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-1.5 py-1 rounded-md font-semibold text-sm shadow bg-yellow-400 text-gray-800"
              onClick={clearSidebarCategory}
            >
              {link.label}
            </Link>
          ))}
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
        <div className="md:hidden bg-gray-50 border-t border-yellow-400 flex flex-col p-4 space-y-2 shadow-lg animate-fadeIn">
          <Link
            to="/post/new"
            className="px-1.5 py-1 rounded-md bg-green-600 text-white font-semibold text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Post Vacancy
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold ${location.pathname === link.path
                  ? 'text-green-700 underline'
                  : 'text-gray-800'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-2">
            <Link
              to="/user"
              className="bg-yellow-400 rounded-md px-1.5 py-1 flex items-center justify-center border border-yellow-400 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className="text-lg text-black" />
            </Link>
            <Link
              to="/login"
              className="bg-yellow-400 rounded-md px-1.5 py-1 flex items-center justify-center border border-yellow-400 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaSignInAlt className="text-lg text-black" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

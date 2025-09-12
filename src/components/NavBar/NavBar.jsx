import { useState } from 'react';
import { FaBars, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ clearSidebarCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Reviews', path: '/reviews' },
    { label: 'Companies', path: '/company' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className="bg-gray-50 border-b z-50 relative"
      style={{ boxShadow: '0 4px 10px -2px rgba(0,0,0,0.25)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-fit">
          <div className="flex flex-col">
            <span className="font-bold text-3xl md:text-4xl tracking-tight text-green-700 leading-none flex items-baseline">
              JobCore.
              <span className="relative text-3xl md:text-4xl font-bold text-green-700">
                lk
                <sup className="absolute top-0 -right-1 text-xs md:text-sm font-normal text-yellow-400">®</sup>
              </span>
            </span>

            {/* Gradient underline */}
            <span className="block w-20 md:w-28 h-1 mt-1 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 animate-pulse"></span>
          </div>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/post/new"
            className="px-2 py-1 rounded-md bg-[#239BA7] text-white font-semibold shadow text-md"
            onClick={clearSidebarCategory}
          >
            Post Vacancy
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                `px-1.5 py-1 font-semibold text-md text-gray-800 relative transition-colors duration-200
                hover:text-green-700
                after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:rounded-full`
              }
              style={{ overflow: 'visible' }}
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
  <div className="md:hidden fixed top-16 left-0 w-full text-center bg-white border-t border-yellow-400 shadow-xl flex flex-col p-4 space-y-3 animate-fadeIn z-50">
    
    {/* Post Vacancy Button */}
    <Link
      to="/post/new"
      className="px-4 py-2 rounded-md bg-gradient-to-r bg-[#239BA7] text-white font-semibold text-sm text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
      onClick={() => setIsMenuOpen(false)}
    >
      Post Vacancy
    </Link>

    {/* Navigation Links */}
    {navLinks.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`text-sm font-semibold py-2 px-3 rounded-md transition-colors duration-200
          ${location.pathname === link.path
            ? 'bg-green-100 text-green-700 '
            : 'text-gray-800 hover:bg-yellow-100 hover:text-green-900'
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    ))}
  </div>
)}

    </nav>
  );
}

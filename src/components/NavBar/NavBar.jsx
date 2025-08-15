import { FaSignInAlt, FaUser, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Reviews', path: '/reviews' },
    // { label: 'Top Employers', path: '/employers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-[#ecf8f8] border-b border-[rgb(247,184,1)] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-fit">
          <div className="flex flex-col">
            <span className="font-extrabold text-3xl tracking-tight text-[#720026] leading-none relative flex items-baseline">
              jobcor
              <span className="relative">
                e
                <sup className="text-xs font-normal text-[rgb(247,184,1)] ml-0.5">®</sup>
              </span>
            </span>
            <span className="block w-16 h-1 mt-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 animate-pulse"></span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/post/new"
            className="px-4 py-2 rounded bg-green-500 text-[#ecf8f8] font-semibold shadow text-sm 
              hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Post A New Job
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold ${
                location.pathname === link.path
                  ? 'text-[#720026] underline'
                  : 'text-[#720026] hover:underline'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/user"
            className="bg-[rgb(247,184,1)] hover:bg-[#720026] rounded px-3 py-2 flex items-center justify-center transition-shadow border border-[rgb(247,184,1)]"
            title="User"
          >
            <FaUser className="text-xl text-[#720026]" />
          </Link>

          <Link
            to="/login"
            className="bg-[rgb(247,184,1)] hover:bg-[#720026] rounded px-3 py-2 flex items-center justify-center transition-shadow border border-[rgb(247,184,1)]"
            title="Login"
          >
            <FaSignInAlt className="text-xl text-[#720026]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#720026]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#ecf8f8] border-t border-[rgb(247,184,1)] flex flex-col p-4 space-y-3">
          <Link
            to="/post/new"
            className="px-4 py-2 rounded bg-green-500 text-[#ecf8f8] font-semibold text-sm hover:bg-green-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Post A New Job
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[#720026] font-semibold hover:underline text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3">
            <Link
              to="/user"
              className="bg-[rgb(247,184,1)] hover:bg-[#720026] rounded px-3 py-2 flex items-center justify-center border border-[rgb(247,184,1)]"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiUser className="text-xl text-[#720026]" />
            </Link>
            <Link
              to="/login"
              className="bg-[rgb(247,184,1)] hover:bg-[#720026] rounded px-3 py-2 flex items-center justify-center border border-[rgb(247,184,1)]"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaSignInAlt className="text-xl text-[#720026]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

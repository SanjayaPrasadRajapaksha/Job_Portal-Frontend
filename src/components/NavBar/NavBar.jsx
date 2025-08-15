import { FaSignInAlt, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-[#ecf8f8] px-6 py-2 h-20 shadow-lg border-b border-[rgb(247,184,1)]">
      {/* Left Section: Logo with Static Underline */}
      <div className="flex items-center gap-2 min-w-fit">
        <div className="flex flex-col">
          <span className="font-extrabold text-3xl tracking-tight text-[#720026] leading-none relative flex items-baseline">
            jobcor
            <span className="relative">
              e
              <sup className="text-xs font-normal text-[rgb(247,184,1)] ml-0.5">®</sup>
            </span>
          </span>
          {/* Gradient animated underline */}
          <span className="block w-16 h-1 mt-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 animate-pulse"></span>
        </div>
      </div>


      {/* Right Section: All Nav Buttons and Links */}
      <div className="flex items-center gap-3">
        <Link
          to="/post/new"
          className="px-4 py-2 rounded bg-green-500 text-[#ecf8f8] font-semibold shadow text-sm 
             hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Post A New Job
        </Link>


        <a
          href="#"
          className="px-4 py-2 rounded bg-[rgb(247,184,1)] text-[#720026] font-semibold text-sm hover:bg-[#720026] hover:text-[#ecf8f8] transition border border-[rgb(247,184,1)]"
        >
          Happy Customers
        </a>
        <a href="#" className="text-[#720026] font-semibold hover:underline text-sm">
          Top Employers
        </a>
        <a href="#" className="text-[#720026] font-semibold hover:underline text-sm">
          Contact Us
        </a>
        <a
          href="#"
          className="bg-[rgb(247,184,1)] hover:bg-[#720026] rounded px-3 py-2 flex items-center justify-center transition-shadow border border-[rgb(247,184,1)]"
          title="User"
        >
          <FaUserFriends className="text-xl text-[#720026]" />
        </a>
        <a
          href="#"
          className="bg-[rgb(247,184,1)] hover:bg-[#720026] rounded px-3 py-2 flex items-center justify-center transition-shadow border border-[rgb(247,184,1)]"
          title="Login"
        >
          <FaSignInAlt className="text-xl text-[#720026]" />
        </a>
      </div>
    </nav>
  );
}

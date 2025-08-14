import { FaSignInAlt, FaUserFriends } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-[#ecf8f8] px-6 py-2 h-20 shadow-lg border-b border-[rgb(247,184,1)]">
      {/* Left Section: Logo and Tagline */}
      <div className="flex items-center gap-2 min-w-fit">
        <div className="flex flex-col">
          <span className="font-extrabold text-3xl tracking-tight text-[#720026] leading-none flex items-baseline">
            jobcore
            <span className="text-xs align-super ml-1 font-normal text-[rgb(247,184,1)]">®</span>
          </span>
          <span className="text-xs text-[rgb(247,184,1)] -mt-1">recruitment made easy</span>
        </div>
      </div>

      {/* Right Section: All Nav Buttons and Links */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="px-4 py-2 rounded bg-[#720026] text-[#ecf8f8] font-semibold shadow text-sm hover:bg-[rgb(247,184,1)] hover:text-[#720026] transition border border-[#720026]"
        >
          Post Your Vacancy
        </a>
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

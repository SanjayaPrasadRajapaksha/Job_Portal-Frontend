import { FaUserFriends, FaSignInAlt } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-2 h-20 shadow">
      {/* Left Section: Logo and Tagline */}
      <div className="flex items-center gap-2 min-w-fit">
        <div className="flex flex-col">
          <span className="font-extrabold text-3xl tracking-tight text-[#7C2222] leading-none flex items-baseline">
            jobcore
            <span className="text-xs align-super ml-1 font-normal text-[#7C2222]">®</span>
          </span>
          <span className="text-xs text-gray-700 -mt-1">recruitment made easy</span>
        </div>
        {/* Post Vacancy Button */}
        <a
          href="#"
          className="ml-4 px-4 py-2 rounded bg-[#7C2222] text-white font-semibold shadow-lg text-sm hover:bg-[#a03a3a] transition"
          style={{ boxShadow: '0 0 8px #b97e7e' }}
        >
          Post Your Vacancy
        </a>
        {/* Happy Customers Button */}
        <a
          href="#"
          className="ml-2 px-4 py-2 rounded bg-[#f3bb22] text-black font-semibold text-sm hover:bg-[#ffd54f] transition"
        >
          Happy Customers
        </a>
        {/* Nav Links */}
        <a href="#" className="ml-5 text-black font-semibold hover:underline text-sm">
          Top Employers
        </a>
        <a href="#" className="ml-4 text-black font-semibold hover:underline text-sm">
          Contact Us
        </a>
      </div>
      {/* Right Section: Icon Buttons */}
      <div className="flex gap-2">
        <a
          href="#"
          className="bg-[#f3bb22] hover:bg-[#ffd54f] rounded px-3 py-2 flex items-center justify-center"
          title="User"
        >
          <FaUserFriends className="text-xl text-black" />
        </a>
        <a
          href="#"
          className="bg-[#f3bb22] hover:bg-[#ffd54f] rounded px-3 py-2 flex items-center justify-center"
          title="Login"
        >
          <FaSignInAlt className="text-xl text-black" />
        </a>
      </div>
    </nav>
  );
}
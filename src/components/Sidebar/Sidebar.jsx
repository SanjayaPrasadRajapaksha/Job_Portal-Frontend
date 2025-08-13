import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const categories = [
  'IT-Sware/DB/QA/Web/Graphics/GIS',
  'IT-HWare/Networks/Systems',
  'Accounting/Auditing/Finance',
  'Banking & Finance/Insurance',
  'Sales/Marketing/Merchandising',
  'HR/Training',
  'Corporate Management/Analysts',
  'Office Admin/Secretary/Receptionist',
  'Civil Eng/Interior Design/Architecture',
  'IT-Telecoms',
  'Customer Relations/Public Relations',
  'Logistics/Warehouse/Transport',
  'Production/Manufacturing',
  'Legal/Insurance',
  'Other'
];

export default function Sidebar() {
  const [keyword, setKeyword] = useState('');
  const [jobRef, setJobRef] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  if (!sidebarVisible) {
    return (
      <div
        className="h-full flex items-center justify-start"
        style={{ width: '36px', minWidth: '36px', zIndex: 20, background: 'transparent' }}
      >
        <button
          className="bg-[#DEAC1A] text-black text-[15px] font-semibold w-8 h-32 flex items-center justify-center rounded-l-lg cursor-pointer select-none shadow-lg border border-yellow-600 hover:bg-yellow-300 transition-all duration-200"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            boxShadow: '0 2px 8px #c19c47',
            left: 0,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: 0
          }}
          onClick={() => setSidebarVisible(true)}
        >
          Show Sidebar
        </button>
      </div>
    );
  }

  return (
    <aside className="w-72 bg-gradient-to-b from-yellow-200 to-yellow-500 h-full flex flex-col py-4 px-2 shadow-lg relative text-gray-900">
      {/* Search Section */}
      <div className="bg-maroon-900 rounded-t-md px-3 py-3 mb-2 shadow" style={{ background: "#7C0A02" }}>
        <input
          type="text"
          placeholder="Search by keywords"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          className="w-full mb-2 px-2 py-1 rounded border-none outline-none text-black"
        />
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Search by Job Ref Number"
            value={jobRef}
            onChange={e => setJobRef(e.target.value)}
            className="flex-1 min-w-0 px-2 py-1 rounded border-none outline-none text-black"
          />
          <button
            className="bg-green-700 text-white px-2 md:px-3 py-1 rounded flex items-center gap-1 hover:bg-green-800 transition whitespace-nowrap"
            aria-label="Search"
            style={{ flexShrink: 0 }}
          >
            <FaSearch /> <span className="hidden sm:inline">SEARCH</span>
          </button>
        </div>
      </div>

      {/* Category Section */}
      <div className="relative flex-1 flex flex-col bg-gradient-to-b from-yellow-200 to-yellow-500 rounded-b-md shadow-inner overflow-hidden">
        {/* "Hide Sidebar" tab */}
        <div
          className="absolute -right-8 top-1/3 rotate-90 bg-maroon-900 text-white text-xs px-2 py-1 rounded cursor-pointer select-none z-10"
          style={{ background: "#7C0A02" }}
          onClick={() => setSidebarVisible(false)}
        >
          Hide Sidebar
        </div>
        {/* Categories list with scroll */}
        <ul className="overflow-y-auto flex-1 py-2 px-2 space-y-2 custom-scrollbar">
          {categories.map((cat) => (
            <li key={cat} className="text-sm px-2 py-1 hover:bg-yellow-300 rounded transition cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>
        {/* Scroll for More Categories */}
        <div className="bg-maroon-900 text-white text-xs text-center py-2 rounded-b-md flex items-center justify-center gap-2" style={{ background: "#7C0A02" }}>
          <span className="animate-bounce">⬇️</span>
          Scroll for More Categories
          <span className="animate-bounce">⬇️</span>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="mt-4 text-xs text-gray-600 px-3 text-center">© 2025 Project Panel</div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c19c47;
          border-radius: 4px;
        }
      `}</style> */}
    </aside>
  );
}
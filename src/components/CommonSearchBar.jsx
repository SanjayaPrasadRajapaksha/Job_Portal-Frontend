import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function CommonSearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchText);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-xs gap-2"
    >
      {/* Boxed input field */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3 py-2 placeholder-gray-400 border border-green-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300 text-sm bg-white"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ minWidth: "0" }}
      />
      {/* Separate search icon button */}
      <button
        type="submit"
        className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
        aria-label="Search"
      >
        <FiSearch className="text-white text-lg" />
      </button>
    </form>
  );
}

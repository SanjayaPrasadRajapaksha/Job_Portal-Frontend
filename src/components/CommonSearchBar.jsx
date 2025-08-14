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
      className="flex items-center w-full max-w-xs bg-white rounded-full shadow-md overflow-hidden border border-gray-200"
    >
      {/* Input field */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 text-sm"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ minWidth: "0" }}
      />

      {/* Clickable round search icon on the right */}
      <button
        type="submit"
        className="flex items-center justify-center w-9 h-9 bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300"
      >
        <FiSearch className="text-white text-base" />
      </button>
    </form>
  );
}

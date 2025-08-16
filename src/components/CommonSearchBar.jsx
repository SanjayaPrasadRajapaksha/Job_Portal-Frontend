import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function CommonSearchBar({ onSearch, placeholder = "Search..." }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchText.trim());
  };

  const handleClear = () => {
    setSearchText("");
    if (onSearch) onSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full sm:max-w-md gap-2 px-2 py-1 bg-white border border-green-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-300 transition-all duration-300"
      role="search"
      aria-label="Search jobs"
    >
    
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-2 py-1 placeholder-gray-400 text-sm focus:outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") handleClear();
        }}
      />

      {/* Clear Button (only if text exists) */}
      {searchText && (
        <button
          type="button"
          onClick={handleClear}
          className="p-1 text-gray-400 hover:text-gray-600 transition"
          aria-label="Clear search"
        >
          <FiX />
        </button>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="px-3 py-1.5 bg-green-500 rounded-md hover:bg-green-600 transition text-white text-sm font-semibold flex items-center"
      >
        Search
      </button>
    </form>
  );
}

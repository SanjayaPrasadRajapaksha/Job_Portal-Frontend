import { useState } from "react";
import { FiX } from "react-icons/fi";

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
      className="flex items-center w-64 sm:w-72 gap-1 px-1 py-0.5 bg-white border rounded-md shadow-sm"
      role="search"
      aria-label="Search jobs"
    >
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-1 py-0.5 text-xs focus:outline-none"
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
          className="p-0.5 text-gray-400 hover:text-gray-600 transition"
          aria-label="Clear search"
        >
          <FiX size={14} />
        </button>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded-lg text-white text-xs font-semibold transition"
      >
        Search
      </button>
    </form>
  );
}

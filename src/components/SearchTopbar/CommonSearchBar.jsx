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
    <div className="flex items-center gap-1 w-64 sm:w-72">
      {/* Form with input and clear button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 items-center gap-0.5 px-1 py-0.5 bg-white border rounded-md shadow-sm"
        role="search"
        aria-label="Search jobs"
      >
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
      </form>

      {/* Separate Search Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="px-2 py-1 bg-green-700 rounded-md text-white text-xs font-semibold transition"
      >
        Search
      </button>
    </div>
  );
}

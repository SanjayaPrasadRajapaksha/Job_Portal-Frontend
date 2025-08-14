
export default function CommonFilterSearch({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter,
  statusOptions = ["All", "Full Time", "Part Time"],
  placeholder = "Search position, company, location"
}) {
  return (
    <div className="flex gap-2 items-center w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-3 py-2 border border-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <select
        className="px-3 py-2 border border-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        value={statusFilter}
        onChange={e => setStatusFilter(e.target.value)}
      >
        {statusOptions.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

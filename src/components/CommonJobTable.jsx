import { useEffect, useRef, useState } from "react";

export default function CommonJobTable({
  jobs,
  columns,
  onRowClick,
  rowHoverColor = "bg-yellow-100",
  positionHoverColor = "text-[#8d0d37]",
}) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const tableRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        setIsScrolled(tableRef.current.scrollTop > 0);
      }
    };
    tableRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      tableRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={tableRef}
      className="overflow-x-auto max-h-[440px] rounded-lg shadow border border-gray-200"
      style={{ overflowY: "auto" }}
    >
      <table className="min-w-full border-collapse">
        {/* Table Header */}
        <thead
          className={`sticky top-0 z-10 transition-shadow ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          <tr className="bg-[#8f0231] text-white text-left">
            {columns.map((col) => {
              return (
                <th
                  key={col.key}
                  className="py-3 px-4 text-sm border-b border-gray-300 font-normal"
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-t border-dashed transition-all duration-200 ease-in-out
                  ${
                    hoveredRow === rowIndex
                      ? rowHoverColor
                      : rowIndex % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  }
                `}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => onRowClick && onRowClick(job)}
                style={{ cursor: "pointer", height: "56px" }}
              >
                {columns.map((col) => {
                  let cellClass =
                    "py-3 px-4 text-sm transition-colors duration-150";
                  // Remove font-medium for all cells, including Location, Posted On, Status
                  // Position Column Hover Color
                  if (col.key === "position" && hoveredRow === rowIndex) {
                    cellClass += ` ${positionHoverColor}`;
                  }
                  // Extra Custom Class
                  if (col.className) {
                    cellClass += ` ${col.className}`;
                  }
                  return (
                    <td key={col.key} className={cellClass}>
                      {col.render ? col.render(job, rowIndex) : job[col.key]}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500 font-semibold text-sm"
              >
                No jobs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

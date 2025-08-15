import { useState } from "react";

export default function CommonJobTable({ jobs, columns, rowHoverColor = "bg-yellow-100", positionHoverColor = "text-[#8d0d37]", }) {
    const [hoveredRow, setHoveredRow] = useState(null);

    return (
        <div className="overflow-x-auto max-h-[440px] rounded shadow" style={{ overflowY: "auto" }}>
            <table className="min-w-full border-collapse relative">
                <thead>
                    <tr className="bg-[#8f0231] text-white text-left" style={{ position: "sticky", top: 0, zIndex: 1 }}>
                        {columns.map((col) => (
                            <th key={col.key} className="py-4 px-3 font-semibold">{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, i) => (
                        <tr
                            key={i}
                           className={`border-t border-dashed  transition-colors duration-200 ${hoveredRow === i ? rowHoverColor : ""}`}

                            onMouseEnter={() => setHoveredRow(i)}
                            onMouseLeave={() => setHoveredRow(null)}
                            style={{ cursor: "pointer", height: "56px" }}
                        >
                            {columns.map((col, idx) => {
                                let cellClass = "py-2 px-3 text-sm";
                                if (col.key === "id") {
                                    cellClass += " text-center font-semibold ";
                                    if (!hoveredRow === i) {
                                        cellClass += " bg-green-500 text-white";
                                    }
                                }
                                if (col.key === "position") {
                                    cellClass += " font-semibold";
                                    if (hoveredRow === i) cellClass += ` ${positionHoverColor}`;
                                }
                                if (col.className) cellClass += ` ${col.className}`;
                                return (
                                    <td
                                        key={col.key}
                                        className={cellClass}
                                    >
                                        {col.render ? col.render(job, i) : job[col.key]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    {jobs.length === 0 && (
                        <tr>
                            <td colSpan={columns.length} className="text-center py-4 text-gray-500 font-semibold">
                                No jobs found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const jobList = [
  { position: "Graphics Designer & IT Support Officer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: ["Full Time", "Part Time"], openDay: "14 Aug 2025", closeDay: "28 Aug 2025" },
  { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: ["Part Time"], openDay: "13 Aug 2025", closeDay: "27 Aug 2025" },
  { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: ["Full Time"], openDay: "12 Aug 2025", closeDay: "26 Aug 2025" },
  { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: ["Full Time"], openDay: "11 Aug 2025", closeDay: "25 Aug 2025" },
  { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: ["Full Time"], openDay: "13 Aug 2025", closeDay: "27 Aug 2025" },
  { position: "Front Office Executive", company: "Jnet Office Works / Administration", location: "Negombo", postedOn: "10 Aug 2025", status: ["Part Time"], openDay: "10 Aug 2025", closeDay: "24 Aug 2025" },
  { position: "Graphics Designer & IT Support Officer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: ["Full Time", "Part Time"], openDay: "14 Aug 2025", closeDay: "28 Aug 2025" },
  { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: ["Part Time"], openDay: "13 Aug 2025", closeDay: "27 Aug 2025" },
  { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: ["Full Time"], openDay: "12 Aug 2025", closeDay: "26 Aug 2025" },
  { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: ["Full Time"], openDay: "11 Aug 2025", closeDay: "25 Aug 2025" },
  { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: ["Full Time"], openDay: "13 Aug 2025", closeDay: "27 Aug 2025" },
  { position: "Graphics Designer & IT Support Officer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: ["Full Time", "Part Time"], openDay: "14 Aug 2025", closeDay: "28 Aug 2025" },
  { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: ["Part Time"], openDay: "13 Aug 2025", closeDay: "27 Aug 2025" },
  { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: ["Full Time"], openDay: "12 Aug 2025", closeDay: "26 Aug 2025" },
  { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: ["Full Time"], openDay: "11 Aug 2025", closeDay: "25 Aug 2025" },
  { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: ["Full Time"], openDay: "13 Aug 2025", closeDay: "27 Aug 2025" },
];

export default function SoftwareDevelopment() {
  return (
    <div className="p-6 min-h-screen">
      {/* Card Grid */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobList.map((job, i) => (
          <div
            key={i}
            className="relative bg-gray-100 rounded-md shadow-md border border-gray-200 hover:shadow-lg hover:bg-white  hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col gap-3 min-w-[320px] max-w-[410px] min-h-[180px] mx-auto"
          >
            {/* Top Row */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold rounded-full px-2.5 py-0.5 shadow-sm">
                {i + 1}
              </span>

              {/* Status Badge */}
              <span
                className={`ml-auto text-xs px-3 py-0.5 rounded-full font-semibold shadow-sm ${
                  job.status.includes("Full Time") && job.status.includes("Part Time")
                    ? "bg-purple-200 text-purple-900"
                    : job.status.includes("Full Time")
                    ? "bg-green-200 text-green-900"
                    : "bg-blue-200 text-blue-900"
                }`}
              >
                {job.status.join(" / ")}
              </span>
            </div>

            {/* Job Title & Company */}
            <div className="mb-1">
              <h3 className="text-sm font-extrabold text-gray-700 group-hover:text-yellow-600 transition-colors">
                {job.position}
              </h3>
              <div className="text-xs text-gray-500 font-medium">{job.company}</div>
            </div>

            {/* Open/Close Days */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-gray-500">Open: <span className="font-semibold text-green-700">{job.openDay}</span></span>
              <span className="text-gray-500">Close: <span className="font-semibold text-red-700">{job.closeDay}</span></span>
            </div>

            {/* Location at bottom right */}
            <div className="absolute bottom-3 right-4 flex items-center gap-1 text-xs text-gray-400">
              <svg
                className="w-3.5 h-3.5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span className="font-medium">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

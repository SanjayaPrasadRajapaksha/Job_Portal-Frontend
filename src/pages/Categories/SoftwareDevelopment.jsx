const jobList = [
    { position: "Graphics Designer & IT Support Officer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: ["Full Time", "Part Time"] },
    { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: ["Part Time"] },
    { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: ["Full Time"] },
    { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: ["Full Time"] },
    { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: ["Full Time"] },
    { position: "Front Office Executive", company: "Jnet Office Works / Administration", location: "Negombo", postedOn: "10 Aug 2025", status: ["Part Time"] },
    { position: "Graphics Designer & IT Support Officer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: ["Full Time", "Part Time"] },
    { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: ["Part Time"] },
    { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: ["Full Time"] },
    { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: ["Full Time"] },
    { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: ["Full Time"] },
    { position: "Front Office Executive", company: "Jnet Office Works / Administration", location: "Negombo", postedOn: "10 Aug 2025", status: ["Part Time"] },
    { position: "Graphics Designer & IT Support Officer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: ["Full Time", "Part Time"] },
    { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: ["Part Time"] },
    { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: ["Full Time"] },
    { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: ["Full Time"] },
    { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: ["Full Time"] },
    { position: "Front Office Executive", company: "Jnet Office Works / Administration", location: "Negombo", postedOn: "10 Aug 2025", status: ["Part Time"] },
];

export default function SoftwareDevelopment() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Card Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobList.map((job, i) => (
                    <div
                        key={i}
                        className="relative bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-3"
                    >
                        {/* Top Row */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block bg-yellow-400 text-gray-500 text-xs font-bold rounded-full px-2.5 py-0.5 shadow-sm">
                                {i + 1}
                            </span>

                            {/* Single badge for full/part time */}
                            <span
                                className={`ml-auto text-xs px-3 py-0.5 rounded-full font-semibold shadow-sm ${
                                    job.status.includes("Full Time") && job.status.includes("Part Time")
                                        ? "bg-purple-100 text-purple-800"
                                        : job.status.includes("Full Time")
                                        ? "bg-green-100 text-green-800"
                                        : "bg-blue-100 text-blue-800"
                                }`}
                            >
                                {job.status.join(" / ")}
                            </span>
                        </div>

                        {/* Job Title & Company */}
                        <div className="mb-1">
                            <h3 className="text-sm font-extrabold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                {job.position}
                            </h3>
                            <div className="text-xs text-gray-600 font-medium">{job.company}</div>
                        </div>

                        {/* Location & Date */}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="inline-flex items-center gap-1 font-medium text-gray-600">
                                <svg
                                    className="w-3.5 h-3.5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                {job.location}
                            </span>
                            <span className="ml-auto text-xs text-gray-400 font-medium">
                                {job.postedOn}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

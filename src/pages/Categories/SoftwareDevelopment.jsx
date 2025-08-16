const jobList = [
    { position: "Software Engineer", company: "MAS Capital / IT", location: "Colombo", postedOn: "14 Aug 2025", status: "Full Time" },
    { position: "Graphic Designer", company: "Dilly & Carlo / Design", location: "Maharagama", postedOn: "13 Aug 2025", status: "Part Time" },
    { position: "HR Manager", company: "Rich Mark Holding / HR", location: "Kandy", postedOn: "12 Aug 2025", status: "Full Time" },
    { position: "Project Coordinator", company: "Neochem International / Engineering", location: "Galle", postedOn: "11 Aug 2025", status: "Full Time" },
    { position: "Accountant", company: "BCD Travel / Finance", location: "Matara", postedOn: "13 Aug 2025", status: "Full Time" },
    { position: "Front Office Executive", company: "Jnet Office Works / Administration", location: "Negombo", postedOn: "10 Aug 2025", status: "Part Time" },
    { position: "Sales Executive", company: "Big Hill Lanka / Sales", location: "Kurunegala", postedOn: "10 Aug 2025", status: "Full Time" },
    { position: "Maintenance Technician", company: "FMJ Holdings / Maintenance", location: "Colombo", postedOn: "09 Aug 2025", status: "Part Time" },
    { position: "Call Center Executive", company: "ARN BPO / Customer Service", location: "All island", postedOn: "08 Aug 2025", status: "Full Time" },
    { position: "Social Media Coordinator", company: "SKYHIGH Engineering / Marketing", location: "Colombo", postedOn: "13 Aug 2025", status: "Part Time" },
    { position: "Trainee Travel Consultant", company: "BCD Travel / Tourism", location: "Kandy", postedOn: "07 Aug 2025", status: "Full Time" },
    { position: "Commi Chef", company: "The Sanctuarii / Hospitality", location: "Nuwara Eliya", postedOn: "07 Aug 2025", status: "Full Time" },
    { position: "Assistant HR Manager", company: "House of Fashions / HR", location: "Colombo", postedOn: "06 Aug 2025", status: "Part Time" },
    { position: "Regional Sales Manager", company: "Analytical Instruments / Sales", location: "Jaffna", postedOn: "09 Aug 2025", status: "Full Time" },
    { position: "Sous Chef", company: "The Sanctuarii / Hospitality", location: "Nuwara Eliya", postedOn: "05 Aug 2025", status: "Full Time" },
    { position: "Executive - Engineering", company: "FMJ Plastics / Engineering", location: "Galle", postedOn: "04 Aug 2025", status: "Full Time" },
    { position: "Hotel Manager", company: "B Connected / Hospitality", location: "Colombo", postedOn: "04 Aug 2025", status: "Part Time" },
    { position: "Sales Representative", company: "Company Name Withheld / Sales", location: "Horana", postedOn: "03 Aug 2025", status: "Full Time" },
    { position: "WordPress Developer", company: "Daniel Consultancy / IT", location: "Online", postedOn: "02 Aug 2025", status: "Part Time" },
    { position: "Electrician", company: "FMJ Holdings / Maintenance", location: "Matara", postedOn: "01 Aug 2025", status: "Full Time" },
    { position: "HR Assistant", company: "Payroll / HR", location: "Colombo", postedOn: "03 Aug 2025", status: "Full Time" },
    { position: "Student Counsellor", company: "Dowerin Education / Education", location: "Kandy", postedOn: "05 Aug 2025", status: "Part Time" },
    { position: "Pattern Maker", company: "Shiran Clothing / Fashion", location: "Colombo", postedOn: "02 Aug 2025", status: "Full Time" },
    { position: "Service Engineer", company: "NativeWay / Engineering", location: "Anuradhapura", postedOn: "06 Aug 2025", status: "Full Time" },
    { position: "Accounts Assistant", company: "Jnet Office Works / Accounting", location: "Gampaha", postedOn: "05 Aug 2025", status: "Part Time" },
    { position: "Software Engineer - Japan", company: "Nozomi International / IT", location: "Japan", postedOn: "01 Aug 2025", status: "Full Time" },
    { position: "Production Manager", company: "Rich Mark Holding / Manufacturing", location: "Colombo", postedOn: "10 Aug 2025", status: "Full Time" },
    { position: "Senior Accountant", company: "The Technocity / Accounting", location: "Colombo", postedOn: "08 Aug 2025", status: "Full Time" },
    { position: "Intern - Digital Excellence", company: "MAS Capital / IT", location: "Colombo", postedOn: "13 Aug 2025", status: "Part Time" },
    { position: "Junior Tender Executive", company: "Neochem International / Admin", location: "Matara", postedOn: "12 Aug 2025", status: "Full Time" }
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
                            <span className="inline-block bg-yellow-400 text-white text-xs font-bold rounded-full px-3 py-1 shadow">
                                {i + 1}
                            </span>
                            {job.status === "Full Time" ? (
                                <span className="ml-auto text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-800 shadow-sm">
                                    Full Time
                                </span>
                            ) : (
                                <span className="ml-auto text-xs px-3 py-1 rounded-full font-semibold bg-blue-100 text-blue-800 shadow-sm">
                                    Part Time
                                </span>
                            )}
                        </div>

                        {/* Job Title & Company */}
                        <div className="mb-1">
                            <h3 className="text-lg font-extrabold text-gray-800 group-hover:text-yellow-500 transition-colors">
                                {job.position}
                            </h3>
                            <div className="text-sm text-gray-500 font-medium">{job.company}</div>
                        </div>

                        {/* Location & Date */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-1 font-medium text-gray-700">
                                <svg
                                    className="w-4 h-4 text-yellow-400"
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

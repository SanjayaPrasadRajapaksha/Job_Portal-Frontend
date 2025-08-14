import { useState } from "react";

// 30 sample jobs with the requested columns and "Posted On" in the format "14 Aug 2025"
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
    const [hoveredRow, setHoveredRow] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Filter jobs based on search text and status
    const filteredJobs = jobList.filter((job) => {
        const matchesSearch =
            job.position.toLowerCase().includes(searchText.toLowerCase()) ||
            job.company.toLowerCase().includes(searchText.toLowerCase()) ||
            job.location.toLowerCase().includes(searchText.toLowerCase());

        const matchesStatus = statusFilter === "All" || job.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-4">
            {/* <div className="flex items-center justify-between mb-3 gap-4">
       
                <div className="px-4 py-2 rounded-lg shadow-md border-2 border-[#00bd45] bg-[#00bd45] text-white font-bold cursor-pointer">
                    IT & Software Development
                </div>


                <div className="flex-1">
                    <CommonFilterSearch
                        searchText={searchText}
                        setSearchText={setSearchText}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        statusOptions={["All", "Full Time", "Part Time"]}
                        placeholder="Search position, company, location"
                    />
                </div>
            </div> */}

            {/* Table */}
            <div className="overflow-x-auto max-h-[440px] rounded shadow" style={{ overflowY: "auto" }}>
                <table className="min-w-full border-collapse relative">
                    <thead>
                        <tr
                            className="bg-[#8f0231] text-white text-left"
                            style={{ position: "sticky", top: 0, zIndex: 1 }}
                        >
                            <th className="py-4 px-3 font-semibold">#</th> {/* ID column */}
                            <th className="py-4 px-3 font-semibold">Position</th>
                            <th className="py-4 px-3 font-semibold">Company / Industry</th>
                            <th className="py-4 px-3 font-semibold">Location</th>
                            <th className="py-4 px-3 font-semibold">Posted On</th>
                            <th className="py-4 px-3 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredJobs.map((job, i) => (
                            <tr
                                key={i}
                                className={`border-t transition-colors duration-200 ${hoveredRow === i ? "bg-yellow-500" : ""}`}
                                onMouseEnter={() => setHoveredRow(i)}
                                onMouseLeave={() => setHoveredRow(null)}
                                style={{ cursor: "pointer", height: "56px" }}
                            >
                                    <td className="py-3 px-3 ">{i + 1}</td> {/* ID value */}
                                    <td className={`py-3 px-3 font-semibold text-[#8d0d37] `}>{job.position}</td>
                                    <td className="py-3 px-3 font-semibold">{job.company}</td>
                                    <td className="py-3 px-3 font-semibold">{job.location}</td>
                                    <td className="py-3 px-3 font-semibold">{job.postedOn}</td>
                                    <td className={`py-3 px-3 font-semibold ${job.status === "Full Time" ? "text-green-700" : "text-blue-700"}`}> 
                                        {job.status}
                                    </td>
                            </tr>
                        ))}
                        {filteredJobs.length === 0 && (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500 font-semibold">
                                    No jobs found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

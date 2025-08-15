import { useState } from "react";
import CommonJobTable from "../../components/CommonJobTable";

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

        // Define columns for the common table
       const columns = [
  { key: "id", header: "#", render: (job, i) => i + 1, className: "bg-green-500 text-white text-center font-semibold min-w-[40px] w-[1%]" },
  { key: "position", header: "Position", className: "text-[#8d0d37] font-semibold" },
  { key: "company", header: "Company / Industry", className: "font-semibold" },
  { key: "location", header: "Location" }, // No bold here
  { key: "postedOn", header: "Posted On", render: (job) => `Posted on ${job.postedOn}` }, // No bold here
  { key: "status", header: "Status", render: (job) => (
      <span className={`${job.status === "Full Time" ? "text-green-700" : "text-blue-700"}`}>{job.status}</span>
    )
  },
];


        return (
            <div className="p-4">
                {/* Common reusable job table */}
                <CommonJobTable
                    jobs={filteredJobs}
                    columns={columns}
                    rowHoverColor="bg-yellow-500"
                    positionHoverColor="text-[#8d0d37]"
                />
            </div>
        );
}

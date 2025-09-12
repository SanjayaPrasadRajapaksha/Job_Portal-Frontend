import { useEffect, useMemo, useState } from "react";
import { useSearchFilter } from "../../context/SearchFilterContext";

export default function ITSoftwareDevelopment() {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApply, setShowApply] = useState(false);
  const [applyData, setApplyData] = useState({
    name: "",
    email: "",
    message: "",
    cv: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { searchQuery, checkboxValues } = useSearchFilter();

  // Filter jobs by search and checkbox
  const filteredJobs = useMemo(() => {
    let filtered = jobList;
    // Search filter
    if (searchQuery && searchQuery.trim() !== "") {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(job =>
        (job.title && job.title.toLowerCase().includes(q)) ||
        (job.company && job.company.toLowerCase().includes(q)) ||
        (job.area && job.area.toLowerCase().includes(q))
      );
    }
    // Checkbox filter (filter for Full Time, Part Time, and Full/Part Time)
    const { fullTime, partTime, fullOrPartTime } = checkboxValues;
    if (fullTime || partTime || fullOrPartTime) {
      filtered = filtered.filter(job => {
        if (fullTime && job.workType === "Full Time") return true;
        if (partTime && job.workType === "Part Time") return true;
        if (fullOrPartTime && job.workType === "Full Time/Part Time") return true;
        return false;
      });
    }
    return filtered;
  }, [jobList, searchQuery, checkboxValues]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/jobpost/category/IT%20%26%20Software%20Development"
        );
        const data = await res.json();
        if (data.status && Array.isArray(data.result)) {
          setJobList(data.result);
        } else {
          setJobList([]);
        }
      } catch (err) {
        setError("Failed to fetch jobs");
        setJobList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    // Prepare form data for backend
    const formData = new FormData();
    formData.append("applicantName", applyData.name);
    formData.append("applicantEmail", applyData.email);
    formData.append("message", applyData.message);
    formData.append("jobTitle", selectedJob.title);
    if (!selectedJob.email) {
      setSubmitStatus("❌ This job is missing a company email address. Application cannot be sent.");
      setSubmitting(false);
      return;
    }
    formData.append("companyEmail", selectedJob.email);
    formData.append("companyName", selectedJob.company);
    if (applyData.cv) {
      formData.append("cv", applyData.cv);
    }

    try {
      const res = await fetch("http://localhost:5000/jobpost/apply", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.status) {
        setSubmitStatus("✅ Application submitted successfully!");
        setShowApply(false);
        setApplyData({ name: "", email: "", message: "", cv: null });
      } else {
        setSubmitStatus("❌ " + (data.message || "Something went wrong. Try again."));
      }
    } catch (error) {
      setSubmitStatus("❌ Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
      <svg className="animate-spin h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
    </div>
  );
  if (error) return <div className="p-6 text-red-600 text-center">{error}</div>;

  return (
    <div className="p-6 min-h-screen">
      {/* Card Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length === 0 ? (
          <div className="col-span-full text-center text-gray-600">
            No jobs found for IT & Software Development.
          </div>
        ) : (
          filteredJobs.map((job, i) => (
            <div
              key={job.id || i}
              className="relative bg-gray-200 rounded-md shadow-md border border-gray-200 hover:shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col gap-3 min-w-[320px] max-w-[410px] min-h-[180px] mx-auto cursor-pointer"
              onClick={() => {
                setSelectedJob(job);
                setShowApply(false);
                setSubmitStatus(null);
              }}
            >
              {/* Top Row */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold rounded-full px-2.5 py-0.5 shadow-sm">
                  {i + 1}
                </span>

                <span
                  className={`ml-auto text-xs px-3 py-0.5 rounded-full font-semibold shadow-sm ${job.workType === "Full Time"
                    ? "bg-green-200 text-green-900"
                    : job.workType === "Part Time"
                      ? "bg-blue-200 text-blue-900"
                      : "bg-purple-200 text-purple-900"
                    }`}
                >
                  {job.workType}
                </span>
              </div>

              {/* Job Title & Company */}
              <div className="mb-1">
                <h3 className="text-sm font-extrabold text-gray-700 group-hover:text-yellow-600 transition-colors">
                  {job.title}
                </h3>
                <div className="text-xs text-gray-500 font-medium">
                  {job.company}
                </div>
              </div>

              {/* Open/Close Days */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="text-gray-500">
                  Open:{" "}
                  <span className="font-semibold text-green-700">
                    {job.openingDay}
                  </span>
                </span>
                <span className="text-gray-500">
                  Close:{" "}
                  <span className="font-semibold text-red-700">
                    {job.closingDay}
                  </span>
                </span>
              </div>

              {/* Location at bottom right */}
              <div className="absolute bottom-3 right-4 flex items-start gap-1 text-xs text-gray-400 max-h-5 overflow-y-auto pr-1">
                <svg
                  className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <div className="font-medium block overflow-y-auto max-h-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  {job.area === "Islandwide"
                    ? job.area
                    : job.selectedDistricts?.join(", ")}
                </div>
              </div>


            </div>
          ))
        )}
      </div>


      {/* Modal */}
{selectedJob && (
  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 p-4 overflow-auto">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl flex flex-col lg:flex-row relative">
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
        onClick={() => setSelectedJob(null)}
      >
        &times;
      </button>

      {/* Left: Description + Image */}
      <div className="lg:w-2/3 w-full p-4 flex flex-col gap-4">
        {selectedJob.description && (
          <div
            className="prose max-w-none text-justify text-gray-700"
            dangerouslySetInnerHTML={{ __html: selectedJob.description }}
          />
        )}

        {selectedJob.image && (
          <div className="w-full flex justify-center">
            <img
              src={selectedJob.image}
              alt={selectedJob.title}
              className="w-full max-w-full h-auto rounded-md border object-contain"
            />
          </div>
        )}
      </div>

      {/* Right: Details + Apply */}
      <div className="lg:w-1/3 w-full p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            {selectedJob.title}
          </h2>
          <p className="text-gray-700">{selectedJob.company}</p>
          <p className="text-gray-600">
            Location:{" "}
            <span className="font-medium">
              {selectedJob.area === "Islandwide"
                ? selectedJob.area
                : selectedJob.selectedDistricts?.join(", ")}
            </span>
          </p>
          <p className="text-blue-500">
            Open: <span className="font-semibold text-green-700">{selectedJob.openingDay}</span> | Close:{" "}
            <span className="font-semibold text-red-500">{selectedJob.closingDay}</span>
          </p>
        </div>

        {!showApply ? (
          <button
            className="mt-4 w-full bg-yellow-500 text-white rounded py-3 font-semibold hover:bg-yellow-600"
            onClick={() => setShowApply(true)}
          >
            Apply Now
          </button>
        ) : (
          <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Full Name"
              value={applyData.name}
              onChange={(e) => setApplyData({ ...applyData, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="border rounded px-3 py-2 w-full"
              placeholder="Email"
              value={applyData.email}
              onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
              required
            />
            <textarea
              className="border rounded px-3 py-2 w-full"
              placeholder="Cover Letter / Message"
              value={applyData.message}
              onChange={(e) => setApplyData({ ...applyData, message: e.target.value })}
              required
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="border rounded px-3 py-2 w-full"
              onChange={(e) => setApplyData({ ...applyData, cv: e.target.files[0] })}
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded py-2 font-semibold hover:bg-green-700 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}

        {submitStatus && (
          <div className="mt-3 text-center text-green-600 font-medium">{submitStatus}</div>
        )}
      </div>
    </div>
  </div>
)}



    </div>
  );
}

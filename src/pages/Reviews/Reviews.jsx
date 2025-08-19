import { useState } from "react";

// Sample review data
const initialReviews = [
  {
    name: "Alice Johnson",
    role: "Employer",
    company: "Acme Corp",
    position: "HR Manager",
    review: "JobCore made hiring so much easier! The process was smooth and the candidates were top-notch.",
    rating: 5,
    date: "July 2025",
  },
  {
    name: "Michael Lee",
    role: "Job Seeker",
    review: "I found my dream job through JobCore. The platform is user-friendly and the support team is amazing!",
    rating: 5,
    date: "June 2025",
  },
  {
    name: "Priya Singh",
    role: "Employer",
    company: "GlobalTech",
    position: "Recruiter",
    review: "We hired several great employees thanks to JobCore. Highly recommended for any business!",
    rating: 4,
    date: "May 2025",
  },
  {
    name: "Carlos Ramirez",
    role: "Job Seeker",
    review: "The application process was quick and easy. I got responses from employers within days!",
    rating: 4,
    date: "April 2025",
  },
  {
    name: "Alice Johnson",
    role: "Employer",
    company: "Acme Corp",
    position: "HR Manager",
    review: "JobCore made hiring so much easier! The process was smooth and the candidates were top-notch.",
    rating: 5,
    date: "July 2025",
  },
  {
    name: "Michael Lee",
    role: "Job Seeker",
    review: "I found my dream job through JobCore. The platform is user-friendly and the support team is amazing!",
    rating: 5,
    date: "June 2025",
  },
  {
    name: "Priya Singh",
    role: "Employer",
    company: "GlobalTech",
    position: "Recruiter",
    review: "We hired several great employees thanks to JobCore. Highly recommended for any business We hired several great employees thanks to JobCore. Highly recommended for any business!",
    rating: 4,
    date: "May 2025",
  },
  {
    name: "Carlos Ramirez",
    role: "Job Seeker",
    review: "The application process was quick and easy. I got responses from employers within days!",
    rating: 4,
    date: "April 2025",
  },
];

function StarRating({ rating, setRating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 cursor-pointer ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={() => setRating && setRating(i + 1)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    role: "",
    name: "",
    company: "",
    position: "",
    review: "",
    rating: 5,
  });
  const [filterRole, setFilterRole] = useState("Employer"); // default filter

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      ...form,
      date: new Date().toLocaleString("default", { month: "long", year: "numeric" }),
    };
    setReviews([newReview, ...reviews]);
    setForm({ role: "", name: "", company: "", position: "", review: "", rating: 5 });
    setShowForm(false);
  }

  const filteredReviews = reviews.filter(r => r.role === filterRole);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-5xl w-full relative">
        {/* Header */}
        <h1 className="text-3xl text-gray-800 mb-6 text-center">What Our Users Say</h1>

        {/* Leave Review Button */}
        <div className="absolute top-0 right-0 mt-2">
          <button
            className="bg-green-700 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-200"
            onClick={() => setShowForm(true)}
          >
            Submit Review
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mt-12">
          {["Employer", "Job Seeker"].map((role) => (
            <button
              key={role}
              className={`px-6 py-2 -mb-px font-semibold text-sm transition-colors duration-200 
        ${filterRole === role
                  ? "bg-green-400 text-white rounded-md"  // <-- selected button is yellow
                  : "bg-gray-200 text-gray-700 hover:bg-gray-200 rounded-md"
                }`}
              onClick={() => setFilterRole(role)}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-8 shadow-lg w-full max-w-md relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-2xl"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-xl text-gray-900 mb-4 text-center font-semibold">Submit Your Review</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="w-full border bg-gray-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition duration-200"
                  required
                />
                {form.role === "Employer" && (
                  <>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name *"
                      className="w-full border bg-gray-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition duration-200"
                      required
                    />
                    <input
                      type="text"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="Position *"
                      className="w-full border bg-gray-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition duration-200"
                      required
                    />
                  </>
                )}
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Message *"
                  className="w-full border bg-gray-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm transition duration-200 resize-y max-h-40 min-h-[60px] overflow-y-auto"
                  rows="3"
                  required
                />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-semibold">Rating:</span>
                  <StarRating rating={form.rating} setRating={(r) => setForm(prev => ({ ...prev, rating: r }))} />
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      {/* Reviews Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {filteredReviews.map((review, idx) => {
    const highlightColors = [
      "bg-green-200",
      "bg-green-300",
      "bg-teal-200",
      "bg-teal-300",
      "bg-blue-200",
      "bg-blue-300"
    ];
    const bgColor = highlightColors[idx % highlightColors.length];

    return (
      <div
        key={idx}
        className={`relative ${bgColor}  rounded-md shadow-sm p-4 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md`}
      >
        {/* Name, Role, Company */}
        <div className="flex flex-col gap-1">
          <div className="font-bold text-gray-800 text-sm">{review.name}</div>
          {review.role === "Employer" && (
            <div className="text-gray-700 text-xs">{review.position} @ {review.company}</div>
          )}
          <div className="text-gray-600 text-xs">{review.date}</div>
        </div>
        {/* Star Rating */}
        <StarRating rating={review.rating} />
        {/* Review Text */}
        <p
          className="text-gray-800 italic text-sm mt-1 leading-snug overflow-y-auto"
          style={{ maxHeight: "4.5em" }}
        >
          {review.review}
        </p>
      </div>
    );
  })}
</div>



      </div>
    </div>
  );
}

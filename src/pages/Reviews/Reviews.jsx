import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { addReview } from '../../apis/Api';

const API_BASE_URL = 'http://localhost:5000';

function StarRating({ rating, setRating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 cursor-pointer ${i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
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
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews from backend
  async function fetchReviews() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/review/verified`);
      const data = await res.json();
      if (res.ok && data.result) {
        setReviews(data.result);
      } else {
        toast.error(data.message || 'Failed to fetch reviews.');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    role: "",
    name: "",
    company: "",
    position: "",
    review: "",
    rating: 5,
  });
  const [filterRole, setFilterRole] = useState("Employer");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      ...form,
      date: new Date().toLocaleString("default", { month: "long", year: "numeric" }),
    };
    try {
      await addReview(newReview);
      await fetchReviews();
      setForm({ role: "", name: "", company: "", position: "", review: "", rating: 5 });
      setShowForm(false);
    } catch (err) {
      // Error handled by toast in Api.jsx
    }
  }

  const filteredReviews = reviews.filter((r) => r.role === filterRole && r.isVerify === true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-2 sm:px-6 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <svg className="animate-spin h-8 w-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
      )}
      <div className="max-w-6xl w-full">
        {/* Tab Buttons */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-2">
          <div className="flex gap-2 sm:gap-4">
            {["Employer", "Job Seeker"].map((role) => (
              <button
                key={role}
                className={`px-3 py-1 sm:px-6 sm:py-2 rounded-full border border-black font-semibold text-xs sm:text-sm transition ${filterRole === role
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600"
                  }`}
                onClick={() => setFilterRole(role)}
              >
                {role}
              </button>
            ))}
          </div>

          <button
            className="px-3 py-1 sm:px-6 sm:py-2 rounded-full font-semibold text-xs sm:text-sm bg-pink-500 text-white shadow-md transition"
            onClick={() => setShowForm(true)}
          >
            + Submit Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 relative overflow-hidden border border-gray-200
                 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-pink-400 rounded-t-2xl" />
              <div className="flex flex-col gap-1 mb-2 mt-2">
                <div className="font-bold text-gray-800">{review.name}</div>
                {review.role === "Employer" && (
                  <div className="text-sm text-gray-600">
                    {review.position} @ {review.company}
                  </div>
                )}
                <div className="text-xs text-gray-400">{review.date}</div>
              </div>
              <div className="mb-2">
                <StarRating rating={review.rating} />
              </div>
              <div className="max-h-20 overflow-y-auto">
                <p className="text-gray-700 text-sm italic leading-snug">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-4 sm:p-8 shadow-2xl w-full max-w-lg relative">
              <button
                className="absolute top-0 right-2 text-red-500 hover:text-green-600 text-2xl"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-xl sm:text-2xl mb-4 text-center text-gray-900">
                Submit Your Review
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                  className="w-full border bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm transition"
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
                      className="w-full border bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm transition"
                      required
                    />
                    <input
                      type="text"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="Position *"
                      className="w-full border bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm transition"
                      required
                    />
                  </>
                )}
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Message *"
                  className="w-full border bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm transition resize-y max-h-40 min-h-[60px]"
                  rows="3"
                  required
                />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-semibold text-xs sm:text-base">Rating:</span>
                  <StarRating
                    rating={form.rating}
                    setRating={(r) => setForm((prev) => ({ ...prev, rating: r }))}
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white font-semibold py-1 px-4 sm:py-2 sm:px-6 rounded-md shadow-md hover:shadow-lg transition text-xs sm:text-base"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
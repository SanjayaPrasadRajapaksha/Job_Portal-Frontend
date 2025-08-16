import { useState } from "react";

// Sample review data
const initialReviews = [
  {
    name: "Alice Johnson",
    role: "Employer",
    review:
      "JobCore made hiring so much easier! The process was smooth and the candidates were top-notch.",
    rating: 5,
    date: "July 2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Job Seeker",
    review:
      "I found my dream job through JobCore. The platform is user-friendly and the support team is amazing!",
    rating: 5,
    date: "June 2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "Employer",
    review:
      "We hired several great employees thanks to JobCore. Highly recommended for any business!",
    rating: 4,
    date: "May 2025",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Carlos Ramirez",
    role: "Job Seeker",
    review:
      "The application process was quick and easy. I got responses from employers within days!",
    rating: 4,
    date: "April 2025",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} star rating`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
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
  const [form, setForm] = useState({ name: "", role: "", review: "", rating: 5 });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setReviews([
      {
        ...form,
        date: new Date().toLocaleString("default", { month: "long", year: "numeric" }),
        avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
      },
      ...reviews,
    ]);
    setForm({ name: "", role: "", review: "", rating: 5 });
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-5xl w-full relative">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
          What Our Users Say
        </h1>
        <p className="text-gray-500 mb-12 text-center text-lg">
          Real feedback from employers and job seekers
        </p>

        {/* Leave Review Button */}
        <div className="absolute top-0 right-0 mt-2">
          <button
            className="bg-gradient-to-r from-yellow-400 to-green-500 hover:from-green-500 hover:to-yellow-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowForm(true)}
          >
            Leave a Review
          </button>
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-300 w-full max-w-md relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-green-600 text-3xl"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
                Leave a Review
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Your Review"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows="3"
                  required
                />
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 && "s"}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-yellow-400 hover:from-yellow-400 hover:to-green-500 text-white font-bold py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white via-green-50 to-white border border-gray-200 rounded-3xl shadow-md p-6 flex flex-col gap-3 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-green-300 object-cover"
                />
                <div>
                  <div className="font-bold text-gray-800 text-lg">{review.name}</div>
                  <div className="text-gray-500 text-sm">
                    {review.role} • {review.date}
                  </div>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-700 italic mt-2 relative pl-6 before:content-['❝'] before:absolute before:left-0 before:text-green-400 before:text-xl">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

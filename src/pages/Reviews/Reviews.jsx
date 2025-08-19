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
    <div className="min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-5xl w-full relative">
        {/* Header */}
        <h1 className="text-3xl text-gray-800 mb-2 text-center">What Our Users Say</h1>


        {/* Leave Review Button */}
        <div className="absolute top-0 right-0 mt-2">
          <button
            className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-200"
            onClick={() => setShowForm(true)}
          >
            Leave a Review
          </button>
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-8 shadow-lg w-full max-w-md relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-2xl"
                onClick={() => setShowForm(false)}
              >
                &times;
              </button>
              <h2 className="text-xl text-gray-900 mb-4 text-center">Leave a Review</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="w-full border bg-gray-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition duration-200"
                  required
                />
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                  placeholder="Message *"
                  className="w-full border bg-gray-50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition duration-200"
                  rows="3"
                  required
                />
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  required
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 && "s"}
                    </option>
                  ))}
                </select>
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
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-12 justify-items-center">
          {reviews.map((review, idx) => {
            const calmColors = [
              "bg-blue-50",
              "bg-purple-50",
              "bg-pink-50",
              "bg-red-50",
              "bg-orange-50"
            ];

            const bgColor = calmColors[idx % calmColors.length];

            return (
              <div
                key={idx}
                className={`relative ${bgColor} border border-gray-200 rounded-md shadow-sm p-6 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group min-w-[250px] max-w-[300px]`}
              >
                {/* Name & Role */}
                <div className="flex flex-col items-start gap-1">
                  <div className="font-bold text-gray-700 text-lg">{review.name}</div>
                  <div className="text-gray-500 text-sm">{review.role} • {review.date}</div>
                </div>

                {/* Star Rating */}
                <StarRating rating={review.rating} />

                {/* Review Text */}
                <p className="text-gray-700 italic mt-2 leading-relaxed">{`“${review.review}”`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

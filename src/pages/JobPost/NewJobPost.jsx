import { useState } from 'react';

const districtCityMap = {
  Colombo: ['Colombo', 'Moratuwa', 'Dehiwala', 'Kotte'],
  Gampaha: ['Negombo', 'Gampaha', 'Ja-Ela', 'Minuwangoda'],
  Kandy: ['Kandy', 'Peradeniya', 'Gampola'],
  Galle: ['Galle', 'Hikkaduwa', 'Ambalangoda'],
  Matara: ['Matara', 'Weligama', 'Hakmana'],
  Kurunegala: ['Kurunegala', 'Kuliyapitiya', 'Polgahawela'],
  Jaffna: ['Jaffna', 'Chavakachcheri', 'Point Pedro'],
  Anuradhapura: ['Anuradhapura', 'Kekirawa', 'Medawachchiya'],
  Badulla: ['Badulla', 'Bandarawela', 'Haputale'],
  Other: ['Other'],
};

const workTypes = ['Full Time', 'Part Time', 'Other'];

export default function NewJobPost() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null,
    category: '',
    categoryOther: '',
    district: '',
    districtOther: '',
    city: '',
    cityOther: '',
    workType: '',
    workTypeOther: '',
    company: '',
    website: '',
    email: '',
    applicationMethod: '',
    applicationMethodOther: '',
  });

  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreviewUrl(file ? URL.createObjectURL(file) : '');
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Job post submitted!');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-green-50 via-white to-green-50 rounded-3xl shadow-xl border border-green-200">
      <h2 className="text-3xl font-extrabold text-green-700 mb-8 text-center">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Job Title */}
        <div>
          <label className="block font-semibold text-green-700 mb-2">Job Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g., Senior Frontend Developer"
            className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-green-700 mb-2">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the job responsibilities, requirements, and perks..."
            className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold text-green-700 mb-2">Job Poster (optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block text-sm text-gray-600"
          />
          {previewUrl && (
            <img src={previewUrl} alt="Preview" className="mt-2 max-h-40 rounded-xl border shadow-sm" />
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold text-green-700 mb-2">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
            required
          >
            <option value="">Select category</option>
            <option value="Software Development">Software Development</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Sales">Sales</option>
            <option value="Engineering">Engineering</option>
            <option value="Other">Other</option>
          </select>
          {form.category === 'Other' && (
            <input
              type="text"
              name="categoryOther"
              value={form.categoryOther}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-full border border-green-200 rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            />
          )}
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-green-700 mb-2">District</label>
            <select
              name="district"
              value={form.district}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            >
              <option value="">Select district</option>
              {Object.keys(districtCityMap).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            {form.district === 'Other' && (
              <input
                type="text"
                name="districtOther"
                value={form.districtOther}
                onChange={handleChange}
                placeholder="Enter district"
                className="w-full border border-green-200 rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
                required
              />
            )}
          </div>

          <div>
            <label className="block font-semibold text-green-700 mb-2">City</label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              disabled={!form.district || form.district === 'Other'}
              className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            >
              <option value="">Select city</option>
              {form.district && form.district !== 'Other' &&
                districtCityMap[form.district].map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))
              }
            </select>
            {form.city === 'Other' && (
              <input
                type="text"
                name="cityOther"
                value={form.cityOther}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border border-green-200 rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
                required
              />
            )}
          </div>
        </div>

        {/* Work Type */}
        <div>
          <label className="block font-semibold text-green-700 mb-2">Work Type</label>
          <select
            name="workType"
            value={form.workType}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
            required
          >
            <option value="">Select work type</option>
            {workTypes.map((w) => <option key={w} value={w}>{w}</option>)}
          </select>
          {form.workType === 'Other' && (
            <input
              type="text"
              name="workTypeOther"
              value={form.workTypeOther}
              onChange={handleChange}
              placeholder="Enter work type"
              className="w-full border border-green-200 rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            />
          )}
        </div>

        {/* Company, Website, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold text-green-700 mb-2">Company</label>
            <input
              type="text"
              name="company"

              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-green-700 mb-2">Website</label>
            <input
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
            />
          </div>

          <div>
            <label className="block font-semibold text-green-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            />
            <span className="text-xs text-gray-500">Applicants' CVs will be sent here.</span>
          </div>
        </div>

        {/* Application Method */}
        <div>
          <label className="block font-semibold text-green-700 mb-2">Application Method</label>
          <select
            name="applicationMethod"
            value={form.applicationMethod}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
            required
          >
            <option value="">Select method</option>
            <option value="Send CV to email">Send CV to email</option>
            <option value="Apply via website">Apply via website</option>
            <option value="Call company">Call company</option>
            <option value="Other">Other</option>
          </select>
          {form.applicationMethod === 'Other' && (
            <input
              type="text"
              name="applicationMethodOther"
              value={form.applicationMethodOther}
              onChange={handleChange}
              placeholder="Enter application method"
              className="w-full border border-green-200 rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
              required
            />
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
          >
            Submit Job Post
          </button>
        </div>

      </form>
    </div>
  );
}

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl  border-gray-200 p-10 ">
        <h2 className="text-3xl text-teal-700 mb-4 text-center" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          Post Your Vacancy
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Job Title */}
          <div>
            <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Senior Frontend Developer"
              className="w-full border bg-blue-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-100 shadow-sm transition duration-200"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the job responsibilities, requirements, and perks..."
              className="w-full border bg-blue-50 rounded-xl px-4 py-3 text-sm shadow-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Job Poster
            </label>
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
            <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Category *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
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
                className="w-full border rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                required
              />
            )}
          </div>

          {/* District & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* District */}
            <div>
              <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                District
              </label>
              <select
                name="district"
                value={form.district}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
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
                  className="w-full border rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                  required
                />
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                City
              </label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                disabled={!form.district || form.district === 'Other'}
                className="w-full border rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
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
                  className="w-full border rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                  required
                />
              )}
            </div>
          </div>

          {/* Work Type */}
          <div>
            <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Work Type
            </label>
            <select
              name="workType"
              value={form.workType}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
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
                className="w-full border bg-blue-50 rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                required
              />
            )}
          </div>

          {/* Company, Website, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border bg-blue-50 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Website</label>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full border bg-blue-50 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border bg-blue-50 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                required
              />
              <span className="text-xs text-gray-500">Applicants' CVs will be sent here.</span>
            </div>
          </div>

          {/* Application Method */}
          <div>
            <label className="block text-teal-400 text-[15px] font-semibold mb-2 uppercase" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Application Method
            </label>
            <select
              name="applicationMethod"
              value={form.applicationMethod}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
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
                className="w-full border rounded-xl px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 transition duration-200"
                required
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-200"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

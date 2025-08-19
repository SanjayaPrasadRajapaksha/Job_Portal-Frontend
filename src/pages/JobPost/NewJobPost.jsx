import { useState } from 'react';

const districts = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
  'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
  'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
  'Monaragala', 'Ratnapura', 'Kegalle'
];

const workTypes = ['Full Time', 'Part Time', 'Other'];


export default function NewJobPost() {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null,
    category: '',
    categoryOther: '',
    area: '',
    selectedDistricts: [],
    areaOther: '',
    workType: '',
    workTypeOther: '',
    company: '',
    website: '',
    email: '',
    applicationMethod: '',
    applicationMethodOther: '',
    openingDay: today,
    closingDay: '',
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const [imageError, setImageError] = useState('');


  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file && !file.type.startsWith('image/')) {
        setImageError('Only image files are allowed.');
        setForm({ ...form, image: null });
        setPreviewUrl('');
        return;
      }
      setImageError('');
      setForm({ ...form, image: file });
      setPreviewUrl(file ? URL.createObjectURL(file) : '');
    } else if (name === 'area') {
      setForm({ ...form, area: value, selectedDistricts: [], areaOther: '' });
    } else if (name === 'district-checkbox') {
      let updated = [...form.selectedDistricts];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((d) => d !== value);
      }
      setForm({ ...form, selectedDistricts: updated });
    } else if (name === 'openingDay') {
      // Do nothing, openingDay is not editable
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const [descOrFileError, setDescOrFileError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description.trim() && !form.image) {
      setDescOrFileError('Please provide either a job description or upload a job poster file.');
      return;
    }
    setDescOrFileError('');
    alert('Job post submitted!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-md  border-gray-200 p-10 ">
        <h2 className="text-3xl text-teal-700 mb-6 text-center font-serif">
          Post Your Vacancy
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Job Title */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Senior Frontend Developer"
              className="w-full border bg-gray-100 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-100 shadow-sm text-gray-700 transition duration-200"
              required
            />
          </div>


          {/* Description or File Upload (at least one required) */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
              Description <span className="text-gray-400 font-normal">(optional, unless no file)</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the job responsibilities, requirements, and perks..."
              className="w-full border bg-gray-100 rounded-md px-4 py-3 text-sm shadow-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
            />
          </div>


          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
              Job Poster <span className="text-gray-400 font-normal">(optional, unless no description)</span>
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="block text-sm text-gray-600"
            />
            {imageError && (
              <div className="text-red-600 text-sm font-medium mt-1">{imageError}</div>
            )}
            {previewUrl && !imageError && (
              <img src={previewUrl} alt="Preview" className="mt-2 max-h-40 rounded-md border shadow-sm" />
            )}
          </div>

          {descOrFileError && (
            <div className="text-red-600 text-sm font-medium -mt-6 mb-2">{descOrFileError}</div>
          )}

          {/* Category */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
              Category *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
              required
            >
              <option value="">Select category</option>
              <option value="Software Development">Software Development</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Sales">Sales</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>


        {/* Area Selection */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
            Location *
          </label>
          <select
            name="area"
            value={form.area}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
            required
          >
            <option value="">Select Location</option>
            <option value="Islandwide">Islandwide</option>
            <option value="District">District</option>
            <option value="Other">Other</option>
          </select>

          {/* District checkboxes if District selected */}
          {form.area === 'District' && (
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto border rounded p-2 bg-gray-50">
              {districts.map((district) => (
                <label key={district} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="district-checkbox"
                    value={district}
                    checked={form.selectedDistricts.includes(district)}
                    onChange={handleChange}
                  />
                  {district}
                </label>
              ))}
            </div>
          )}

          {/* Text field if Other selected */}
          {form.area === 'Other' && (
            <input
              type="text"
              name="areaOther"
              value={form.areaOther}
              onChange={handleChange}
              placeholder="Enter Area"
              className="w-full border bg-gray-100 rounded-md px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
              required
            />
          )}
        </div>


          {/* Work Type */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
              Work Type *
            </label>
            <select
              name="workType"
              value={form.workType}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
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
                placeholder="Enter Work Type"
                className="w-full border bg-gray-100 rounded-md px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
                required
              />
            )}
          </div>

          {/* Vacancy Open/Close Days */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">Vacancy Opening Day</label>
              <input
                type="date"
                name="openingDay"
                value={form.openingDay}
                disabled
                className="w-full border bg-gray-100 rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none text-gray-700 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">Vacancy Closing Day</label>
              <input
                type="date"
                name="closingDay"
                value={form.closingDay}
                min={form.openingDay}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700"
              />
            </div>
          </div>

          {/* Company, Website, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">Company *</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border bg-gray-100 rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">Website (optional)</label>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full border bg-gray-100 rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border bg-gray-100 rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
                required
              />
              <span className="text-xs text-gray-500">Applicants' CVs will be sent here.</span>
            </div>
          </div>

          {/* Application Method */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 uppercase font-serif">
              Application Method *
            </label>
            <select
              name="applicationMethod"
              value={form.applicationMethod}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
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
                placeholder="Enter Application Method"
                className="w-full border bg-gray-100 rounded-md px-4 py-3 mt-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-100 text-gray-700 transition duration-200"
                required
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-teal-400 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-200 shadow-sm"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

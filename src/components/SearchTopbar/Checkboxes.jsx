export default function Checkboxes({ values = {}, onChange }) {
  return (
    <div className="flex gap-6 items-center">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <input
          type="checkbox"
          name="fullTime"
          checked={!!values.fullTime}
          onChange={e =>
            onChange && onChange({ ...values, fullTime: e.target.checked })
          }
          className="accent-green-600 w-4 h-4 rounded"
        />
        Full Time
      </label>

      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <input
          type="checkbox"
          name="partTime"
          checked={!!values.partTime}
          onChange={e =>
            onChange && onChange({ ...values, partTime: e.target.checked })
          }
          className="accent-green-600 w-4 h-4 rounded"
        />
        Part Time
      </label>

      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <input
          type="checkbox"
          name="fullOrPartTime"
          checked={!!values.fullOrPartTime}
          onChange={e =>
            onChange &&
            onChange({ ...values, fullOrPartTime: e.target.checked })
          }
          className="accent-green-600 w-4 h-4 rounded"
        />
  Full Time/Part Time
      </label>
    </div>
  );
}

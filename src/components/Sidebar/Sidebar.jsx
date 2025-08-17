import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const jobCategories = [
  { name: "IT & Software Development", path: "/categories/software-development" },
  { name: "Hardware & Technical Support", path: "/categories/hardware-technical-support" },
  { name: "Mechanical & Civil Engineering", path: "/categories/mechanical-civil-engineering" },
  { name: "Healthcare & Nursing", path: "/categories/healthcare-nursing" },
  { name: "Finance & Accounting", path: "/categories/finance-accounting" },
  { name: "Sales & Marketing", path: "/categories/sales-marketing" },
  { name: "Human Resources (HR)", path: "/categories/human-resources" },
  { name: "Administration & Office", path: "/categories/administration-office" },
  { name: "Customer Service", path: "/categories/customer-service" },
  { name: "Education & Training", path: "/categories/education-training" },
  { name: "Legal & Compliance", path: "/categories/legal-compliance" },
  { name: "Construction & Real Estate", path: "/categories/construction-real-estate" },
  { name: "Manufacturing & Production", path: "/categories/manufacturing-production" },
  { name: "Logistics & Supply Chain", path: "/categories/logistics-supply-chain" },
  { name: "Retail & Fashion", path: "/categories/retail-fashion" },
  { name: "Hospitality & Tourism", path: "/categories/hospitality-tourism" },
  { name: "Science & R&D", path: "/categories/science-rd" },
  { name: "Arts & Design", path: "/categories/arts-design" },
  { name: "Government Service", path: "/categories/government-service" },
  { name: "NGO & Social Work", path: "/categories/ngo-social-work" },
  { name: "Skilled Trades", path: "/categories/skilled-trades" },
  { name: "Telecommunications", path: "/categories/telecommunications" },
  { name: "Agriculture & Environment", path: "/categories/agriculture-environment" },
  { name: "Automotive Services", path: "/categories/automotive-services" },
  { name: "Energy & Utilities", path: "/categories/energy-utilities" },
  { name: "Sports & Recreation", path: "/categories/sports-recreation" },
  { name: "Other", path: "/categories/other" },
];

export default function Sidebar({ onCategorySelect }) {
  return (
    <aside className="w-64 min-w-[220px] flex flex-col bg-white border-r border-gray-200 shadow-lg z-20 max-h-[90vh] my-4">
      <div className="flex-1 flex flex-col bg-gradient-to-b from-green-200 to-green-50 overflow-hidden">
        

        {/* Heading */}
        <h2 className="bg-green-700 text-white text-sm text-center py-3 font-semibold tracking-wide uppercase shadow-sm">
          Job Categories
        </h2>

        {/* Category List */}
        <ul className="flex-1 overflow-y-auto py-3 px-2 space-y-1 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-100">
          {jobCategories.map((cat) => (
            <li key={cat.name}>
              <Link
                to={cat.path}
                className="block text-sm font-medium px-3 py-2 rounded-lg text-gray-700 hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={() => onCategorySelect && onCategorySelect(cat)}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Scroll hint */}
      <div className="bg-green-700 text-white text-xs text-center py-2 flex items-center justify-center gap-2 border-t border-green-600">
        More Categories Below
      </div>
      </div>
    </aside>
  );
}

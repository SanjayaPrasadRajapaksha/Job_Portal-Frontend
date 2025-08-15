import { FaPaperPlane } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

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

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-w-[220px] flex flex-col bg-white border-r border-[rgb(247,184,1)] shadow-lg z-20 max-h-[90vh] my-4 rounded-2xl overflow-hidden">
      {/* Subscribe Form */}
      <div className="p-3 bg-gradient-to-b from-[rgb(247,184,1)] to-[rgb(255,206,61)] border-b border-[rgb(247,184,1)]">
        <form className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Subscribe with your email"
            aria-label="Subscribe with your email"
            className="flex-1 px-3 py-2 rounded-full border border-[rgb(247,184,1)] focus:outline-none focus:ring-2 focus:ring-[rgb(247,184,1)] text-sm placeholder-[#720026] bg-white"
            required
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-[#720026] text-[rgb(247,184,1)] shadow-md hover:bg-[#a8324a] hover:text-white transition-all duration-200 border-2 border-[rgb(247,184,1)] flex items-center justify-center"
            aria-label="Send subscription"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </form>
      </div>

      {/* Heading */}
      <h2 className="bg-[#720026] text-[#ecf8f8] text-sm text-center py-3 font-semibold tracking-wide uppercase shadow">
        Job Categories
      </h2>

      {/* Categories */}
      <ul className="flex-1 overflow-y-auto py-2 px-2 space-y-1 scrollbar-thin scrollbar-thumb-[#720026] scrollbar-track-[rgb(247,184,1)]">
        {jobCategories.map((cat) => {
          const isActive = location.pathname === cat.path;
          return (
            <li key={cat.name}>
              <Link
                to={cat.path}
                className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-[#720026] text-white shadow-md"
                    : "hover:bg-[#720026] hover:text-white text-gray-800"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Scroll Hint */}
      <div className="bg-[#720026] text-[#ecf8f8] text-xs text-center py-2 flex items-center justify-center gap-2 border-t border-[rgb(247,184,1)] opacity-90">
        <span className="animate-bounce">⬇️</span> Scroll for More{" "}
        <span className="animate-bounce">⬇️</span>
      </div>
    </aside>
  );
}

import { Link } from 'react-router-dom';

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
  return (
    <aside className="h-full w-64 min-w-[220px] flex flex-col bg-[#fdfffc] border-r border-[rgb(247,184,1)] shadow-lg z-20">
      <div className="relative flex-1 flex flex-col bg-gradient-to-b from-[rgb(247,184,1)] to-[rgb(255,206,61)] overflow-hidden">
        
        {/* Heading */}
        <h2 className="bg-[#720026] text-[#ecf8f8] text-sm text-center py-3 font-semibold tracking-wide uppercase">
          JOB CATEGORIES
        </h2>

        {/* Category List */}
        <ul className="flex-1 overflow-y-auto py-2 px-2 space-y-2 scrollbar-thin scrollbar-thumb-[#720026] scrollbar-track-[rgb(247,184,1)]">
          {jobCategories.map((cat) => (
            <li
              key={cat.name}
              className="text-sm font-semibold px-3 py-2 hover:bg-[#720026] hover:text-[#ecf8f8] rounded-lg transition cursor-pointer shadow-sm"
            >
              <Link to={cat.path} className="block w-full h-full">
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Scroll hint */}
        <div className="bg-[#720026] text-[#ecf8f8] text-xs text-center py-2 flex items-center justify-center gap-2 border-t border-[rgb(247,184,1)]">
          <span className="animate-bounce">⬇️</span> Scroll for More <span className="animate-bounce">⬇️</span>
        </div>
      </div>
    </aside>
  );
}

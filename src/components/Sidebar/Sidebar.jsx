import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Sidebar({ selectedCategory, setSelectedCategory, onCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

const categories = [
    { name: "IT & Software Development", path: "/categories/it-software-development" },
    { name: "IT Infrastructure & Networking", path: "/categories/it-infrastructure-networking" },
    { name: "Telecoms & Com-Technology", path: "/categories/telecoms-com-technology" },
    { name: "Accounting, Audit & Finance", path: "/categories/accounting-audit-finance" },
    { name: "Banking, Insurance", path: "/categories/banking-insurance" },
    { name: "Sales, Marketing & Merchandising", path: "/categories/sales-marketing-merchandising" },
    { name: "Human Resources & Training", path: "/categories/human-resources-training" },
    { name: "Corporate Management & Analysis", path: "/categories/corporate-management-analysis" },
    { name: "Administration & Office Support", path: "/categories/administration-office-support" },
    { name: "Customer & Public Relations", path: "/categories/customer-public-relations" },
    { name: "Logistics, Supply Chain & Transport", path: "/categories/logistics-supply-chain-transport" },
    { name: "Eng – Mechanical, Electrical, Auto", path: "/categories/eng-mechanical-electrical-auto" },
    { name: "Civil, Construction & Architecture", path: "/categories/civil-construction-architecture" },
    { name: "Manufacturing & Production", path: "/categories/manufacturing-production" },
    { name: "Media, Advertising & Communications", path: "/categories/media-advertising-communications" },
    { name: "Hospitality, Food & Beverage", path: "/categories/hospitality-food-beverage" },
    { name: "Travel, Tourism & Ticketing", path: "/categories/travel-tourism-ticketing" },
    { name: "Sports, Fitness & Recreation", path: "/categories/sports-fitness-recreation" },
    { name: "Healthcare, Medical & Nursing", path: "/categories/healthcare-medical-nursing" },
    { name: "Legal & Compliance", path: "/categories/legal-compliance" },
    { name: "Quality Assurance & Supervision", path: "/categories/quality-assurance-supervision" },
    { name: "Apparel, Clothing & Textiles", path: "/categories/apparel-clothing-textiles" },
    { name: "Education, Teaching & Training", path: "/categories/education-teaching-training" },
    { name: "Research, Science & R&D", path: "/categories/research-science-rd" },
    { name: "Agriculture, Dairy & Environment", path: "/categories/agriculture-dairy-environment" },
    { name: "Security & Safety", path: "/categories/security-safety" },
    { name: "Fashion, Beauty & Lifestyle", path: "/categories/fashion-beauty-lifestyle" },
    { name: "International Development & NGOs", path: "/categories/international-development-ngos" },
    { name: "BPO, KPO & Outsourcing", path: "/categories/bpo-kpo-outsourcing" },
    { name: "Imports, Exports & Trading", path: "/categories/imports-exports-trading" },
    { name: "All Categories", path: "/categories/all-categories" },
  ];
  const handleSelect = (cat) => {
    setSelectedCategory(cat.name);
    if (onCategorySelect) onCategorySelect(cat);
    setIsOpen(false); // close sidebar on mobile after selecting
  };

  useEffect(() => {
    if (!selectedCategory) {
      const allCat = categories.find((c) => c.name === "All Categories");
      if (allCat) {
        setSelectedCategory(allCat.name);
        if (onCategorySelect) onCategorySelect(allCat);
      }
    }
  }, [selectedCategory, setSelectedCategory, onCategorySelect]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const sidebarHeightStyle = {
    height: 'calc(100vh - 70px - 57px)', // 70px navbar, 70px footer. Adjust as needed!
    top: '80px', // sidebar starts at bottom of navbar
  };

  return (
    <>
      {/* Only show button when sidebar is hidden (mobile/tablet only) */}
      {!isOpen && (
        <button
          className="block lg:hidden fixed top-1/2 left-0 z-50 bg-yellow-500 text-black font-semibold px-2 py-4 rounded-r-md shadow-lg transform -translate-y-1/2"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            minHeight: "120px",
            minWidth: "40px"
          }}
          onClick={() => setIsOpen(true)}
        >
          Categories
        </button>
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          fixed lg:static
          left-0
          w-72 min-w-[220px]
          flex flex-col bg-white border-r border-gray-200 shadow-lg z-40
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          lg:top-0 lg:h-full
        `}
        style={
          !isOpen
            ? {}
            : window.innerWidth < 1024
              ? sidebarHeightStyle
              : {}
        }
      >
        <div className="flex-1 flex flex-col bg-gradient-to-b from-green-500 to-green-300 overflow-hidden">
          {/* Circle close button (top right, mobile/tablet only) */}
          {isOpen && (
            <button
              className="block lg:hidden absolute top-1 right-3 w-9 h-9 flex items-center justify-center rounded-full text-yellow-500 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close sidebar"
            >
              <span className="text-2xl font-bold">&times;</span>
            </button>
          )}

          <h2 className="bg-green-800 text-white text-md text-center py-3 font-semibold tracking-wide uppercase shadow-sm">
            Job Categories
          </h2>

          <ul className="flex-1 overflow-y-auto px-1 py-1.5 space-y-1 scrollbar-green">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to={cat.path}
                  className={`block text-sm font-medium px-3 py-2 transition-all duration-200 shadow-sm
                    ${selectedCategory === cat.name
                      ? "bg-yellow-400 text-gray-900 shadow-md"
                      : "text-gray-900 hover:bg-yellow-400 hover:text-green-900 hover:shadow-md"
                    }`}
                  onClick={() => handleSelect(cat)}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-green-700 text-white text-[13px] text-center py-2 flex items-center justify-center gap-2 border-t border-green-600">
            More Categories Below
          </div>
        </div>
      </aside>
    </>
  );
}
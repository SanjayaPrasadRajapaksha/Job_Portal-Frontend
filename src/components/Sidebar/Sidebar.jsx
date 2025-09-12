

import { Link } from "react-router-dom";



import { useEffect } from "react";

export default function Sidebar({ selectedCategory, setSelectedCategory, onCategorySelect }) {
  // Hardcoded categories
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
  };

  // On mount, select 'All Categories' by default if nothing is selected and scroll to it
  useEffect(() => {
    if (!selectedCategory) {
      const allCat = categories.find(c => c.name === "All Categories");
      if (allCat) {
        setSelectedCategory(allCat.name);
        if (onCategorySelect) onCategorySelect(allCat);
      }
    }
    // Scroll to 'All Categories' item
    setTimeout(() => {
      const el = document.getElementById('all-categories-item');
      if (el) {
        el.scrollIntoView({ block: 'center', behavior: 'auto' });
      }
    }, 0);
  }, [selectedCategory, setSelectedCategory, onCategorySelect]);

  // Helper to convert category name to slug used in MainRoutes.jsx
  const slugify = (name) =>
    name
      .replace(/&/g, 'and')
      .replace(/–/g, '-')
      .replace(/,/g, '')
      .replace(/\s*\/\s*/g, '-')
      .replace(/\s+/g, '-')
      .replace(/\//g, '-')
      .replace(/\++/g, 'and')
      .replace(/\.+/g, '')
      .replace(/-+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .toLowerCase();

  return (
    <aside className="w-72 min-w-[220px] flex flex-col bg-white border-r border-gray-200 shadow-lg z-20 max-h-[90vh] my-4">
      <div className="flex-1 flex flex-col bg-gradient-to-b from-green-500 to-green-300 overflow-hidden">
        {/* Heading */}
        <h2 className="bg-green-800 text-white text-md text-center py-3 font-semibold tracking-wide uppercase shadow-sm">
          Job Categories
        </h2>

        {/* Category List */}
        <ul className="flex-1 overflow-y-auto px-1 py-1.5 space-y-1 scrollbar-green">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                to={cat.path}
                className={`block text-sm font-medium px-3 py-2  transition-all duration-200 shadow-sm
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

        {/* Scroll hint */}
        <div className="bg-green-700 text-white text-[13px] text-center py-2 flex items-center justify-center gap-2 border-t border-green-600">
          More Categories Below
        </div>
      </div>
    </aside>
  );
}

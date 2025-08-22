
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from '../../apis/Api';


export default function Sidebar({ selectedCategory, setSelectedCategory, onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const cats = await getAllCategories();
      setCategories(cats);
    }
    fetchCategories();
  }, []);

  const handleSelect = (cat) => {
    setSelectedCategory(cat.name);
    if (onCategorySelect) onCategorySelect(cat);
  };

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
            <li key={cat.id || cat.name}>
              <Link
                to={cat.path || `/categories/${cat.name?.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block text-sm font-medium px-3 py-2  transition-all duration-200 shadow-sm
                  ${
                    selectedCategory === cat.name
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

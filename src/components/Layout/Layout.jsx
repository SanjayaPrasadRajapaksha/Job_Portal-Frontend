import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchFilter } from '../../context/SearchFilterContext';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Checkboxes from '../SearchTopbar/Checkboxes';
import CommonSearchBar from '../SearchTopbar/CommonSearchBar';
import Sidebar from '../Sidebar/Sidebar';





function Layout({ children }) {
  // State for selected sidebar category
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  // Get current location
  const location = useLocation();
  // Use context for search and checkbox filter
  const { searchQuery, setSearchQuery, checkboxValues, setCheckboxValues } = useSearchFilter();

  return (
  <div className="h-screen flex flex-col">
      <NavBar clearSidebarCategory={() => setSelectedCategory(null)} />
      <div className="flex flex-1 min-h-0 bg-white">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Search bar and checkboxes bar below nav, beside sidebar, visible only on category pages */}
          {location.pathname.startsWith('/categories/') && (
            <div className="bg-gray-300 px-6 py-1 shadow-sm flex items-center gap-4 justify-start rounded-md ml-4 mt-3">
              <div className="ml-auto flex items-center gap-4">
                <Checkboxes values={checkboxValues} onChange={setCheckboxValues} />
                <CommonSearchBar onSearch={setSearchQuery} value={searchQuery} />
              </div>
            </div>
          )}

          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

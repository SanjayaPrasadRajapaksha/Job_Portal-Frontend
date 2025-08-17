import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Checkboxes from '../SearchTopbar/Checkboxes';
import CommonSearchBar from '../SearchTopbar/CommonSearchBar';
import Sidebar from '../Sidebar/Sidebar';



function Layout({ children }) {
  // Placeholder search handler
  const handleSearch = (query) => {
    // You can connect this to page logic or global state as needed
    // For now, just log
    console.log('Search:', query);
  };


  // State for checkboxes
  const [checkboxValues, setCheckboxValues] = React.useState({
    fullTime: false,
    partTime: false,
    fullOrPartTime: false,
  });


  // Get current location
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Search bar and checkboxes bar below nav, beside sidebar, visible on any category path */}
          {location.pathname.startsWith('/categories/') && (
            <div className="bg-gray-200 px-6 py-1   shadow-sm flex items-center gap-4 justify-start rounded-md ml-4">
              <div className="ml-auto flex items-center gap-4">
                <Checkboxes values={checkboxValues} onChange={setCheckboxValues} />
                <CommonSearchBar onSearch={handleSearch} />
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

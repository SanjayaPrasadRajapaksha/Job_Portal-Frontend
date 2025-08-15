
import CommonSearchBar from '../CommonSearchBar';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';



function Layout({ children }) {
  // Placeholder search handler
  const handleSearch = (query) => {
    // You can connect this to page logic or global state as needed
    // For now, just log
    console.log('Search:', query);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Common search bar below nav, beside sidebar */}
          <div className="bg-gray-100 px-6 py-1 shadow-sm flex justify-end">
            <CommonSearchBar onSearch={handleSearch} />
          </div>

          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

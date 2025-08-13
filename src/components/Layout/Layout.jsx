import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';



function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

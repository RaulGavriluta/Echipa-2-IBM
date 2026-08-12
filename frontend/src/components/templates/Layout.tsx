import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer/Footer";
function Layout() {
  return (
    <div className="app-layout">
      {/* <Navbar /> TBA */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

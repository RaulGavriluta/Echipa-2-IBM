import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer/Footer";
import Navbar from "../organisms/Navbar/Navbar"
function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

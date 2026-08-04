import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-layout">
      {/* <Navbar /> TBA */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> TBA */}
    </div>
  );
}

export default Layout;

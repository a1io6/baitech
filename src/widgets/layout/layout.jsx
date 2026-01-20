import { Outlet } from "react-router";
import AdminPanel from "../adminSideBar/AdminPanel";
function Layout() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        //   padding: "20px",
          gap: "20px",
        }}
      >
        <AdminPanel />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

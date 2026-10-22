import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <div className="dark:bg-gray-950 bg-[#fffaf4]">
      <AdminNavbar />
      <Sidebar />

      <main className="ml-72 min-h-screen bg-[#fffaf4] dark:bg-gray-950">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Home, FileText, Plus, Menu, X } from "lucide-react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Manage Stories",
      icon: <FileText className="w-5 h-5 mr-2" />,
      path: "/dashboard/manage-stories",
    },
    {
      name: "Add Stories",
      icon: <Plus className="w-5 h-5 mr-2" />,
      path: "/dashboard/add-stories",
    },
    { name: "Home", icon: <Home className="w-5 h-5 mr-2" />, path: "/" },
  ];

  const navLinkClass = ({ isActive }) =>
    `flex items-center p-2 rounded hover:bg-purple-100 transition ${
      isActive ? "bg-purple-200 font-semibold" : ""
    }`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg flex flex-col w-64 transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static absolute z-20 h-full`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b flex justify-center items-center relative">
         <Link to="/dashboard"><img src={"/logo.webp"} alt="Logo" className="h-12 w-auto" /></Link>
          <button
            className="absolute right-4 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={navLinkClass}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar (mobile) */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-purple-600" />
          </button>
          <Link to="/"><img src={"/logo.webp"} alt="Logo" className="h-10 w-auto" /></Link>
        </header>

        {/* Outlet for Routes */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-teal-700 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Logo</div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-teal-600 ${
                    isActive ? "bg-teal-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sales"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-teal-600 ${
                    isActive ? "bg-teal-600" : ""
                  }`
                }
              >
                Sales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chats"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-teal-600 ${
                    isActive ? "bg-teal-600" : ""
                  }`
                }
              >
                Chats
              </NavLink>
            </li>
          </ul>
        </nav>
        <footer className="p-4 text-center text-sm">© 2024</footer>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <div className="text-lg font-bold">
            <button className="me-2">
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-teal-600 ${
                    isActive ? "bg-teal-600" : ""
                  }`
                }
              >
                Summery
              </NavLink>
            </button>
            <button className="me-2">
              <NavLink
                to="/sales"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-teal-600 ${
                    isActive ? "bg-teal-600" : ""
                  }`
                }
              >
                Sales
              </NavLink>
            </button>
            <button className="me-2">
              <NavLink
                to="/chats"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-teal-600 ${
                    isActive ? "bg-teal-600" : ""
                  }`
                }
              >
                Chats
              </NavLink>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow bg-gray-100 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

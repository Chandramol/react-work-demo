import { ChartPie, House, MessageCircleMore, MessageSquareMore, Settings, Tag, Users } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-teal-700 text-white flex flex-col hidden sm:flex">
        <div className="p-4">
          <img src="/public/images/Logo.png" alt="App Logo" className="w-full" />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li className="text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex p-2 items-center justify-center rounded duration-300  ${
                    isActive ? "bg-white text-[#115E56]" : "text-white"
                  }`
                }
              >
                <House />
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/sales"
                className={({ isActive }) =>
                  `inline-flex p-2 items-center justify-center rounded duration-300  ${
                    isActive ? "bg-white text-[#115E56]" : "text-white"
                  }`
                }
              >
                <Users />
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/chats"
                className={({ isActive }) =>
                  `inline-flex p-2 items-center justify-center rounded duration-300  ${
                    isActive ? "bg-white text-[#115E56]" : "text-white"
                  }`
                }
              >
                <MessageCircleMore />
              </NavLink>
            </li>
          </ul>
        </nav>
        <footer className="p-4 flex justify-center text-sm"><Settings /></footer>
      </aside>

      {/* Main Content */}
      <div className="w-80 flex-grow flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full duration-300 hover:bg-[#d6fcf2] ${
                  isActive ? "bg-[#CCFBEF]" : ""
                }`
              }
            >
              <ChartPie size={18} />
              Summary
            </NavLink>
            <NavLink
              to="/sales"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full duration-300 hover:bg-[#d6fcf2] ${
                  isActive ? "bg-[#CCFBEF]" : ""
                }`
              }
            >
              <Tag size={18} />
              Sales
            </NavLink>
            <NavLink
              to="/chats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full duration-300 hover:bg-[#d6fcf2] ${
                  isActive ? "bg-[#CCFBEF]" : ""
                }`
              }
            >
              <MessageSquareMore size={18} />
              Chats
            </NavLink>
          </nav>
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

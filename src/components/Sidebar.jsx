import React from "react";
import { useAppContext } from "../context/ AppContext";

const Sidebar = () => {
  const { activeTab, setActiveTab } = useAppContext();

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="text-2xl font-bold mb-6">RBAC Dashboard</div>
      <nav>
        <ul>
          <li
            onClick={() => setActiveTab("Users")}
            className={`py-2 px-4 rounded cursor-pointer ${
              activeTab === "Users" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Users
          </li>
          <li
            onClick={() => setActiveTab("Roles")}
            className={`py-2 px-4 rounded cursor-pointer ${
              activeTab === "Roles" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Roles
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

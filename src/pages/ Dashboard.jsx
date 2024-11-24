// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UsersTable from "../components/UsersTable";
import RolesTable from "../components/RolesTable";
import { useAppContext } from "../context/ AppContext";
import Popup from "../components/Popup";

const Dashboard = () => {
  const { activeTab, popupData } = useAppContext();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          {activeTab === "Users" ? <UsersTable /> : <RolesTable />}
        </main>
        {popupData.isOpen && <Popup />}
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Admin Dashboard</div>
      <div>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

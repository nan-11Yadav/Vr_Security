import React, { useState } from "react";
import { useAppContext } from "../context/ AppContext";

const Popup = () => {
  const { popupData, setPopupData, addUser, updateUser } = useAppContext();
  const [formData, setFormData] = useState(
    popupData.data || { id: Date.now(), name: "", email: "", role: "User" }
  );

  const handleSubmit = () => {
    if (popupData.type === "addUser") {
      addUser(formData);
    } else if (popupData.type === "editUser") {
      updateUser(formData);
    }

    setPopupData({ isOpen: false, type: "", data: null });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-lg font-bold mb-4">
          {popupData.type === "addUser" ? "Add User" : "Edit User"}
        </h3>
        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Role</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 px-4 py-2 rounded mr-2"
            onClick={() =>
              setPopupData({ isOpen: false, type: "", data: null })
            }
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

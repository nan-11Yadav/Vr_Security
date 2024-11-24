import React from "react";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useAppContext } from "../context/ AppContext";

const UsersTable = () => {
  const { users, setPopupData, deleteUser } = useAppContext();

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Users</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setPopupData({ isOpen: true, type: "addUser", data: null })
          }
        >
          Add User
        </button>
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4 flex items-center">
                {/* Edit Button */}
                <button
                  className="text-blue-500 flex items-center hover:scale-105"
                  onClick={() =>
                    setPopupData({ isOpen: true, type: "editUser", data: user })
                  }
                >
                  <FaEdit className="mr-2" /> Edit
                </button>

                {/* Delete Button */}
                <button
                  className="text-red-500 flex items-center hover:scale-105 ml-4"
                  onClick={() => deleteUser(user.id)}
                >
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

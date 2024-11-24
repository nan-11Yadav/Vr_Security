import React from "react";

const RolesTable = () => {
  const roles = [
    { id: 1, name: "Admin", description: "Full access to all resources." },
    {
      id: 2,
      name: "Editor",
      description: "Can edit content but not settings.",
    },
  ];

  return (
    <div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Role Name</th>
            <th className="py-2 px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-t">
              <td className="py-2 px-4">{role.name}</td>
              <td className="py-2 px-4">{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;

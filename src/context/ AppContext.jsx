// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Users");
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
  ]);
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [popupData, setPopupData] = useState({
    isOpen: false,
    type: "",
    data: null,
  });

  const addUser = (newUser) => setUsers([...users, newUser]);
  const updateUser = (updatedUser) =>
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  const addRole = (newRole) => setRoles([...roles, newRole]);
  const updateRole = (updatedRole) =>
    setRoles(
      roles.map((role) => (role.id === updatedRole.id ? updatedRole : role))
    );
  const deleteRole = (id) => setRoles(roles.filter((role) => role.id !== id));

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        users,
        addUser,
        updateUser,
        deleteUser,
        roles,
        addRole,
        updateRole,
        deleteRole,
        popupData,
        setPopupData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

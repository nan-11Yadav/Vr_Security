export const getUsers = () => {
  return Promise.resolve([
    { name: "John Doe", role: "Admin", status: "Active" },
    { name: "Jane Smith", role: "User", status: "Inactive" },
  ]);
};

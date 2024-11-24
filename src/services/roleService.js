export const getRoles = () => {
  return Promise.resolve([
    { name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { name: "User", permissions: ["Read"] },
  ]);
};

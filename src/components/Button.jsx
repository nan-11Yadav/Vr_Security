import React from "react";

const Button = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ${className}`}
  >
    {label}
  </button>
);

export default Button;

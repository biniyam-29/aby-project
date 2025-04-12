import React, { useState } from "react";

export const Switch = ({ defaultChecked = false, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    setChecked(!checked);
    onChange && onChange(!checked);
  };

  return (
    <div
      onClick={toggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        checked ? "bg-teal-500" : "bg-gray-600"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
};

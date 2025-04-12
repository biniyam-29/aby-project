import React from "react";
import classNames from "classnames";

export const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyle = "px-4 py-2 rounded-2xl font-medium transition duration-200";
  const variants = {
    default: "bg-teal-500 text-white hover:bg-teal-600",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button className={classNames(baseStyle, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

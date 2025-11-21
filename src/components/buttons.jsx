import React from "react";
export default function Button({
  label,
  variant = "filled",
  className = "",
  href = "#",
}) {
  const baseStyles =
    "w-full max-w-sm mx-auto py-3 rounded-2xl text-center font-lato text-lg tracking-wide transition-all duration-300 transform";

  const variants = {
    filled:
      "bg-accent1 text-brand  hover:bg-accent2 hover:scale-105 hover:shadow-lg",
    outline:
      "border border-accent1 text-brand hover:bg-accent1 hover:text-bg hover:scale-105 hover:shadow-lg",
    gradient:
      "bg-gradient-to-r from-accent1 to-accent2 text-brand  font-semibold hover:opacity-90 hover:scale-105 hover:shadow-lg",
  };
  const variantClass = variants[variant] ?? variants.filled;
  return (
    <a
      href={href}
      target="blank"
      rel="noopener noreferrer"
      type="button"
      className={`${baseStyles} ${variantClass} ${className}`}
    >
      {label}
    </a>
  );
}

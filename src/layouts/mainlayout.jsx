import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-brand flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl">{children}</div>
    </div>
  );
}

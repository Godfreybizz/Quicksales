import React from "react";
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-gray-50 p-8">{children}</div>;
} 
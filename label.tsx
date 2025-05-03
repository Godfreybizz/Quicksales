import React from "react";
export function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return <label htmlFor={htmlFor} className="block font-medium mb-1">{children}</label>;
} 
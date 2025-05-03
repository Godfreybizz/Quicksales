import React from "react";
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="border rounded px-2 py-1" />;
} 
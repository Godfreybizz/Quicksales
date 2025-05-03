import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded shadow p-4 mb-4 bg-white">{children}</div>;
}
export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}
export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}
export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-500 text-sm">{children}</p>;
}
export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}
export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
} 
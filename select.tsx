import React, { useState } from "react";

export function Select({ value, onValueChange, children, defaultValue }: any) {
  const [val, setVal] = useState(value || defaultValue || "");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVal(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
  };
  return React.Children.map(children, (child: any) =>
    React.cloneElement(child, { value: val, onChange: handleChange })
  );
}

export function SelectTrigger({ id, children }: any) {
  return <div id={id}>{children}</div>;
}

export function SelectValue({ placeholder }: any) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children }: any) {
  return <>{children}</>;
}

export function SelectItem({ value, children }: any) {
  return <option value={value}>{children}</option>;
} 
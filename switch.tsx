import React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function Switch({ checked, onCheckedChange, ...props }: SwitchProps) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onCheckedChange(e.target.checked)}
        style={{ marginRight: 8 }}
        {...props}
      />
      <span>{checked ? 'On' : 'Off'}</span>
    </label>
  );
} 
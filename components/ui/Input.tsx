// components/ui/Input.tsx
import React from 'react';

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

export default function Input({ label, name, value, onChange, placeholder, type = 'text' }: InputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

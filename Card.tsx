// components/ui/Card.tsx
import React from 'react';

type CardProps = {
  name: string;
  email: string;
};

export default function Card({ name, email }: CardProps) {
  return (
    <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-600">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-600 rounded-full" /> {/* Placeholder for user avatar */}
        <div>
          <p className="text-lg font-semibold text-white">Coding Conf</p>
          <p className="text-sm text-gray-300">{name}</p>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
}
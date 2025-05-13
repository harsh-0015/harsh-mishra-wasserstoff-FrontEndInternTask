// components/ui/Formwrapper.tsx
import React, { ReactNode } from 'react';

type FormWrapperProps = {
  children: ReactNode;
};

export default function FormWrapper({ children }: FormWrapperProps) {
  return (
    <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-600">
      {children}
    </div>
  );
}
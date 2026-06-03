import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-[#fcfaf7] border border-[#d8cbb5] rounded px-4 py-2.5 text-[#242220] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#cf8e3c] focus:border-[#cf8e3c] transition-all ${className}`}
        {...props}
      />
    </div>
  );
};

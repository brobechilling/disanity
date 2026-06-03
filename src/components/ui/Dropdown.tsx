import React from 'react';

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, className = '', ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
          {label}
        </span>
      )}
      <div className="relative">
        <select
          className={`w-full bg-transparent text-[#242220] font-semibold text-sm py-1.5 focus:outline-none appearance-none cursor-pointer pr-6 ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

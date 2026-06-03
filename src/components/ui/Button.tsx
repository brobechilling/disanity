import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'light' | 'icon';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded transition-all duration-300 transform active:scale-95 focus:outline-none';
  
  const variants = {
    primary: 'bg-[#5c0d12] hover:bg-[#46090c] text-white px-6 py-2.5 shadow-md',
    secondary: 'bg-[#cf8e3c] hover:bg-[#b87d31] text-white px-6 py-2.5 shadow-md',
    outline: 'border border-[#5c0d12] text-[#5c0d12] hover:bg-[#5c0d12] hover:text-white px-5 py-2',
    light: 'border border-gray-300 text-gray-700 bg-white/80 hover:bg-gray-100 px-5 py-2',
    icon: 'p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100'
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

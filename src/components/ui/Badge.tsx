import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'facts' | 'tag' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'tag' }) => {
  const base = 'inline-flex items-center text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1';
  const variants = {
    facts: 'bg-[#cf8e3c] text-white',
    tag: 'bg-[#5c0d12]/10 text-[#5c0d12]',
    accent: 'bg-green-100 text-green-800'
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
};

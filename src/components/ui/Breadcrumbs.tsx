import React from 'react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex text-xs text-gray-500 py-4 select-none">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-[#5c0d12] transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-600 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

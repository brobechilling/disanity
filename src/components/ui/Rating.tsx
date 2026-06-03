import React from 'react';

interface RatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, maxStars = 5, size = 16 }) => {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(maxStars)].map((_, i) => {
        const fill = i < Math.floor(rating) ? '#cf8e3c' : '#d1d5db';
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="none"
            className="inline"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
          </svg>
        );
      })}
    </div>
  );
};

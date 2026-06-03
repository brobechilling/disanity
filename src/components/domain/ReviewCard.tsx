import React from 'react';
import { Rating } from '../ui/Rating';

interface ReviewCardProps {
  rating: number;
  comment: string;
  authorName: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ rating, comment, authorName }) => {
  return (
    <div className="bg-[#efece6] border border-[#d8cbb5] rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <Rating rating={rating} size={14} />
      </div>
      <p className="text-sm text-gray-700 italic mb-4 leading-relaxed">
        "{comment}"
      </p>
      <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">
        — {authorName}
      </div>
    </div>
  );
};

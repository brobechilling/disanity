import React from 'react';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { formatVND } from '../../utils/format';

interface WorkshopCardProps {
  title: string;
  artisanName: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  onDetailClick?: () => void;
  onBookClick?: () => void;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title,
  artisanName,
  location,
  price,
  originalPrice,
  rating,
  image,
  onDetailClick,
  onBookClick
}) => {
  return (
    <div className="bg-[#efece6] border border-[#d8cbb5] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-[#5c0d12] font-serif font-bold text-lg leading-tight mb-2 hover:underline cursor-pointer">
          {title}
        </h3>
        
        <p className="text-xs text-gray-600 mb-1">Nghệ nhân: <span className="font-semibold text-gray-800">{artisanName}</span></p>
        <p className="text-xs text-gray-600 mb-3">Địa điểm: <span className="font-semibold text-gray-800">{location}</span></p>

        <div className="mt-auto pt-4 border-t border-[#d8cbb5]/50">
          <div className="flex items-center space-x-2 mb-3">
            <Rating rating={rating} size={14} />
          </div>
          
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[#5c0d12] font-bold text-lg">{formatVND(price)}</span>
              {originalPrice && (
                <span className="text-xs text-gray-400 line-through ml-2">{formatVND(originalPrice)}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="primary" className="py-2 text-xs" onClick={onBookClick}>
              Đặt vé
            </Button>
            <Button variant="outline" className="py-2 text-xs" onClick={onDetailClick}>
              Chi tiết
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

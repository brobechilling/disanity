import React, { useState } from 'react';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { formatVND } from '../../utils/format';

export const BookingWidget: React.FC = () => {
  const [qty, setQty] = useState(1);
  const price = 200000;

  return (
    <div className="bg-[#efece6] border border-[#d8cbb5] rounded-xl shadow-lg p-6 sticky top-24 select-none">
      <div className="flex items-center justify-between mb-4">
        <Rating rating={4.8} size={14} />
        <span className="text-xs text-gray-500">(120 đánh giá)</span>
      </div>

      <h3 className="text-xl font-bold font-serif text-[#5c0d12] mb-1">
        Sơn mài truyền thống Hạ Thái
      </h3>
      <p className="text-xs text-gray-600 mb-4">Hướng dẫn bởi nghệ nhân Trần Song Lam</p>
      
      <div className="text-2xl font-bold text-[#5c0d12] mb-6">
        {formatVND(price * qty)}
        <span className="text-xs text-gray-500 font-normal"> / {qty} người</span>
      </div>

      <div className="space-y-4 mb-6">
        {/* Date Selector */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
            Chọn Ngày Học
          </label>
          <select className="w-full bg-[#fcfaf7] border border-[#d8cbb5] rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#cf8e3c]">
            <option>Thứ bảy, 09 Tháng 9</option>
            <option>Chủ nhật, 10 Tháng 9</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-700">Số lượng học viên</span>
          <div className="flex items-center space-x-3 border border-[#d8cbb5] rounded bg-white overflow-hidden">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 font-bold"
            >
              -
            </button>
            <span className="font-semibold text-sm w-4 text-center">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 font-bold"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button variant="primary" className="flex-grow py-3 uppercase tracking-wider font-bold">
          🎟️ Đặt Vé Ngay
        </Button>
        <Button variant="outline" className="p-3">
          ❤️
        </Button>
      </div>
    </div>
  );
};

import React from 'react';
import { Button } from '../ui/Button';

export const UpcomingEventBanner: React.FC = () => {
  return (
    <div className="bg-[#efece6] border border-[#d8cbb5] rounded-xl overflow-hidden shadow-md flex flex-col lg:flex-row gap-6 p-6">
      {/* Book overlays Left */}
      <div className="lg:w-2/5 flex items-center justify-center py-4 relative h-64 lg:h-auto">
        <div className="absolute w-36 h-48 bg-amber-800 rounded shadow-lg transform -rotate-12 translate-x-[-20px] z-10 flex items-center justify-center text-white font-bold text-center p-4">
          ĐẤT VÀ NGƯỜI
        </div>
        <div className="absolute w-36 h-48 bg-[#5c0d12] rounded shadow-xl z-20 flex flex-col justify-between text-white font-bold p-4 border border-amber-500/20">
          <span className="text-[9px] uppercase tracking-wider text-amber-400">Sự kiện đặc sắc</span>
          <span className="text-lg font-serif">SƠN NAM</span>
          <span className="text-[8px] font-normal">Trưng bày tranh sơn mài</span>
        </div>
      </div>

      {/* Details Right */}
      <div className="lg:w-3/5 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold text-[#cf8e3c] uppercase tracking-widest block mb-2">SỰ KIỆN SẮP DIỄN RA</span>
          <h3 className="text-2xl font-bold font-serif text-[#5c0d12] mb-3">SẮC DIỆN SƠN NAM</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Triển lãm chuyên đề mang nghệ thuật sơn mài truyền thống bước ra khỏi ranh giới thông thường để hòa mình vào cuộc sống nghệ thuật đương đại, với hơn 30 tác phẩm tiêu biểu độc bản.
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-6 bg-white/40 p-3 rounded border border-gray-300/30">
            <div>📍 <strong>Địa điểm:</strong> Nhà triển lãm 45 Tràng Tiền, Hà Nội</div>
            <div>📅 <strong>Thời gian:</strong> 15.06.2026 | 09:00 - 18:00</div>
          </div>
        </div>

        <div>
          <Button variant="primary" className="py-2.5 px-8">ĐẶT VÉ TRẢI NGHIỆM</Button>
        </div>
      </div>
    </div>
  );
};

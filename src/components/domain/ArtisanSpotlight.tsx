import React from 'react';

export const ArtisanSpotlight: React.FC = () => {
  return (
    <div className="bg-[#2c5e43]/10 border border-[#2c5e43]/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2c5e43]">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
          alt="Nghệ nhân"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold font-serif text-[#2c5e43] mb-1">
          Nghệ nhân Trần Song Lam
        </h4>
        <p className="text-xs text-gray-500 mb-3">Bàn tay vàng làng nghề sơn mài Hạ Thái</p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Với hơn 15 năm gắn bó cùng nghệ thuật sơn mài, nghệ nhân Trần Song Lam luôn khát khao truyền tải những nét tinh hoa văn hóa truyền thống thông qua những đường nét sắc sảo đương đại.
        </p>
        
        <div className="grid grid-cols-3 gap-4 border-t border-gray-300 pt-4">
          <div>
            <div className="text-lg font-bold text-[#2c5e43]">15 năm</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Kinh nghiệm</div>
          </div>
          <div>
            <div className="text-lg font-bold text-[#2c5e43]">15+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Triển lãm</div>
          </div>
          <div>
            <div className="text-lg font-bold text-[#2c5e43]">50+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Học viên</div>
          </div>
        </div>
      </div>
    </div>
  );
};

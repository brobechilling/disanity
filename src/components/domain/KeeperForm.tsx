import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const KeeperForm: React.FC = () => {
  return (
    <div className="bg-[#2c5e43]/90 border border-[#2c5e43] rounded-2xl shadow-lg p-6 sm:p-10 text-white relative overflow-hidden select-none">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 mb-3 uppercase tracking-wide">
          Trở thành người giữ nghề
        </h3>
        <p className="text-xs sm:text-sm text-white/80">
          Hãy cùng chúng tôi lưu giữ, bảo tồn và lan tỏa những giá trị thủ công độc bản quý báu của văn hóa Việt Nam.
        </p>
      </div>

      <form className="relative z-10 max-w-xl mx-auto space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input placeholder="Họ và tên..." className="bg-white/10 text-white placeholder-white/40 border-white/20 focus:ring-amber-400" />
          <Input placeholder="Địa chỉ email..." className="bg-white/10 text-white placeholder-white/40 border-white/20 focus:ring-amber-400" />
        </div>
        <textarea
          rows={4}
          placeholder="Thông điệp hoặc mong muốn hợp tác của bạn..."
          className="w-full bg-white/10 text-white placeholder-white/40 border border-white/20 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
        />
        <div className="text-center">
          <Button variant="secondary" className="px-10 py-3 uppercase tracking-wider font-bold">
            GỬI YÊU CẦU HỢP TÁC
          </Button>
        </div>
      </form>
    </div>
  );
};

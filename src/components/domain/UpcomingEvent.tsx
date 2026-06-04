import React, { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function UpcomingEvent({ className }: { className?: string }) {
  const [isHoveredStack, setIsHoveredStack] = useState(false);

  const handleBookTickets = () => {
    alert("Cảm ơn bạn đã quan tâm!\nCổng đăng ký vé Sự kiện 'SẮC DIỆN SƠN NAM' sẽ chính thức mở vào ngày 01/06/2026. Hãy đăng ký email ở chân trang để nhận thông báo sớm nhất!");
  };

  return (
    <div className={`relative mx-auto h-[604px] w-[1211px] overflow-visible ${className || ""}`}>
      <ScrollReveal className="w-full h-full relative" animation="scale-up" duration={1000}>
      
      {/* 1. Left Graphic Block: 3 Stacked Images with fanning-out hover effects */}
      <div 
        onMouseEnter={() => setIsHoveredStack(true)}
        onMouseLeave={() => setIsHoveredStack(false)}
        className="w-[580px] h-[604px] absolute left-0 top-0 overflow-visible cursor-pointer"
      >
        {/* Back Image (Placeholder 0) */}
        <img
          src="/ImagePlaceholder.png"
          className="shadow-[-7px_4px_9px_rgba(0,0,0,0.25)] w-[265px] h-[399px] absolute rounded-2xl transition-all duration-500"
          style={{
            left: isHoveredStack ? "-30px" : "0px",
            top: "115px",
            transform: isHoveredStack ? "rotate(-8deg) scale(1.02)" : "rotate(0) scale(1)",
            zIndex: 10,
          }}
          alt="Sắc Diện Sơn Nam Back"
        />
        
        {/* Middle Image (Placeholder 1) */}
        <img
          src="/ImagePlaceholder(1).png"
          className="shadow-[-11px_4px_7px_rgba(0,0,0,0.25)] w-[336px] h-[477px] absolute rounded-2xl transition-all duration-500"
          style={{
            left: isHoveredStack ? "30px" : "61px",
            top: "76px",
            transform: isHoveredStack ? "rotate(-3deg) scale(1.02)" : "rotate(0) scale(1)",
            zIndex: 20,
          }}
          alt="Sắc Diện Sơn Nam Mid"
        />
        
        {/* Front Image (Placeholder 2) */}
        <img
          src="/ImagePlaceholder(2).png"
          className="shadow-[-15px_10px_25px_rgba(0,0,0,0.3)] w-[427px] h-[604px] absolute rounded-2xl transition-all duration-500"
          style={{
            left: isHoveredStack ? "165px" : "153px",
            top: "0px",
            transform: isHoveredStack ? "scale(1.03)" : "scale(1)",
            zIndex: 30,
          }}
          alt="Sắc Diện Sơn Nam Front"
        />
      </div>

      {/* 2. Right Text Content Block */}
      <div className="w-[608px] h-[548px] absolute left-[603px] top-4">
        <div className="w-[608px] h-[548px] absolute left-0 top-0">
          
          {/* Main Section Header */}
          <div className="w-[586px] h-20 absolute left-0 top-0">
            <p className="text-[#1B1717] font-jaro text-[56px] w-[586px] h-20 absolute left-0 top-0 tracking-[0.07em] font-bold">
              SỰ KIỆN SẮP DIỄN RA
            </p>
          </div>
          
          {/* Event Title */}
          <p className="text-[#A6341B] font-jaro text-[32px] font-black w-[400px] h-[39px] absolute left-0 top-[93px] tracking-[0.05em] uppercase">
            SẮC DIỆN SƠN NAM
          </p>
          
          {/* Formatted description with line-height and colors */}
          <div className="text-[#555] font-beVietnamPro text-base leading-7 w-[608px] h-[286px] absolute left-0 top-[143px] flex flex-col gap-3 font-medium">
            <p>
              Trải nghiệm khám phá mỹ thuật đình miếu và nghệ thuật mặt nạ hát
              bội miền Nam qua một buổi thực hành sáng tạo cùng nghệ nhân.
            </p>
            <div className="bg-[rgba(166,52,27,0.05)] border-l-4 border-[#A6341B] p-3 my-1 rounded-r-md text-sm text-[#333]">
              <p className="font-bold mb-1">Nội dung chương trình:</p>
              <ul className="list-disc pl-4 flex flex-col gap-0.5">
                <li>Giải mã màu sắc &amp; biểu tượng trong mặt nạ truyền thống</li>
                <li>Thực hành vẽ và tạo hình mặt nạ dân gian tự tay sáng tạo</li>
                <li>Nghe kể chuyện về không gian lễ hội Đình làng Nam Bộ xưa</li>
              </ul>
            </div>
            <p className="font-bold text-[#A6341B] flex gap-4 mt-1">
              <span>📅 Thời gian: 28.06.2026</span>
              <span>📍 Địa điểm: TP. Hồ Chí Minh</span>
            </p>
            <p className="italic text-[#777] text-sm mt-1">
              Một buổi chạm vào tinh thần lễ hội phương Nam — qua sắc đỏ, đường nét và ký ức văn hoá.
            </p>
          </div>
          
          {/* Ticket Booking Button */}
          <button 
            onClick={handleBookTickets}
            className="cursor-pointer flex items-center justify-between rounded-full bg-[#6C0B0B] hover:bg-[#A6341B] hover:scale-105 active:scale-95 shadow-md w-[200px] h-[50px] absolute left-0 top-[502px] px-6 transition-all duration-200 group"
          >
            <p className="text-[#FFF] font-poppins text-sm font-semibold tracking-[0.1em] text-center w-full">
              ĐẶT VÉ
            </p>
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-[15px] transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
            >
              <path
                d="M13.58 12L10 9.84375L6.42 12L7.5 8.1375L4.21 5.625L8.46 5.38125L10 1.6875L11.54 5.38125L15.79 5.625L12.5 8.1375M18 7.5C18 7.00272 18.2107 6.52581 18.5858 6.17418C18.9609 5.82254 19.4696 5.625 20 5.625V1.875C20 1.37772 19.7893 0.900805 19.4142 0.549175C19.0391 0.197544 18.5304 0 18 0H2C1.46957 0 0.960859 0.197544 0.585786 0.549175C0.210714 0.900805 0 1.37772 0 1.875V5.625C0.530433 5.625 1.03914 5.82254 1.41421 6.17418C1.78929 6.52581 2 7.00272 2 7.5C2 7.99728 1.78929 8.47419 1.41421 8.82582C1.03914 9.17746 0.530433 9.375 0 9.375V13.125C0 13.6223 0.210714 14.0992 0.585786 14.4508C0.960859 14.8025 1.46957 15 2 15H18C18.5304 15 19.0391 14.8025 19.4142 14.4508C19.7893 14.0992 20 13.6223 20 13.125V9.375C19.4696 9.375 18.9609 9.17746 18.5858 8.82582C18.2107 8.47419 18 7.99728 18 7.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      
      </ScrollReveal>
    </div>
  );
}

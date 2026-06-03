import React, { useState } from "react";
import Section from "@/components/common/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomeUpcomingEvent() {
  const [isHoveredStack, setIsHoveredStack] = useState(false);

  const handleBookTickets = () => {
    alert("Cảm ơn bạn đã quan tâm!\nCổng đăng ký vé Sự kiện 'SẮC DIỆN SƠN NAM' sẽ chính thức mở vào ngày 01/06/2026. Hãy đăng ký email ở chân trang để nhận thông báo sớm nhất!");
  };

  return (
    <Section className="py-14 sm:py-18 lg:py-24">
      <ScrollReveal
        className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
        animation="scale-up"
        duration={1000}
      >
        <div
          onMouseEnter={() => setIsHoveredStack(true)}
          onMouseLeave={() => setIsHoveredStack(false)}
          className="relative min-h-[520px] cursor-pointer overflow-visible sm:min-h-[604px]"
        >
          <img
            src="/ImagePlaceholder.png"
            className="absolute left-0 top-[115px] z-10 h-[330px] w-[220px] rounded-2xl object-cover shadow-[-7px_4px_9px_rgba(0,0,0,0.25)] transition-all duration-500 sm:h-[399px] sm:w-[265px]"
            style={{
              transform: isHoveredStack ? "translateX(-30px) rotate(-8deg) scale(1.02)" : "rotate(0) scale(1)",
            }}
            alt="Sắc Diện Sơn Nam Back"
          />
          <img
            src="/ImagePlaceholder(1).png"
            className="absolute left-[52px] top-[76px] z-20 h-[390px] w-[274px] rounded-2xl object-cover shadow-[-11px_4px_7px_rgba(0,0,0,0.25)] transition-all duration-500 sm:left-[61px] sm:h-[477px] sm:w-[336px]"
            style={{
              transform: isHoveredStack ? "translateX(-30px) rotate(-3deg) scale(1.02)" : "rotate(0) scale(1)",
            }}
            alt="Sắc Diện Sơn Nam Mid"
          />
          <img
            src="/ImagePlaceholder(2).png"
            className="absolute left-[130px] top-0 z-30 h-[500px] w-[320px] rounded-2xl object-cover shadow-[-15px_10px_25px_rgba(0,0,0,0.3)] transition-all duration-500 sm:left-[153px] sm:h-[604px] sm:w-[427px]"
            style={{
              transform: isHoveredStack ? "translateX(12px) scale(1.03)" : "scale(1)",
            }}
            alt="Sắc Diện Sơn Nam Front"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-jaro text-4xl font-bold uppercase tracking-[0.07em] text-[#1B1717] sm:text-[56px]">
              SỰ KIỆN SẮP DIỄN RA
            </h2>
            <p className="font-jaro text-3xl font-black uppercase tracking-[0.05em] text-[#A6341B]">
              SẮC DIỆN SƠN NAM
            </p>
          </div>

          <div className="space-y-4 font-beVietnamPro text-base font-medium leading-7 text-[#555]">
            <p>
              Trải nghiệm khám phá mỹ thuật đình miếu và nghệ thuật mặt nạ hát
              bội miền Nam qua một buổi thực hành sáng tạo cùng nghệ nhân.
            </p>
            <div className="rounded-r-md border-l-4 border-[#A6341B] bg-[rgba(166,52,27,0.05)] p-4 text-sm text-[#333]">
              <p className="mb-1 font-bold">Nội dung chương trình:</p>
              <ul className="flex list-disc flex-col gap-1 pl-4">
                <li>Giải mã màu sắc &amp; biểu tượng trong mặt nạ truyền thống</li>
                <li>Thực hành vẽ và tạo hình mặt nạ dân gian tự tay sáng tạo</li>
                <li>Nghe kể chuyện về không gian lễ hội Đình làng Nam Bộ xưa</li>
              </ul>
            </div>
            <p className="flex flex-col gap-2 font-bold text-[#A6341B] sm:flex-row sm:gap-4">
              <span>📅 Thời gian: 28.06.2026</span>
              <span>📍 Địa điểm: TP. Hồ Chí Minh</span>
            </p>
            <p className="text-sm italic text-[#777]">
              Một buổi chạm vào tinh thần lễ hội phương Nam — qua sắc đỏ, đường nét và ký ức văn hoá.
            </p>
          </div>

          <button
            onClick={handleBookTickets}
            className="inline-flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-[#6C0B0B] px-8 font-poppins text-sm font-semibold tracking-[0.1em] text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#A6341B] active:scale-95"
          >
            ĐẶT VÉ
          </button>
        </div>
      </ScrollReveal>
    </Section>
  );
}

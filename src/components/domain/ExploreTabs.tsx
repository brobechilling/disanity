import React, { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ExploreTabs() {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

  const row1 = [
    { label: "DỆT & MAY", img: "/Rectangle217.png", pos: "left-px" },
    { label: "VẼ & SÁNG TẠO", img: "/Rectangle217(1).png", pos: "left-[261px]" },
    { label: "ÂM NHẠC", img: "/Rectangle217(2).png", pos: "left-[520px]" },
    { label: "Gốm truyền thống", img: "/Rectangle217(3).png", pos: "left-[780px]" },
    { label: "ẨM THỰC", img: "/Rectangle217(4).png", pos: "left-[1040px]" },
  ];

  const row2 = [
    { label: "Đặng Văn Hạ", img: "/Rectangle217(5).png", pos: "left-px" },
    { label: "Nguyễn Gia Thiều", img: "/Rectangle217(7).png", pos: "left-[261px]" },
    { label: "Hoàng Thị Cúc", img: "/Rectangle217(9).png", pos: "left-[520px]" },
    { label: "Lầu Y Mái", img: "/Rectangle217(11).png", pos: "left-[780px]" },
    { label: "Phạm Nhâm", img: "/Rectangle217(13).png", pos: "left-[1040px]" },
  ];

  const row3 = [
    { label: "Sports wear", img: "/Rectangle217(6).png", pos: "left-0" },
    { label: "Lounge wear", img: "/Rectangle217(8).png", pos: "left-[260px]" },
    { label: "Kids wear", img: "/Rectangle217(10).png", pos: "left-[519px]" },
    { label: "Footwear", img: "/Rectangle217(12).png", pos: "left-[779px]" },
    { label: "Formal wear", img: "/Rectangle217(14).png", pos: "left-[1039px]" },
  ];

  const handleCardClick = (category: string, label: string) => {
    alert(`Khám phá chi tiết ${category}: "${label}"\nTính năng này đang được phát triển để kết nối bạn trực tiếp với nghệ nhân và làng nghề.`);
  };

  const renderCard = (card: typeof row1[0], indexKey: string, categoryName: string) => {
    const isHovered = hoveredIdx === indexKey;
    return (
      <div
        key={indexKey}
        onClick={() => handleCardClick(categoryName, card.label)}
        onMouseEnter={() => setHoveredIdx(indexKey)}
        onMouseLeave={() => setHoveredIdx(null)}
        className={`w-[217px] h-[271px] absolute ${card.pos} top-0 overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.15)] z-10`}
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered 
            ? "0 18px 25px rgba(244, 202, 128, 0.25)" 
            : "0 4px 10px rgba(0,0,0,0.15)"
        }}
      >
        <img
          src={card.img}
          className={`w-[217px] h-[271px] max-w-none object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          alt={card.label}
        />
        
        {/* Dark overlay for absolute legibility of white text on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
        
        {/* Text Label Overlay */}
        <p className="text-[#FEF3B1] font-beVietnamPro text-[16px] font-bold leading-5 w-[185px] absolute left-4 top-[228px] uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          {card.label}
        </p>
      </div>
    );
  };

  return (
    <div className="w-[1257px] h-[1323px] absolute left-[86px] top-[3202px] overflow-visible">
      <ScrollReveal className="w-full h-full relative" animation="slide-up">
      
      {/* SECTION 1: KHÁM PHÁ CATEGORIES */}
      <div className="w-[1257px] h-[361px] absolute left-0 top-0 overflow-visible">
        <p className="text-[#FEF3B1] font-jaro text-[39px] leading-[50.4px] w-[167px] h-[51px] absolute left-px top-0 uppercase tracking-wider drop-shadow-sm font-bold">
          KHÁM PHÁ
        </p>
        <div className="w-[1257px] h-[271px] absolute left-0 top-[90px] overflow-visible">
          {row1.map((card, idx) => renderCard(card, `row1-${idx}`, "Danh mục"))}
        </div>
      </div>

      {/* SECTION 2: NGHỆ NHÂN TIÊU BIỂU */}
      <div className="w-[1257px] h-[361px] absolute left-0 top-[481px] overflow-visible">
        <p className="text-[#FEF3B1] font-jaro text-[39px] leading-[50.4px] w-[333px] h-[51px] absolute left-2 top-0 uppercase tracking-wider drop-shadow-sm font-bold">
          NGHỆ NHÂN TIÊU BIỂU
        </p>
        <div className="w-[1257px] h-[271px] absolute left-0 top-[90px] overflow-visible">
          {row2.map((card, idx) => renderCard(card, `row2-${idx}`, "Nghệ nhân"))}
        </div>
      </div>

      {/* SECTION 3: LÀNG NGHỀ TIÊU BIỂU */}
      <div className="w-[1257px] h-[361px] absolute left-0 top-[962px] overflow-visible">
        <p className="text-[#FEF3B1] font-jaro text-[39px] leading-[50.4px] w-[325px] h-[51px] absolute left-2 top-0 uppercase tracking-wider drop-shadow-sm font-bold">
          LÀNG NGHỀ TIÊU BIỂU
        </p>
        <div className="w-[1257px] h-[271px] absolute left-0 top-[90px] overflow-visible">
          {row3.map((card, idx) => renderCard(card, `row3-${idx}`, "Làng nghề"))}
        </div>
      </div>

      </ScrollReveal>
    </div>
  );
}

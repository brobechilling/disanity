import React, { useState } from "react";
import Section from "@/components/common/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

const groups = [
  {
    title: "KHÁM PHÁ",
    categoryName: "Danh mục",
    cards: [
      { label: "DỆT & MAY", img: "/Rectangle217.png" },
      { label: "VẼ & SÁNG TẠO", img: "/Rectangle217(1).png" },
      { label: "ÂM NHẠC", img: "/Rectangle217(2).png" },
      { label: "Gốm truyền thống", img: "/Rectangle217(3).png" },
      { label: "ẨM THỰC", img: "/Rectangle217(4).png" },
    ],
  },
  {
    title: "NGHỆ NHÂN TIÊU BIỂU",
    categoryName: "Nghệ nhân",
    cards: [
      { label: "Đặng Văn Hạ", img: "/Rectangle217(5).png" },
      { label: "Nguyễn Gia Thiều", img: "/Rectangle217(7).png" },
      { label: "Hoàng Thị Cúc", img: "/Rectangle217(9).png" },
      { label: "Lầu Y Mái", img: "/Rectangle217(11).png" },
      { label: "Phạm Nhâm", img: "/Rectangle217(13).png" },
    ],
  },
  {
    title: "LÀNG NGHỀ TIÊU BIỂU",
    categoryName: "Làng nghề",
    cards: [
      { label: "I", img: "/Rectangle217(6).png" },
      { label: "Dont", img: "/Rectangle217(8).png" },
      { label: "Know", img: "/Rectangle217(10).png" },
      { label: "A", img: "/Rectangle217(12).png" },
      { label: "Thing", img: "/Rectangle217(14).png" },
    ],
  },
];

export default function ExploreTabs() {
  const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

  return (
    <Section variant="dark" width="wide" className="py-16 sm:py-20 lg:py-24">
      <ScrollReveal className="space-y-16" animation="slide-up">
        {groups.map((group, groupIndex) => (
          <div key={group.title} className="space-y-8">
            <h2 className="font-jaro text-3xl font-bold uppercase leading-tight tracking-wider text-[#FEF3B1] sm:text-[39px]">
              {group.title}
            </h2>

            <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
              {group.cards.map((card, cardIndex) => {
                const key = `${groupIndex}-${cardIndex}`;
                const isHovered = hoveredIdx === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onMouseEnter={() => setHoveredIdx(key)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="group relative h-[271px] w-[217px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] text-left shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 lg:w-full"
                    style={{
                      transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                      boxShadow: isHovered
                        ? "0 18px 25px rgba(244, 202, 128, 0.25)"
                        : "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={card.img}
                      className={`h-full w-full object-cover transition-transform duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                      alt={card.label}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <p className="absolute inset-x-4 bottom-5 font-beVietnamPro text-base font-bold uppercase leading-5 tracking-wide text-[#FEF3B1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                      {card.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </ScrollReveal>
    </Section>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomeTrending() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const images = [
    {
      src: "/Rectangle18.png",
      alt: "Trending 1",
      position: "left-0 top-[374px]",
      shadow: "shadow-[0_22px_24.7px_rgba(0,0,0,0.25)]",
    },
    {
      src: "/Rectangle19.png",
      alt: "Trending 2",
      position: "left-[423px] top-[289px]",
      shadow: "shadow-[0_22px_26.4px_rgba(0,0,0,0.25)]",
    },
    {
      src: "/Rectangle20.png",
      alt: "Trending 3",
      position: "left-[844px] top-[374px]",
      shadow: "shadow-[0_23px_19.5px_rgba(0,0,0,0.25)]",
    },
  ];

  return (
    <div className="w-[1239px] h-[966px] absolute left-[100px] top-[1740px] overflow-visible">
      <ScrollReveal className="w-full h-full relative" animation="slide-up">
      
      {/* 3 Large Showcase Cards with 3D Float on Hover */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`w-[395px] h-[592px] absolute ${img.position} rounded-[28px] overflow-hidden cursor-pointer transition-all duration-500 z-10`}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{
            transform: hoveredIdx === idx ? "translateY(-15px) scale(1.025)" : "translateY(0) scale(1)",
            boxShadow: hoveredIdx === idx 
              ? "0 35px 50px -15px rgba(166, 52, 27, 0.35)" 
              : "0 22px 25px rgba(0,0,0,0.25)"
          }}
        >
          <img
            src={img.src}
            className={`w-[395px] h-[592px] max-w-none object-cover transition-transform duration-700 ${
              hoveredIdx === idx ? "scale-108" : "scale-100"
            }`}
            alt={img.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,2,2,0.4)] to-transparent pointer-events-none"></div>
        </div>
      ))}

      {/* Header section overlay */}
      <div className="w-[761px] h-[215px] absolute left-[239px] top-0">
        
        {/* Large Jaro Heading */}
        <p className="text-[#000] font-jaro text-[56px] leading-[62px] w-[755px] h-[62px] absolute left-[3px] top-0 text-center uppercase tracking-wide">
          TRẢI NGHIỆM THỊNH HÀNH
        </p>

        {/* Catchy description */}
        <p className="text-[#757575] font-beVietnamPro text-lg leading-7 w-[761px] h-[84px] absolute left-0 top-[81px] text-center tracking-wide font-medium">
          Không chỉ là những buổi trưng bày hay workshop, mỗi sự kiện là một
          lần làng nghề được kể lại bằng sắc màu và câu chuyện đương đại.
        </p>

        {/* Link Button "Xem thêm" leading to route /workshops */}
        <Link 
          to="/workshops"
          className="flex justify-center items-center w-[194px] h-[50px] absolute left-[283px] top-[165px] group"
        >
          <div className="shrink-0 w-[194px] h-[50px] relative transition-all duration-300 hover:scale-105 active:scale-95">
            {/* Outline box */}
            <div className="border-[2px] border-[#A6341B] bg-transparent w-[194px] h-[50px] absolute left-0 top-0 rounded-full transition-all group-hover:bg-[#A6341B]"></div>
            {/* Text labels */}
            <p className="text-[#A6341B] font-beVietnamPro text-base font-bold leading-[22px] w-[120px] h-[22px] absolute left-[37px] top-3.5 text-center group-hover:text-white transition-colors">
              Xem thêm
            </p>
          </div>
        </Link>
      </div>

      </ScrollReveal>
    </div>
  );
}

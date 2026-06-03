"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrendingWorkshops() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const workshops = [
    {
      title: "Gốm Bát Tràng",
      description: "Tự tay nhào nặn và vẽ men gốm truyền thống",
      price: "1.100.000đ",
      rating: "4.9",
      image: "/Image.png",
      tag: "Đánh giá cao",
      fontClass: "font-jaro",
      positionClass: "left-0",
    },
    {
      title: "Lụa Vạn Phúc",
      description: "Kỹ thuật dệt khung cửi và nhuộm lụa tơ tằm",
      price: "1.350.000đ",
      rating: "4.8",
      image: "/Image(1).png",
      tag: null,
      fontClass: "font-jaro",
      positionClass: "left-[372px]",
    },
    {
      title: "Đèn Lồng Hội An",
      description: "Làm khung tre và dán lụa ngũ sắc",
      price: "750.000đ",
      rating: "5.0",
      image: "/Image(2).png",
      tag: null,
      fontClass: "font-playfairDisplay",
      positionClass: "left-[744px]",
    },
    {
      title: "Sơn Mài Bình Dương",
      description: "Nghệ thuật cẩn vỏ trứng và mài sơn độc bản",
      price: "1.450.000đ",
      rating: "4.7",
      image: "/Image(3).png",
      tag: null,
      fontClass: "font-playfairDisplay",
      positionClass: "left-[1116px]",
    },
  ];

  const handleCardClick = (title: string) => {
    alert(`Bạn đã chọn xem chi tiết workshop: ${title}.\nChúc bạn có những trải nghiệm văn hóa tuyệt vời cùng DiSanity!`);
  };

  return (
    <div className="absolute left-[149px] top-[3217px] w-[1254px] h-[720px] overflow-visible">
      {/* Title Section */}
      <div className="flex justify-between items-end w-[1240px] h-[92px] absolute left-4 top-0">
        <div className="flex flex-col items-start gap-3 w-fit">
          <div className="flex items-center gap-4 w-full">
            <p className="flex flex-col justify-center text-[#A6341B] font-jaro text-4xl leading-10 w-[386px] h-10">
              Trải Nghiệm Thịnh Hành
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="flex flex-col justify-center text-[rgba(74,93,78,0.70)] font-beVietnam text-lg font-medium leading-7 w-[544px] h-7">
              Những buổi workshop văn hóa được yêu thích nhất tháng này.
            </p>
          </div>
        </div>
        
        {/* "Xem tất cả" button */}
        <Link 
          to="/workshops/list"
          className="flex items-center gap-2 w-fit cursor-pointer group"
        >
          <p className="flex flex-col justify-center text-[#A6341B] font-beVietnamPro text-base font-bold leading-6 w-[88px] h-6 text-center group-hover:text-[#D4A017] transition-colors">
            Xem tất cả
          </p>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#A6341B" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:stroke-[#D4A017]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Grid of Workshop Cards */}
      <div className="inline-flex pb-12 justify-end items-start gap-8 w-[1254px] h-[585px] absolute left-0 top-[136px] overflow-visible">
        {workshops.map((ws, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(ws.title)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`rounded-[32px] bg-[#FFF] w-[340px] h-[537px] absolute ${ws.positionClass} top-0 cursor-pointer overflow-visible transition-all duration-300`}
            style={{
              transform: hoveredCard === idx ? "translateY(-12px)" : "translateY(0)",
              boxShadow: hoveredCard === idx 
                ? "0 20px 40px rgba(166, 52, 27, 0.2)" 
                : "0 10px 30px -10px rgba(166, 52, 27, 0.15), 0 4px 6px -2px rgba(166, 52, 27, 0.05)"
            }}
          >
            {/* Inner Border/Shadow Container */}
            <div className="rounded-[32px] bg-transparent w-[340px] h-[537px] absolute left-0 top-0 border border-gray-100/50"></div>
            
            {/* Image Container with high-end overflow and zoom */}
            <div className="rounded-[32px] w-[308px] h-72 absolute left-4 top-4 overflow-hidden relative group">
              <img
                src={ws.image}
                className={`w-[308px] h-72 absolute left-0 top-0 max-w-none transition-transform duration-500 object-cover ${
                  hoveredCard === idx ? "scale-108" : "scale-100"
                }`}
                alt={ws.title}
              />
              
              {/* Highlight Tag */}
              {ws.tag && (
                <div className="inline-flex py-1.5 px-4 flex-col items-start rounded-full bg-[#D4A017] absolute left-4 top-4 z-10 shadow-md">
                  <p className="flex flex-col justify-center text-[#4A5D4E] font-beVietnamPro text-xs font-bold leading-4 tracking-[0.1em] text-center">
                    {ws.tag}
                  </p>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="flex flex-col items-start w-[308px] absolute left-4 top-[324px]">
              <p className={`flex flex-col justify-center text-[#A6341B] ${ws.fontClass} text-2xl leading-8 font-bold`}>
                {ws.title}
              </p>
            </div>
            
            <div className="flex flex-col items-start w-[308px] absolute left-4 top-[364px]">
              <p className="flex flex-col justify-center text-[rgba(74,93,78,0.60)] font-beVietnamPro text-sm leading-5 w-[306px] h-5 font-medium">
                {ws.description}
              </p>
            </div>

            {/* Price & Rating Row */}
            <div className="flex pt-4 justify-between items-center border-t border-t-[rgba(166,52,27,0.05)] w-[308px] absolute left-4 top-[410px]">
              <div className="shrink-0 w-[148px] h-7 relative">
                <p className="flex flex-col justify-center text-[#4A5D4E] font-beVietnamPro text-lg font-bold leading-7 w-[107px] h-7 absolute left-0 -top-px">
                  {ws.price}
                </p>
                <p className="flex flex-col justify-center text-[rgba(74,93,78,0.50)] font-beVietnamPro text-xs leading-4 w-[51px] h-4 absolute left-[107px] top-2 font-medium">
                  / người
                </p>
              </div>
              
              <div className="flex py-1 px-3 items-center gap-1.5 rounded-full bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.2)] w-fit">
                <div className="flex items-center gap-1">
                  {/* Small gold star icon */}
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="#D4A017" 
                    className="shrink-0"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <p className="flex flex-col justify-center text-[#D4A017] font-beVietnamPro text-sm font-black leading-5">
                    {ws.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Click-to-book Micro-hint */}
            <div className={`absolute bottom-4 left-4 right-4 flex justify-center items-center h-8 transition-opacity duration-300 ${
              hoveredCard === idx ? "opacity-100" : "opacity-0"
            }`}>
              <span className="text-[#A6341B] font-beVietnamPro text-xs font-bold uppercase tracking-wider">
                Nhấp để xem & đặt vé
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

export default function CategoryGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = [
    {
      title: "Gốm truyền thống",
      image: "/Container.png",
      align: "text-right",
      position: "left-0",
      titlePos: "left-[50px] top-[483px]",
      shadow: "",
    },
    {
      title: "Mỹ thuật truyền thống - đương đại",
      image: "/Container(1).png",
      align: "text-center",
      position: "left-[497px]",
      titlePos: "left-[530px] top-[419px]",
      shadow: "shadow-[0_15px_35px_rgba(0,0,0,0.2)]",
    },
    {
      title: "Dệt - Lụa - Thổ Cẩm",
      image: "/Container(2).png",
      align: "text-center",
      position: "left-[993px]",
      titlePos: "left-[1010px] top-[466px]",
      shadow: "shadow-[-14px_0_12px_rgba(0,0,0,0.15)]",
    },
  ];

  return (
    <div className="w-[1529px] h-[740px] absolute left-9 top-[1193px]">
      {/* Category Cards */}
      <div className="w-[1461px] h-[592px] absolute left-[68px] top-0">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`w-[468px] h-[592px] absolute ${cat.position} top-0 overflow-hidden rounded-[25px] cursor-pointer transition-all duration-500`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              transform: hoveredIdx === idx ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
            }}
          >
            <img
              src={cat.image}
              className={`w-[468px] h-[592px] absolute left-0 top-0 max-w-none transition-transform duration-700 ${
                hoveredIdx === idx ? "scale-110 rotate-1" : "scale-100"
              }`}
              alt={cat.title}
            />
            {/* Elegant overlay to make text more readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(108,11,11,0.7)] via-[rgba(0,0,0,0.2)] to-transparent opacity-80 transition-opacity duration-350"></div>
          </div>
        ))}
      </div>

      {/* Main Title "Danh mục" */}
      <p className="text-[#A6341B] font-oi text-[56px] leading-[66px] w-[474px] h-[66px] absolute left-[74px] top-[646px]">
        Danh mục{" "}
      </p>

      {/* Category Labels overlaying the layout */}
      <p className="text-[#FEF3B1] font-beVietnamPro text-[40px] font-extrabold leading-[56px] w-[481px] h-[66px] absolute left-0 top-[483px] text-right pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-20">
        Gốm truyền thống
      </p>
      <p className="text-[#FEF3B1] font-beVietnamPro text-[40px] font-extrabold leading-[50px] w-[401px] h-[162px] absolute left-[597px] top-[419px] text-center pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-20">
        Mỹ thuật truyền thống - đương đại
      </p>
      <p className="text-[#FEF3B1] font-beVietnamPro text-[40px] font-extrabold leading-[50px] w-[421px] h-[162px] absolute left-[1093px] top-[466px] text-center pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-20">
        Dệt - Lụa - Thổ Cẩm
      </p>

      {/* Short Description */}
      <p className="text-[#4A5D4E] font-dMSans text-lg leading-[30px] w-[508px] h-[90px] absolute left-[597px] top-[650px] font-medium">
        Mỗi triển lãm, workshop hay dự án cộng đồng đều là cơ hội để tôi học
        hỏi, hợp tác và lan toả giá trị truyền thống theo cách mới mẻ hơn.
      </p>

      {/* Slider Controls (Left / Right buttons) with active animations */}
      <div className="w-[148px] h-16 absolute left-[1156px] top-[646px]">
        {/* Right Arrow button */}
        <div 
          onClick={() => alert("Chuyển trang danh mục kế tiếp!")}
          className="w-16 h-16 absolute left-[84px] top-0 rounded-full border border-white bg-[#A6341B] hover:bg-[#8B2C16] hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer transition-all duration-200 shadow-sm"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <path
              d="M8.75 24.5L19.25 14L8.75 3.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* Left Arrow button */}
        <div 
          onClick={() => alert("Quay lại danh mục trước!")}
          className="w-16 h-16 absolute left-0 top-0 rounded-full border border-[rgba(166,52,27,0.2)] bg-white hover:bg-gray-50 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer transition-all duration-200 shadow-sm group"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <path
              d="M19.25 3.5L8.75 14L19.25 24.5"
              stroke="#A6341B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

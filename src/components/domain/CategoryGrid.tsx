"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Gốm truyền thống",
    label: "Cơ bản",
    image: "/Container.png",
  },
  {
    title: "Mỹ thuật truyền thống - đương đại",
    label: "Nâng cao",
    image: "/Container(1).png",
  },
  {
    title: "Dệt - Lụa - Thổ Cẩm",
    label: "Sáng tác",
    image: "/Container(2).png",
  },
];

export default function CategoryGrid({ className }: { className?: string }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={`relative mx-auto h-[640px] w-[1240px] max-w-full ${className || ""}`}>
      {/* Category Cards */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[1240px] -translate-x-1/2">
        {categories.map((cat, idx) => (
          <Link
            key={cat.title}
            to="/workshops/list"
            className="absolute top-0 h-[500px] w-[397px] cursor-pointer overflow-hidden rounded-[25px] transition-all duration-500"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              left: `${idx * 421}px`,
              transform: hoveredIdx === idx ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
            }}
          >
            <img
              src={cat.image}
              className={`absolute left-0 top-0 h-full w-full max-w-none object-cover transition-transform duration-700 ${
                hoveredIdx === idx ? "scale-110 rotate-1" : "scale-100"
              }`}
              alt={cat.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(108,11,11,0.7)] via-[rgba(0,0,0,0.2)] to-transparent opacity-80 transition-opacity duration-350" />
            <p className="pointer-events-none absolute inset-x-0 bottom-8 z-20 px-8 text-center font-jaro text-[48px] leading-[42px] text-[#FEF3B1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {cat.label}
            </p>
          </Link>
        ))}
      </div>

      {/* Main Title "Danh mục" */}
      <p className="absolute left-0 top-[544px] h-[66px] w-[474px] font-oi text-[56px] leading-[66px] text-[#A6341B]">
        Danh mục{" "}
      </p>

      {/* Short Description */}
      <p className="absolute left-[500px] top-[548px] h-[90px] w-[508px] font-dMSans text-lg font-medium leading-[30px] text-[#4A5D4E]">
        Mỗi triển lãm, workshop hay dự án cộng đồng đều là cơ hội để tôi học hỏi, hợp tác và lan
        toả giá trị truyền thống theo cách mới mẻ hơn.
      </p>

      {/* Slider Controls (Left / Right buttons) with active animations */}
      <div className="absolute left-[1060px] top-[544px] h-16 w-[148px]">
        {/* Right Arrow button */}
        <div
          className="absolute left-[84px] top-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white bg-[#A6341B] shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#8B2C16] active:scale-95"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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
          className="group absolute left-0 top-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-[rgba(166,52,27,0.2)] bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-gray-50 active:scale-95"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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

"use client";

import React, { useState } from "react";

export default function FilterBar({ className }: { className?: string }) {
  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Selected filter states
  const [filters, setFilters] = useState({
    location: "Tất cả địa điểm",
    craft: "Tất cả nghề",
    price: "Mọi mức giá",
    duration: "Phút",
    date: "28/3",
  });

  // Filter options lists
  const options = {
    location: ["Tất cả địa điểm", "Hà Nội", "Hội An", "Bình Dương", "Huế", "Sài Gòn"],
    craft: ["Tất cả nghề", "Gốm Thanh Hà", "Dệt lụa tơ tằm", "Làm đèn lồng", "Sơn mài độc bản"],
    price: ["Mọi mức giá", "Dưới 500k", "500k - 1M", "Trên 1M"],
    duration: ["Phút", "30 phút", "60 phút", "120 phút", "Cả ngày"],
    date: ["28/3", "29/3", "30/3", "Hôm nay", "Ngày mai"],
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const selectOption = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setActiveDropdown(null);
  };

  const handleApplyFilter = () => {
    alert(
      `Đang áp dụng bộ lọc:\n- Địa điểm: ${filters.location}\n- Làng nghề: ${filters.craft}\n- Mức giá: ${filters.price}\n- Thời lượng: ${filters.duration}\n- Ngày: ${filters.date}`
    );
  };

  return (
    <div className={`relative z-40 mx-auto flex h-[115px] w-[1106px] items-center justify-center gap-4 rounded-2xl border-2 border-[#A6341B]  p-6 shadow-[0_8px_30px_rgb(166,52,27,0.08)] ${className || ""}`}>
      
      {/* 1. Location Filter */}
      <div className="flex flex-col items-start gap-1 w-fit relative">
        <div className="flex pl-2 flex-col items-start w-[54px]">
          <div className="flex flex-col items-center w-fit">
            <p className="flex flex-col justify-center text-[#A6341B] font-beVietnamPro text-[10px] font-black leading-[15px] w-[55px] h-[15px] text-center tracking-[0.1em] uppercase">
              Địa điểm
            </p>
          </div>
        </div>
        
        <div 
          onClick={() => toggleDropdown("location")}
          className="min-w-[160px] w-[179px] h-11 relative cursor-pointer group"
        >
          <div className="flex pt-[9px] pr-2 pb-[9px] pl-36 flex-col justify-center items-start w-[179px] h-11 absolute left-0 top-0 overflow-hidden">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`shrink-0 w-[27px] h-[27px] overflow-hidden relative transition-transform duration-300 ${
                activeDropdown === "location" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M8.1001 10.8L13.5001 16.2L18.9001 10.8"
                stroke="#6B7280"
                strokeWidth="2.025"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#A6341B]"
              />
            </svg>
          </div>
          <div className="flex pr-[13px] flex-col items-start w-[167px] absolute left-[7px] top-2 overflow-hidden">
            <p className="flex flex-col justify-center text-[#000] font-beVietnam text-lg font-bold leading-7 w-[149px] h-7 group-hover:text-[#A6341B] transition-colors">
              {filters.location}
            </p>
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "location" && (
          <div className="absolute top-[60px] left-0 bg-white border border-gray-100 rounded-xl shadow-xl py-2 w-[180px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {options.location.map((opt) => (
              <div
                key={opt}
                onClick={() => selectOption("location", opt)}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(166,52,27,0.08)] hover:text-[#A6341B] font-medium cursor-pointer"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 bg-[rgba(166,52,27,0.10)] w-px h-10"></div>

      {/* 2. Craft/Village Filter */}
      <div className="flex flex-col items-start gap-1 w-fit relative">
        <div className="flex pl-1.5 flex-col items-start w-[87px]">
          <div className="flex flex-col items-center w-fit">
            <p className="flex flex-col justify-center text-[#A6341B] font-beVietnamPro text-[10px] font-black leading-[15px] w-[75px] h-[15px] text-center tracking-[0.1em] uppercase">
              LÀNG nghề
            </p>
          </div>
        </div>
        
        <div 
          onClick={() => toggleDropdown("craft")}
          className="min-w-[160px] w-40 h-11 relative cursor-pointer group"
        >
          <div className="flex pt-[9px] pr-2 pb-[9px] pl-[125px] flex-col justify-center items-start w-40 h-11 absolute left-0 top-0 overflow-hidden">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`shrink-0 w-[27px] h-[27px] overflow-hidden relative transition-transform duration-300 ${
                activeDropdown === "craft" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M8.1001 10.8L13.5001 16.2L18.9001 10.8"
                stroke="#6B7280"
                strokeWidth="2.025"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#A6341B]"
              />
            </svg>
          </div>
          <div className="flex pr-[13px] flex-col items-start w-[129px] absolute left-[7px] top-[9px] overflow-hidden">
            <p className="flex flex-col justify-center text-[#000] font-beVietnam text-lg font-bold leading-7 w-[108px] h-7 group-hover:text-[#A6341B] transition-colors">
              {filters.craft}
            </p>
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "craft" && (
          <div className="absolute top-[60px] left-0 bg-white border border-gray-100 rounded-xl shadow-xl py-2 w-[180px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {options.craft.map((opt) => (
              <div
                key={opt}
                onClick={() => selectOption("craft", opt)}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(166,52,27,0.08)] hover:text-[#A6341B] font-medium cursor-pointer"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 bg-[rgba(166,52,27,0.10)] w-px h-10"></div>

      {/* 3. Price Filter */}
      <div className="flex flex-col items-start gap-1 w-fit relative">
        <div className="flex pl-2 flex-col items-start w-fit">
          <div className="flex flex-col items-center w-fit">
            <p className="flex flex-col justify-center text-[#A6341B] font-beVietnamPro text-[10px] font-black leading-[15px] w-[52px] h-[15px] text-center tracking-[0.1em] uppercase">
              Mức giá
            </p>
          </div>
        </div>
        
        <div 
          onClick={() => toggleDropdown("price")}
          className="min-w-[160px] w-40 h-11 relative cursor-pointer group"
        >
          <div className="flex pt-[9px] pr-2 pb-[9px] pl-[125px] flex-col justify-center items-start w-40 h-11 absolute left-0 top-0 overflow-hidden">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`shrink-0 w-[27px] h-[27px] overflow-hidden relative transition-transform duration-300 ${
                activeDropdown === "price" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M8.1001 10.8L13.5001 16.2L18.9001 10.8"
                stroke="#6B7280"
                strokeWidth="2.025"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#A6341B]"
              />
            </svg>
          </div>
          <div className="flex pr-1.5 flex-col items-start w-[124px] absolute left-[9px] top-2 overflow-hidden">
            <p className="flex flex-col justify-center text-[#000] font-beVietnam text-lg font-bold leading-7 w-[115px] h-7 group-hover:text-[#A6341B] transition-colors">
              {filters.price}
            </p>
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "price" && (
          <div className="absolute top-[60px] left-0 bg-white border border-gray-100 rounded-xl shadow-xl py-2 w-[180px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {options.price.map((opt) => (
              <div
                key={opt}
                onClick={() => selectOption("price", opt)}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(166,52,27,0.08)] hover:text-[#A6341B] font-medium cursor-pointer"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 bg-[rgba(166,52,27,0.10)] w-px h-10"></div>

      {/* 4. Duration Filter */}
      <div className="flex flex-col items-start gap-1 w-fit relative">
        <div className="flex pl-2 flex-col items-start w-fit">
          <div className="flex flex-col items-center w-fit">
            <p className="flex flex-col justify-center text-[#A6341B] font-beVietnamPro text-[10px] font-black leading-[15px] w-[82px] h-[15px] text-center tracking-[0.1em] uppercase">
              THỜI LƯỢNG
            </p>
          </div>
        </div>
        
        <div 
          onClick={() => toggleDropdown("duration")}
          className="min-w-[160px] w-40 h-11 relative cursor-pointer group"
        >
          <div className="flex pt-[9px] pr-2 pb-[9px] pl-[125px] flex-col justify-center items-start w-40 h-11 absolute left-0 top-0 overflow-hidden">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`shrink-0 w-[27px] h-[27px] overflow-hidden relative transition-transform duration-300 ${
                activeDropdown === "duration" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M8.1001 10.8L13.5001 16.2L18.9001 10.8"
                stroke="#6B7280"
                strokeWidth="2.025"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#A6341B]"
              />
            </svg>
          </div>
          <div className="flex pr-1.5 flex-col items-start w-32 absolute left-[13px] top-2 overflow-hidden">
            <p className="flex flex-col justify-center text-[#000] font-beVietnam text-lg font-bold leading-7 w-[116px] h-7 group-hover:text-[#A6341B] transition-colors">
              {filters.duration}
            </p>
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "duration" && (
          <div className="absolute top-[60px] left-0 bg-white border border-gray-100 rounded-xl shadow-xl py-2 w-[180px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {options.duration.map((opt) => (
              <div
                key={opt}
                onClick={() => selectOption("duration", opt)}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(166,52,27,0.08)] hover:text-[#A6341B] font-medium cursor-pointer"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 bg-[rgba(166,52,27,0.10)] w-px h-10"></div>

      {/* 5. Date Filter */}
      <div className="flex flex-col items-start gap-1 shrink-0 w-[120px] relative">
        <div className="flex pl-2 flex-col items-start w-fit">
          <div className="flex flex-col items-center w-fit">
            <p className="flex flex-col justify-center text-[#A6341B] font-beVietnamPro text-[10px] font-black leading-[15px] w-11 h-[15px] text-center tracking-[0.1em] uppercase">
              Ngày
            </p>
          </div>
        </div>
        
        <div 
          onClick={() => toggleDropdown("date")}
          className="min-w-[160px] w-40 h-11 relative cursor-pointer group"
        >
          <div className="flex pt-[9px] pr-2 pb-[9px] pl-[125px] flex-col justify-center items-start w-40 h-11 absolute -left-[51px] top-0 overflow-hidden">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`shrink-0 w-[27px] h-[27px] overflow-hidden relative transition-transform duration-300 ${
                activeDropdown === "date" ? "rotate-180" : ""
              }`}
            >
              <path
                d="M8.1001 10.8L13.5001 16.2L18.9001 10.8"
                stroke="#6B7280"
                strokeWidth="2.025"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#A6341B]"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start w-[82px] absolute left-[13px] top-2 overflow-hidden">
            <p className="flex flex-col justify-center text-[#000] font-beVietnam text-lg font-bold leading-7 w-[116px] h-7 group-hover:text-[#A6341B] transition-colors">
              {filters.date}
            </p>
          </div>
        </div>

        {/* Dropdown Options */}
        {activeDropdown === "date" && (
          <div className="absolute top-[60px] left-0 bg-white border border-gray-100 rounded-xl shadow-xl py-2 w-[180px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {options.date.map((opt) => (
              <div
                key={opt}
                onClick={() => selectOption("date", opt)}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(166,52,27,0.08)] hover:text-[#A6341B] font-medium cursor-pointer"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 6. Filter Action Button */}
      <div className="flex pl-4 flex-col items-start w-fit">
        <button 
          onClick={handleApplyFilter}
          className="cursor-pointer text-nowrap flex py-3 px-8 items-center gap-2 rounded-full border-2 border-[#A6341B] bg-[#E0A03F] hover:bg-[#D4902F] shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 w-fit"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex flex-col items-center w-fit"
          >
            <path
              d="M4.66667 10.5V7H5.83333V8.16667H10.5V9.33333H5.83333V10.5H4.66667ZM0 9.33333V8.16667H3.5V9.33333H0ZM2.33333 7V5.83333H0V4.66667H2.33333V3.5H3.5V7H2.33333ZM4.66667 5.83333V4.66667H10.5V5.83333H4.66667ZM7 3.5V0H8.16667V1.16667H10.5V2.33333H8.16667V3.5H7ZM0 2.33333V1.16667H5.83333V2.33333H0Z"
              fill="white"
            />
          </svg>
          <p className="flex flex-col justify-center text-[#FFF] font-beVietnamPro text-base font-extrabold leading-6 w-[31px] h-6 text-center">
            Lọc
          </p>
        </button>
      </div>
      
    </div>
  );
}

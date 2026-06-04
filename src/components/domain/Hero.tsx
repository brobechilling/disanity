"use client";

import React from "react";

export default function Hero({ className }: { className?: string }) {
  const handleFactsClick = () => {
    alert("Khám phá ngay 2.000 làng nghề truyền thống dọc khắp dải đất hình chữ S của Việt Nam!");
  };

  return (
    <div className={`relative h-[560px] w-full overflow-hidden ${className || ""}`}>
      {/* Background Image */}
      <img
        src="/Rectangle8966.png"
        className="absolute inset-0 h-full w-full object-cover"
        alt="DiSanity Làng nghề truyền thống Việt Nam"
      />
      
      {/* Overlay color gradient to make it look even more premium */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(108,11,11,0.4)]"></div>

      {/* Hero Quote */}
      <div className="absolute inset-x-0 bottom-14 mx-auto flex max-w-[1197px] flex-col items-center justify-center gap-10 px-6">
        <p className="max-w-[1172px] text-center font-jaro text-[42px] leading-[52px] text-[#FFF] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Việt Nam tự hào với gần 2.000 làng nghề truyền thống, minh chứng cho
          bề dày văn hóa và sự khéo léo của người Việt.
        </p>
      </div>

      {/* Facts Button with hover animations */}
      <button 
        onClick={handleFactsClick}
        className="group absolute left-1/2 top-[300px] flex h-[50px] w-[180px] -translate-x-1/2 cursor-pointer items-center justify-center gap-[5px] text-nowrap rounded-full border-[3px] border-[#D4A017] bg-[#A6341B] px-8 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-[#8B2C16]"
      >
        <p className="text-[#FFF] font-montserrat text-lg font-bold tracking-wider mr-6 group-hover:text-white transition-colors">
          FACTS
        </p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 overflow-hidden transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M10.3901 3.54924C10.1197 3.81581 10.0944 4.23704 10.316 4.53259L10.3826 4.60987L14.9583 9.24998L3.25 9.24998C2.83579 9.24998 2.5 9.58577 2.5 9.99998C2.5 10.3823 2.78611 10.6979 3.15592 10.7441L3.25 10.75H14.9583L10.3826 15.3901C10.116 15.6605 10.0966 16.082 10.3224 16.3744L10.3901 16.4507C10.6605 16.7173 11.082 16.7367 11.3744 16.5109L11.4507 16.4432L17.2841 10.5265C17.548 10.2589 17.57 9.84239 17.3501 9.54991L17.2841 9.47342L11.4507 3.55676C11.1599 3.26179 10.6851 3.25843 10.3901 3.54924Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

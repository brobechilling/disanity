"use client";

import React from "react";

export default function Hero() {
  const handleFactsClick = () => {
    alert("Khám phá ngay 2.000 làng nghề truyền thống dọc khắp dải đất hình chữ S của Việt Nam!");
  };

  return (
    <div className="w-full h-[746px] absolute -left-px top-[174px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/Rectangle8966.png"
        className="w-full h-[736px] absolute left-0 top-0 object-cover"
        alt="DiSanity Làng nghề truyền thống Việt Nam"
      />
      
      {/* Overlay color gradient to make it look even more premium */}
      <div className="absolute left-0 top-0 w-full h-[736px] bg-gradient-to-b from-transparent to-[rgba(108,11,11,0.4)] pointer-events-none"></div>

      {/* Hero Quote */}
      <div className="flex flex-col items-center justify-center gap-10 w-[1197px] h-[229px] absolute left-[123px] top-[470px]">
        <p className="text-[#FFF] font-jaro text-[46px] leading-[56px] w-[1172px] text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Việt Nam tự hào với gần 2.000 làng nghề truyền thống, minh chứng cho
          bề dày văn hóa và sự khéo léo của người Việt.
        </p>
      </div>

      {/* Facts Button with hover animations */}
      <button 
        onClick={handleFactsClick}
        className="cursor-pointer text-nowrap flex py-2.5 px-8 justify-center items-center gap-[5px] rounded-full border-[3px] border-[#D4A017] bg-[#A6341B] w-[180px] h-[50px] absolute left-[630px] top-[400px] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#8B2C16] hover:border-white group"
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

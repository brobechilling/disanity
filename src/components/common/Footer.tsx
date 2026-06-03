"use client";

import React, { useState } from "react";

export default function Footer({ className }: { className?: string }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Vui lòng nhập Email của bạn!");
      return;
    }
    alert(`Cảm ơn bạn đã đăng ký! Bản tin DiSanity sẽ được gửi định kỳ tới địa chỉ email: ${email}`);
    setEmail("");
  };

  return (
    <div className={`w-full h-[822px] absolute left-0 ${className || "top-[3938px]"} overflow-hidden`}>
      {/* Background Maroon Bar */}
      <div className="bg-[#6C0B0B] w-full h-[390px] absolute left-0 top-[432px]"></div>

      {/* 1. Facebook Icon */}
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[37px] h-[29px] absolute left-[969px] top-[470px] cursor-pointer hover:scale-110 hover:opacity-90 transition-all duration-200"
      >
        <svg
          width="37"
          height="29"
          viewBox="0 0 37 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.6667 14.3082C36.6667 6.41007 28.4533 0 18.3333 0C8.21333 0 0 6.41007 0 14.3082C0 21.2334 6.30667 26.9996 14.6667 28.3302V18.6007H11V14.3082H14.6667V10.7311C14.6667 7.96967 17.545 5.72328 21.0833 5.72328H25.6667V10.0157H22C20.9917 10.0157 20.1667 10.6596 20.1667 11.4466V14.3082H25.6667V18.6007H20.1667V28.5449C29.425 27.8295 36.6667 21.7342 36.6667 14.3082Z"
            fill="white"
          />
        </svg>
      </a>

      {/* 2. Instagram Icon */}
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[33px] h-[26px] absolute left-[1033px] top-[471px] cursor-pointer hover:scale-110 hover:opacity-90 transition-all duration-200"
      >
        <svg
          width="34"
          height="27"
          viewBox="0 0 34 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.66667 0H23.6667C29 0 33.3333 3.38194 33.3333 7.54432V18.4706C33.3333 20.4715 32.3149 22.3904 30.502 23.8052C28.6892 25.2201 26.2304 26.0149 23.6667 26.0149H9.66667C4.33333 26.0149 0 22.633 0 18.4706V7.54432C0 5.54344 1.01845 3.62452 2.8313 2.20968C4.64415 0.794846 7.10291 0 9.66667 0ZM9.33333 2.60149C7.74203 2.60149 6.21591 3.09484 5.09069 3.97302C3.96547 4.85119 3.33333 6.04225 3.33333 7.28417V18.7307C3.33333 21.3192 6.01667 23.4134 9.33333 23.4134H24C25.5913 23.4134 27.1174 22.9201 28.2426 22.0419C29.3679 21.1637 30 19.9727 30 18.7307V7.28417C30 4.69569 27.3167 2.60149 24 2.60149H9.33333ZM25.4167 4.55261C25.9692 4.55261 26.4991 4.72391 26.8898 5.02883C27.2805 5.33375 27.5 5.74732 27.5 6.17854C27.5 6.60976 27.2805 7.02333 26.8898 7.32825C26.4991 7.63317 25.9692 7.80447 25.4167 7.80447C24.8641 7.80447 24.3342 7.63317 23.9435 7.32825C23.5528 7.02333 23.3333 6.60976 23.3333 6.17854C23.3333 5.74732 23.5528 5.33375 23.9435 5.02883C24.3342 4.72391 24.8641 4.55261 25.4167 4.55261ZM16.6667 6.50373C18.8768 6.50373 20.9964 7.18894 22.5592 8.40862C24.122 9.62831 25 11.2826 25 13.0075C25 14.7323 24.122 16.3866 22.5592 17.6063C20.9964 18.826 18.8768 19.5112 16.6667 19.5112C14.4565 19.5112 12.3369 18.826 10.7741 17.6063C9.21131 16.3866 8.33333 14.7323 8.33333 13.0075C8.33333 11.2826 9.21131 9.62831 10.7741 8.40862C12.3369 7.18894 14.4565 6.50373 16.6667 6.50373ZM16.6667 9.10522C15.3406 9.10522 14.0688 9.51634 13.1311 10.2482C12.1934 10.98 11.6667 11.9725 11.6667 13.0075C11.6667 14.0424 12.1934 15.0349 13.1311 15.7668C14.0688 16.4986 15.3406 16.9097 16.6667 16.9097C17.9927 16.9097 19.2645 16.4986 20.2022 15.7668C21.1399 15.0349 21.6667 14.0424 21.6667 13.0075C21.6667 11.9725 21.1399 10.98 20.2022 10.2482C19.2645 9.51634 17.9927 9.10522 16.6667 9.10522Z"
            fill="white"
          />
        </svg>
      </a>

      {/* 3. YouTube Icon */}
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[33px] h-[21px] absolute left-[1094px] top-[474px] cursor-pointer hover:scale-110 hover:opacity-90 transition-all duration-200"
      >
        <svg
          width="34"
          height="21"
          viewBox="0 0 34 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0733 0C17.9633 0.00390224 20.19 0.0208119 22.5567 0.0949544L23.3967 0.123571C25.7783 0.21072 28.1583 0.361607 29.34 0.617854C30.915 0.963852 32.1517 1.97063 32.57 3.24796C33.2367 5.27712 33.32 9.23399 33.33 10.1926L33.3317 10.3904V10.6167C33.32 11.5753 33.2367 15.5335 32.57 17.5614C32.1467 18.8426 30.9083 19.8507 29.34 20.1915C28.1583 20.4477 25.7783 20.5986 23.3967 20.6858L22.5567 20.7157C20.19 20.7885 17.9633 20.8067 17.0733 20.8093L16.6817 20.8106H16.2567C14.3733 20.8015 6.49667 20.7352 3.99 20.1915C2.41667 19.8455 1.17833 18.8387 0.76 17.5614C0.0933335 15.5322 0.01 11.5753 0 10.6167V10.1926C0.01 9.23399 0.0933335 5.27582 0.76 3.24796C1.18333 1.96673 2.42167 0.958649 3.99167 0.619155C6.49667 0.0741423 14.375 0.00780447 16.2583 0H17.0733ZM13.3317 5.85335V14.9586L23.3317 10.406L13.3317 5.85335Z"
            fill="white"
          />
        </svg>
      </a>

      {/* 4. X (Twitter) Icon */}
      <a 
        href="https://x.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[35px] h-[26px] absolute left-[1154px] top-[471px] cursor-pointer hover:scale-110 hover:opacity-90 transition-all duration-200"
      >
        <svg
          width="35"
          height="27"
          viewBox="0 0 35 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.325 11.0993L32.8 0H27.6783L18.92 8.47696L11.15 0H0L13.01 14.1911L0.783333 26.0149H5.90667L15.415 16.8186L23.85 26.0149H35L21.325 11.0993ZM17.3583 14.9365L14.95 12.3103L5.6 2.11631H9.45L16.9967 10.3331L19.4017 12.9606L29.4317 23.8986H25.5817L17.3583 14.9365Z"
            fill="white"
          />
        </svg>
      </a>

      {/* Column 1: ABOUT US */}
      <div className="w-[220px] h-[281px] absolute left-[434px] top-[474px]">
        <p className="text-[#FFF] font-roboto text-2xl font-bold w-[130px] h-7 absolute left-0 top-0 tracking-wide border-b border-[rgba(255,255,255,0.15)] pb-1">
          ABOUT US
        </p>
        <div className="flex flex-col gap-2 absolute left-0 top-[57px]">
          {[
            "Message from The Founder",
            "Stories and Timeline",
            "KOTO International",
            "KOTO Team",
            "Key Partners",
            "Strategic Partners",
            "Education Partners",
          ].map((link) => (
            <span
              key={link}
              className="text-[#E0E0E0] font-roboto text-base leading-6 hover:text-[#F4CA80] hover:translate-x-1 cursor-pointer transition-all duration-150"
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Column 2: DISANITY FOUNDATION */}
      <div className="w-[240px] h-[286px] absolute left-[684px] top-[469px]">
        <p className="text-[#FFF] font-roboto text-2xl font-bold w-[220px] h-14 absolute left-0 top-0 tracking-wide border-b border-[rgba(255,255,255,0.15)] pb-1 leading-8">
          DISANITY FOUNDATION
        </p>
        <div className="flex flex-col gap-2 absolute left-0 top-[77px]">
          {[
            "Training Centre",
            "Training Programme",
            "Admission",
            "Her Turn Programme",
            "Social Enterprise",
            "Study Tour",
            "Child Protection Policy",
            "Events",
          ].map((link) => (
            <span
              key={link}
              className="text-[#E0E0E0] font-roboto text-base leading-6 hover:text-[#F4CA80] hover:translate-x-1 cursor-pointer transition-all duration-150"
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Subscription Form */}
      <form onSubmit={handleSubscribe} className="relative w-[380px] h-[64px] absolute left-[960px] top-[550px]">
        {/* Email Input Background Pill */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="rounded-[36px] bg-[#FFF] w-[305px] h-[46px] absolute left-0 top-[6px] px-6 py-3 font-roboto text-[#171717] outline-none text-base border-none shadow-md placeholder-gray-400"
        />
        
        {/* Circular Action Button */}
        <button
          type="submit"
          className="w-[52px] h-[52px] absolute left-[315px] top-[3px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#F4CA80] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6C0B0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </form>

      {/* Description Left Block */}
      <div className="w-[284px] h-[162px] absolute left-[87px] top-[484px] flex flex-col items-center">
        <img
          src="/Image2.png"
          className="w-[230px] h-[65px] object-contain mb-4 cursor-pointer hover:opacity-90"
          alt="DiSanity"
        />
        <p className="text-[#FFF] font-beVietnamPro text-sm leading-6 w-[284px] h-20 text-center font-light drop-shadow-sm">
          DiSanity là cách chơi chữ giữa ‘Di Sản’ và ‘Sanity’, mang ý nghĩa di
          sản sống và còn hiện diện trong đời sống hiện đại.
        </p>
      </div>
    </div>
  );
}

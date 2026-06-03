"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { mockBookedWorkshops, mockWrittenReviews } from "@/utils/mockData";

export default function CustomerAccountPage() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("overview");

  const bookedWorkshops = mockBookedWorkshops;
  const writtenReviews = mockWrittenReviews;

  const handleToggleMode = () => {
    navigate("/artisan-account");
  };

  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Container viewport 1440px wide by 2761px high matching absolute layout coordinates.
        This provides a pixel-perfect, highly premium centered frame.
      */}
      <ResponsiveContainer originalHeight={2761}>
        
        {/* Mockup Background Image - Wood grain texture showing rich background details */}
        <img
          src="/taikhoankhachhang/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-100 pointer-events-none"
          alt="image 143 background base"
        />

        {/* 1. Shared Header (0px - 181px) */}
        <Header />

        {/* 2. Main Sidebar Navigation on Left (181px - 2371px) */}
        <div className="flex p-6 flex-col justify-between items-start bg-[#7B3F1C] w-72 h-[2190px] absolute left-0 top-[181px] shadow-lg border-r border-black/10 z-20">
          <div className="flex flex-col items-start gap-6 w-full">
            
            {/* User Profile Card */}
            <div className="flex items-center gap-3 w-full py-2">
              <div className="flex flex-col justify-center items-center shrink-0 rounded-full bg-[#64748B] w-12 h-12 overflow-hidden border-2 border-white/20 shadow-inner">
                <img
                  src="/taikhoankhachhang/ChnDungNghNhn.png"
                  className="w-full h-full object-cover"
                  alt="Chân dung nghệ nhân"
                />
              </div>
              <div className="flex flex-col items-start w-fit leading-tight">
                <p className="text-[#FFF] font-beVietnamPro text-base font-bold leading-5">
                  Cappy Dương
                </p>
                <p className="text-[#E0E0E0]/80 font-beVietnamPro text-xs font-light mt-0.5">
                  Lữ Khách
                </p>
              </div>
            </div>

            {/* Mode Toggle Terracotta Button */}
            <button 
              onClick={handleToggleMode}
              className="flex py-2 px-3 justify-start items-center gap-2.5 rounded-[16px] bg-[#C65C39] hover:bg-[#B34F2F] active:scale-95 transition-all w-full cursor-pointer shadow-md text-left"
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4.5 h-4.5"
                >
                  <path
                    d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0ZM2 8H6V2H2V8ZM12 16H16V10H12V16ZM12 4H16V2H12V4ZM2 16H6V14H2V16Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-[#FFF] font-beVietnamPro text-xs font-semibold leading-tight">
                Chuyển qua chế độ<br />nghệ nhân
              </span>
            </button>

            {/* Sidebar Menu Links */}
            <div className="flex flex-col w-full gap-2 mt-4">
              <button
                className="flex py-3 px-2 items-center gap-3 rounded-full w-full cursor-pointer transition-all duration-150 text-[#F8F9FA]/80 hover:bg-white/10 hover:text-white"
              >
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-beVietnamPro text-sm font-semibold">Lịch sử mua hàng</span>
              </button>
            </div>

          </div>
        </div>

        {/* 3. Welcome Header & Buttons Area (Unified Flex Container to prevent overlap) */}
        <div className="flex flex-col items-start w-[750px] absolute left-[343px] top-[231px] z-10 gap-5">
          <div className="flex flex-col items-start w-full">
            <p className="text-[#A6341B] font-dFVNFreckleFace text-[36px] leading-10 w-[700px] tracking-wide uppercase">
              Xin chào, lữ khách Cappy Dương! 👋
            </p>
            <p className="text-[#64748B] font-beVietnamPro text-[15px] leading-6 w-[670px] mt-3 font-medium">
              Hiện tại bạn đang có 2 địa điểm cần ghé thăm. Hãy để ý lịch trình của mình nhé. Chúc bạn có những trải nghiệm tuyệt vời cùng DISANITY.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="cursor-pointer text-nowrap flex py-2 px-6 justify-center items-center rounded-full border-2 border-[#A6341B] hover:bg-[#A6341B]/5 transition-all bg-white shadow-sm">
              <span className="text-[#0F172A] font-beVietnamPro text-sm font-bold leading-6">
                Hồ sơ công khai
              </span>
            </button>
            
            {/* Notification bell badge */}
            <div className="flex justify-center items-center rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] w-[52px] h-10 cursor-pointer transition-colors relative border border-black/10 shadow-sm">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path
                  d="M16 17V15H14V8C14 6.61667 13.5833 5.3875 12.75 4.3125C11.9167 3.2375 10.8333 2.53333 9.5 2.2V1.5C9.5 1.08333 9.35417 0.729167 9.0625 0.4375C8.77083 0.145833 8.41667 0 8 0C7.58333 0 7.22917 0.145833 6.9375 0.4375C6.64583 0.729167 6.5 1.08333 6.5 1.5V2.2C5.16667 2.53333 4.08333 3.2375 3.25 4.3125C2.41667 5.3875 2 6.61667 2 8V15H0V17H16ZM8 20C8.55 20 9.02083 19.8042 9.4125 19.4125C9.80417 19.0208 10 18.55 10 18H6C6 18.55 6.19583 19.0208 6.5875 19.4125C6.97917 19.8042 7.45 20 8 20ZM12 15H4V8C4 6.9 4.39167 5.95833 5.175 5.175C5.95833 4.39167 6.9 4 8 4C9.1 4 10.0417 4.39167 10.825 5.175C11.6083 5.95833 12 6.9 12 8V15Z"
                  fill="#475569"
                />
              </svg>
              <div className="absolute right-3.5 top-2.5 rounded-full bg-[#C65C39] w-2 h-2 animate-pulse border border-white"></div>
            </div>
          </div>
        </div>

        {/* 4. Dashboard Stats Row */}
        <div className="flex justify-start items-center gap-5 w-[960px] h-[228px] absolute left-[343px] top-[450px] z-10 overflow-visible">
          {/* Card 1: Số Workshop đã đặt */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#C65C39]/70 bg-transparent w-[220px] h-full relative p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm">
            <div className="flex items-start w-fit">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 28C16.6333 28 15.3417 27.7375 14.125 27.2125C12.9083 26.6875 11.8458 25.9708 10.9375 25.0625C10.0292 24.1542 9.3125 23.0917 8.7875 21.875C8.2625 20.6583 8 19.3667 8 18C8 16.6167 8.27083 15.3167 8.8125 14.1C9.35417 12.8833 10.0875 11.825 11.0125 10.925C11.9375 10.025 13.0167 9.3125 14.25 8.7875C15.4833 8.2625 16.8 8 18.2 8C19.5333 8 20.7917 8.22917 21.975 8.6875C23.1583 9.14583 24.1958 9.77917 25.0875 10.5875C25.9792 11.3958 26.6875 12.3542 27.2125 13.4625C27.7375 14.5708 28 15.7667 28 17.05C28 18.9667 27.4167 20.4375 26.25 21.4625C25.0833 22.4875 23.6667 23 22 23H20.15C20 23 19.8958 23.0417 19.8375 23.125C19.7792 23.2083 19.75 23.3 19.75 23.4C19.75 23.6 19.875 23.8875 20.125 24.2625C20.375 24.6375 20.5 25.0667 20.5 25.55C20.5 26.3833 20.2708 27 19.8125 27.4C19.3542 27.8 18.75 28 18 28Z"
                  fill="#A6341B"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#A6341B] font-beVietnamPro text-sm font-semibold">
                Số Workshop đã đặt
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-[32px] font-black leading-none mt-1">
                3
              </p>
            </div>
          </div>

          {/* Card 2: Buổi sắp tới */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#C65C39]/70 bg-transparent w-[220px] h-full relative p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm">
            <div className="flex items-start w-fit">
              <svg width="34" height="36" viewBox="0 0 34 36" fill="none">
                <path
                  d="M19.5 24C18.8 24 18.2083 23.7583 17.725 23.275C17.2417 22.7917 17 22.2 17 21.5C17 20.8 17.2417 20.2083 17.725 19.725C18.2083 19.2417 18.8 19 19.5 19C20.2 19 20.7917 19.2417 21.275 19.725C21.7583 20.2083 22 20.8 22 21.5C22 22.2 21.7583 22.7917 21.275 23.275C20.7917 23.7583 20.2 24 19.5 24ZM10 28C9.45 28 8.97917 27.8042 8.5875 27.4125C8.19583 27.0208 8 26.55 8 26V12C8 11.45 8.19583 10.9792 8.5875 10.5875C8.97917 10.1958 9.45 10 10 10H11V8H13V10H21V8H23V10H24C24.55 10 25.0208 10.1958 25.4125 10.5875C25.8042 10.9792 26 11.45 26 12V26C26 26.55 25.8042 27.0208 25.4125 27.4125C25.0208 27.8042 24.55 28 24 28H10ZM10 26H24V16H10V26ZM10 14H24V12H10V14ZM10 14V12V14Z"
                  fill="#A6341B"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#A6341B] font-beVietnamPro text-sm font-semibold">
                Buổi sắp tới
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-[32px] font-black leading-none mt-1">
                3
              </p>
            </div>
          </div>

          {/* Card 3: Tổng lượt đặt */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#C65C39]/70 bg-transparent w-[220px] h-full relative p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm">
            <div className="flex items-start w-fit">
              <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
                <path
                  d="M18 21C18.2833 21 18.5208 20.9042 18.7125 20.7125C18.9042 20.5208 19 20.2833 19 20C19 19.7167 18.9042 19.4792 18.7125 19.2875C18.5208 19.0958 18.2833 19 18 19C17.7167 19 17.4792 19.0958 17.2875 19.2875C17.0958 19.4792 17 19.7167 17 20C17 20.2833 17.0958 20.5208 17.2875 20.7125C17.4792 20.9042 17.7167 21 18 21ZM18 17C18.2833 17 18.5208 16.9042 18.7125 16.7125C18.9042 16.5208 19 16.2833 19 16C19 15.7167 18.9042 15.4792 18.7125 15.2875C18.5208 15.0958 18.2833 15 18 15C17.7167 15 17.4792 15.0958 17.2875 15.2875C17.0958 15.4792 17 15.7167 17 16C17 16.2833 17.0958 16.5208 17.2875 16.7125C17.4792 16.9042 17.7167 17 18 17ZM18 13C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11C17.7167 11 17.4792 11.0958 17.2875 11.2875C17.0958 11.4792 17 11.7167 17 12C17 12.2833 17.0958 12.5208 17.2875 12.7125C17.4792 12.9042 17.7167 13 18 13ZM26 24H10C9.45 24 8.97917 23.8042 8.5875 23.4125C8.19583 23.0208 8 22.55 8 22V18C8.55 18 9.02083 17.8042 9.4125 17.4125C9.80417 17.0208 10 16.55 10 16C10 15.45 9.80417 14.9792 9.4125 14.5875C9.02083 14.1958 8.55 14 8 14V10C8 9.45 8.19583 8.97917 8.5875 8.5875C8.97917 8.19583 9.45 8 10 8H26C26.55 8 27.0208 8.19583 27.4125 8.5875C27.8042 8.97917 28 9.45 28 10V14C27.45 14 26.9792 14.1958 26.5875 14.5875C26.1958 14.9792 26 15.45 26 16C26 16.55 26.1958 17.0208 26.5875 17.4125C26.9792 17.8042 27.45 18 28 18V22C28 22.55 27.8042 23.0208 27.4125 23.4125C27.0208 23.8042 26.55 24 26 24ZM26 22V19.45C25.3833 19.0833 24.8958 18.5958 24.5375 17.9875C24.1792 17.3792 24 16.7167 24 16C24 15.2833 24.1792 14.6208 24.5375 14.0125C24.8958 13.4042 25.3833 12.9167 26 12.55V10H10V12.55C10.6167 12.9167 11.1042 13.4042 11.4625 14.0125C11.8208 14.6208 12 15.2833 12 16C12 16.7167 11.8208 17.3792 11.4625 17.9875C11.1042 18.5958 10.6167 19.0833 10 19.45V22H26Z"
                  fill="#A6341B"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#A6341B] font-beVietnamPro text-sm font-semibold">
                Tổng lượt đặt
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-[32px] font-black leading-none mt-1">
                5
              </p>
            </div>
          </div>

          {/* Card 4: Chi tiêu */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#C65C39]/70 bg-transparent w-[220px] h-full relative p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm">
            <div className="flex items-start w-fit">
              <svg width="38" height="32" viewBox="0 0 38 32" fill="none">
                <path
                  d="M21 17C20.1667 17 19.4583 16.7083 18.875 16.125C18.2917 15.5417 18 14.8333 18 14C18 13.1667 18.2917 12.4583 18.875 11.875C19.4583 11.2917 20.1667 11 21 11C21.8333 11 22.5417 11.2917 23.125 11.875C23.7083 12.4583 24 13.1667 24 14C24 14.8333 23.7083 15.5417 23.125 16.125C22.5417 16.7083 21.8333 17 21 17ZM14 20C13.45 20 12.9792 19.8042 12.5875 19.4125C12.1958 19.0208 12 18.55 12 18V10C12 9.45 12.1958 8.97917 12.5875 8.5875C12.9792 8.19583 13.45 8 14 8H28C28.55 8 29.0208 8.19583 29.4125 8.5875C29.8042 8.97917 30 9.45 30 10V18C30 18.55 29.8042 19.0208 29.4125 19.4125C29.0208 19.8042 28.55 20 28 20H14ZM16 18H26C26 17.45 26.1958 16.9792 26.5875 16.5875C26.9792 16.1958 27.45 16 28 16V12C27.45 12 26.9792 11.8042 26.5875 11.4125C26.1958 11.0208 26 10.55 26 10H16C16 10.55 15.8042 11.0208 15.4125 11.4125C15.0208 11.8042 14.55 12 14 12V16C14.55 16 15.0208 16.1958 15.4125 16.5875C15.8042 16.9792 16 17.45 16 18ZM27 24H10C9.45 24 8.97917 23.8042 8.5875 23.4125C8.19583 23.0208 8 22.55 8 22V11H10V22H27V24ZM14 18V10V18Z"
                  fill="#A6341B"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#A6341B] font-beVietnamPro text-sm font-semibold">
                Chi tiêu
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-[28px] font-black leading-none mt-1">
                800.000đ
              </p>
            </div>
          </div>
        </div>

        {/* 5. Personal Information Section */}
        <div className="w-[960px] absolute left-[343px] top-[700px] z-10 overflow-visible flex flex-col items-start">
          <p className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase">
            Thông tin cá nhân:
          </p>

          <div className="flex flex-col gap-5 mt-6 w-[860px]">
            {[
              { label: "Họ và tên:", value: "Cappy Dương" },
              { label: "Email:", value: "Duong1234@gmail.com" },
              { label: "Địa chỉ:", value: "Phường Hải Châu, thành phố Đà Nẵng" },
              { label: "SĐT:", value: "0946443560" },
            ].map((field, idx) => (
              <div key={idx} className="flex items-center w-full">
                <span className="text-black font-beVietnamPro text-base font-bold w-[120px] shrink-0">
                  {field.label}
                </span>
                <div className="flex-1 max-w-[560px] h-[50px] border border-black/40 rounded-[8px] flex items-center justify-center mx-4 bg-transparent">
                  <span className="text-black font-beVietnamPro text-base font-medium">
                    {field.value}
                  </span>
                </div>
                <button className="text-black font-beVietnamPro text-sm italic hover:underline cursor-pointer ml-2 shrink-0">
                  Thay đổi
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Booked Upcoming Workshops Section */}
        <div className="w-[960px] absolute left-[343px] top-[1060px] z-10 overflow-visible flex flex-col items-start">
          <div className="w-full flex flex-col">
            <p className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase">
              Các Workshop sắp tới:
            </p>
            <div className="w-[860px] h-[1px] bg-[#A6341B]/30 mt-4"></div>
          </div>

          <div className="flex flex-col gap-6 mt-6 w-[860px] overflow-visible">
            {bookedWorkshops.map((ws, idx) => (
              <div key={idx} className="w-full flex flex-col">
                <div className="flex items-center justify-between py-2 w-full gap-6">
                  {/* Left Column: Image Poster */}
                  <div className="w-[150px] h-[190px] rounded-[20px] overflow-hidden border border-black/10 shadow-sm shrink-0">
                    <img
                      src={ws.img}
                      className="w-full h-full object-cover"
                      alt={ws.title}
                    />
                  </div>

                  {/* Second Column: Title & Selection controls */}
                  <div className="flex flex-col justify-between h-[170px] w-[200px] shrink-0">
                    <p className="text-[#A6341B] font-dFVNFreckleFace text-2xl tracking-wide leading-tight">
                      {ws.title}
                    </p>
                    
                    {/* Package & circles indicator */}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-black font-beVietnamPro text-sm font-semibold">Trọn gói</span>
                      <div className="flex items-center gap-1.5 ml-1">
                        {[1, 2, 3, 4].map((dot) => (
                          <div key={dot} className="w-4 h-4 rounded-full bg-[#9CA3AF]"></div>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Selector dropdown */}
                    <div className="relative mt-2">
                      <select className="border border-black/40 bg-transparent rounded-[4px] pl-3 pr-8 py-1 h-[32px] w-[90px] text-xs font-semibold outline-none appearance-none cursor-pointer">
                        <option>SL: 1</option>
                        <option>SL: 2</option>
                        <option>SL: 3</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 left-[62px] flex items-center">
                        <svg className="w-3.5 h-3.5 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Third Column: Description */}
                  <div className="flex flex-col items-start justify-start h-[170px] w-[260px] shrink-0 leading-tight">
                    <span className="text-black font-beVietnamPro text-[15px] font-bold mb-1">Mô tả:</span>
                    <ul className="text-black font-beVietnamPro text-xs space-y-1 font-medium list-none pl-0">
                      <li>-Thể loại: {ws.genre}</li>
                      <li>-Loại hình: {ws.type}</li>
                      <li>-Địa điểm: {ws.location}</li>
                      <li>-Nghệ nhân: {ws.artisan}</li>
                      <li>-Thời lượng: {ws.duration}</li>
                      <li>-Ngày {ws.date}</li>
                    </ul>
                  </div>

                  {/* Fourth Column: Price and CTA Button */}
                  <div className="flex flex-col items-end justify-center gap-3 h-[170px] w-[180px] shrink-0 text-right ml-auto">
                    <div className="flex flex-col items-end">
                      <span className="text-black/60 font-beVietnamPro text-xs font-medium">Giá:</span>
                      <span className="text-black font-beVietnamPro text-2xl font-bold mt-0.5 leading-none">
                        {ws.price}
                      </span>
                    </div>
                    <button className="bg-[#C68B2C] hover:bg-[#B57C23] text-white font-beVietnamPro text-xs font-bold py-2.5 px-4 rounded-[6px] transition-all cursor-pointer shadow-sm active:scale-95 text-nowrap">
                      Xem chi tiết đơn hàng
                    </button>
                  </div>
                </div>

                {/* Separator line under workshop */}
                <div className="w-full h-[1px] bg-[#A6341B]/30 mt-6"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Written Reviews Section */}
        <div className="w-[960px] absolute left-[343px] top-[1680px] z-10 overflow-visible">
          <p className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase">
            Các đánh giá bạn đã viết:
          </p>

          <div className="flex flex-col gap-5 mt-6 w-[860px] overflow-visible">
            {writtenReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-white/70 backdrop-blur-sm border border-black/5 rounded-[24px] p-6 shadow-sm flex flex-col gap-3"
              >
                <div className="flex justify-between items-center w-full">
                  <p className="text-[#A6341B] font-dFVNFreckleFace text-xl tracking-wide uppercase">
                    {rev.title}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[#696969] font-dMSans text-sm font-light">Ngày viết: {rev.date}</span>
                    <div className="flex py-1 px-3 items-center rounded-full bg-[rgba(212,160,23,0.1)]">
                      <span className="text-[#D4A017] font-beVietnamPro text-sm font-black">★ {rev.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#555] font-beVietnamPro text-[15px] leading-6 text-justify italic">
                  “ {rev.comment} ”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Shared Footer at bottom (Seamlessly aligns with sidebar bottom at 2371px) */}
        <Footer className="top-[1939px]" />

      </ResponsiveContainer>
    </div>
  );
}

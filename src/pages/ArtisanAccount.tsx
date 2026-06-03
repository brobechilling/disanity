"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function ArtisanAccountPage() {
  const navigate = useNavigate();
  
  // Interactive modal toggle
  const [isAddingWorkshop, setIsAddingWorkshop] = useState(false);
  const [newWsData, setNewWsData] = useState({
    title: "",
    description: "",
    price: "",
    rating: "5.0",
    category: "Mỹ thuật truyền thống"
  });

  // Dynamic owned workshops
  const [ownedWorkshops, setOwnedWorkshops] = useState([
    {
      id: 1,
      title: "Gốm Bát Tràng",
      description: "Tự tay nhào nặn và vẽ men gốm truyền thống",
      price: "1.100.000đ",
      rating: "4.9",
      img: "/taikhoannghenhan/Image.png",
      featured: true,
    },
    {
      id: 2,
      title: "Lụa Vạn Phúc",
      description: "Kỹ thuật dệt khung cửi và nhuộm lụa tơ tằm",
      price: "1.350.000đ",
      rating: "4.8",
      img: "/taikhoannghenhan/Image(1).png",
      featured: false,
    },
    {
      id: 3,
      title: "Đèn Lồng Hội An",
      description: "Làm khung tre và dán lụa ngũ sắc",
      price: "750.000đ",
      rating: "5.0",
      img: "/taikhoannghenhan/Image(2).png",
      featured: false,
    },
    {
      id: 4,
      title: "Sơn Mài Bình Dương",
      description: "Nghệ thuật cẩn vỏ trứng và mài sơn độc bản",
      price: "1.450.000đ",
      rating: "4.7",
      img: "/taikhoannghenhan/Image(3).png",
      featured: false,
    }
  ]);

  // Personal Info inline editing
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Cappy Dương",
    email: "cappydương@disanity.vn",
    phone: "0987 654 321",
    address: "Xưởng Gốm Di Sản, Bát Tràng, Gia Lâm, Hà Nội"
  });

  const [tempInfo, setTempInfo] = useState({ ...personalInfo });

  const handleEditClick = (field: string) => {
    setIsEditing(field);
    setTempInfo({ ...personalInfo });
  };

  const handleSaveField = (field: keyof typeof personalInfo) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: tempInfo[field]
    }));
    setIsEditing(null);
  };

  // Add Workshop submission handler
  const handleAddWorkshopSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWsData.title || !newWsData.price) {
      alert("Vui lòng nhập tên Workshop và giá tiền!");
      return;
    }

    const formattedPrice = newWsData.price.endsWith("đ") ? newWsData.price : `${newWsData.price}đ`;

    const newWs = {
      id: Date.now(),
      title: newWsData.title,
      description: newWsData.description || "Mô tả buổi workshop văn hóa đặc sắc",
      price: formattedPrice,
      rating: newWsData.rating,
      img: "/taikhoannghenhan/Image.png", // fallback placeholder
      featured: false
    };

    setOwnedWorkshops([newWs, ...ownedWorkshops]);
    setIsAddingWorkshop(false);
    setNewWsData({
      title: "",
      description: "",
      price: "",
      rating: "5.0",
      category: "Mỹ thuật truyền thống"
    });
    alert(`Chúc mừng! Workshop "${newWsData.title}" đã được khởi tạo thành công và đang chờ duyệt đăng ký.`);
  };

  // Customer Reviews
  const customerReviews = [
    {
      author: "Trần Quốc Anh",
      date: "18.05.2026",
      rating: "5.0",
      workshopName: "Gốm Bát Tràng",
      comment: "Buổi học làm gốm Bát Tràng cực kỳ tuyệt vời! Nghệ nhân Cappy Dương hướng dẫn vô cùng chu đáo, không gian xưởng rất truyền thống và ấm áp. Nhất định mình sẽ giới thiệu cho người thân ghé thăm trải nghiệm.",
    },
    {
      author: "Nguyễn Thị Mai",
      date: "02.05.2026",
      rating: "4.8",
      workshopName: "Lụa Vạn Phúc",
      comment: "Trải nghiệm dệt lụa Vạn Phúc rất thú vị. Chúng mình được chạm tay vào khung cửi cổ xưa và tự pha màu thuốc nhuộm thiên nhiên. Một nét văn hoá truyền thống rất trân quý.",
    },
  ];

  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Centered high-fidelity viewport container (1440px wide by 2867px high)
        matching the approved coordinates schema perfectly.
      */}
      <ResponsiveContainer originalHeight={2867}>
        
        {/* Mockup wood base background texture */}
        <img
          src="/taikhoannghenhan/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-100 pointer-events-none"
          alt="image 143 background base"
        />

        {/* 1. Shared Header Section (0px - 181px) */}
        <Header />

        {/* 2. Premium Sidebar Panel (181px - 2477px) */}
        <div className="flex p-6 flex-col justify-between items-start bg-[#7B3F1C] w-72 h-[2254px] absolute left-0 top-[181px] shadow-lg border-r border-black/10 z-20">
          <div className="flex flex-col items-start gap-6 w-full">
            
            {/* Artisan Avatar Profile Card */}
            <div className="flex items-center gap-3 w-full py-2 border-b border-white/10 pb-4">
              <div className="flex flex-col justify-center items-center shrink-0 rounded-full bg-[#64748B] w-12 h-12 overflow-hidden border-2 border-[#F4CA80]/40 shadow-inner">
                <img
                  src="/taikhoannghenhan/ChnDungNghNhn.png"
                  className="w-full h-full object-cover"
                  alt="Chân dung nghệ nhân"
                />
              </div>
              <div className="flex flex-col items-start w-fit leading-tight">
                <p className="text-[#FFF] font-beVietnamPro text-base font-bold leading-5">
                  {personalInfo.name}
                </p>
                <p className="text-[#F4CA80] font-beVietnamPro text-xs font-semibold mt-0.5 tracking-wide">
                  Nghệ Nhân Đối Tác
                </p>
              </div>
            </div>

            {/* Mode Switcher Terracotta Button */}
            <button 
              onClick={() => navigate("/account")}
              className="flex py-3 px-4 justify-start items-center gap-2.5 rounded-[16px] bg-[#C65C39] hover:bg-[#B34F2F] active:scale-95 transition-all w-full cursor-pointer shadow-md text-left text-white border border-white/5"
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
              <span className="font-beVietnamPro text-xs font-semibold leading-tight">
                Chuyển qua chế độ<br />lữ khách
              </span>
            </button>

            {/* Sidebar Links */}
            <div className="flex flex-col w-full gap-2 mt-4">
              <button
                className="flex py-3 px-2 items-center gap-3 rounded-full w-full cursor-pointer transition-all duration-150 text-[#F8F9FA]/80 hover:bg-white/10 hover:text-white"
              >
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="font-beVietnamPro text-sm font-semibold">Quản lý đặt lịch</span>
              </button>
              
              <button
                className="flex py-3 px-2 items-center gap-3 rounded-full w-full cursor-pointer transition-all duration-150 text-[#F8F9FA]/80 hover:bg-white/10 hover:text-white"
              >
                <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-beVietnamPro text-sm font-semibold">Doanh thu & Ví</span>
              </button>
            </div>

          </div>

          {/* Quick Create CTA at the bottom of the sidebar */}
          <div className="w-full mt-auto pt-4 border-t border-white/10">
            <Link
              to="/create-workshop"
              className="flex py-3 px-5 justify-center items-center gap-2 rounded-[24px] bg-[#C65C39] hover:bg-[#B54F2D] active:scale-95 transition-all w-full cursor-pointer shadow-md text-white font-bold text-sm tracking-wide justify-center items-center"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span>+ Workshop Mới</span>
            </Link>
          </div>
        </div>

        {/* 3. Welcome Banner Header (Unified Flex Section to prevent overlaps) */}
        <div className="flex flex-col items-start w-[750px] absolute left-[343px] top-[231px] z-10 gap-5">
          <div className="flex flex-col items-start w-full">
            <p className="text-[#A6341B] font-dFVNFreckleFace text-[36px] leading-10 w-[700px] tracking-wide uppercase">
              Xin chào, nghệ nhân {personalInfo.name}! 👋
            </p>
            <p className="text-[#64748B] font-beVietnamPro text-[15px] leading-6 w-[670px] mt-3 font-medium">
              Hiện tại bạn đang có 3 Workshop đang chờ được tổ chức. Hãy chuẩn bị thật tốt nhé. Đội ngũ DISANITY chúc bạn những điều tốt đẹp nhất và trân quý cống hiến gìn giữ di sản của bạn.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="cursor-pointer text-nowrap flex py-2 px-6 justify-center items-center rounded-full border-2 border-[#A6341B] hover:bg-[#A6341B]/5 transition-all bg-white shadow-sm">
              <span className="text-[#0F172A] font-beVietnamPro text-sm font-bold leading-6">
                Hồ sơ nghệ nhân công khai
              </span>
            </button>
            
            {/* Notification Badge bell */}
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

        {/* 4. Dashboard Stats Row (top-[405px]) */}
        <div className="flex justify-start items-center gap-5 w-[960px] h-[228px] absolute left-[343px] top-[405px] z-10 overflow-visible">
          {/* Card 1: Tổng số Workshop */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#C65C39] bg-[rgba(198,92,57,0.10)] w-[220px] h-full p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-start w-fit">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 28C16.6333 28 15.3417 27.7375 14.125 27.2125C12.9083 26.6875 11.8458 25.9708 10.9375 25.0625C10.0292 24.1542 9.3125 23.0917 8.7875 21.875C8.2625 20.6583 8 19.3667 8 18C8 16.6167 8.27083 15.3167 8.8125 14.1C9.35417 12.8833 10.0875 11.825 11.0125 10.925C11.9375 10.025 13.0167 9.3125 14.25 8.7875C15.4833 8.2625 16.8 8 18.2 8C19.5333 8 20.7917 8.22917 21.975 8.6875C23.1583 9.14583 24.1958 9.77917 25.0875 10.5875C25.9792 11.3958 26.6875 12.3542 27.2125 13.4625C27.7375 14.5708 28 15.7667 28 17.05C28 18.9667 27.4167 20.4375 26.25 21.4625C25.0833 22.4875 23.6667 23 22 23H20.15C20 23 19.8958 23.0417 19.8375 23.125C19.7792 23.2083 19.75 23.3 19.75 23.4C19.75 23.6 19.875 23.8875 20.125 24.2625C20.375 24.6375 20.5 25.55C20.5 25.55C20.5 26.3833 20.2708 27 19.8125 27.4C19.3542 27.8 18.75 28 18 28ZM12.5 19C12.9333 19 13.2917 18.8583 13.575 18.575C13.8583 18.2917 14 17.9333 14 17.5C14 17.0667 13.8583 16.7083 13.575 16.425C13.2917 16.1417 12.9333 16 12.5 16C12.0667 16 11.7083 16.1417 11.425 16.425C11.1417 16.7083 11 17.0667 11 17.5C11 17.9333 11.1417 18.2917 11.425 18.575C11.7083 18.8583 12.0667 19 12.5 19ZM15.5 15C15.9333 15 16.2917 14.8583 16.575 14.575C16.8583 14.2917 17 13.9333 17 13.5C17 13.0667 16.8583 12.7083 16.575 12.425C16.2917 12.1417 15.9333 12 15.5 12C15.0667 12 14.7083 12.1417 14.425 12.425C14.1417 12.7083 14 13.0667 14 13.5C14 13.9333 14.1417 14.2917 14.425 14.575C14.7083 14.8583 15.0667 15 15.5 15ZM20.5 15C20.9333 15 21.2917 14.8583 21.575 14.575C21.8583 14.2917 22 13.9333 22 13.5C22 13.0667 21.8583 12.7083 21.575 12.425C21.2917 12.1417 20.9333 12 20.5 12C20.0667 12 19.7083 12.1417 19.425 12.425C19.1417 12.7083 19 13.0667 19 13.5C19 13.9333 19.1417 14.2917 19.425 14.575C19.7083 14.8583 20.0667 15 20.5 15ZM23.5 19C23.9333 19 24.2917 18.8583 24.575 18.575C24.8583 18.2917 25 17.9333 25 17.5C25 17.0667 24.8583 16.7083 24.575 16.425C24.2917 16.1417 23.9333 16 23.5 16C23.0667 16 22.7083 16.1417 22.425 16.425C22.1417 16.7083 22 17.0667 22 17.5C22 17.9333 22.1417 18.2917 22.425 18.575C22.7083 18.8583 23.0667 19 23.5 19ZM18 26C18.15 26 18.2708 25.9583 18.3625 25.875C18.4542 25.7917 18.5 25.6833 18.5 25.55C18.5 25.3167 18.375 25.0417 18.125 24.725C17.875 24.4083 17.75 23.9333 17.75 23.3C17.75 22.6 17.9917 22.0417 18.475 21.625C18.9583 21.2083 19.55 21 20.25 21H22C23.1 21 24.0417 20.6792 24.825 20.0375C25.6083 19.3958 26 18.4 26 17.05C26 15.0333 25.2292 13.3542 23.6875 12.0125C22.1458 10.6708 20.3167 10 18.2 10C15.9333 10 14 10.775 12.4 12.325C10.8 13.875 10 15.7667 10 18C10 20.2167 10.7792 22.1042 12.3375 23.6625C13.8958 25.2208 15.7833 26 18 26Z"
                  fill="#C65C39"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#64748B] font-beVietnamPro text-sm font-medium">
                Tổng số Workshop
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-3xl font-black leading-9 mt-1">
                {ownedWorkshops.length}
              </p>
            </div>
          </div>

          {/* Card 2: Buổi sắp tới */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#1A2F23] bg-[rgba(26,47,35,0.08)] w-[220px] h-full p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-start w-fit">
              <svg width="34" height="36" viewBox="0 0 34 36" fill="none">
                <path
                  d="M19.5 24C18.8 24 18.2083 23.7583 17.725 23.275C17.2417 22.7917 17 22.2 17 21.5C17 20.8 17.2417 20.2083 17.725 19.725C18.2083 19.2417 18.8 19 19.5 19C20.2 19 20.7917 19.2417 21.275 19.725C21.7583 20.2083 22 20.8 22 21.5C22 22.2 21.7583 22.7917 21.275 23.275C20.7917 23.7583 20.2 24 19.5 24ZM10 28C9.45 28 8.97917 27.8042 8.5875 27.4125C8.19583 27.0208 8 26.55 8 26V12C8 11.45 8.19583 10.9792 8.5875 10.5875C8.97917 10.1958 9.45 10 10 10H11V8H13V10H21V8H23V10H24C24.55 10 25.0208 10.1958 25.4125 10.5875C25.8042 10.9792 26 11.45 26 12V26C26 26.55 25.8042 27.0208 25.4125 27.4125C25.0208 27.8042 24.55 28 24 28H10ZM10 26H24V16H10V26ZM10 14H24V12H10V14ZM10 14V12V14Z"
                  fill="#1A2F23"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#64748B] font-beVietnamPro text-sm font-medium">
                Buổi sắp tới
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-3xl font-black leading-9 mt-1">
                3
              </p>
            </div>
          </div>

          {/* Card 3: Tổng lượt đặt */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#A6341B]/30 bg-white/50 w-[220px] h-full p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-start w-fit">
              <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
                <path
                  d="M18 21C18.2833 21 18.5208 20.9042 18.7125 20.7125C18.9042 20.5208 19 20.2833 19 20C19 19.7167 18.9042 19.4792 18.7125 19.2875C18.5208 19.0958 18.2833 19 18 19C17.7167 19 17.4792 19.0958 17.2875 19.2875C17.0958 19.4792 17 19.7167 17 20C17 20.2833 17.0958 20.5208 17.2875 20.7125C17.4792 20.9042 17.7167 21 18 21ZM18 17C18.2833 17 18.5208 16.9042 18.7125 16.7125C18.9042 16.5208 19 16.2833 19 16C19 15.7167 18.9042 15.4792 18.7125 15.2875C18.5208 15.0958 18.2833 15 18 15C17.7167 15 17.4792 15.0958 17.2875 15.2875C17.0958 15.4792 17 15.7167 17 16C17 16.2833 17.0958 16.5208 17.2875 16.7125C17.4792 16.9042 17.7167 17 18 17ZM18 13C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11C17.7167 11 17.4792 11.0958 17.2875 11.2875C17.0958 11.4792 17 11.7167 17 12C17 12.2833 17.0958 12.5208 17.2875 12.7125C17.4792 12.9042 17.7167 13 18 13ZM26 24H10C9.45 24 8.97917 23.8042 8.5875 23.4125C8.19583 23.0208 8 22.55 8 22V18C8.55 18 9.02083 17.8042 9.4125 17.4125C9.80417 17.0208 10 16.55 10 16C10 15.45 9.80417 14.9792 9.4125 14.5875C9.02083 14.1958 8.55 14 8 14V10C8 9.45 8.19583 8.97917 8.5875 8.5875C8.97917 8.19583 9.45 8 10 8H26C26.55 8 27.0208 8.19583 27.4125 8.5875C27.8042 8.97917 28 9.45 28 10V14C27.45 14 26.9792 14.1958 26.5875 14.5875C26.1958 14.9792 26 15.45 26 16C26 16.55 26.1958 17.0208 26.5875 17.4125C26.9792 17.8042 27.45 18 28 18V22C28 22.55 27.8042 23.0208 27.4125 23.4125C27.0208 23.8042 26.55 24 26 24ZM26 22V19.45C25.3833 19.0833 24.8958 18.5958 24.5375 17.9875C24.1792 17.3792 24 16.7167 24 16C24 15.2833 24.1792 14.6208 24.5375 14.0125C24.8958 13.4042 25.3833 12.9167 26 12.55V10H10V12.55C10.6167 12.9167 11.1042 13.4042 11.4625 14.0125C11.8208 14.6208 12 15.2833 12 16C12 16.7167 11.8208 17.3792 11.4625 17.9875C11.1042 18.5958 10.6167 19.0833 10 19.45V22H26Z"
                  fill="#475569"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#64748B] font-beVietnamPro text-sm font-medium">
                Tổng lượt đặt
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-3xl font-black leading-9 mt-1">
                5
              </p>
            </div>
          </div>

          {/* Card 4: Thu nhập */}
          <div className="shrink-0 rounded-[24px] border-2 border-[#C65C39] bg-[rgba(198,92,57,0.08)] w-[220px] h-full p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm relative overflow-hidden group">
            <div className="flex items-start w-fit">
              <svg width="38" height="32" viewBox="0 0 38 32" fill="none">
                <path
                  d="M21 17C20.1667 17 19.4583 16.7083 18.875 16.125C18.2917 15.5417 18 14.8333 18 14C18 13.1667 18.2917 12.4583 18.875 11.875C19.4583 11.2917 20.1667 11 21 11C21.8333 11 22.5417 11.2917 23.125 11.875C23.7083 12.4583 24 13.1667 24 14C24 14.8333 23.7083 15.5417 23.125 16.125C22.5417 16.7083 21.8333 17 21 17ZM14 20C13.45 20 12.9792 19.8042 12.5875 19.4125C12.1958 19.0208 12 18.55 12 18V10C12 9.45 12.1958 8.97917 12.5875 8.5875C12.9792 8.19583 13.45 8 14 8H28C28.55 8 29.0208 8.19583 29.4125 8.5875C29.8042 8.97917 30 9.45 30 10V18C30 18.55 29.8042 19.0208 29.4125 19.4125C29.0208 19.8042 28.55 20 28 20H14ZM16 18H26C26 17.45 26.1958 16.9792 26.5875 16.5875C26.9792 16.1958 27.45 16 28 16V12C27.45 12 26.9792 11.8042 26.5875 11.4125C26.1958 11.0208 26 10.55 26 10H16C16 10.55 15.8042 11.0208 15.4125 11.4125C15.0208 11.8042 14.55 12 14 12V16C14.55 16 15.0208 16.1958 15.4125 16.5875C15.8042 16.9792 16 17.45 16 18ZM27 24H10C9.45 24 8.97917 23.8042 8.5875 23.4125C8.19583 23.0208 8 22.55 8 22V11H10V22H27V24ZM14 18V10V18Z"
                  fill="#C65C39"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[#64748B] font-beVietnamPro text-sm font-medium">
                Thu nhập
              </p>
              <p className="text-[#0F172A] font-beVietnamPro text-2xl font-black leading-[36px] mt-1 text-nowrap">
                2.000.000đ
              </p>
            </div>
          </div>
        </div>

        {/* 5. Personal Info Section (top-[668px]) */}
        <div className="w-[960px] absolute left-[343px] top-[668px] z-10 overflow-visible">
          <p className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase">
            Thông tin cá nhân:
          </p>

          <div className="flex flex-col gap-4 mt-6 w-[860px]">
            {/* Field: Name */}
            <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm border border-black/5 rounded-[16px] px-6 py-4 shadow-sm h-[72px]">
              <div className="flex items-center gap-16 w-3/4">
                <span className="text-[#A6341B] font-beVietnamPro text-sm font-bold w-32 shrink-0">Họ và tên</span>
                {isEditing === "name" ? (
                  <input
                    type="text"
                    value={tempInfo.name}
                    onChange={(e) => setTempInfo({ ...tempInfo, name: e.target.value })}
                    className="bg-white border border-[#A6341B]/40 rounded-lg px-3 py-1 font-beVietnamPro text-base text-black w-72 focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                  />
                ) : (
                  <span className="text-black font-beVietnamPro text-base font-medium">{personalInfo.name}</span>
                )}
              </div>
              <div>
                {isEditing === "name" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveField("name")}
                      className="bg-[#C65C39] hover:bg-[#B34F2F] text-white font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors active:scale-95"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={() => setIsEditing(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors"
                    >
                      Hủy
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick("name")}
                    className="text-[#C65C39] hover:text-[#B34F2F] font-beVietnamPro text-sm font-bold cursor-pointer hover:underline"
                  >
                    Thay đổi
                  </button>
                )}
              </div>
            </div>

            {/* Field: Email */}
            <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm border border-black/5 rounded-[16px] px-6 py-4 shadow-sm h-[72px]">
              <div className="flex items-center gap-16 w-3/4">
                <span className="text-[#A6341B] font-beVietnamPro text-sm font-bold w-32 shrink-0">Email liên hệ</span>
                {isEditing === "email" ? (
                  <input
                    type="email"
                    value={tempInfo.email}
                    onChange={(e) => setTempInfo({ ...tempInfo, email: e.target.value })}
                    className="bg-white border border-[#A6341B]/40 rounded-lg px-3 py-1 font-beVietnamPro text-base text-black w-72 focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                  />
                ) : (
                  <span className="text-black font-beVietnamPro text-base font-medium">{personalInfo.email}</span>
                )}
              </div>
              <div>
                {isEditing === "email" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveField("email")}
                      className="bg-[#C65C39] hover:bg-[#B34F2F] text-white font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors active:scale-95"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={() => setIsEditing(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors"
                    >
                      Hủy
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick("email")}
                    className="text-[#C65C39] hover:text-[#B34F2F] font-beVietnamPro text-sm font-bold cursor-pointer hover:underline"
                  >
                    Thay đổi
                  </button>
                )}
              </div>
            </div>

            {/* Field: Phone */}
            <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm border border-black/5 rounded-[16px] px-6 py-4 shadow-sm h-[72px]">
              <div className="flex items-center gap-16 w-3/4">
                <span className="text-[#A6341B] font-beVietnamPro text-sm font-bold w-32 shrink-0">Số điện thoại</span>
                {isEditing === "phone" ? (
                  <input
                    type="text"
                    value={tempInfo.phone}
                    onChange={(e) => setTempInfo({ ...tempInfo, phone: e.target.value })}
                    className="bg-white border border-[#A6341B]/40 rounded-lg px-3 py-1 font-beVietnamPro text-base text-black w-72 focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                  />
                ) : (
                  <span className="text-black font-beVietnamPro text-base font-medium">{personalInfo.phone}</span>
                )}
              </div>
              <div>
                {isEditing === "phone" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveField("phone")}
                      className="bg-[#C65C39] hover:bg-[#B34F2F] text-white font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors active:scale-95"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={() => setIsEditing(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors"
                    >
                      Hủy
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick("phone")}
                    className="text-[#C65C39] hover:text-[#B34F2F] font-beVietnamPro text-sm font-bold cursor-pointer hover:underline"
                  >
                    Thay đổi
                  </button>
                )}
              </div>
            </div>

            {/* Field: Address */}
            <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm border border-black/5 rounded-[16px] px-6 py-4 shadow-sm h-[72px]">
              <div className="flex items-center gap-16 w-3/4">
                <span className="text-[#A6341B] font-beVietnamPro text-sm font-bold w-32 shrink-0">Địa chỉ xưởng</span>
                {isEditing === "address" ? (
                  <input
                    type="text"
                    value={tempInfo.address}
                    onChange={(e) => setTempInfo({ ...tempInfo, address: e.target.value })}
                    className="bg-white border border-[#A6341B]/40 rounded-lg px-3 py-1 font-beVietnamPro text-base text-black w-[400px] focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                  />
                ) : (
                  <span className="text-black font-beVietnamPro text-base font-medium truncate w-[450px]">{personalInfo.address}</span>
                )}
              </div>
              <div>
                {isEditing === "address" ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveField("address")}
                      className="bg-[#C65C39] hover:bg-[#B34F2F] text-white font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors active:scale-95"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={() => setIsEditing(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-beVietnamPro text-xs font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors"
                    >
                      Hủy
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick("address")}
                    className="text-[#C65C39] hover:text-[#B34F2F] font-beVietnamPro text-sm font-bold cursor-pointer hover:underline"
                  >
                    Thay đổi
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 6. Owned Workshops Section (top-[1051px]) */}
        <div className="w-[1020px] absolute left-[343px] top-[1051px] z-10 overflow-visible">
          <div className="flex justify-between items-end w-[860px] mb-6">
            <div className="flex flex-col gap-2">
              <p className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase">
                Workshop Sở Hữu:
              </p>
              <p className="text-[#64748B] font-beVietnamPro text-sm font-medium">
                Những chương trình văn hóa do nghệ nhân đăng ký trực tiếp và đang vận hành.
              </p>
            </div>
            <Link 
              to="/create-workshop"
              className="text-[#C65C39] hover:text-[#B34F2F] font-beVietnamPro text-sm font-bold cursor-pointer hover:underline flex items-center gap-1.5"
            >
              <span>+ Tạo workshop mới</span>
            </Link>
          </div>

          {/* Horizontal Workshop Grid */}
          <div className="flex items-start gap-6 w-[880px] overflow-x-auto pb-4 pr-4">
            {ownedWorkshops.map((ws) => (
              <div 
                key={ws.id}
                className="shrink-0 rounded-[28px] bg-white border border-[#A6341B]/10 hover:border-[#A6341B]/30 w-[260px] h-[415px] p-4 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Workshop Image */}
                <div className="rounded-[20px] w-full h-[180px] overflow-hidden relative shadow-inner">
                  <img
                    src={ws.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={ws.title}
                  />
                  {ws.featured && (
                    <div className="inline-flex py-1 px-3 items-center rounded-full bg-[#D4A017] absolute left-3 top-3 shadow-md">
                      <p className="text-[#4A5D4E] font-beVietnamPro text-[10px] font-bold tracking-wider uppercase">
                        Đánh giá cao
                      </p>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5 mt-3 flex-grow">
                  <p className="text-[#A6341B] font-dFVNFreckleFace text-lg tracking-wide uppercase truncate">
                    {ws.title}
                  </p>
                  <p className="text-gray-500 font-beVietnamPro text-xs leading-4 line-clamp-2 h-8 text-justify">
                    {ws.description}
                  </p>
                </div>

                {/* Price and Rating Row */}
                <div className="flex pt-3 justify-between items-center border-t border-[rgba(166,52,27,0.05)] mt-3">
                  <div className="flex items-baseline">
                    <span className="text-[#4A5D4E] font-beVietnamPro text-base font-bold">
                      {ws.price}
                    </span>
                    <span className="text-gray-400 font-beVietnamPro text-[10px] ml-0.5">
                      / người
                    </span>
                  </div>
                  
                  <div className="flex py-1 px-2.5 items-center gap-1 rounded-full bg-[rgba(212,160,23,0.1)]">
                    <span className="text-[#D4A017] font-beVietnamPro text-xs font-black">
                      ★ {ws.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Customer Reviews Section (top-[1610px]) */}
        <div className="w-[960px] absolute left-[343px] top-[1610px] z-10 overflow-visible">
          <p className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase">
            Các đánh giá từ khách hàng:
          </p>

          <div className="flex flex-col gap-5 mt-6 w-[860px] overflow-visible">
            {customerReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-white/70 backdrop-blur-sm border border-black/5 rounded-[24px] p-6 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center font-beVietnamPro text-sm font-bold text-[#A6341B] shadow-inner">
                      {rev.author.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#0F172A] font-beVietnamPro text-sm font-bold">
                        {rev.author}
                      </p>
                      <p className="text-gray-400 font-beVietnamPro text-xs font-medium">
                        Đã đặt: <span className="text-[#A6341B]/80 font-bold">{rev.workshopName}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[#696969] font-dMSans text-xs font-light">Ngày: {rev.date}</span>
                    <div className="flex py-1 px-3 items-center rounded-full bg-[rgba(212,160,23,0.1)] shadow-inner">
                      <span className="text-[#D4A017] font-beVietnamPro text-xs font-black">★ {rev.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#555] font-beVietnamPro text-[14px] leading-6 text-justify italic pl-1">
                  “ {rev.comment} ”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Shared Footer at the bottom (top-[2045px]) */}
        <Footer className="top-[2045px]" />

      </ResponsiveContainer>

      {/* Dynamic Modal Form overlay for adding new Workshop */}
      {isAddingWorkshop && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-white rounded-[24px] w-[500px] p-8 border border-[#A6341B]/20 shadow-2xl relative">
            <h3 className="text-[#A6341B] font-dFVNFreckleFace text-2xl tracking-wide uppercase mb-4">
              + Tạo Workshop Di Sản Mới
            </h3>
            
            <form onSubmit={handleAddWorkshopSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-beVietnamPro text-sm font-semibold mb-1.5">
                  Tên buổi Workshop di sản
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Đất Sét Nung Chu Đậu"
                  value={newWsData.title}
                  onChange={(e) => setNewWsData({ ...newWsData, title: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 font-beVietnamPro text-base text-black focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-beVietnamPro text-sm font-semibold mb-1.5">
                  Phân loại ngành nghề
                </label>
                <select
                  value={newWsData.category}
                  onChange={(e) => setNewWsData({ ...newWsData, category: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 font-beVietnamPro text-base text-black focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                >
                  <option>Mỹ thuật truyền thống</option>
                  <option>Nghề dệt & Sợi cổ truyền</option>
                  <option>Điêu khắc gỗ & Tre</option>
                  <option>Gốm sứ di sản</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-beVietnamPro text-sm font-semibold mb-1.5">
                  Giá vé tham gia (VNĐ / người)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: 850.000đ"
                  value={newWsData.price}
                  onChange={(e) => setNewWsData({ ...newWsData, price: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 font-beVietnamPro text-base text-black focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-beVietnamPro text-sm font-semibold mb-1.5">
                  Tóm tắt nội dung trải nghiệm
                </label>
                <textarea
                  rows={3}
                  placeholder="Quy trình thực hiện, nguyên vật liệu chuẩn bị..."
                  value={newWsData.description}
                  onChange={(e) => setNewWsData({ ...newWsData, description: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 font-beVietnamPro text-sm text-black focus:outline-none focus:ring-1 focus:ring-[#A6341B]"
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddingWorkshop(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-beVietnamPro text-sm font-bold py-2.5 px-5 rounded-full cursor-pointer transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="bg-[#C65C39] hover:bg-[#B34F2F] text-white font-beVietnamPro text-sm font-bold py-2.5 px-5 rounded-full cursor-pointer transition-colors shadow-md active:scale-95"
                >
                  Tạo & Gửi Duyệt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

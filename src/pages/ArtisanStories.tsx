"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { mockTestimonials } from "@/utils/mockData";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function ArtisanStoriesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = mockTestimonials;

  const handleBookTickets = () => {
    alert('Đã đăng ký vé Sự Kiện SẮC DIỆN SƠN NAM thành công! Đội ngũ DiSanity sẽ liên hệ xác nhận trong 15 phút.');
  };

  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Container viewport 1440px wide by 4082px high matching Figma Artisan Stories Page.
        This provides a pixel-perfect, highly premium centered frame.
      */}
      <ResponsiveContainer originalHeight={4082}>
        
        {/* Mockup Background Image - Wood grain texture showing rich background details */}
        <img
          src="/cauchuyennghenhan/Image161.png"
          className="w-full h-[8232px] absolute left-0 -top-[34px] max-w-none opacity-90 pointer-events-none"
          alt="image 161 background base"
        />

        {/* 1. Shared Header (0px - 181px) */}
        <Header />

        {/* 2. Main Article Header & Slider Section (281px - 1070px) */}
        <div className="w-[1240px] h-[789px] absolute left-[100px] top-[281px] overflow-visible">
          <p className="text-[#000] font-jaro text-[64px] leading-[46px] w-[685px] h-[46px] absolute left-0 top-0 uppercase tracking-wide">
            CÂU CHUYỆN NGHỆ NHÂN
          </p>
          <p className="text-[#757575] font-dMSans text-lg leading-[30px] w-[500px] h-[60px] absolute left-0 top-[62px] font-light">
            Những mảnh ký ức nghề, tinh thần truyền lửa sống động qua từng dòng ghi chép và hình ảnh chân thực.
          </p>

          {/* Slider Controls */}
          <div className="w-[150px] h-16 absolute left-[1090px] top-[62px] flex gap-4">
            <button className="w-[65px] h-16 bg-white/10 hover:bg-white/20 active:scale-95 transition-all rounded-full flex items-center justify-center cursor-pointer border border-black/5 shadow-sm">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-7 h-7">
                <path d="M19.25 3.5L8.75 14L19.25 24.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-[65px] h-16 bg-[#6C0B0B] hover:bg-[#A6341B] active:scale-95 transition-all rounded-full flex items-center justify-center cursor-pointer shadow-md group">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="w-7 h-7">
                <path d="M8.75 24.5L19.25 14L8.75 3.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Article Banner Block */}
          <div className="w-[1240px] h-[623px] absolute left-0 top-[166px]">
            {/* Transparent Black Base Card (68% opacity) */}
            <div className="bg-[#000]/68 w-[1240px] h-[623px] absolute left-0 top-0 rounded-[24px] shadow-lg border border-white/5 pointer-events-none" />
            
            {/* Showcase Image on the Left */}
            <div className="w-[560px] h-[623px] absolute left-0 top-0 overflow-visible z-10 group">
              <img
                src="/cauchuyennghenhan/Container.png"
                className="rounded-[25px] w-[560px] h-[623px] absolute left-0 top-0 max-w-none object-cover shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
                alt="Container"
              />
            </div>

            {/* Absolute Text Blocks on the Right */}
            <p className="text-[#FEF3B1] font-dMSans text-[28px] font-bold leading-[38px] w-[492px] h-[76px] absolute left-[656px] top-36 z-20">
              Nữ nghệ nhân gìn giữ, “thắp sáng” đèn ông sao
            </p>
            <p className="text-[#FEF3B1]/90 font-dMSans text-lg leading-[30px] w-[489px] h-[90px] absolute left-[656px] top-[232px] z-20 font-light text-justify">
              Nghệ nhân Nguyễn Thị Tuyến tại làng Hậu Ái (Hà Nội) giữ gìn nghề truyền thống, miệt mài “thắp sáng” cho những cây đèn ông sao mỗi dịp Trung thu về. 
            </p>
            <p className="text-[#FEF3B1] font-dMSans text-xl font-light leading-5 w-[117px] h-5 absolute left-[656px] top-[392px] z-20 opacity-80 uppercase tracking-wider">
              Bài viết
            </p>
            <p className="text-[#FEF3B1] font-dMSans text-xl font-bold leading-5 w-64 h-5 absolute left-[656px] top-[424px] z-20">
              HỒNG PHÚC
            </p>

            {/* Read Article Button linked cleanly */}
            <Link
              to="/workshops/list"
              className="absolute right-12 bottom-12 px-6 py-3 border border-[#FEF3B1]/30 hover:border-[#FEF3B1] text-[#FEF3B1] rounded-full text-base font-semibold transition-all hover:bg-[#FEF3B1]/10 z-30"
            >
              Đọc bài viết
            </Link>
          </div>
        </div>

        {/* 3. Guest Journey & Testimonials Section (1268px - 1705px) */}
        <div className="w-[1140px] h-[437px] absolute left-[190px] top-[1268px] overflow-visible">
          <p className="text-[#A6341B] font-jaro text-[64px] leading-[46px] w-[763px] h-[46px] absolute left-[189px] top-0 text-center uppercase tracking-wide">
            HÀNH TRÌNH ĐẾN VỚI VĂN HÓA
          </p>
          
          {/* Dynamic Review Quote based on active selected traveler */}
          <p className="text-[#555] font-dMSans text-[22px] leading-10 w-[780px] h-[160px] absolute left-[180px] top-[126px] text-center italic font-medium transition-all duration-300">
            “ {testimonials[activeTestimonial].quote} ”
          </p>

          <div className="opacity-[25%] bg-[#696969] w-[1140px] h-px absolute left-0 top-[347px]"></div>
          
          {/* Selected Indicator Highlight Bar */}
          <div 
            className="bg-[#A6341B] h-0.5 absolute top-[346px] transition-all duration-300 rounded"
            style={{
              left: `${testimonials[activeTestimonial].left + 15}px`,
              width: "210px",
            }}
          />

          {/* Testimonial Tabs */}
          {testimonials.map((test, index) => {
            const isActive = activeTestimonial === index;
            return (
              <div 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className="w-[260px] h-[50px] absolute top-[387px] flex items-center gap-3 cursor-pointer group transition-all"
                style={{ left: `${test.left}px` }}
              >
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 transition-all relative shrink-0"
                  style={{ borderColor: isActive ? "#A6341B" : "rgba(166,52,27,0.1)" }}
                >
                  <img
                    src={test.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    alt={test.name}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className={`font-dMSans text-lg font-bold leading-5 transition-colors ${
                    isActive ? "text-[#A6341B]" : "text-[#000] group-hover:text-[#A6341B]/80"
                  }`}>
                    {test.name}
                  </p>
                  <p className="text-[#696969] font-dMSans text-sm leading-[18px]">
                    {test.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Heritage Showcase Columns Section (1867px - 2650px) */}
        <div className="w-full h-[783px] absolute left-0 top-[1867px] overflow-visible">
          <p className="text-[#000] font-jaro text-[64px] leading-[46px] w-[496px] h-[46px] absolute left-[475px] top-0 text-center uppercase tracking-wide">
            LÀNG NGHỀ &amp; DI SẢN
          </p>
          <p className="text-[#555] font-dMSans text-lg leading-[30px] w-[614px] h-[60px] absolute left-[416px] top-[62px] text-center font-light">
            Những góc nhìn độc đáo, cận cảnh về đời sống làng quê Việt Nam qua ống kính nghệ thuật của các nhiếp ảnh gia.
          </p>

          {/* Three large vertical showcase images */}
          <div className="w-full h-[608px] absolute left-0 top-[175px] flex">
            {/* Column 1 */}
            <div className="w-[480px] h-[608px] relative overflow-hidden group shadow-md border-r border-black/5 cursor-pointer">
              <img
                src="/cauchuyennghenhan/Container(1).png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 opacity-80"
                alt="Heritage 1"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Column 2 (Main active with credits) */}
            <div className="w-[480px] h-[608px] relative overflow-hidden group shadow-md border-r border-black/5 cursor-pointer">
              <img
                src="/cauchuyennghenhan/Container(3).png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                alt="Heritage 2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12 text-center items-center">
                <p className="text-[#FFF] font-dMSans text-[28px] font-bold leading-[38px] drop-shadow-md">
                  Sophie Moore
                </p>
                <p className="text-[#FFF] font-dMSans text-sm font-medium leading-[18px] tracking-[0.1em] uppercase opacity-90 mt-1">
                  Ceo &amp; Co-Founder
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-[480px] h-[608px] relative overflow-hidden group shadow-md cursor-pointer">
              <img
                src="/cauchuyennghenhan/Container(2).png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 opacity-85"
                alt="Heritage 3"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
          </div>
        </div>

        {/* 5. Staggered Stacks Event Gallery & Details Section (2895px - 3500px) */}
        <div className="w-[1211px] h-[604px] absolute left-[115px] top-[2895px] overflow-visible">
          {/* Staggered Event Image Gallery Stack on Left */}
          <div className="w-[580px] h-[604px] absolute left-0 top-0 overflow-visible">
            {/* Back Small Staggered Card */}
            <img
              src="/cauchuyennghenhan/ImagePlaceholder.png"
              className="shadow-[-7px_4px_15px_rgba(0,0,0,0.35)] w-[265px] h-[399px] absolute left-0 top-[115px] max-w-none rounded-[16px] object-cover transition-all duration-300 hover:-translate-y-2 cursor-pointer z-10"
              alt="Event Stack Back"
            />
            {/* Middle Medium Staggered Card */}
            <img
              src="/cauchuyennghenhan/ImagePlaceholder(1).png"
              className="shadow-[-11px_4px_18px_rgba(0,0,0,0.4)] w-[336px] h-[477px] absolute left-[61px] top-[76px] max-w-none rounded-[20px] object-cover transition-all duration-300 hover:-translate-y-2 cursor-pointer z-20"
              alt="Event Stack Middle"
            />
            {/* Front Large Staggered Card */}
            <img
              src="/cauchuyennghenhan/ImagePlaceholder(2).png"
              className="shadow-[-17px_4px_24px_rgba(0,0,0,0.45)] w-[427px] h-[604px] absolute left-[153px] top-0 max-w-none rounded-[24px] object-cover transition-all duration-300 hover:-translate-y-2 cursor-pointer z-30"
              alt="Event Stack Front"
            />

            {/* Slider Navigation Chevron Controls */}
            <div className="w-[38px] h-[38px] absolute left-[58px] top-[326px] z-40 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" className="w-2 h-4">
                <path d="M8.88755 16.7751L1 8.88755L8.88755 1" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Staggered Event Content Card on Right */}
          <div className="w-[608px] absolute left-[603px] top-5 overflow-visible flex flex-col gap-4">
            <div>
              <p className="text-[#1B1717] font-jaro text-[64px] tracking-[0.07em] uppercase leading-tight">
                SỰ KIỆN SẮP DIỄN RA
              </p>
            </div>
            
            <p className="text-[#A6341B] font-dFVNFreckleFace text-[32px] tracking-[0.07em] uppercase leading-9 mt-1">
              SẮC DIỆN SƠN NAM
            </p>
            
            <p className="text-[#555] font-beVietnam text-[15.5px] leading-[28px] text-justify font-medium mt-1">
              Trải nghiệm khám phá mỹ thuật đình miếu và nghệ thuật mặt nạ hát bội miền Nam qua một buổi thực hành sáng tạo cùng nghệ nhân.
              <br /><br />
              • <strong>Nội dung:</strong> Giải mã màu sắc &amp; biểu tượng trong mặt nạ truyền thống. Thực hành vẽ và tạo hình mặt nạ dân gian. Nghe kể chuyện về không gian lễ hội Nam Bộ.
              <br />
              • <strong>Thời gian:</strong> 28.06.2026
              <br />
              • <strong>Địa điểm:</strong> TP. Hồ Chí Minh
              <br /><br />
              Một buổi chạm vào tinh thần lễ hội phương Nam — qua sắc đỏ, đường nét và ký ức văn hoá.
            </p>

            {/* Interactive Buy Tickets Button */}
            <button
              onClick={handleBookTickets}
              className="w-[183px] h-[46px] rounded bg-[#6C0B0B] hover:bg-[#A6341B] active:scale-95 transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer group mt-2"
            >
              <span className="text-[#FFF] font-poppins text-sm font-semibold tracking-[0.1em] uppercase">
                ĐẶT VÉ
              </span>
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="shrink-0 w-5 h-[15px] transition-transform duration-200 group-hover:translate-x-0.5">
                <path d="M13.58 12L10 9.84375L6.42 12L7.5 8.1375L4.21 5.625L8.46 5.38125L10 1.6875L11.54 5.38125L15.79 5.625L12.5 8.1375M18 7.5C18 7.00272 18.2107 6.52581 18.5858 6.17418C18.9609 5.82254 19.4696 5.625 20 5.625V1.875C20 1.37772 19.7893 0.900805 19.4142 0.549175C19.0391 0.197544 18.5304 0 18 0H2C1.46957 0 0.960859 0.197544 0.585786 0.549175C0.210714 0.900805 0 1.37772 0 1.875V5.625C0.530433 5.625 1.03914 5.82254 1.41421 6.17418C1.78929 6.52581 2 7.00272 2 7.5C2 7.99728 1.78929 8.47419 1.41421 8.82582C1.03914 9.17746 0.530433 9.375 0 9.375V13.125C0 13.6223 0.210714 14.0992 0.585786 14.4508C0.960859 14.8025 1.46957 15 2 15H18C18.5304 15 19.0391 14.8025 19.4142 14.4508C19.7893 14.0992 20 13.6223 20 13.125V9.375C19.4696 9.375 18.9609 9.17746 18.5858 8.82582C18.2107 8.47419 18 7.99728 18 7.5Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* 6. Shared Footer (3253px - 4082px) */}
        <Footer className="top-[3253px]" />

      </ResponsiveContainer>
    </div>
  );
}

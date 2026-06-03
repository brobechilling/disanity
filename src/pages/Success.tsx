"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function SuccessCheckoutPage() {
  const navigate = useNavigate();

  // Stateful ticket booking prompt
  const [isBooked, setIsBooked] = useState(false);

  const handleBookTicket = () => {
    setIsBooked(true);
    alert("Đăng ký thành công! Thông tin đặt vé Sự Kiện 'Sắc Diện Sơn Nam' sẽ sớm được gửi tới email của bạn.");
  };

  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Centered high-fidelity success container (1440px wide by 2577px high)
        matching your exact canvas dimensions and absolute coordinate schemas.
      */}
      <ResponsiveContainer originalHeight={2577}>
        
        {/* Background wood texture image base */}
        <img
          src="/sucess/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-100 pointer-events-none"
          alt="image 143 background base"
        />

        {/* 1. Shared Header Section (0px - 181px) */}
        <Header />

        {/* 2. Page Typography Title Area */}
        <div className="flex flex-col items-center shadow-[0_1px_1px_rgba(0,0,0,0.05)] w-[926px] absolute left-[266px] top-[203px] z-10">
          <p className="text-[#A6341B] font-jaro text-[64px] leading-[72px] w-[992px] text-center uppercase tracking-wide">
            THANH TOÁN THÀNH CÔNG
          </p>
        </div>

        {/* 3. Progress Checkout Step Timeline Tracker (top-[347px]) */}
        <div className="w-[880px] h-[69px] absolute left-[291px] top-[347px] z-10">
          {/* Progress Connector Lines */}
          <div className="absolute left-[37px] top-[59px] w-[381px] h-[1px] bg-[#A6341B]"></div>
          <div className="absolute left-[436px] top-[59px] w-[373px] h-[1px] bg-[#A6341B]"></div>

          {/* Step 1: Giỏ hàng */}
          <Link 
            to="/cart"
            className="absolute left-0 top-0 text-left outline-none cursor-pointer group"
          >
            <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/70 group-hover:text-[#A6341B] transition-colors">
              Giỏ hàng
            </p>
            <div className="w-5 h-5 rounded-full absolute left-[17px] top-[49px] border-2 border-[#A6341B] bg-white flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A6341B]"></div>
            </div>
          </Link>

          {/* Step 2: Thông tin khách hàng */}
          <Link 
            to="/checkout/info"
            className="absolute left-[338px] top-0 text-left outline-none cursor-pointer group"
          >
            <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/70 group-hover:text-[#A6341B] transition-colors">
              Thông tin khách hàng
            </p>
            <div className="w-5 h-5 rounded-full absolute left-[71px] top-[49px] border-2 border-[#A6341B] bg-white flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A6341B]"></div>
            </div>
          </Link>

          {/* Step 3: Thanh toán */}
          <div className="absolute left-[783px] top-0 text-left cursor-default">
            <p className="font-beVietnamPro text-base font-black text-[#A6341B] tracking-[0.02em]">
              Thanh toán
            </p>
            <div className="w-5 h-5 rounded-full absolute left-[26px] top-[49px] border-2 border-[#A6341B] bg-[#A6341B] flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* 4. Stepped Hierarchy Succes/Thank-You Banner Blocks (top-[485px] - top-[1245px]) */}
        <div className="w-full h-[760px] absolute left-0 top-[485px] z-10 overflow-visible">
          {/* Left card container: Về trang chủ parent card */}
          <div className="w-[481px] h-[611px] absolute left-0 top-[149px] hover:-translate-y-2 transition-transform duration-500 rounded-[28px] overflow-hidden shadow-xl border border-[#A6341B]/10">
            <img
              src="/sucess/Container.png"
              className="w-full h-full object-cover"
              alt="Left Container"
            />
            {/* Embedded button overlay description */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 bg-gradient-to-t from-black/40 to-transparent">
              <p className="text-[#FFF] font-beVietnamPro text-[28px] font-bold leading-[38px] w-[237px] h-[38px] text-center drop-shadow-md select-none">
                Về trang chủ
              </p>
            </div>
          </div>

          {/* Right card container: Khám phá thêm parent card */}
          <div className="w-[481px] h-[611px] absolute left-[961px] top-[149px] hover:-translate-y-2 transition-transform duration-500 rounded-[28px] overflow-hidden shadow-xl border border-[#A6341B]/10">
            <img
              src="/sucess/Container(1).png"
              className="w-full h-full object-cover"
              alt="Right Container"
            />
            {/* Embedded button overlay description */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 bg-gradient-to-t from-black/40 to-transparent">
              <p className="text-[#FFF] font-beVietnamPro text-[28px] font-bold leading-[38px] w-[237px] h-[38px] text-center drop-shadow-md select-none">
                Khám phá thêm
              </p>
            </div>
          </div>

          {/* Center stepped active container block (tallest/hero card) */}
          <div className="w-[1210px] h-[611px] absolute left-[116px] top-0 flex justify-center overflow-visible">
            {/* Stepped Hero Center Card */}
            <div className="w-[481px] h-[611px] absolute left-[365px] top-0 hover:-translate-y-2 transition-transform duration-500 rounded-[28px] overflow-hidden shadow-2xl border-2 border-[#A6341B]/20">
              <img
                src="/sucess/Container(2).png"
                className="w-full h-full object-cover"
                alt="Center stepped active Container"
              />
            </div>
            
            {/* Stepped Card Overlay Content Texts */}
            <p className="text-[#FFF] font-beVietnamPro text-[28px] font-black leading-[38px] w-[427px] h-[76px] absolute left-[399px] top-[229px] text-center drop-shadow-md select-none">
              Tụi mình xin chân thành cảm ơn sự góp mặt của bạn
            </p>
            <p className="text-[#F4CA80] font-beVietnamPro text-sm font-medium leading-[22px] w-[342px] h-[72px] absolute left-[439px] top-[320px] text-center tracking-[0.1em] drop-shadow-sm select-none">
              Các thông tin sẽ luôn được gửi đến bạn ngay khi có cập nhật mới nhất. Xin vui lòng kiểm tra hộp thư thường xuyên
            </p>
          </div>
        </div>

        {/* Dynamic Buttons linked with routing trigger cards */}
        {/* Button 1: Về trang chủ (left-[127px] top-[907px]) */}
        <Link 
          to="/"
          className="rounded-[20px] border-2 border-[#FFF] hover:bg-white/10 active:scale-95 transition-all w-[215px] h-[65px] absolute left-[127px] top-[907px] z-20 flex items-center justify-center cursor-pointer shadow-md bg-transparent"
        >
          <span className="text-white font-beVietnamPro text-lg font-bold tracking-wide select-none">
            Về trang chủ
          </span>
        </Link>

        {/* Button 2: Khám phá thêm (left-[1084px] top-[907px]) */}
        <Link 
          to="/workshops/list"
          className="rounded-[20px] border-2 border-[#FFF] hover:bg-white/10 active:scale-95 transition-all w-[246px] h-[65px] absolute left-[1084px] top-[907px] z-20 flex items-center justify-center cursor-pointer shadow-md bg-transparent"
        >
          <span className="text-white font-beVietnamPro text-lg font-bold tracking-wide select-none">
            Khám phá thêm
          </span>
        </Link>

        {/* 5. "SỰ KIỆN SẮP DIỄN RA" Section (top-[1411px] h-[604px]) */}
        <div className="w-[1211px] h-[604px] absolute left-[104px] top-[1411px] z-10 overflow-visible">
          <div className="w-full h-full relative">
            
            {/* Overlapping Event Posters Stacked Collage (Left side) */}
            {/* Poster 1 (Furthest Back) */}
            <img
              src="/sucess/ImagePlaceholder.png"
              className="shadow-[-7px_4px_9.1px_0_rgba(0,0,0,0.25)] w-[265px] h-[399px] absolute left-0 top-[115px] max-w-none rounded-[16px] border border-black/5 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 z-10 object-cover"
              alt="Event Poster Back"
            />
            {/* Poster 2 (Middle) */}
            <img
              src="/sucess/ImagePlaceholder(1).png"
              className="shadow-[-11px_4px_7.4px_0_rgba(0,0,0,0.25)] w-[336px] h-[477px] absolute left-[61px] top-[76px] max-w-none rounded-[16px] border border-black/5 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 z-20 object-cover"
              alt="Event Poster Middle"
            />
            {/* Poster 3 (Forefront) */}
            <img
              src="/sucess/ImagePlaceholder(2).png"
              className="shadow-[-17px_4px_9.4px_0_rgba(0,0,0,0.25)] w-[427px] h-[604px] absolute left-[153px] top-0 max-w-none rounded-[20px] border border-[#F4CA80]/30 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 z-30 object-cover"
              alt="Event Poster Forefront"
            />

            {/* Event Description Panel (Right side) */}
            <div className="w-[608px] absolute left-[603px] top-5 z-40 flex flex-col gap-4">
              
              {/* Event spotlight headers */}
              <div>
                <p className="text-[#1B1717] font-jaro text-[64px] tracking-[0.07em] uppercase leading-tight">
                  SỰ KIỆN SẮP DIỄN RA
                </p>
              </div>
              
              <p className="text-[#A6341B] font-dFVNFreckleFace text-[32px] tracking-[0.07em] uppercase leading-none mt-1">
                SẮC DIỆN SƠN NAM
              </p>
              
              {/* Event Description details */}
              <p className="text-[#6E6E6E] font-beVietnam text-base leading-7 text-justify font-medium mt-1">
                Trải nghiệm khám phá mỹ thuật đình miếu và nghệ thuật mặt nạ hát
                bội miền Nam qua một buổi thực hành sáng tạo cùng nghệ nhân.
                <br /><br />
                <strong>Nội dung:</strong>
                <br />
                • Giải mã màu sắc &amp; biểu tượng trong mặt nạ truyền thống
                <br />
                • Thực hành vẽ và tạo hình mặt nạ dân gian dưới sự hướng dẫn
                <br />
                • Nghe kể chuyện về không gian văn hóa lễ hội Nam Bộ
                <br /><br />
                <strong>Thời gian:</strong> 28.06.2026
                <br />
                <strong>Địa điểm:</strong> TP. Hồ Chí Minh
                <br /><br />
                Một buổi chạm vào tinh thần lễ hội phương Nam — qua sắc đỏ,
                đường nét và ký ức văn hoá.
              </p>

              {/* Maroon ĐẶT VÉ CTA Button block */}
              <button 
                onClick={handleBookTicket}
                className="cursor-pointer text-nowrap flex items-center justify-start rounded-[12px] bg-[#6C0B0B] hover:bg-[#520808] active:scale-95 transition-all w-[183px] h-[46px] shadow-md px-5 border border-white/5 group mt-2"
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="text-[#FFF] font-poppins text-sm font-bold tracking-[0.1em] text-center select-none flex-grow">
                    ĐẶT VÉ
                  </span>
                  
                  {/* SVG ticket icon */}
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-[15px] transition-transform duration-200 group-hover:scale-105"
                  >
                    <path
                      d="M13.58 12L10 9.84375L6.42 12L7.5 8.1375L4.21 5.625L8.46 5.38125L10 1.6875L11.54 5.38125L15.79 5.625L12.5 8.1375M18 7.5C18 7.00272 18.2107 6.52581 18.5858 6.17418C18.9609 5.82254 19.4696 5.625 20 5.625V1.875C20 1.37772 19.7893 0.900805 19.4142 0.549175C19.0391 0.197544 18.5304 0 18 0H2C1.46957 0 0.960859 0.197544 0.585786 0.549175C0.210714 0.900805 0 1.37772 0 1.875V5.625C0.530433 5.625 1.03914 5.82254 1.41421 6.17418C1.78929 6.52581 2 7.00272 2 7.5C2 7.99728 1.78929 8.47419 1.41421 8.82582C1.03914 9.17746 0.530433 9.375 0 9.375V13.125C0 13.6223 0.210714 14.0992 0.585786 14.4508C0.960859 14.8025 1.46957 15 2 15H18C18.5304 15 19.0391 14.8025 19.4142 14.4508C19.7893 14.0992 20 13.6223 20 13.125V9.375C19.4696 9.375 18.9609 9.17746 18.5858 8.82582C18.2107 8.47419 18 7.99728 18 7.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>

            </div>
          </div>
        </div>

        {/* 6. Shared Footer Section (top-[1755px] - top-[2577px]) */}
        <Footer className="top-[1755px]" />

      </ResponsiveContainer>
    </div>
  );
}

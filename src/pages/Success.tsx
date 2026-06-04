"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import UpcomingEvent from "@/components/domain/UpcomingEvent";

export default function Success() {
  const navigate = useNavigate();

  // Stateful ticket booking prompt
  const [isBooked, setIsBooked] = useState(false);

  const handleBookTicket = () => {
    setIsBooked(true);
    alert("Đăng ký thành công! Thông tin đặt vé Sự Kiện 'Sắc Diện Sơn Nam' sẽ sớm được gửi tới email của bạn.");
  };

  return (
    <PageShell background="success">
      <SiteHeader />

      <main className="overflow-hidden">
        {/* 1. Page Typography Title Area & Checkout Step Timeline Tracker */}
        <Section width="screen" gutter="none" className="mt-[47px]">
          <div className="relative mx-auto h-[213px] w-[1440px] max-w-full overflow-visible">
            <div className="absolute left-[266px] top-0 z-10 flex w-[926px] flex-col items-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <p className="w-[992px] text-center font-jaro text-[54px] uppercase leading-[72px] tracking-wide text-[#A6341B]">
                THANH TOÁN THÀNH CÔNG
              </p>
            </div>

            <div className="absolute left-[291px] top-[144px] z-10 h-[69px] w-[880px]">
              {/* Progress Connector Lines */}
              <div className="absolute left-[37px] top-[59px] h-[1px] w-[381px] bg-[#A6341B]"></div>
              <div className="absolute left-[436px] top-[59px] h-[1px] w-[373px] bg-[#A6341B]"></div>

              {/* Step 1: Giỏ hàng */}
              <Link
                to="/cart"
                className="group absolute left-0 top-0 cursor-pointer text-left outline-none"
              >
                <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/70 transition-colors group-hover:text-[#A6341B]">
                  Giỏ hàng
                </p>
                <div className="absolute left-[17px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#A6341B] bg-white shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#A6341B]"></div>
                </div>
              </Link>

              {/* Step 2: Thông tin khách hàng */}
              <Link
                to="/checkout/info"
                className="group absolute left-[338px] top-0 cursor-pointer text-left outline-none"
              >
                <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/70 transition-colors group-hover:text-[#A6341B]">
                  Thông tin khách hàng
                </p>
                <div className="absolute left-[71px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#A6341B] bg-white shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#A6341B]"></div>
                </div>
              </Link>

              {/* Step 3: Thanh toán */}
              <div className="absolute left-[783px] top-0 cursor-default text-left">
                <p className="font-beVietnamPro text-base font-black tracking-[0.02em] text-[#A6341B]">
                  Thanh toán
                </p>
                <div className="absolute left-[26px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#A6341B] bg-[#A6341B] shadow-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Stepped Hierarchy Succes/Thank-You Banner Blocks */}
        <Section width="screen" gutter="none" className="mt-[69px]">
          <div className="relative mx-auto h-[640px] w-[1440px] max-w-full overflow-visible">
            {/* Left card container: Về trang chủ parent card */}
            <div className="absolute left-[90px] top-[106px] h-[534px] w-[420px] overflow-hidden border border-[#A6341B]/10 shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/sucess/Container.png"
                className="h-full w-full object-cover"
                alt="Left Container"
              />
              
            </div>

            {/* Right card container: Khám phá thêm parent card */}
            <div className="absolute left-[930px] top-[106px] h-[534px] w-[420px] overflow-hidden border border-[#A6341B]/10 shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/sucess/Container(1).png"
                className="h-full w-full object-cover"
                alt="Right Container"
              />
              
            </div>

            {/* Center stepped active container block (tallest/hero card) */}
            <div className="absolute left-[90px] top-0 flex h-[534px] w-[1260px] justify-center overflow-visible">
              {/* Stepped Hero Center Card */}
              <div className="absolute left-[420px] top-0 h-[534px] w-[420px] overflow-hidden border-2 border-[#A6341B]/20 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <img
                  src="/sucess/Container(2).png"
                  className="h-full w-full object-cover"
                  alt="Center stepped active Container"
                />
              </div>

              {/* Stepped Card Overlay Content Texts */}
              <p className="absolute left-[444px] top-[200px] h-[64px] w-[372px] select-none text-center font-beVietnamPro text-[24px] font-black leading-[32px] text-[#FFF] drop-shadow-md">
                Tụi mình xin chân thành cảm ơn sự góp mặt của bạn
              </p>
              <p className="absolute left-[476px] top-[280px] h-[66px] w-[308px] select-none text-center font-beVietnamPro text-[17px] font-medium leading-[20px] tracking-[0.1em] text-[#FFF] drop-shadow-sm">
                Các thông tin sẽ luôn được gửi đến bạn ngay khi có cập nhật mới nhất. Xin vui lòng kiểm tra hộp thư thường xuyên
              </p>
            </div>

            {/* Dynamic Buttons linked with routing trigger cards */}
            <Link
              to="/"
              className="absolute left-[192px] top-[365px] z-20 flex h-[65px] w-[215px] cursor-pointer items-center justify-center rounded-[20px] border-2 border-[#FFF] bg-transparent shadow-md transition-all hover:bg-white/10 active:scale-95"
            >
              <span className="select-none font-beVietnamPro text-lg font-bold tracking-wide text-white">
                Về trang chủ
              </span>
            </Link>

            <Link
              to="/workshops/list"
              className="absolute left-[1017px] top-[365px] z-20 flex h-[65px] w-[246px] cursor-pointer items-center justify-center rounded-[20px] border-2 border-[#FFF] bg-transparent shadow-md transition-all hover:bg-white/10 active:scale-95"
            >
              <span className="select-none font-beVietnamPro text-lg font-bold tracking-wide text-white">
                Khám phá thêm
              </span>
            </Link>
          </div>
        </Section>

        <UpcomingEvent />        

        <div className="mt-[120px]">
          <SiteFooter />
        </div>
      </main>
    </PageShell>
  );
}

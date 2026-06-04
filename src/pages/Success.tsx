"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";

export default function SuccessCheckoutPage() {
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
              <p className="w-[992px] text-center font-jaro text-[64px] uppercase leading-[72px] tracking-wide text-[#A6341B]">
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

        {/* 3. "SỰ KIỆN SẮP DIỄN RA" Section */}
        <Section width="screen" gutter="none" className="mt-[166px]">
          <div className="relative mx-auto h-[520px] w-[1440px] max-w-full overflow-visible">
            <div className="absolute left-[199px] top-0 z-10 h-[604px] w-[1211px] origin-top-left scale-[0.86] overflow-visible">
              <div className="relative h-full w-full">
                {/* Overlapping Event Posters Stacked Collage (Left side) */}
                <img
                  src="/sucess/ImagePlaceholder.png"
                  className="absolute left-0 top-[115px] z-10 h-[399px] w-[265px] max-w-none rounded-[16px] border border-black/5 object-cover shadow-[-7px_4px_9.1px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
                  alt="Event Poster Back"
                />
                <img
                  src="/sucess/ImagePlaceholder(1).png"
                  className="absolute left-[61px] top-[76px] z-20 h-[477px] w-[336px] max-w-none rounded-[16px] border border-black/5 object-cover shadow-[-11px_4px_7.4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
                  alt="Event Poster Middle"
                />
                <img
                  src="/sucess/ImagePlaceholder(2).png"
                  className="absolute left-[153px] top-0 z-30 h-[604px] w-[427px] max-w-none rounded-[20px] border border-[#F4CA80]/30 object-cover shadow-[-17px_4px_9.4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
                  alt="Event Poster Forefront"
                />

                {/* Event Description Panel (Right side) */}
                <div className="absolute left-[603px] top-5 z-40 flex w-[608px] flex-col gap-4">
                  <div>
                    <p className="font-jaro text-[64px] uppercase leading-tight tracking-[0.07em] text-[#1B1717]">
                      SỰ KIỆN SẮP DIỄN RA
                    </p>
                  </div>

                  <p className="mt-1 font-dFVNFreckleFace text-[32px] uppercase leading-none tracking-[0.07em] text-[#A6341B]">
                    SẮC DIỆN SƠN NAM
                  </p>

                  <p className="mt-1 text-justify font-beVietnam text-base font-medium leading-7 text-[#6E6E6E]">
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
                    className="group mt-2 flex h-[46px] w-[183px] cursor-pointer text-nowrap items-center justify-start rounded-[12px] border border-white/5 bg-[#6C0B0B] px-5 shadow-md transition-all hover:bg-[#520808] active:scale-95"
                  >
                    <div className="flex w-full items-center gap-3">
                      <span className="flex-grow select-none text-center font-poppins text-sm font-bold tracking-[0.1em] text-[#FFF]">
                        ĐẶT VÉ
                      </span>

                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[15px] w-5 transition-transform duration-200 group-hover:scale-105"
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
          </div>
        </Section>

        <div className="mt-[120px]">
          <SiteFooter />
        </div>
      </main>
    </PageShell>
  );
}

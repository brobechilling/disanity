"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import { mockTestimonials } from "@/utils/mockData";

export default function ArtisanStoriesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = mockTestimonials;

  const handleBookTickets = () => {
    alert('Đã đăng ký vé Sự Kiện SẮC DIỆN SƠN NAM thành công! Đội ngũ DiSanity sẽ liên hệ xác nhận trong 15 phút.');
  };

  return (
    <PageShell background="artisanStories">
      <SiteHeader />

      <main className="overflow-hidden">
        {/* 1. Main Article Header & Slider Section */}
        <Section width="wide" className="mt-[100px]">
          <div className="relative mx-auto h-[789px] w-[1320px] max-w-full overflow-visible">
            <p className="absolute left-0 top-0 h-[46px] w-[685px] font-jaro text-[64px] uppercase leading-[46px] tracking-wide text-[#000]">
              CÂU CHUYỆN NGHỆ NHÂN
            </p>
            <p className="absolute left-0 top-[62px] h-[60px] w-[500px] font-dMSans text-lg font-light leading-[30px] text-[#757575]">
              Những mảnh ký ức nghề, tinh thần truyền lửa sống động qua từng dòng ghi chép và hình ảnh chân thực.
            </p>

            {/* Slider Controls */}
            <div className="absolute left-[1170px] top-[62px] flex h-16 w-[150px] gap-4">
              <button className="flex h-16 w-[65px] cursor-pointer items-center justify-center rounded-full border border-black/5 bg-white/10 shadow-sm transition-all hover:bg-white/20 active:scale-95">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-7 w-7">
                  <path d="M19.25 3.5L8.75 14L19.25 24.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="group flex h-16 w-[65px] cursor-pointer items-center justify-center rounded-full bg-[#6C0B0B] shadow-md transition-all hover:bg-[#A6341B] active:scale-95">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-7 w-7">
                  <path d="M8.75 24.5L19.25 14L8.75 3.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Article Banner Block */}
            <div className="absolute left-0 top-[166px] h-[623px] w-[1320px]">
              {/* Transparent Black Base Card (68% opacity) */}
              <div className="pointer-events-none absolute left-0 top-0 h-[623px] w-[1320px] rounded-[24px] border border-white/5 bg-[#000]/68 shadow-lg" />

              {/* Showcase Image on the Left */}
              <div className="group absolute left-0 top-0 z-10 h-[623px] w-[600px] overflow-visible">
                <img
                  src="/cauchuyennghenhan/Container.png"
                  className="absolute left-0 top-0 h-[623px] w-[600px] max-w-none rounded-[25px] object-cover shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
                  alt="Container"
                />
              </div>

              {/* Absolute Text Blocks on the Right */}
              <p className="absolute left-[716px] top-36 z-20 h-[76px] w-[520px] font-dMSans text-[28px] font-bold leading-[38px] text-[#FEF3B1]">
                Nữ nghệ nhân gìn giữ, “thắp sáng” đèn ông sao
              </p>
              <p className="absolute left-[716px] top-[232px] z-20 h-[90px] w-[520px] text-justify font-dMSans text-lg font-light leading-[30px] text-[#FEF3B1]/90">
                Nghệ nhân Nguyễn Thị Tuyến tại làng Hậu Ái (Hà Nội) giữ gìn nghề truyền thống, miệt mài “thắp sáng” cho những cây đèn ông sao mỗi dịp Trung thu về.
              </p>
              <p className="absolute left-[716px] top-[392px] z-20 h-5 w-[117px] font-dMSans text-xl font-light uppercase leading-5 tracking-wider text-[#FEF3B1] opacity-80">
                Bài viết
              </p>
              <p className="absolute left-[716px] top-[424px] z-20 h-5 w-64 font-dMSans text-xl font-bold leading-5 text-[#FEF3B1]">
                HỒNG PHÚC
              </p>

              {/* Read Article Button linked cleanly */}
              <Link
                to="/artisan-stories/detail"
                className="absolute right-12 bottom-12 z-30 rounded-full border border-[#FEF3B1]/30 px-6 py-3 text-base font-semibold text-[#FEF3B1] transition-all hover:border-[#FEF3B1] hover:bg-[#FEF3B1]/10"
              >
                Đọc bài viết
              </Link>
            </div>
          </div>
        </Section>

        {/* 2. Guest Journey & Testimonials Section */}
        <Section className="mt-[198px]">
          <div className="relative mx-auto h-[437px] w-[1140px] max-w-full overflow-visible">
            <p className="absolute left-0 top-0 h-[46px] w-full whitespace-nowrap text-center font-jaro text-[64px] uppercase leading-[46px] tracking-wide text-[#A6341B]">
              HÀNH TRÌNH ĐẾN VỚI VĂN HÓA
            </p>

            {/* Dynamic Review Quote based on active selected traveler */}
            <p className="absolute left-[180px] top-[126px] h-[160px] w-[780px] text-center font-dMSans text-[22px] font-medium italic leading-10 text-[#555] transition-all duration-300">
              “ {testimonials[activeTestimonial].quote} ”
            </p>

            <div className="absolute left-0 top-[347px] h-px w-[1140px] bg-[#696969] opacity-[25%]"></div>

            {/* Selected Indicator Highlight Bar */}
            <div
              className="absolute top-[346px] h-0.5 rounded bg-[#A6341B] transition-all duration-300"
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
                  className="group absolute top-[387px] flex h-[50px] w-[260px] cursor-pointer items-center gap-3 transition-all"
                  style={{ left: `${test.left}px` }}
                >
                  <div
                    className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-2 transition-all"
                    style={{ borderColor: isActive ? "#A6341B" : "rgba(166,52,27,0.1)" }}
                  >
                    <img
                      src={test.img}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      alt={test.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className={`font-dMSans text-lg font-bold leading-5 transition-colors ${
                      isActive ? "text-[#A6341B]" : "text-[#000] group-hover:text-[#A6341B]/80"
                    }`}>
                      {test.name}
                    </p>
                    <p className="font-dMSans text-sm leading-[18px] text-[#696969]">
                      {test.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* 3. Heritage Showcase Columns Section */}
        <Section width="screen" gutter="none" className="mt-[162px]">
          <div className="relative mx-auto h-[783px] w-[1440px] max-w-full overflow-visible">
            <p className="absolute left-0 top-0 h-[46px] w-full whitespace-nowrap text-center font-jaro text-[64px] uppercase leading-[46px] tracking-wide text-[#000]">
              LÀNG NGHỀ - DI SẢN
            </p>
            <p className="absolute left-[416px] top-[62px] h-[60px] w-[614px] text-center font-dMSans text-lg font-light leading-[30px] text-[#555]">
              Những góc nhìn độc đáo, cận cảnh về đời sống làng quê Việt Nam qua ống kính nghệ thuật của các nhiếp ảnh gia.
            </p>

            {/* Three large vertical showcase images */}
            <div className="absolute left-0 top-[175px] flex h-[608px] w-full">
              {/* Column 1 */}
              <div className="group relative h-[608px] w-[480px] cursor-pointer overflow-hidden border-r border-black/5 shadow-md">
                <img
                  src="/cauchuyennghenhan/Container(1).png"
                  className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-103 group-hover:opacity-100"
                  alt="Heritage 1"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-dMSans text-[28px] font-bold leading-[38px] text-[#FFF] drop-shadow-md">
                    Sophie Moore
                  </p>
                  <p className="mt-1 font-dMSans text-sm font-medium uppercase leading-[18px] tracking-[0.1em] text-[#FFF] opacity-90">
                    Ceo &amp; Co-Founder
                  </p>
                </div>
              </div>

              {/* Column 2 (Main active with credits) */}
              <div className="group relative h-[608px] w-[480px] cursor-pointer overflow-hidden border-r border-black/5 shadow-md">
                <img
                  src="/cauchuyennghenhan/Container(3).png"
                  className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-103 group-hover:opacity-100"
                  alt="Heritage 2"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-dMSans text-[28px] font-bold leading-[38px] text-[#FFF] drop-shadow-md">
                    Sophie Moore
                  </p>
                  <p className="mt-1 font-dMSans text-sm font-medium uppercase leading-[18px] tracking-[0.1em] text-[#FFF] opacity-90">
                    Ceo &amp; Co-Founder
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="group relative h-[608px] w-[480px] cursor-pointer overflow-hidden shadow-md">
                <img
                  src="/cauchuyennghenhan/Container(2).png"
                  className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-103 group-hover:opacity-100"
                  alt="Heritage 3"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-dMSans text-[28px] font-bold leading-[38px] text-[#FFF] drop-shadow-md">
                    Sophie Moore
                  </p>
                  <p className="mt-1 font-dMSans text-sm font-medium uppercase leading-[18px] tracking-[0.1em] text-[#FFF] opacity-90">
                    Ceo &amp; Co-Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Staggered Stacks Event Gallery & Details Section */}
        <Section width="wide" className="mt-[245px]">
          <div className="relative mx-auto h-[604px] w-[1211px] max-w-full overflow-visible">
            {/* Staggered Event Image Gallery Stack on Left */}
            <div className="absolute left-0 top-0 h-[604px] w-[580px] overflow-visible">
              {/* Back Small Staggered Card */}
              <img
                src="/cauchuyennghenhan/ImagePlaceholder.png"
                className="absolute left-0 top-[115px] z-10 h-[399px] w-[265px] max-w-none cursor-pointer rounded-[16px] object-cover shadow-[-7px_4px_15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2"
                alt="Event Stack Back"
              />
              {/* Middle Medium Staggered Card */}
              <img
                src="/cauchuyennghenhan/ImagePlaceholder(1).png"
                className="absolute left-[61px] top-[76px] z-20 h-[477px] w-[336px] max-w-none cursor-pointer rounded-[20px] object-cover shadow-[-11px_4px_18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2"
                alt="Event Stack Middle"
              />
              {/* Front Large Staggered Card */}
              <img
                src="/cauchuyennghenhan/ImagePlaceholder(2).png"
                className="absolute left-[153px] top-0 z-30 h-[604px] w-[427px] max-w-none cursor-pointer rounded-[24px] object-cover shadow-[-17px_4px_24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2"
                alt="Event Stack Front"
              />

              {/* Slider Navigation Chevron Controls */}
              <div className="absolute left-[58px] top-[326px] z-40 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" className="h-4 w-2">
                  <path d="M8.88755 16.7751L1 8.88755L8.88755 1" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Staggered Event Content Card on Right */}
            <div className="absolute left-[603px] top-5 flex w-[608px] flex-col gap-4 overflow-visible">
              <div>
                <p className="font-jaro text-[64px] uppercase leading-tight tracking-[0.07em] text-[#1B1717]">
                  SỰ KIỆN SẮP DIỄN RA
                </p>
              </div>

              <p className="mt-1 font-dFVNFreckleFace text-[32px] uppercase leading-9 tracking-[0.07em] text-[#A6341B]">
                SẮC DIỆN SƠN NAM
              </p>

              <p className="mt-1 text-justify font-beVietnam text-[15.5px] font-medium leading-[28px] text-[#555]">
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
                className="group mt-2 flex h-[46px] w-[183px] cursor-pointer items-center justify-center gap-3 rounded bg-[#6C0B0B] shadow-md transition-all hover:bg-[#A6341B] active:scale-95"
              >
                <span className="font-poppins text-sm font-semibold uppercase tracking-[0.1em] text-[#FFF]">
                  ĐẶT VÉ
                </span>
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="h-[15px] w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M13.58 12L10 9.84375L6.42 12L7.5 8.1375L4.21 5.625L8.46 5.38125L10 1.6875L11.54 5.38125L15.79 5.625L12.5 8.1375M18 7.5C18 7.00272 18.2107 6.52581 18.5858 6.17418C18.9609 5.82254 19.4696 5.625 20 5.625V1.875C20 1.37772 19.7893 0.900805 19.4142 0.549175C19.0391 0.197544 18.5304 0 18 0H2C1.46957 0 0.960859 0.197544 0.585786 0.549175C0.210714 0.900805 0 1.37772 0 1.875V5.625C0.530433 5.625 1.03914 5.82254 1.41421 6.17418C1.78929 6.52581 2 7.00272 2 7.5C2 7.99728 1.78929 8.47419 1.41421 8.82582C1.03914 9.17746 0.530433 9.375 0 9.375V13.125C0 13.6223 0.210714 14.0992 0.585786 14.4508C0.960859 14.8025 1.46957 15 2 15H18C18.5304 15 19.0391 14.8025 19.4142 14.4508C19.7893 14.0992 20 13.6223 20 13.125V9.375C19.4696 9.375 18.9609 9.17746 18.5858 8.82582C18.2107 8.47419 18 7.99728 18 7.5Z" fill="white" />
                </svg>
              </button>
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

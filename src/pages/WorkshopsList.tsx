import React, { useState } from "react";
import Header from "@/components/common/Header";
import FilterBar from "@/components/domain/FilterBar";
import UpcomingEvent from "@/components/domain/UpcomingEvent";
import Footer from "@/components/common/Footer";
import { mockWorkshops } from "@/utils/mockData";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function WorkshopListPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const workshops = mockWorkshops;

  const handleBookTickets = (title: string) => {
    alert(`Đã chọn đặt vé cho: "${title}". Hệ thống đang chuyển bạn đến trang thanh toán an toàn.`);
  };

  const handleDetailsClick = (title: string) => {
    alert(`Xem chi tiết tài liệu học tập & quy trình thực hành của: "${title}".`);
  };

  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Container viewport 1440px wide by 3639px high matching Figma Workshop List.
      */}
      <ResponsiveContainer originalHeight={3639}>
        
        {/* 
          Figma Mockup Background Image - opacity set to 95% (dark wood grain)
          to make the wooden background rich and prominent as requested!
        */}
        <img
          src="/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-90 pointer-events-none"
          alt="DiSanity Background Mockup"
        />

        <Header />

        {/* Breadcrumbs & Title */}
        <div className="w-[1240px] h-[190px] absolute left-[100px] top-[210px] overflow-visible z-10">
          <p className="text-[#A6341B] font-beVietnamPro text-lg font-semibold tracking-wide">
            Workshop &gt; Mỹ thuật truyền thống - đương đại
          </p>
          <p className="text-[#A6341B] font-jaro text-[64px] leading-[72px] w-[992px] h-36 mt-4 tracking-[0.05em] uppercase font-bold">
            KHÁM PHÁ CÁC TRẢI NGHIỆM VĂN HÓA
          </p>
        </div>

        {/* 
          Filter Bar - pushed slightly down to top-[430px] to create a beautiful gap
          between the big title and the card list.
        */}
        <FilterBar className="top-[430px]" />

        {/* 
          Grid of 9 Cards - Transparent backgrounds, rustic look matching second image exactly!
        */}
        <div className="w-[1240px] h-[2250px] absolute left-0 top-0 overflow-visible z-10">
          {workshops.map((ws, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="w-[379px] h-[552px] absolute overflow-visible transition-all duration-300"
                style={{
                  left: `${ws.left}px`,
                  top: `${ws.top}px`,
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* 1. Image Showcase - Rounded corners 14px */}
                <div className="rounded-[14px] shadow-[0_11px_9.4px_rgba(0,0,0,0.25)] w-[378px] h-[277px] overflow-hidden relative">
                  <img
                    src={ws.img}
                    className="w-[378px] h-[277px] object-cover transition-transform duration-500 hover:scale-105"
                    alt={ws.title}
                  />
                </div>

                {/* 2. Title Label */}
                <p className="text-[#A6341B] font-beVietnamPro text-2xl font-bold w-[378px] mt-4 line-clamp-1 hover:text-[#8B2C16] transition-colors">
                  {ws.title}
                </p>

                {/* 3. Artist & Location Details */}
                <p className="text-[#606060] font-inter text-xl font-medium w-[378px] mt-2">
                  Nghệ nhân: <span className="text-[#1b1717]">{ws.artist}</span> | Địa điểm: <span className="text-[#1b1717]">{ws.location}</span>
                </p>

                {/* 4. Price Row */}
                <div className="flex items-center gap-[30px] w-fit mt-3">
                  <p className="text-[#000] font-inter text-2xl font-bold w-fit">
                    Chi phí: {ws.price}
                  </p>
                  <p className="text-[#676767] font-inter text-lg font-medium w-fit line-through decoration-[rgba(166,52,27,0.4)]">
                    Chi phí: {ws.originalPrice}
                  </p>
                </div>

                {/* 5. Custom Buttons with thin black borders */}
                <div className="flex items-start gap-5 w-fit mt-4">
                  {/* Book tickets */}
                  <button 
                    onClick={() => handleBookTickets(ws.title)}
                    className="cursor-pointer text-nowrap flex justify-center items-center gap-3 border border-[#000] bg-transparent hover:bg-black/5 rounded-md w-[197px] h-11 transition-all duration-150 active:scale-95"
                  >
                    <p className="text-[#000] font-inter text-xl font-semibold w-fit">
                      Đặt vé
                    </p>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-5 h-4"
                    >
                      <path
                        d="M13.58 12.8L10 10.5L6.42 12.8L7.5 8.68L4.21 6L8.46 5.74L10 1.8L11.54 5.74L15.79 6L12.5 8.68M18 8C18 7.46957 18.2107 6.96086 18.5858 6.58579C18.9609 6.21071 19.4696 6 20 6V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0.530433 6 1.03914 6.21071 1.41421 6.58579C1.78929 6.96086 2 7.46957 2 8C2 8.53043 1.78929 9.03914 1.41421 9.41421C1.03914 9.78929 0.530433 10 0 10V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V10C19.4696 10 18.9609 9.78929 18.5858 9.41421C18.2107 9.03914 18 8.53043 18 8Z"
                        fill="black"
                      />
                    </svg>
                  </button>

                  {/* Details info */}
                  <button 
                    onClick={() => handleDetailsClick(ws.title)}
                    className="cursor-pointer text-nowrap flex p-2.5 justify-center items-center border border-[#000] bg-transparent hover:bg-black/5 rounded-md w-[161px] h-11 transition-all duration-150 active:scale-95"
                  >
                    <p className="text-[#000] font-inter text-xl font-semibold w-fit">
                      Chi tiết
                    </p>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 5. Pagination Bar (Starts at top-[2290px]) */}
        <div className="flex justify-center items-start gap-3 w-[1120px] absolute left-[159px] top-[2290px] overflow-visible z-20">
          <div 
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className="flex justify-center items-center shrink-0 rounded-full border border-[rgba(166,52,27,0.20)] w-12 h-12 hover:bg-black/5 active:scale-95 transition-all cursor-pointer bg-white/40 backdrop-blur-sm"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#A6341B" />
            </svg>
          </div>
          
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`cursor-pointer text-nowrap flex justify-center items-center shrink-0 rounded-full w-12 h-12 transition-all ${
                currentPage === page ? "bg-[#A6341B] text-white shadow-sm" : "border border-[rgba(166,52,27,0.66)] text-[#A6341B] hover:bg-black/5 bg-white/40 backdrop-blur-sm"
              }`}
            >
              <p className="flex flex-col justify-center shrink-0 text-inherit font-beVietnamPro text-base font-bold leading-6 w-[11px] h-6 text-center">
                {page}
              </p>
            </button>
          ))}
          
          <div 
            onClick={() => currentPage < 3 && setCurrentPage(currentPage + 1)}
            className="flex justify-center items-center shrink-0 rounded-full border border-[rgba(166,52,27,0.20)] w-12 h-12 hover:bg-black/5 active:scale-95 transition-all cursor-pointer bg-white/40 backdrop-blur-sm"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#A6341B" />
            </svg>
          </div>
        </div>

        {/* 6. Upcoming Event (Starts at top-[2491px] on this page) */}
        <UpcomingEvent className="top-[2491px]" />

        {/* 7. Footer (Starts at top-[2818px] on this page) */}
        <Footer className="top-[2818px]" />

      </ResponsiveContainer>
    </div>
  );
}

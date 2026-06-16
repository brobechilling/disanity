import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import FilterBar from "@/components/domain/FilterBar";
import UpcomingEvent from "@/components/domain/UpcomingEvent";
import { useWorkshopCatalog } from "@/context/WorkshopCatalogContext";

export default function WorkshopsList() {
  const navigate = useNavigate();
  const { allWorkshops } = useWorkshopCatalog();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const workshops = allWorkshops;
  const workshopRows = Array.from({ length: Math.ceil(workshops.length / 3) }, (_, rowIndex) =>
    workshops.slice(rowIndex * 3, rowIndex * 3 + 3)
  );

  const handleWorkshopAction = (workshopId: string) => {
    navigate(`/workshops/detail?workshop=${workshopId}`);
  };

  return (
    <PageShell background="heritage">
      <SiteHeader />

      <main className="overflow-hidden">
        {/* Breadcrumbs & Title */}
        <Section width="wide" className="mt-[54px]">
          <div className="mx-auto h-[190px] w-[1240px] max-w-full overflow-visible">
            <p className="text-[#A6341B] font-beVietnamPro text-lg font-semibold tracking-wide">
              Workshop &gt; Làng gốm Thanh Hà
            </p>
            <p className="mx-auto mt-4 h-[72px] w-full whitespace-nowrap text-center font-jaro text-[64px] font-bold uppercase leading-[72px] tracking-[0.05em] text-[#A6341B]">
              KHÁM PHÁ WORKSHOP GỐM THANH HÀ
            </p>
          </div>
        </Section>

        <Section width="full" className="relative z-40 mt-[30px]">
          <div className="relative mx-auto h-[115px] w-[1440px] max-w-full">
            <FilterBar className="top-0" />
          </div>
        </Section>

        <Section width="wide" className="relative z-10 mt-10">
          <div className="mx-auto w-[1240px] max-w-full overflow-visible">
            {workshopRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-3 gap-x-[51px] ${rowIndex === 1 ? "mt-9" : ""}`}
              >
                {row.map((ws, cardIndex) => {
                  const idx = rowIndex * 3 + cardIndex;
                  const isHovered = hoveredCard === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="h-[552px] w-[379px] overflow-visible transition-all duration-300"
                      style={{
                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                      }}
                    >
                      {/* 1. Image Showcase - Rounded corners 14px */}
                      <div className="relative h-[277px] w-[378px] overflow-hidden rounded-[14px] shadow-[0_11px_9.4px_rgba(0,0,0,0.25)]">
                        <img
                          src={ws.img}
                          className="h-[277px] w-[378px] object-cover transition-transform duration-500 hover:scale-105"
                          alt={ws.title}
                        />
                      </div>

                      {/* 2. Title Label */}
                      <p className="mt-4 flex h-16 w-[378px] items-start font-beVietnamPro text-2xl font-bold leading-8 text-[#A6341B] transition-colors hover:text-[#8B2C16]">
                        {ws.title}
                      </p>

                      {/* 3. Artist & Location Details */}
                      <p className="mt-2 w-[378px] font-inter text-xl font-medium text-[#606060]">
                        Nghệ nhân: <span className="text-[#1b1717]">{ws.artist}</span> | Địa điểm: <span className="text-[#1b1717]">{ws.location}</span>
                      </p>

                      {/* 4. Price Row */}
                      <div className="mt-3 flex w-[378px] items-center justify-between gap-3">
                        <p className="w-fit whitespace-nowrap font-inter text-2xl font-bold text-[#000]">
                          Chi phí: {ws.price}
                        </p>
                        <p className="w-fit whitespace-nowrap font-inter text-lg font-medium text-[#676767] line-through decoration-[rgba(166,52,27,0.4)]">
                          Chi phí: {ws.originalPrice}
                        </p>
                      </div>

                      {/* 5. Custom Buttons with thin black borders */}
                      <div className="mt-4 flex w-fit items-start gap-5">
                        {/* Book tickets */}
                        <button
                          onClick={() => handleWorkshopAction(ws.id)}
                          className="flex h-11 w-[197px] cursor-pointer items-center justify-center gap-3 text-nowrap rounded-md border border-[#000] bg-transparent transition-all duration-150 hover:bg-black/5 active:scale-95"
                        >
                          <p className="w-fit font-inter text-xl font-semibold text-[#000]">
                            Đặt vé
                          </p>
                          <svg
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-5 shrink-0"
                          >
                            <path
                              d="M13.58 12.8L10 10.5L6.42 12.8L7.5 8.68L4.21 6L8.46 5.74L10 1.8L11.54 5.74L15.79 6L12.5 8.68M18 8C18 7.46957 18.2107 6.96086 18.5858 6.58579C18.9609 6.21071 19.4696 6 20 6V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0.530433 6 1.03914 6.21071 1.41421 6.58579C1.78929 6.96086 2 7.46957 2 8C2 8.53043 1.78929 9.03914 1.41421 9.41421C1.03914 9.78929 0.530433 10 0 10V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V10C19.4696 10 18.9609 9.78929 18.5858 9.41421C18.2107 9.03914 18 8.53043 18 8Z"
                              fill="black"
                            />
                          </svg>
                        </button>

                        {/* Details info */}
                        <button
                          onClick={() => handleWorkshopAction(ws.id)}
                          className="flex h-11 w-[161px] cursor-pointer items-center justify-center text-nowrap rounded-md border border-[#000] bg-transparent p-2.5 transition-all duration-150 hover:bg-black/5 active:scale-95"
                        >
                          <p className="w-fit font-inter text-xl font-semibold text-[#000]">
                            Chi tiết
                          </p>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Section>

        {/* Pagination Bar */}
        <Section className="relative z-20 mt-[13px]">
          <div className="flex h-12 items-start justify-center gap-3 overflow-visible">
            <div
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[rgba(166,52,27,0.20)] bg-white/40 backdrop-blur-sm transition-all hover:bg-black/5 active:scale-95"
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#A6341B" />
              </svg>
            </div>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full text-nowrap transition-all ${
                  currentPage === page ? "bg-[#A6341B] text-white shadow-sm" : "border border-[rgba(166,52,27,0.66)] bg-white/40 text-[#A6341B] backdrop-blur-sm hover:bg-black/5"
                }`}
              >
                <p className="flex h-6 w-[11px] shrink-0 flex-col justify-center text-center font-beVietnamPro text-base font-bold leading-6 text-inherit">
                  {page}
                </p>
              </button>
            ))}

            <div
              onClick={() => currentPage < 3 && setCurrentPage(currentPage + 1)}
              className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[rgba(166,52,27,0.20)] bg-white/40 backdrop-blur-sm transition-all hover:bg-black/5 active:scale-95"
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#A6341B" />
              </svg>
            </div>
          </div>
        </Section>

        <UpcomingEvent />

        <div className="mt-[155px]">
          <SiteFooter />
        </div>
      </main>
    </PageShell>
  );
}

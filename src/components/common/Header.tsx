"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  
  const isExploreActive = pathname === "/workshops";
  const isWorkshopActive = pathname === "/workshops/list";
  const isArtisanActive = pathname === "/artisans";
  const isStoryActive = pathname === "/artisan-stories";
  const isAccountActive = pathname === "/account" || pathname === "/artisan-account";

  return (
    <div className="w-full h-[181px] absolute left-0 top-0 z-50">
      <div className="w-full h-[181px] absolute left-0 top-0">
        <div className="w-full h-[181px] absolute left-0 top-0">
          <div className="bg-[#6C0B0B] w-full h-[181px] absolute left-0 top-0"></div>
          
          {/* Hamburger Menu (Mobile/Desktop Toggle) */}
          <div className="w-[27px] h-[25px] absolute left-[1313px] top-[54px] cursor-pointer group">
            <div className="bg-[#F4CA80] w-[27px] h-[3px] absolute left-0 top-0 transition-all group-hover:bg-white"></div>
            <div className="bg-[#F4CA80] w-[27px] h-[3px] absolute left-0 top-[11px] transition-all group-hover:bg-white"></div>
            <div className="bg-[#F4CA80] w-[27px] h-[3px] absolute left-0 top-[22px] transition-all group-hover:bg-white"></div>
          </div>
          
          {/* Search bar */}
          <div className="flex py-3.5 px-6 items-start gap-4 rounded-[50px] bg-[#FFF] w-[419px] absolute left-[511px] top-[109px] shadow-sm">
            <div className="flex items-center gap-2.5 w-full">
              <div className="shrink-0 w-[18px] h-[18px] overflow-hidden relative">
                <div className="w-[15px] h-[15px] absolute left-0.5 top-px">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[13px] h-[13px] absolute left-0 top-0"
                  >
                    <path
                      d="M7.41671 14.0834C11.0986 14.0834 14.0834 11.0986 14.0834 7.41671C14.0834 3.73479 11.0986 0.75 7.41671 0.75C3.73479 0.75 0.75 3.73479 0.75 7.41671C0.75 11.0986 3.73479 14.0834 7.41671 14.0834Z"
                      stroke="#5E5E5E"
                      strokeWidth="1.50001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1 h-1 absolute left-[11px] top-[11px]"
                  >
                    <path
                      d="M4.37503 4.37503L0.75 0.75"
                      stroke="#5E5E5E"
                      strokeWidth="1.50001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="text-[#757575] font-dMSans text-base leading-[18px] w-[300px] bg-transparent outline-none border-none placeholder-[#757575] font-normal"
              />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="inline-flex items-center gap-[26px] absolute left-[275px] top-[52px]">
            {/* KHÁM PHÁ (Discovery Categories) */}
            <Link
              to="/workshops"
              className={`cursor-pointer text-nowrap flex justify-center items-center gap-2.5 w-[173px] h-[39px] absolute left-0 top-0 transition-all hover:-translate-y-0.5 hover:opacity-90 ${
                isExploreActive ? "border border-[#F4CA80] rounded-full" : ""
              }`}
            >
              <p className="text-[#FFF] font-beVietnamPro text-xl font-medium leading-[18px] w-fit">
                KHÁM PHÁ
              </p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-3 h-1.5"
              >
                <path
                  d="M0.699951 0.699997L6.53328 6.53333L12.3666 0.699997"
                  stroke="#F4CA80"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* WORKSHOP (List Grid) */}
            <Link
              to="/workshops/list"
              className={`cursor-pointer text-nowrap flex justify-center items-center gap-2.5 w-[164px] h-[39px] absolute left-[199px] top-0 transition-all hover:-translate-y-0.5 hover:opacity-90 ${
                isWorkshopActive ? "border border-[#F4CA80] rounded-full" : ""
              }`}
            >
              <p className="text-[#FFF] font-beVietnamPro text-xl font-medium leading-[18px] w-fit">
                WORKSHOP
              </p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-3 h-1.5"
              >
                <path
                  d="M0.699951 0.699997L6.53328 6.53333L12.3666 0.699997"
                  stroke="#F4CA80"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* NGHỆ NHÂN */}
            <Link
              to="/artisans"
              className={`cursor-pointer text-nowrap flex justify-center items-center gap-2.5 w-[151px] h-[39px] absolute left-[389px] top-0 transition-all hover:-translate-y-0.5 hover:opacity-90 ${
                isArtisanActive ? "border border-[#F4CA80] rounded-full" : ""
              }`}
            >
              <p className="text-[#FFF] font-beVietnamPro text-xl font-medium leading-[18px] w-fit">
                NGHỆ NHÂN
              </p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-3 h-1.5"
              >
                <path
                  d="M0.699951 0.699997L6.53328 6.53333L12.3666 0.699997"
                  stroke="#F4CA80"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* CÂU CHUYỆN */}
            <Link
              to="/artisan-stories"
              className={`cursor-pointer text-nowrap flex justify-center items-center gap-2.5 w-[166px] h-[39px] absolute left-[566px] top-0 transition-all hover:-translate-y-0.5 hover:opacity-90 ${
                isStoryActive ? "border border-[#F4CA80] rounded-full" : ""
              }`}
            >
              <p className="text-[#FFF] font-beVietnamPro text-xl font-medium leading-[18px] w-fit">
                CÂU CHUYỆN
              </p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-3 h-1.5"
              >
                <path
                  d="M0.699951 0.699997L6.53328 6.53333L12.3666 0.699997"
                  stroke="#F4CA80"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* TÀI KHOẢN */}
            <Link
              to="/account"
              className={`cursor-pointer text-nowrap flex justify-center items-center gap-2.5 w-[133px] h-[39px] absolute left-[758px] top-0 transition-all hover:-translate-y-0.5 hover:opacity-90 ${
                isAccountActive ? "border border-[#F4CA80] rounded-full" : ""
              }`}
            >
              <p className="text-[#FFF] font-beVietnamPro text-xl font-medium leading-[18px] w-fit">
                TÀI KHOẢN
              </p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-3 h-1.5"
              >
                <path
                  d="M0.699951 0.699997L6.53328 6.53333L12.3666 0.699997"
                  stroke="#F4CA80"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="inline-flex flex-col items-start absolute left-[114px] top-[87px]">
          <Link
            to="/"
            className="flex flex-col justify-center text-[#FFF] font-courierNew text-xl font-bold leading-7 w-32 h-7 absolute left-0 top-0 tracking-[-0.025em] cursor-pointer transition-all hover:text-[#F4CA80]"
          >
            DiSanity
          </Link>
        </div>
      </div>
      <Link to="/">
        <svg
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-[26px] absolute left-36 top-[54px] cursor-pointer transition-transform duration-300 hover:rotate-12"
        >
          <path
            d="M3.75 26.25V14.8125C2.66667 14.5417 1.77083 13.9688 1.0625 13.0938C0.354167 12.2188 0 11.1979 0 10.0312H2.5C2.5 10.6979 2.74479 11.276 3.23438 11.7656C3.72396 12.2552 4.30208 12.5 4.96875 12.5H6.25V9.8125C5.16667 9.54167 4.27083 8.96875 3.5625 8.09375C2.85417 7.21875 2.5 6.19792 2.5 5.03125H5C5 5.69792 5.24479 6.27604 5.73438 6.76562C6.22396 7.25521 6.80208 7.5 7.46875 7.5H8.125L13.75 0L19.375 7.5H20.0312C20.6979 7.5 21.276 7.25521 21.7656 6.76562C22.2552 6.27604 22.5 5.69792 22.5 5.03125H5C5 5.69792 5.24479 6.27604 5.73438 6.76562C6.22396 7.25521 6.80208 7.5 7.46875 7.5H8.125L13.75 0L19.375 7.5H20.0312C20.6979 7.5 21.276 7.25521 21.7656 6.76562C22.2552 6.27604 22.5 5.69792 22.5 5.03125H5C5 6.19792 24.6458 7.21875 23.9375 8.09375C23.2292 8.96875 22.3333 9.54167 21.25 9.8125V12.5H22.5312C23.1979 12.5 23.776 12.2552 24.2656 11.7656C24.7552 11.276 25 10.6979 25 10.0312H27.5C27.5 11.1979 27.1458 12.2188 26.4375 13.0938C25.7292 13.9688 24.8333 14.5417 23.75 14.8125V26.25H15V21.25C15 20.8958 14.8802 20.599 14.6406 20.3594C14.401 20.1198 14.1042 20 13.75 20C13.3958 20 13.099 20.1198 12.8594 20.3594C12.6198 20.599 12.5 20.8958 12.5 21.25V26.25H3.75ZM11.25 7.5H16.25L13.75 4.15625L11.25 7.5ZM8.75 12.5H18.75V10H8.75V12.5ZM6.25 23.75H10V21.25C10 20.2083 10.3646 19.3229 11.0938 18.5938C11.8229 17.8646 12.7083 17.5 13.75 17.5C14.7917 17.5 15.6771 17.8646 16.4062 18.5938C17.1354 19.3229 17.5 20.2083 17.5 21.25V23.75H21.25V15H6.25V23.75Z"
            fill="#F4CA80"
          />
        </svg>
      </Link>
    </div>
  );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "KHÁM PHÁ", width: "w-[173px]", left: "left-0" },
  { to: "/workshops", label: "WORKSHOP", width: "w-[164px]", left: "left-[199px]" },
  { to: "/artisans", label: "NGHỆ NHÂN", width: "w-[151px]", left: "left-[389px]" },
  { to: "/artisan-stories", label: "CÂU CHUYỆN", width: "w-[166px]", left: "left-[566px]" },
  { to: "/booking", label: "ĐẶT LỊCH RIÊNG", width: "w-[133px]", left: "left-[758px]" },
];

export default function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className="relative z-40 h-auto bg-[#6C0B0B] text-white lg:h-[156px]">
      <div className="relative mx-auto hidden h-[156px] max-w-[1440px] lg:block">
        <Hamburger />
        <SearchBar />
        <DesktopNav pathname={pathname} />
        <Brand />
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 py-4 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white">
            <HomeMark className="h-9 w-[38px]" />
            <span className="font-courierNew text-2xl font-bold">DiSanity</span>
          </Link>
          <Link
            to="/user-account"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#F4CA80]/60"
            aria-label="Go to user account"
          >
            <span className="h-[3px] w-[22px] bg-[#F4CA80]" />
            <span className="h-[3px] w-[22px] bg-[#F4CA80]" />
            <span className="h-[3px] w-[22px] bg-[#F4CA80]" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`shrink-0 rounded-full border px-4 py-2 font-beVietnamPro text-sm font-medium ${
                isActivePath(pathname, item.to) ? "border-[#F4CA80]" : "border-white/15"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <SearchBar compact />
      </div>
    </header>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="absolute left-[255px] top-[38px] flex h-[46px] w-[950px] items-center justify-center gap-3">
      {navItems.map((item) => {
        const isLongLabel = item.label.length > 12;

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex h-[42px] min-w-0 cursor-pointer items-center justify-center gap-2.5 border px-3 text-center transition-all hover:-translate-y-0.5 hover:opacity-90 ${
              isLongLabel ? "flex-[1.25]" : "flex-1"
            } ${isActivePath(pathname, item.to) ? "border-[#F4CA80]" : "border-transparent"}`}
          >
            <span className="shrink-0 whitespace-nowrap font-beVietnamPro text-lg font-medium leading-[18px] text-white">
              {item.label}
            </span>
            <ChevronDown />
          </Link>
        );
      })}
    </nav>
  );
}

function Brand() {
  return (
    <>
      <Link
        to="/"
        className="absolute left-[108px] top-[75px] flex h-9 w-40 flex-col justify-center font-courierNew text-2xl font-bold leading-9 tracking-[-0.025em] text-white transition-all hover:text-[#F4CA80]"
      >
        DiSanity
      </Link>
      <Link to="/" aria-label="Go to homepage">
        <HomeMark className="absolute left-[142px] top-[36px] h-9 w-[38px] cursor-pointer transition-transform duration-300 hover:rotate-12" />
      </Link>
    </>
  );
}

function Hamburger() {
  return (
    <Link
      to="/user-account"
      className="group absolute left-[1313px] top-[44px] h-[25px] w-[27px] cursor-pointer"
      aria-label="Go to user account"
    >
      <span className="absolute left-0 top-0 h-[3px] w-[27px] bg-[#F4CA80] transition-all group-hover:bg-white" />
      <span className="absolute left-0 top-[11px] h-[3px] w-[27px] bg-[#F4CA80] transition-all group-hover:bg-white" />
      <span className="absolute left-0 top-[22px] h-[3px] w-[27px] bg-[#F4CA80] transition-all group-hover:bg-white" />
    </Link>
  );
}

function SearchBar({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <label className="flex h-12 w-full items-center gap-3 rounded-[50px] bg-white px-5 shadow-sm">
        <SearchIcon />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full bg-transparent font-dMSans text-base font-normal leading-[18px] text-[#757575] outline-none placeholder:text-[#757575]"
        />
      </label>
    );
  }

  return (
    <label className="absolute left-[511px] top-[92px] flex w-[419px] items-start gap-4 rounded-[50px] bg-white px-6 py-3.5 shadow-sm">
      <div className="flex w-full items-center gap-2.5">
        <SearchIcon />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-[300px] border-none bg-transparent font-dMSans text-base font-normal leading-[18px] text-[#757575] outline-none placeholder:text-[#757575]"
        />
      </div>
    </label>
  );
}

function SearchIcon() {
  return (
    <span className="relative h-[18px] w-[18px] shrink-0 overflow-hidden">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 h-[13px] w-[13px]"
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
        className="absolute left-[11px] top-[11px] h-1 w-1"
      >
        <path
          d="M4.37503 4.37503L0.75 0.75"
          stroke="#5E5E5E"
          strokeWidth="1.50001"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-1.5 w-3 shrink-0"
    >
      <path
        d="M0.699951 0.699997L6.53328 6.53333L12.3666 0.699997"
        stroke="#F4CA80"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.75 26.25V14.8125C2.66667 14.5417 1.77083 13.9688 1.0625 13.0938C0.354167 12.2188 0 11.1979 0 10.0312H2.5C2.5 10.6979 2.74479 11.276 3.23438 11.7656C3.72396 12.2552 4.30208 12.5 4.96875 12.5H6.25V9.8125C5.16667 9.54167 4.27083 8.96875 3.5625 8.09375C2.85417 7.21875 2.5 6.19792 2.5 5.03125H5C5 5.69792 5.24479 6.27604 5.73438 6.76562C6.22396 7.25521 6.80208 7.5 7.46875 7.5H8.125L13.75 0L19.375 7.5H20.0312C20.6979 7.5 21.276 7.25521 21.7656 6.76562C22.2552 6.27604 22.5 5.69792 22.5 5.03125H5C5 5.69792 5.24479 6.27604 5.73438 6.76562C6.22396 7.25521 6.80208 7.5 7.46875 7.5H8.125L13.75 0L19.375 7.5H20.0312C20.6979 7.5 21.276 7.25521 21.7656 6.76562C22.2552 6.27604 22.5 5.69792 22.5 5.03125H5C5 6.19792 24.6458 7.21875 23.9375 8.09375C23.2292 8.96875 22.3333 9.54167 21.25 9.8125V12.5H22.5312C23.1979 12.5 23.776 12.2552 24.2656 11.7656C24.7552 11.276 25 10.6979 25 10.0312H27.5C27.5 11.1979 27.1458 12.2188 26.4375 13.0938C25.7292 13.9688 24.8333 14.5417 23.75 14.8125V26.25H15V21.25C15 20.8958 14.8802 20.599 14.6406 20.3594C14.401 20.1198 14.1042 20 13.75 20C13.3958 20 13.099 20.1198 12.8594 20.3594C12.6198 20.599 12.5 20.8958 12.5 21.25V26.25H3.75ZM11.25 7.5H16.25L13.75 4.15625L11.25 7.5ZM8.75 12.5H18.75V10H8.75V12.5ZM6.25 23.75H10V21.25C10 20.2083 10.3646 19.3229 11.0938 18.5938C11.8229 17.8646 12.7083 17.5 13.75 17.5C14.7917 17.5 15.6771 17.8646 16.4062 18.5938C17.1354 19.3229 17.5 20.2083 17.5 21.25V23.75H21.25V15H6.25V23.75Z"
        fill="#F4CA80"
      />
    </svg>
  );
}

function isActivePath(pathname: string, to: string) {
  return pathname === to || (to === "/account" && pathname === "/artisan-account");
}

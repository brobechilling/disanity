"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

type SelectFilterKey = "location" | "craft" | "price" | "duration";

type Filters = Record<SelectFilterKey, string> & {
  date: string;
};

const filterOptions: Record<SelectFilterKey, string[]> = {
  location: ["Tất cả địa điểm", "Hà Nội", "Đà Nẵng", "Hội An", "Huế", "Sài Gòn"],
  craft: ["Tất cả nghề", "Gốm Thanh Hà", "Dệt lụa tơ tằm", "Làm đèn lồng", "Sơn mài độc bản"],
  price: ["Mọi mức giá", "Dưới 500k", "500k - 1M", "Trên 1M"],
  duration: ["Phút", "30 phút", "60 phút", "120 phút", "Cả ngày"],
};

const filterFields: Array<{ key: SelectFilterKey; title: string }> = [
  { key: "location", title: "Địa Điểm" },
  { key: "craft", title: "Làng Nghề" },
  { key: "price", title: "Mức Giá" },
  { key: "duration", title: "Thời Lượng" },
];

const initialFilters: Filters = {
  location: filterOptions.location[0],
  craft: filterOptions.craft[0],
  price: filterOptions.price[0],
  duration: filterOptions.duration[0],
  date: "",
};

export default function FilterBar({ className }: { className?: string }) {
  const [activeDropdown, setActiveDropdown] = useState<SelectFilterKey | null>(null);
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const toggleDropdown = (name: SelectFilterKey) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const selectOption = (key: SelectFilterKey, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setActiveDropdown(null);
  };

  const updateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      date: event.target.value,
    }));
  };

  return (
    <div
      className={`relative z-40 mx-auto flex min-h-[125px] w-full max-w-[1180px] items-center justify-center gap-4 rounded-2xl border-2 border-[#A6341B] p-6 shadow-[0_8px_30px_rgb(166,52,27,0.08)] ${className || ""}`}
    >
      {filterFields.map((field, index) => (
        <React.Fragment key={field.key}>
          <SelectFilter
            title={field.title}
            value={filters[field.key]}
            options={filterOptions[field.key]}
            isOpen={activeDropdown === field.key}
            onToggle={() => toggleDropdown(field.key)}
            onSelect={(value) => selectOption(field.key, value)}
          />
          {index < filterFields.length - 1 && <Divider />}
        </React.Fragment>
      ))}

      <Divider />

      <DateFilter value={filters.date} onChange={updateDate} />

      <Link
        to="/workshops/list"
        className="ml-2 flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-2 border-[#A6341B] bg-[#E0A03F] px-8 py-3 text-nowrap shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#D4902F] active:scale-95"
      >
        <FilterIcon />
        <span className="font-beVietnamPro text-base font-bold leading-6 text-white">Lọc</span>
      </Link>
    </div>
  );
}

function SelectFilter({
  title,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
}: {
  title: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="relative flex min-w-[165px] flex-1 flex-col items-start gap-2">
      <p className="whitespace-nowrap font-beVietnamPro text-xs font-black uppercase leading-4 tracking-[0.08em] text-[#A6341B]">
        {title}
      </p>

      <button
        type="button"
        onClick={onToggle}
        className="group flex h-11 w-full min-w-0 items-center justify-between gap-3 text-left"
      >
        <span className="min-w-0 truncate font-beVietnam text-lg font-bold leading-7 text-black transition-colors group-hover:text-[#A6341B]">
          {value}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[66px] z-50 w-[220px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className="block w-full cursor-pointer px-4 py-2 text-left font-beVietnamPro text-sm font-medium text-gray-700 hover:bg-[rgba(166,52,27,0.08)] hover:text-[#A6341B]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DateFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="flex min-w-[150px] flex-[0.9] flex-col items-start gap-2">
      <span className="whitespace-nowrap pl-1 font-beVietnamPro text-xs font-black uppercase leading-4 tracking-[0.08em] text-[#A6341B]">
        Ngày
      </span>
      <input
        type="date"
        value={value}
        onChange={onChange}
        className="h-11 w-full min-w-[150px] bg-transparent font-beVietnamPro text-lg font-bold leading-7 text-black outline-none transition-colors hover:text-[#A6341B] focus:text-[#A6341B]"
      />
    </label>
  );
}

function Divider() {
  return <div className="h-10 w-px shrink-0 bg-[rgba(166,52,27,0.10)]" />;
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-[27px] w-[27px] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
      <path
        d="M8.1001 10.8L13.5001 16.2L18.9001 10.8"
        stroke="#6B7280"
        strokeWidth="2.025"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[11px] w-[11px] shrink-0"
    >
      <path
        d="M4.66667 10.5V7H5.83333V8.16667H10.5V9.33333H5.83333V10.5H4.66667ZM0 9.33333V8.16667H3.5V9.33333H0ZM2.33333 7V5.83333H0V4.66667H2.33333V3.5H3.5V7H2.33333ZM4.66667 5.83333V4.66667H10.5V5.83333H4.66667ZM7 3.5V0H8.16667V1.16667H10.5V2.33333H8.16667V3.5H7ZM0 2.33333V1.16667H5.83333V2.33333H0Z"
        fill="white"
      />
    </svg>
  );
}

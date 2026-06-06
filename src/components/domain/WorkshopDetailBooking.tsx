import React, { useState } from "react";
import {
  Calendar,
  Heart,
  LockKeyhole,
  Minus,
  Plus,
  ShoppingCart,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@/components/ui/Rating";
import type { WorkshopDetailData } from "@/utils/mockData";

interface WorkshopDetailBookingProps {
  workshop: WorkshopDetailData;
}

export default function WorkshopDetailBooking({ workshop }: WorkshopDetailBookingProps) {
  const navigate = useNavigate();
  const [guestCount, setGuestCount] = useState(workshop.defaultGuestCount);

  const handleDecrease = () => setGuestCount((current) => Math.max(1, current - 1));
  const handleIncrease = () =>
    setGuestCount((current) => Math.min(workshop.guestLimit, current + 1));

  const handleBooking = () => {
    navigate("/cart");
  };

  return (
    <aside className="rounded-[10px] bg-[rgba(89,166,156,0.21)] p-5 sm:p-7 lg:sticky lg:top-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Rating rating={workshop.rating} size={18} />
          <span className="font-inter text-sm font-semibold text-[#333]">
            {workshop.reviewCount} Đánh giá
          </span>
        </div>
        <button className="font-inter text-sm font-semibold text-[#333] underline underline-offset-4 hover:text-[#A6341B]">
          Write a Review
        </button>
      </div>

      <h1 className="mt-6 font-beVietnamPro text-3xl font-bold leading-tight text-[#A6341B] sm:text-4xl">
        {workshop.title}
      </h1>
      <p className="mt-2 font-inter text-base text-[#A6341B]">
        Địa điểm: {workshop.location}
      </p>

      <div className="my-6 h-px bg-[#d8cbb5]" />

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-beVietnamPro text-sm font-semibold text-[#333]">
            Chi phí trải nghiệm
          </p>
          <p className="mt-2 font-beVietnamPro text-2xl font-semibold text-[#333] sm:text-3xl">
            {workshop.priceText}
          </p>
        </div>
        <p className="font-inter text-sm text-[#333]">{workshop.taxText}</p>
      </div>

      <div className="mt-6 space-y-4">
        <BookingInfoCard
          eyebrow="Ngày hành trình"
          title={workshop.dateLabel}
          icon={<Calendar size={22} />}
        />
        <div className="rounded-[10px] bg-white/75 p-5 shadow-sm">
          <p className="font-beVietnamPro text-[10px] font-black uppercase leading-[15px] tracking-[0.2em] text-[rgba(139,69,19,0.80)]">
            Số lượng khách tham gia
          </p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="font-beVietnamPro text-base font-bold text-[#2D1E12]">
              {guestCount} Người lớn
            </p>
            <div className="flex items-center gap-4">
              <QuantityButton onClick={handleDecrease} label="Giảm số khách">
                <Minus size={18} />
              </QuantityButton>
              <span className="w-6 text-center font-beVietnamPro text-xl font-black text-[#4A3728]">
                {guestCount}
              </span>
              <QuantityButton onClick={handleIncrease} label="Tăng số khách">
                <Plus size={18} />
              </QuantityButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex gap-3">
        <button
          onClick={handleBooking}
          className="inline-flex h-[50px] flex-1 items-center justify-center gap-3 rounded-[30px] bg-[#A6341B] px-5 font-beVietnamPro text-base font-bold uppercase text-white transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          <ShoppingCart size={20} />
          Đặt vé ngay
        </button>
        <button
          className="grid h-[50px] w-[50px] place-items-center rounded-[30px] border-[3px] border-[#A6341B] text-[#333] transition-colors hover:bg-[#A6341B] hover:text-white"
          aria-label="Lưu workshop yêu thích"
        >
          <Heart size={20} fill="currentColor" />
        </button>
      </div>

      <div className="mt-7 flex flex-col gap-3 text-[rgba(139,69,19,0.80)] sm:flex-row sm:items-center sm:gap-8">
        <TrustItem icon={<LockKeyhole size={16} />} label="Thanh toán bảo mật" />
        <TrustItem icon={<XCircle size={16} />} label="Hủy miễn phí trước 24h" />
      </div>
    </aside>
  );
}

function BookingInfoCard({
  eyebrow,
  title,
  icon,
}: {
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[10px] bg-white/75 p-5 shadow-sm">
      <p className="font-beVietnamPro text-[10px] font-black uppercase leading-[15px] tracking-[0.2em] text-[rgba(139,69,19,0.80)]">
        {eyebrow}
      </p>
      <div className="mt-4 flex items-center justify-between gap-4 text-[#8B4513]">
        <p className="font-beVietnamPro text-base font-bold text-[#2D1E12]">
          {title}
        </p>
        {icon}
      </div>
    </div>
  );
}

function QuantityButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border-2 border-[rgba(139,69,19,0.50)] text-[#8B4513] transition-colors hover:bg-[#8B4513] hover:text-white"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-beVietnamPro text-xs font-bold uppercase tracking-[0.1em]">
        {label}
      </span>
    </div>
  );
}

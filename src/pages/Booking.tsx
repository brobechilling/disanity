import React, { useState } from "react";
import { Ticket } from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import {
  mockBookingCalendar,
  mockBookingTimeSlots,
  mockBookingWorkshop,
  mockUnavailableBookingTimes,
} from "@/utils/mockData";

const fullDays = new Set(mockBookingCalendar.fullDays);
const inactiveDays = new Set(mockBookingCalendar.inactiveDays);
const unavailableTimes = new Set(mockUnavailableBookingTimes);

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState(28);
  const [selectedTime, setSelectedTime] = useState(mockBookingWorkshop.selectedTime);
  const selectedDate = `${String(selectedDay).padStart(2, "0")}/06/2026`;

  const handleBooking = () => {
    alert(`Đã chọn ${selectedDate} lúc ${selectedTime}. Tiếp tục đặt vé cho ${mockBookingWorkshop.title}.`);
  };

  return (
    <PageShell background="booking">
      <SiteHeader />

      <main>
        <Section width="screen" className="py-8 sm:py-10 lg:py-12">
          <div className="mx-auto grid max-w-[1680px] gap-4 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-stretch 2xl:grid-cols-[minmax(0,1fr)_520px]">
            <BookingFormCard
              selectedDay={selectedDay}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onBooking={handleBooking}
              onSelectDay={setSelectedDay}
              onSelectTime={setSelectedTime}
            />
            <WorkshopInfoCard selectedDate={selectedDate} selectedTime={selectedTime} onBooking={handleBooking} />
          </div>
        </Section>
      </main>

      <SiteFooter />
    </PageShell>
  );
}

function BookingFormCard({
  selectedDay,
  selectedDate,
  selectedTime,
  onBooking,
  onSelectDay,
  onSelectTime,
}: {
  selectedDay: number;
  selectedDate: string;
  selectedTime: string;
  onBooking: () => void;
  onSelectDay: (day: number) => void;
  onSelectTime: (time: string) => void;
}) {
  return (
    <section className="overflow-hidden rounded-[30px] bg-[#eee6d8]/95 shadow-[0_8px_16px_rgba(71,45,24,0.20)] ring-1 ring-white/50">
      <div className="grid min-h-[300px] gap-5 p-6 lg:p-7 xl:grid-cols-[minmax(320px,400px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(340px,430px)_minmax(0,1fr)]">
        <img
          src={mockBookingWorkshop.images.workshop}
          alt="Không gian workshop vẽ gốm"
          className="h-[220px] w-full rounded-[22px] object-cover lg:h-[225px] 2xl:h-[235px]"
        />

        <div className="flex flex-col justify-center">
          <div className="text-center font-beVietnamPro text-[#B33721]">
            <p className="text-lg font-black uppercase">Chọn workshop.</p>
            <div className="mt-2 flex items-center justify-center gap-8 text-xs font-black">
              <span>&lt; Quay lại</span>
              <span>Tiếp &gt;</span>
            </div>
          </div>

          <h1 className="mt-7 text-center font-jaro text-[34px] uppercase leading-tight text-[#A6341B] sm:text-[40px] xl:text-[42px] 2xl:text-[46px]">
            {mockBookingWorkshop.title}
          </h1>

          <div className="mt-6 grid gap-3 font-beVietnamPro text-xs font-medium leading-5 text-[#5E5E5E] xl:grid-cols-2">
            <p>Nghệ nhân: {mockBookingWorkshop.artisan}</p>
            <p className="xl:text-right">Thời lượng: {mockBookingWorkshop.duration}</p>
            <p>Địa điểm: {mockBookingWorkshop.location}</p>
            <p className="xl:text-right">Số lượng tối đa: {mockBookingWorkshop.capacity}</p>
          </div>
        </div>
      </div>

      <div className="grid border-t border-[#d8cbb7] lg:grid-cols-[1.08fr_0.92fr]">
        <CalendarPanel selectedDay={selectedDay} onSelectDay={onSelectDay} />
        <TimePanel
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onBooking={onBooking}
          onSelectTime={onSelectTime}
        />
      </div>
    </section>
  );
}

function CalendarPanel({
  selectedDay,
  onSelectDay,
}: {
  selectedDay: number;
  onSelectDay: (day: number) => void;
}) {
  return (
    <div className="min-h-[500px] border-[#d8cbb7] bg-white/18 p-6 lg:border-r lg:p-8">
      <div className="text-center font-beVietnamPro text-[#B33721]">
        <h2 className="text-lg font-black uppercase">Chọn ngày.</h2>
        <div className="mt-1 flex items-center justify-center gap-5 text-xs font-black uppercase">
          <button type="button" aria-label="Tháng trước">&lt;</button>
          <span>Jun,</span>
          <span>2026</span>
          <button type="button" aria-label="Tháng sau">&gt;</button>
        </div>
      </div>

      <div className="mt-11 grid grid-cols-7 gap-x-5 gap-y-4 text-center sm:gap-x-7">
        {mockBookingCalendar.weekDays.map((day) => (
          <p key={day} className="font-beVietnamPro text-xs font-medium text-[#5E5E5E]">
            {day}
          </p>
        ))}

        {mockBookingCalendar.rows.flat().map((day, index) => {
          const belongsToNextMonth = index >= 30;
          const isSelected = day === selectedDay && !belongsToNextMonth;
          const isFull = fullDays.has(day) && index >= 28;
          const isInactive = inactiveDays.has(day) && index >= 30;
          const canSelect = !isFull && !isInactive;

          return (
            <button
              key={`${day}-${index}`}
              type="button"
              disabled={!canSelect}
              onClick={() => onSelectDay(day)}
              className={`mx-auto grid h-7 w-7 place-items-center rounded-md font-beVietnamPro text-xs font-medium transition-colors ${
                isSelected
                  ? "border border-[#F4B84D] bg-transparent text-[#5E5E5E]"
                  : isFull
                    ? "bg-[#B33721] text-white"
                    : isInactive
                      ? "bg-[#E1D8C7] text-[#A99F90]"
                      : day === 30 && index === 29
                        ? "bg-[#F8C66C] text-[#5E5E5E]"
                        : "text-[#5E5E5E] hover:bg-[#F8C66C]/60"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-beVietnamPro text-xs text-[#5E5E5E]">
        <Legend swatch="border border-[#F8C66C]" label="Hôm nay" />
        <Legend swatch="bg-[#F8C66C]" label="Còn trống" />
        <Legend swatch="bg-[#B33721]" label="Đã đầy" />
        <Legend swatch="bg-[#E1D8C7]" label="Không hoạt động" />
      </div>
    </div>
  );
}

function TimePanel({
  selectedDate,
  selectedTime,
  onBooking,
  onSelectTime,
}: {
  selectedDate: string;
  selectedTime: string;
  onBooking: () => void;
  onSelectTime: (time: string) => void;
}) {
  return (
    <div className="flex min-h-[500px] flex-col bg-white/18 p-6 lg:p-8">
      <div className="text-center font-beVietnamPro text-[#B33721]">
        <h2 className="text-lg font-black uppercase">Chọn giờ.</h2>
        <div className="mt-1 flex items-center justify-center gap-4 text-xs font-black uppercase">
          <button type="button" aria-label="Ngày trước">&lt;</button>
          <span>Thurs, 28th</span>
          <span>Jun</span>
          <button type="button" aria-label="Ngày sau">&gt;</button>
        </div>
      </div>

      <div className="mt-12 space-y-7">
        {mockBookingTimeSlots.map((slot) => (
          <div key={slot.period} className="grid gap-3 sm:grid-cols-[88px_1fr] sm:items-center">
            <p className="font-beVietnamPro text-xs font-black text-[#B33721]">{slot.period}</p>
            <div className="flex flex-wrap gap-3">
              {slot.times.map((time) => {
                const isSelected = selectedTime === time;
                const isUnavailable = unavailableTimes.has(time);

                return (
                  <button
                    key={time}
                    type="button"
                    disabled={isUnavailable}
                    onClick={() => onSelectTime(time)}
                    className={`h-7 rounded-md px-3 font-beVietnamPro text-xs font-medium transition-colors ${
                      isSelected
                        ? "border border-[#D4A017] bg-[#F8C66C] text-[#B33721]"
                        : isUnavailable
                          ? "bg-[#D9D0BF] text-[#6F6A61]"
                          : "bg-[#F8C66C] text-[#5E5E5E] hover:bg-[#f4b94d]"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-md border border-[#D4A017] bg-[#F7CA75] p-3">
        <div className="flex flex-col gap-3 font-beVietnamPro text-xs font-black text-[#B33721] sm:flex-row sm:items-center">
          <span>Đã chọn:</span>
          <span>{selectedDate}</span>
          <span className="hidden sm:inline">•</span>
          <span>{selectedTime}</span>
          <button
            type="button"
            onClick={onBooking}
            className="ml-auto inline-flex h-8 min-w-[112px] items-center justify-center rounded-md bg-[#B33721] px-5 font-beVietnamPro text-xs font-black uppercase text-white transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
}

function WorkshopInfoCard({
  selectedDate,
  selectedTime,
  onBooking,
}: {
  selectedDate: string;
  selectedTime: string;
  onBooking: () => void;
}) {
  return (
    <aside className="rounded-[30px] bg-[#e8dcc8]/95 p-6 shadow-[0_8px_16px_rgba(71,45,24,0.20)] ring-1 ring-white/50 lg:p-7">
      <div className="grid gap-6 xl:grid-cols-[235px_minmax(0,1fr)] 2xl:grid-cols-[245px_minmax(0,1fr)]">
        <img
          src={mockBookingWorkshop.images.artisan}
          alt="Nghệ nhân Cappy Dương"
          className="h-[270px] w-full rounded-xl object-cover xl:h-[295px] 2xl:h-[325px]"
        />
        <div>
          <h2 className="font-jaro text-[34px] uppercase leading-none text-[#A6341B] sm:text-[40px] xl:text-[36px] 2xl:text-[42px]">
            Nghệ nhân
          </h2>
          <div className="mt-4 space-y-2.5 font-beVietnamPro text-xs font-medium leading-[18px] text-[#5E5E5E]">
            <p>Nghệ nhân: {mockBookingWorkshop.artisan}</p>
            <p>Địa điểm: {mockBookingWorkshop.location}</p>
            <p>Kinh nghiệm: 3 năm làm nghề</p>
            <p>Giới tính: Nam</p>
            <p>Tuổi: 27</p>
          </div>
        </div>
      </div>

      <InfoSection title="Mô tả workshop">
        <p>{mockBookingWorkshop.description}</p>
      </InfoSection>

      <InfoSection title="Đã bao gồm">
        <p>Dụng cụ vẽ & màu</p>
        <ul className="mt-1 list-disc pl-6">
          {mockBookingWorkshop.included.slice(1).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title="Thành phẩm">
        <div className="grid grid-cols-4 gap-4">
          {mockBookingWorkshop.images.artifacts.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Thành phẩm gốm mẫu ${index + 1}`}
              className="aspect-[3/4] w-full rounded-[5px] object-cover"
            />
          ))}
        </div>
      </InfoSection>

      <div className="mt-6 rounded-md border border-[#D4A017] bg-[#F7CA75] p-3 lg:hidden">
        <p className="font-beVietnamPro text-xs font-black text-[#B33721]">
          Đã chọn: {selectedDate} · {selectedTime}
        </p>
        <button
          type="button"
          onClick={onBooking}
          className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-[#B33721] font-beVietnamPro text-xs font-black uppercase text-white"
        >
          <Ticket size={16} />
          Đặt vé
        </button>
      </div>
    </aside>
  );
}

function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 font-beVietnamPro text-xs leading-5 text-[#636363]">
      <h3 className="mb-2 text-lg font-black uppercase leading-6 text-[#B33721]">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-4 w-6 rounded-md ${swatch}`} />
      <span>{label}</span>
    </div>
  );
}

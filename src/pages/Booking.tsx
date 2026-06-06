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
const unavailableTimes = new Set(mockUnavailableBookingTimes);
const defaultBookingMonth = 5;
const defaultBookingYear = 2026;
const yearOptions = Array.from({ length: 201 }, (_, index) => 1900 + index);
const dayNames = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
const monthNames = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

interface CalendarDate {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarDates(year: number, month: number) {
  const daysInMonth = getDaysInMonth(year, month);
  const previousMonth = month === 0 ? 11 : month - 1;
  const previousMonthYear = month === 0 ? year - 1 : year;
  const previousMonthDays = getDaysInMonth(previousMonthYear, previousMonth);
  const firstDay = new Date(year, month, 1).getDay();
  const leadingDays = firstDay === 0 ? 6 : firstDay - 1;
  const dates: CalendarDate[] = [];

  for (let index = leadingDays - 1; index >= 0; index -= 1) {
    dates.push({
      day: previousMonthDays - index,
      month: previousMonth,
      year: previousMonthYear,
      isCurrentMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    dates.push({ day, month, year, isCurrentMonth: true });
  }

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;
  let nextDay = 1;

  while (dates.length % 7 !== 0 || dates.length < 35) {
    dates.push({
      day: nextDay,
      month: nextMonth,
      year: nextMonthYear,
      isCurrentMonth: false,
    });
    nextDay += 1;
  }

  return dates;
}

function isMockJune2026(month: number, year: number) {
  return month === defaultBookingMonth && year === defaultBookingYear;
}

function isDateSelectable(day: number, month: number, year: number, isCurrentMonth = true) {
  return isCurrentMonth && !(isMockJune2026(month, year) && fullDays.has(day));
}

function getSelectableDayForMonth(preferredDay: number, month: number, year: number) {
  const daysInMonth = getDaysInMonth(year, month);
  const clampedDay = Math.min(preferredDay, daysInMonth);

  if (isDateSelectable(clampedDay, month, year)) {
    return clampedDay;
  }

  for (let distance = 1; distance < daysInMonth; distance += 1) {
    const previousDay = clampedDay - distance;
    const nextDay = clampedDay + distance;

    if (previousDay >= 1 && isDateSelectable(previousDay, month, year)) {
      return previousDay;
    }

    if (nextDay <= daysInMonth && isDateSelectable(nextDay, month, year)) {
      return nextDay;
    }
  }

  return clampedDay;
}

function formatBookingDate(day: number, month: number, year: number) {
  return `${String(day).padStart(2, "0")}/${String(month + 1).padStart(2, "0")}/${year}`;
}

function formatBookingDateLabel(day: number, month: number, year: number) {
  const date = new Date(year, month, day);
  return `${dayNames[date.getDay()]}, ${day} ${monthNames[month]} ${year}`;
}

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState(28);
  const [selectedMonth, setSelectedMonth] = useState(defaultBookingMonth);
  const [selectedYear, setSelectedYear] = useState(defaultBookingYear);
  const [selectedTime, setSelectedTime] = useState(mockBookingWorkshop.selectedTime);
  const selectedDate = formatBookingDate(selectedDay, selectedMonth, selectedYear);
  const selectedDateLabel = formatBookingDateLabel(selectedDay, selectedMonth, selectedYear);

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
  };

  const handleSelectAdjacentDay = (direction: -1 | 1) => {
    const nextDate = new Date(selectedYear, selectedMonth, selectedDay + direction);

    if (isDateSelectable(nextDate.getDate(), nextDate.getMonth(), nextDate.getFullYear())) {
      setSelectedDay(nextDate.getDate());
      setSelectedMonth(nextDate.getMonth());
      setSelectedYear(nextDate.getFullYear());
    }
  };

  const handleSelectMonth = (month: number) => {
    setSelectedMonth(month);
    setSelectedDay(getSelectableDayForMonth(selectedDay, month, selectedYear));
  };

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
    setSelectedDay(getSelectableDayForMonth(selectedDay, selectedMonth, year));
  };

  const handleSelectAdjacentMonth = (direction: -1 | 1) => {
    const nextDate = new Date(selectedYear, selectedMonth + direction, 1);
    const nextMonth = nextDate.getMonth();
    const nextYear = nextDate.getFullYear();

    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
    setSelectedDay((currentDay) => getSelectableDayForMonth(currentDay, nextMonth, nextYear));
  };

  const handleBooking = () => {
    alert(`Đã chọn ${selectedDateLabel} lúc ${selectedTime}. Tiếp tục đặt vé cho ${mockBookingWorkshop.title}.`);
  };

  return (
    <PageShell background="booking">
      <SiteHeader />

      <main>
        <Section width="screen" className="py-8 sm:py-10 lg:py-12">
          <div className="mx-auto grid max-w-[1680px] gap-4 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-stretch 2xl:grid-cols-[minmax(0,1fr)_520px]">
            <BookingFormCard
              selectedDay={selectedDay}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              selectedDate={selectedDate}
              selectedDateLabel={selectedDateLabel}
              selectedTime={selectedTime}
              onBooking={handleBooking}
              onSelectDay={handleSelectDay}
              onSelectAdjacentDay={handleSelectAdjacentDay}
              onSelectAdjacentMonth={handleSelectAdjacentMonth}
              onSelectMonth={handleSelectMonth}
              onSelectYear={handleSelectYear}
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
  selectedMonth,
  selectedYear,
  selectedDate,
  selectedDateLabel,
  selectedTime,
  onBooking,
  onSelectDay,
  onSelectAdjacentDay,
  onSelectAdjacentMonth,
  onSelectMonth,
  onSelectYear,
  onSelectTime,
}: {
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  selectedDate: string;
  selectedDateLabel: string;
  selectedTime: string;
  onBooking: () => void;
  onSelectDay: (day: number) => void;
  onSelectAdjacentDay: (direction: -1 | 1) => void;
  onSelectAdjacentMonth: (direction: -1 | 1) => void;
  onSelectMonth: (month: number) => void;
  onSelectYear: (year: number) => void;
  onSelectTime: (time: string) => void;
}) {
  return (
    <section className="overflow-hidden rounded-[30px] bg-[#eee6d8]/95 shadow-[0_8px_16px_rgba(71,45,24,0.20)] ring-1 ring-white/50">
      <div className="grid min-h-[300px] gap-5 p-6 lg:p-7 xl:grid-cols-[minmax(320px,400px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(340px,430px)_minmax(0,1fr)] transition-all duration-300 hover:bg-[#eee6d8]/40 hover:-translate-y-1 rounded-t-[30px]">
        <img
          src={mockBookingWorkshop.images.workshop}
          alt="Không gian workshop vẽ gốm"
          className="h-[220px] w-full rounded-[22px] object-cover lg:h-[225px] 2xl:h-[235px] transition-all duration-300 hover:scale-[1.03] hover:shadow-md cursor-pointer"
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
        <CalendarPanel
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onSelectAdjacentMonth={onSelectAdjacentMonth}
          onSelectDay={onSelectDay}
          onSelectMonth={onSelectMonth}
          onSelectYear={onSelectYear}
        />
        <TimePanel
          selectedDate={selectedDate}
          selectedDateLabel={selectedDateLabel}
          selectedTime={selectedTime}
          onBooking={onBooking}
          onSelectAdjacentDay={onSelectAdjacentDay}
          onSelectTime={onSelectTime}
        />
      </div>
    </section>
  );
}

function CalendarPanel({
  selectedDay,
  selectedMonth,
  selectedYear,
  onSelectAdjacentMonth,
  onSelectDay,
  onSelectMonth,
  onSelectYear,
}: {
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  onSelectAdjacentMonth: (direction: -1 | 1) => void;
  onSelectDay: (day: number) => void;
  onSelectMonth: (month: number) => void;
  onSelectYear: (year: number) => void;
}) {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const calendarDates = getCalendarDates(selectedYear, selectedMonth);

  return (
    <div className="min-h-[500px] border-[#d8cbb7] bg-white/18 p-6 lg:border-r lg:p-8 transition-all duration-300 hover:bg-white/30 hover:-translate-y-1">
      <div className="text-center font-beVietnamPro text-[#B33721]">
        <h2 className="text-lg font-black uppercase">Chọn ngày.</h2>
        <div className="relative mt-1 flex items-center justify-center gap-5 text-xs font-black uppercase">
          <button type="button" onClick={() => onSelectAdjacentMonth(-1)} aria-label="Tháng trước">
            &lt;
          </button>
          <button
            type="button"
            onClick={() => setIsPickerOpen((current) => !current)}
            className="rounded-md px-2 py-1 transition-colors hover:bg-[#F8C66C]/50"
            aria-expanded={isPickerOpen}
          >
            {monthNames[selectedMonth]}, {selectedYear}
          </button>
          <button type="button" onClick={() => onSelectAdjacentMonth(1)} aria-label="Tháng sau">
            &gt;
          </button>

          {isPickerOpen ? (
            <div className="absolute left-1/2 top-8 z-10 grid w-[260px] -translate-x-1/2 gap-4 rounded-md border border-[#D4A017] bg-[#F7E7C1] p-4 text-left shadow-[0_8px_16px_rgba(71,45,24,0.18)]">
              <div>
                <p className="mb-2 text-[11px] text-[#B33721]">Chọn tháng</p>
                <div className="grid grid-cols-3 gap-2">
                  {monthNames.map((month, index) => (
                    <button
                      key={month}
                      type="button"
                      onClick={() => onSelectMonth(index)}
                      className={`h-8 rounded-md text-[11px] transition-colors ${
                        selectedMonth === index
                          ? "bg-[#B33721] text-white"
                          : "bg-white/70 text-[#5E5E5E] hover:bg-[#F8C66C]"
                      }`}
                    >
                      {month.replace("Tháng ", "T")}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] text-[#B33721]">Chọn năm</p>
                <div className="grid max-h-40 grid-cols-3 gap-2 overflow-y-auto pr-1">
                  {yearOptions.map((year) => (
                    <button
                      key={year}
                      type="button"
                      onClick={() => onSelectYear(year)}
                      className={`h-8 rounded-md text-[11px] transition-colors ${
                        selectedYear === year
                          ? "bg-[#B33721] text-white"
                          : "bg-white/70 text-[#5E5E5E] hover:bg-[#F8C66C]"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-11 grid grid-cols-7 gap-x-5 gap-y-4 text-center sm:gap-x-7">
        {mockBookingCalendar.weekDays.map((day) => (
          <p key={day} className="font-beVietnamPro text-xs font-medium text-[#5E5E5E]">
            {day}
          </p>
        ))}

        {calendarDates.map((date) => {
          const isSelected =
            date.day === selectedDay &&
            date.month === selectedMonth &&
            date.year === selectedYear &&
            date.isCurrentMonth;
          const isFull = isMockJune2026(date.month, date.year) && fullDays.has(date.day);
          const isInactive = !date.isCurrentMonth;
          const canSelect = isDateSelectable(date.day, date.month, date.year, date.isCurrentMonth);

          return (
            <button
              key={`${date.day}-${date.month}-${date.year}`}
              type="button"
              disabled={!canSelect}
              onClick={() => onSelectDay(date.day)}
              className={`mx-auto grid h-7 w-7 place-items-center rounded-md font-beVietnamPro text-xs font-medium transition-all duration-300 active:scale-95 ${
                isSelected
                  ? "border border-[#F4B84D] bg-transparent text-[#5E5E5E]"
                  : isFull
                    ? "bg-[#B33721] text-white hover:scale-105"
                    : isInactive
                      ? "bg-[#E1D8C7] text-[#A99F90]"
                      : isMockJune2026(date.month, date.year) && date.day === 30
                        ? "bg-[#F8C66C] text-[#5E5E5E] hover:bg-[#f6bb54] hover:-translate-y-0.5 hover:shadow-sm hover:scale-110"
                        : "text-[#5E5E5E] hover:bg-[#F8C66C]/60 hover:-translate-y-0.5 hover:shadow-sm hover:scale-110"
              }`}
            >
              {date.day}
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
  selectedDateLabel,
  selectedTime,
  onBooking,
  onSelectAdjacentDay,
  onSelectTime,
}: {
  selectedDate: string;
  selectedDateLabel: string;
  selectedTime: string;
  onBooking: () => void;
  onSelectAdjacentDay: (direction: -1 | 1) => void;
  onSelectTime: (time: string) => void;
}) {
  return (
    <div className="flex min-h-[500px] flex-col bg-white/18 p-6 lg:p-8 transition-all duration-300 hover:bg-white/30 hover:-translate-y-1">
      <div className="text-center font-beVietnamPro text-[#B33721]">
        <h2 className="text-lg font-black uppercase">Chọn giờ.</h2>
        <div className="mt-1 flex items-center justify-center gap-4 text-xs font-black uppercase">
          <button type="button" onClick={() => onSelectAdjacentDay(-1)} aria-label="Ngày trước">
            &lt;
          </button>
          <span>{selectedDateLabel}</span>
          <button type="button" onClick={() => onSelectAdjacentDay(1)} aria-label="Ngày sau">
            &gt;
          </button>
        </div>
        <p className="mt-2 text-xs font-medium text-[#5E5E5E]">Khung giờ đang chọn: {selectedTime}</p>
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
                    className={`h-7 rounded-md px-3 font-beVietnamPro text-xs font-medium transition-all duration-300 active:scale-95 ${
                      isSelected
                        ? "border border-[#D4A017] bg-[#F8C66C] text-[#B33721] hover:-translate-y-0.5 hover:shadow-sm"
                        : isUnavailable
                          ? "bg-[#D9D0BF] text-[#6F6A61]"
                          : "bg-[#F8C66C] text-[#5E5E5E] hover:bg-[#f4b94d] hover:-translate-y-0.5 hover:shadow-sm hover:scale-105"
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
      <div className="grid gap-6 xl:grid-cols-[235px_minmax(0,1fr)] 2xl:grid-cols-[245px_minmax(0,1fr)] transition-all duration-300 hover:bg-[#e8dcc8]/40 hover:-translate-y-1 p-2 rounded-xl">
        <img
          src={mockBookingWorkshop.images.artisan}
          alt="Nghệ nhân Cappy Dương"
          className="h-[270px] w-full rounded-xl object-cover xl:h-[295px] 2xl:h-[325px] transition-all duration-300 hover:scale-[1.03] hover:shadow-md cursor-pointer"
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
              className="aspect-[3/4] w-full rounded-[5px] object-cover transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
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
    <section className="mt-6 font-beVietnamPro text-xs leading-5 text-[#636363] transition-all duration-300 hover:bg-[#e8dcc8]/40 hover:-translate-y-0.5 p-3 rounded-xl">
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

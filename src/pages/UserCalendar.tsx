import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  History,
  LogOut,
  Plus,
  Settings,
  AlertTriangle,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useAuth } from "@/context/AuthContext";
import { useBooking, ConfirmedBookingItem } from "@/context/BookingContext";
import { mockUserAccount } from "@/utils/mockData";

const weekdayNames = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const monthNames = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

// Helper to check if a workshop date is within 2 days from today
function getDaysRemaining(dateStr: string): number {
  if (!dateStr) return -1;
  
  // Format YYYY-MM-DD
  const parts = dateStr.split("-");
  let target: Date;
  if (parts.length === 3) {
    target = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  } else {
    // Fallback if formatting is DD/MM/YYYY
    const dParts = dateStr.split("/");
    if (dParts.length === 3) {
      target = new Date(Number(dParts[2]), Number(dParts[1]) - 1, Number(dParts[0]));
    } else {
      target = new Date(dateStr);
    }
  }
  
  target.setHours(0, 0, 0, 0);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const diffTime = target.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function UserCalendar() {
  const { confirmedBookings } = useBooking();
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Handle month navigation
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Get list of bookings that are within 2 days
  const upcomingAlerts = confirmedBookings.filter(booking => {
    const remaining = getDaysRemaining(booking.date);
    return remaining >= 0 && remaining <= 2;
  });

  return (
    <PageShell background="userAccount">
      <SiteHeader />
      <main>
        <Section width="screen" gutter="none">
          <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_288px]">
            {/* Left Content Area */}
            <div className="mx-auto min-w-0 w-full max-w-[1120px] space-y-8 px-4 py-8 sm:px-8 lg:px-[60px] lg:py-10">
              
              {/* Header Title */}
              <ScrollReveal animation="fade-in" duration={600}>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="font-jaro text-[32px] leading-tight text-[#A6341B] sm:text-4xl">
                      Lịch trình Trải nghiệm
                    </h1>
                    <p className="font-beVietnamPro text-sm text-[#64748B] mt-1">
                      Xem và theo dõi lịch các buổi làm gốm của bạn.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Alert Notification Banner */}
              {upcomingAlerts.length > 0 && (
                <ScrollReveal animation="slide-up" duration={700}>
                  <div className="flex items-start gap-4 rounded-2xl border-2 border-[#A6341B]/35 bg-[#A6341B]/10 p-5 text-[#A6341B] shadow-sm animate-pulse-slow">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#A6341B] text-white">
                      <AlertTriangle size={20} />
                    </div>
                    <div className="space-y-1">
                      <h2 className="font-beVietnamPro text-base font-black">
                        Chú ý: Bạn có Workshop sắp diễn ra!
                      </h2>
                      <p className="font-beVietnamPro text-sm leading-6 text-[#5c2417] font-medium">
                        Có {upcomingAlerts.length} buổi trải nghiệm sẽ diễn ra trong vòng 2 ngày tới. Hãy kiểm tra chi tiết nhấp nháy đỏ trên lịch và chuẩn bị thời gian tham gia.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Calendar Grid Section */}
              <ScrollReveal animation="slide-up" duration={800} delay={100}>
                <div className="rounded-[30px] border border-[#8B4513]/15 bg-white p-6 shadow-md">
                  {/* Calendar Navigation Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-jaro text-2xl uppercase tracking-wider text-[#8B4513]">
                      {monthNames[currentMonth]} {currentYear}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevMonth}
                        className="grid h-10 w-10 place-items-center rounded-full bg-[#8B4513]/10 text-[#8B4513] transition-all hover:bg-[#8B4513] hover:text-white"
                        aria-label="Tháng trước"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setCurrentDate(new Date())}
                        className="px-4 py-2 rounded-full border border-[#8B4513]/30 font-beVietnamPro text-xs font-bold text-[#8B4513] transition-colors hover:bg-[#8B4513] hover:text-white"
                      >
                        Hôm nay
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="grid h-10 w-10 place-items-center rounded-full bg-[#8B4513]/10 text-[#8B4513] transition-all hover:bg-[#8B4513] hover:text-white"
                        aria-label="Tháng sau"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Matrix */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Weekday Titles */}
                    {weekdayNames.map(day => (
                      <div key={day} className="text-center font-beVietnamPro text-sm font-bold text-[#8B4513] py-2">
                        {day}
                      </div>
                    ))}

                    {/* Calendar cells */}
                    {getCalendarCells(currentYear, currentMonth, confirmedBookings).map((cell, index) => {
                      const hasAlert = cell.bookings.some(b => {
                        const remaining = getDaysRemaining(b.date);
                        return remaining >= 0 && remaining <= 2;
                      });

                      return (
                        <div
                          key={index}
                          className={`min-h-[110px] rounded-2xl p-2 border transition-all duration-300 ${
                            cell.isCurrentMonth
                              ? "bg-[#eee6d8]/15 border-[#8B4513]/10 text-[#2D1E12]"
                              : "bg-gray-50 border-gray-100 text-gray-400"
                          } ${
                            cell.isToday
                              ? "ring-2 ring-[#D4A017] bg-[#D4A017]/5"
                              : ""
                          } ${
                            hasAlert && cell.isCurrentMonth
                              ? "border-[#A6341B] bg-[#A6341B]/5 ring-1 ring-[#A6341B] animate-pulse-slow shadow-inner-red"
                              : "hover:bg-white hover:shadow-md"
                          }`}
                        >
                          {/* Day number */}
                          <div className="flex justify-between items-center mb-1">
                            <span className={`font-beVietnamPro text-xs font-bold ${
                              cell.isToday
                                ? "bg-[#D4A017] text-white h-6 w-6 grid place-items-center rounded-full"
                                : ""
                            }`}>
                              {cell.day}
                            </span>
                            {hasAlert && cell.isCurrentMonth && (
                              <span className="h-2.5 w-2.5 rounded-full bg-[#A6341B] animate-ping" title="Sắp diễn ra!" />
                            )}
                          </div>

                          {/* Cell Bookings */}
                          <div className="space-y-1.5 overflow-hidden">
                            {cell.bookings.map(booking => {
                              const remaining = getDaysRemaining(booking.date);
                              const isNear = remaining >= 0 && remaining <= 2;

                              return (
                                <Link
                                  to="/ticketqr"
                                  key={booking.bookingId}
                                  className={`block rounded-lg p-1.5 text-left transition-all hover:scale-[1.02] ${
                                    isNear
                                      ? "bg-[#A6341B] text-white font-semibold"
                                      : "bg-[#F4CA80] text-[#8B4513]"
                                  }`}
                                  title={`${booking.title} - Nghệ nhân: ${booking.artisan}`}
                                >
                                  <p className="truncate font-beVietnamPro text-[10px] leading-tight">
                                    {booking.title}
                                  </p>
                                  <p className="font-beVietnamPro text-[8px] opacity-85 mt-0.5">
                                    {isNear ? `Hôm nay hoặc 1-2 ngày tới!` : `${booking.location}`}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Sidebar */}
            <ScrollReveal className="h-full" animation="slide-left" duration={800}>
              <UserSidebar />
            </ScrollReveal>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}

// Side bar component
function UserSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { profile } = mockUserAccount;
  const displayName = user?.name ?? profile.name;
  const avatar = user?.picture || profile.avatar;

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <aside className="flex h-full min-h-[420px] flex-col bg-[#8B4513] p-6 text-white lg:min-h-[calc(100vh-156px)]">
      <div className="flex items-center gap-3 rounded-full bg-[#7a3d12] p-2">
        <img src={avatar} alt={displayName} className="h-10 w-10 rounded-full object-cover" />
        <div className="min-w-0">
          <p className="truncate font-beVietnamPro text-sm font-medium">{displayName}</p>
          <p className="font-beVietnamPro text-xs text-[#CBD5E1]">{profile.role}</p>
        </div>
      </div>

      <nav className="mt-4 space-y-3">
        <SidebarButton icon={ArrowRightLeft} label="Chuyển qua chế độ nghệ nhân" to="/artisan-account" active />
        <SidebarButton icon={CalendarDays} label="Trang cá nhân profile" to="/user-account" />
        <SidebarButton icon={History} label="Lịch sử mua hàng" />
      </nav>

      <div className="mt-10 border-t border-white/15 pt-5 lg:mt-auto">
        <SidebarButton icon={Plus} label="Workshop Mới" active centered />
        <SidebarButton icon={Settings} label="Cài Đặt" />
        <SidebarButton icon={LogOut} label="Đăng xuất" onClick={handleLogout} />
      </div>
    </aside>
  );
}

// Sidebar Button Helper
function SidebarButton({
  icon: Icon,
  label,
  to,
  active = false,
  centered = false,
  onClick,
}: {
  icon: React.ElementType<{ size?: number; className?: string }>;
  label: string;
  to?: string;
  active?: boolean;
  centered?: boolean;
  onClick?: () => void;
}) {
  const className = `flex w-full items-center gap-3 rounded-full px-4 py-3 font-beVietnamPro text-base transition-colors ${
    active ? "bg-[#C65C39] text-white hover:bg-[#b24f31]" : "text-[#CBD5E1] hover:bg-white/10"
  } ${centered ? "justify-center font-bold" : ""}`;
  
  const content = (
    <>
      <Icon size={18} />
      <span className="min-w-0 text-left">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  );
}

// Interfaces and logic for generating monthly grid days
interface CalendarCell {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  bookings: ConfirmedBookingItem[];
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarCells(year: number, month: number, bookings: ConfirmedBookingItem[]): CalendarCell[] {
  const daysInMonth = getDaysInMonth(year, month);
  const previousMonth = month === 0 ? 11 : month - 1;
  const previousMonthYear = month === 0 ? year - 1 : year;
  const previousMonthDays = getDaysInMonth(previousMonthYear, previousMonth);
  
  // Find weekday index of first day of the month (0 = Sun, 1 = Mon ... 6 = Sat)
  const firstDay = new Date(year, month, 1).getDay();
  // Adjust so week starts on Mon (T2). index of T2 should be 0, T3:1 ... CN:6
  const leadingDays = firstDay === 0 ? 6 : firstDay - 1;
  
  const cells: CalendarCell[] = [];
  const today = new Date();
  
  const matchesBooking = (cellYear: number, cellMonth: number, cellDay: number, bookingDateStr: string) => {
    if (!bookingDateStr) return false;
    
    // Check YYYY-MM-DD
    const parts = bookingDateStr.split("-");
    if (parts.length === 3) {
      return (
        Number(parts[0]) === cellYear &&
        Number(parts[1]) - 1 === cellMonth &&
        Number(parts[2]) === cellDay
      );
    }
    
    // Check DD/MM/YYYY
    const dParts = bookingDateStr.split("/");
    if (dParts.length === 3) {
      return (
        Number(dParts[2]) === cellYear &&
        Number(dParts[1]) - 1 === cellMonth &&
        Number(dParts[0]) === cellDay
      );
    }
    
    return false;
  };

  const getBookingsForDay = (cellYear: number, cellMonth: number, cellDay: number) => {
    return bookings.filter(booking => matchesBooking(cellYear, cellMonth, cellDay, booking.date));
  };

  // Add leading adjacent month cells
  for (let index = leadingDays - 1; index >= 0; index -= 1) {
    const day = previousMonthDays - index;
    cells.push({
      day,
      month: previousMonth,
      year: previousMonthYear,
      isCurrentMonth: false,
      isToday: false,
      bookings: getBookingsForDay(previousMonthYear, previousMonth, day)
    });
  }

  // Add current month cells
  for (let day = 1; day <= daysInMonth; day += 1) {
    const isToday =
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year;

    cells.push({
      day,
      month,
      year,
      isCurrentMonth: true,
      isToday,
      bookings: getBookingsForDay(year, month, day)
    });
  }

  // Add trailing adjacent month cells to complete the grid (multiples of 7)
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;
  let nextDay = 1;

  while (cells.length % 7 !== 0 || cells.length < 35) {
    cells.push({
      day: nextDay,
      month: nextMonth,
      year: nextMonthYear,
      isCurrentMonth: false,
      isToday: false,
      bookings: getBookingsForDay(nextMonthYear, nextMonth, nextDay)
    });
    nextDay += 1;
  }

  return cells;
}

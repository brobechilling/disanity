import React, { useMemo, useRef, useState } from "react";
import {
  CalendarCheck,
  CalendarX2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Coffee,
  LockKeyhole,
  ListChecks,
  Lock,
  TrendingUp,
  Users,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import {
  mockScheduleManagement,
  ScheduleEvent,
  ScheduleEventStatus,
} from "@/utils/mockData";

const dayColumnWidth = "136px";
const timeColumnWidth = "110px";
const calendarHourHeight = 72;
const calendarStartHour = 8;
const calendarEndHour = 23;
const hourSlots = Array.from(
  { length: calendarEndHour - calendarStartHour + 1 },
  (_, index) => calendarStartHour + index,
);
const weekDayLabels = ["T.Hai", "T.Ba", "T.Tư", "T.Năm", "T.Sáu", "T.Bảy", "C.Nhật"];
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

type ScheduleMode = "idle" | "multi" | "open" | "block";

interface ScheduleWeekDay {
  date: Date;
  dateKey: string;
  weekday: string;
  dayNumber: string;
  isWeekend: boolean;
}

function getStartOfWeek(date: Date) {
  const nextDate = new Date(date);
  const day = nextDate.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  nextDate.setDate(nextDate.getDate() + diff);
  nextDate.setHours(0, 0, 0, 0);

  return nextDate;
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function toDateKey(date: Date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function getWeekDays(selectedDate: Date) {
  const weekStart = getStartOfWeek(selectedDate);

  return weekDayLabels.map((weekday, index) => {
    const date = addDays(weekStart, index);

    return {
      date,
      dateKey: toDateKey(date),
      weekday,
      dayNumber: String(date.getDate()),
      isWeekend: index === 6,
    };
  });
}

function formatWeekLabel(days: ScheduleWeekDay[]) {
  const firstDay = days[0].date;
  const lastDay = days[6].date;
  const sameMonth = firstDay.getMonth() === lastDay.getMonth();
  const sameYear = firstDay.getFullYear() === lastDay.getFullYear();

  if (sameMonth && sameYear) {
    return `Tuần này, ${firstDay.getDate()} - ${lastDay.getDate()} ${monthNames[firstDay.getMonth()]}, ${firstDay.getFullYear()}`;
  }

  return `Tuần này, ${firstDay.getDate()} ${monthNames[firstDay.getMonth()]} - ${lastDay.getDate()} ${monthNames[lastDay.getMonth()]}, ${lastDay.getFullYear()}`;
}

function formatHour(hour: number) {
  return `${String(hour).padStart(2, "0")}:00`;
}

export default function ScheduleManagementPage() {
  const [selectedDate, setSelectedDate] = useState(() => new Date(2026, 4, 12));
  const [events, setEvents] = useState<ScheduleEvent[]>(mockScheduleManagement.events);
  const [mode, setMode] = useState<ScheduleMode>("idle");
  const [selectedEventIds, setSelectedEventIds] = useState<Set<number>>(new Set());
  const [selectedDayKeys, setSelectedDayKeys] = useState<Set<string>>(new Set());
  const [blockedDayKeys, setBlockedDayKeys] = useState<Set<string>>(new Set());
  const [acceptsPrivateBookings, setAcceptsPrivateBookings] = useState(
    mockScheduleManagement.acceptsPrivateBookings,
  );

  const weekDays = useMemo(() => getWeekDays(selectedDate), [selectedDate]);
  const weekLabel = useMemo(() => formatWeekLabel(weekDays), [weekDays]);

  const handleWeekShift = (direction: -1 | 1) => {
    setSelectedDate((currentDate) => addDays(currentDate, direction * 7));
    setSelectedEventIds(new Set());
    setSelectedDayKeys(new Set());
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextDate = new Date(`${event.target.value}T00:00:00`);

    if (!Number.isNaN(nextDate.getTime())) {
      setSelectedDate(nextDate);
      setSelectedEventIds(new Set());
      setSelectedDayKeys(new Set());
    }
  };

  const handleToggleMulti = () => {
    setMode((currentMode) => (currentMode === "multi" ? "idle" : "multi"));
    setSelectedDayKeys(new Set());
  };

  const handleToggleOpenSlot = () => {
    if (selectedEventIds.size > 0) {
      openSelectedEvents(selectedEventIds);
      setSelectedEventIds(new Set());
      setMode("idle");
      return;
    }

    setMode((currentMode) => (currentMode === "open" ? "idle" : "open"));
    setSelectedDayKeys(new Set());
  };

  const handleToggleBlockDay = () => {
    if (selectedDayKeys.size > 0) {
      toggleBlockedDays(selectedDayKeys);
      setSelectedDayKeys(new Set());
      setMode("idle");
      return;
    }

    setMode((currentMode) => (currentMode === "block" ? "idle" : "block"));
    setSelectedEventIds(new Set());
  };

  const handleSelectDay = (dayKey: string) => {
    if (mode === "block") {
      toggleBlockedDays(new Set([dayKey]));
      return;
    }

    setSelectedDayKeys((currentKeys) => {
      const nextKeys = new Set(currentKeys);

      if (nextKeys.has(dayKey)) {
        nextKeys.delete(dayKey);
      } else {
        nextKeys.add(dayKey);
      }

      return nextKeys;
    });
  };

  const handleSelectEvent = (event: ScheduleEvent) => {
    const dayKey = weekDays[event.dayIndex]?.dateKey;

    if (!dayKey || blockedDayKeys.has(dayKey)) {
      return;
    }

    if (mode === "open") {
      openSelectedEvents(new Set([event.id]));
      return;
    }

    setSelectedEventIds((currentIds) => {
      const nextIds = mode === "multi" ? new Set(currentIds) : new Set<number>();

      if (nextIds.has(event.id)) {
        nextIds.delete(event.id);
      } else {
        nextIds.add(event.id);
      }

      return nextIds;
    });
  };

  const handleCreateSlot = (dayIndex: number, startHour: number) => {
    const dayKey = weekDays[dayIndex]?.dateKey;

    if (mode !== "open" || !dayKey || blockedDayKeys.has(dayKey)) {
      return;
    }

    setEvents((currentEvents) => [
      ...currentEvents,
      {
        id: Date.now(),
        dayIndex,
        startHour,
        durationHours: 1.5,
        title: "Slot mới mở",
        detail: "0/10 Slot",
        status: "available",
        waitlist: true,
      },
    ]);
  };

  const openSelectedEvents = (eventIds: Set<number>) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) => {
        if (!eventIds.has(event.id) || event.status === "holiday") {
          return event;
        }

        return {
          ...event,
          status: "available",
          detail: event.detail || "Slot đang mở",
          locked: false,
          waitlist: true,
          attendees: undefined,
        };
      }),
    );
  };

  const toggleBlockedDays = (dayKeys: Set<string>) => {
    setBlockedDayKeys((currentKeys) => {
      const nextKeys = new Set(currentKeys);
      const shouldUnblock = Array.from(dayKeys).every((dayKey) => nextKeys.has(dayKey));

      dayKeys.forEach((dayKey) => {
        if (shouldUnblock) {
          nextKeys.delete(dayKey);
        } else {
          nextKeys.add(dayKey);
        }
      });

      return nextKeys;
    });
  };

  return (
    <PageShell background="scheduleManagement">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="screen" className="pb-20 pt-16 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-[1640px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-7 xl:grid-cols-[1062px_420px] xl:items-start xl:justify-center">
              <div className="flex flex-col gap-4 min-[1180px]:flex-row min-[1180px]:items-center min-[1180px]:justify-between">
                <div className="flex shrink-0 flex-wrap items-center gap-4">
                  <h1 className="font-beVietnamPro text-3xl leading-tight text-[#1C1C19] sm:text-[34px]">
                    {weekLabel}
                  </h1>
                  <div className="flex rounded-full border border-[#D4C3BE] bg-[#F7F3EE] p-1">
                    <IconButton label="Tuần trước" onClick={() => handleWeekShift(-1)}>
                      <ChevronLeft size={22} />
                    </IconButton>
                    <IconButton label="Tuần sau" onClick={() => handleWeekShift(1)}>
                      <ChevronRight size={22} />
                    </IconButton>
                  </div>
                  <label className="inline-flex h-11 items-center rounded-full border border-[#D4C3BE] bg-[#F7F3EE] px-4 font-beVietnamPro text-sm font-semibold text-[#504441]">
                    <input
                      type="date"
                      value={toDateKey(selectedDate)}
                      onChange={handleDateChange}
                      className="bg-transparent outline-none"
                      aria-label="Chọn ngày tháng năm"
                    />
                  </label>
                </div>

                <div className="flex shrink-0 flex-nowrap items-center gap-2 min-[1180px]:justify-end">
                  <ToolbarButton
                    active={mode === "multi"}
                    icon={<ListChecks size={16} />}
                    label="Chọn nhiều"
                    onClick={handleToggleMulti}
                  />
                  <ToolbarButton
                    active={mode === "open"}
                    icon={<CalendarCheck size={16} />}
                    label="Mở Slot"
                    onClick={handleToggleOpenSlot}
                  />
                  <ToolbarButton
                    active={mode === "block"}
                    icon={<CalendarX2 size={16} />}
                    label="Chặn Ngày"
                    tone="danger"
                    onClick={handleToggleBlockDay}
                  />
                </div>
              </div>
              <div className="hidden xl:block" />
            </div>

            <div className="mt-5 grid gap-7 xl:grid-cols-[1062px_420px] xl:items-start xl:justify-center">
              <div className="min-w-0">
                <WeeklyCalendar
                  blockedDayKeys={blockedDayKeys}
                  days={weekDays}
                  events={events}
                  mode={mode}
                  selectedDayKeys={selectedDayKeys}
                  selectedEventIds={selectedEventIds}
                  onCreateSlot={handleCreateSlot}
                  onSelectDay={handleSelectDay}
                  onSelectEvent={handleSelectEvent}
                />
                <Legend />
              </div>

              <aside className="space-y-7 xl:pt-0">
                <SummaryCard />
                <StatusCard
                  acceptsPrivateBookings={acceptsPrivateBookings}
                  onToggle={() => setAcceptsPrivateBookings((currentValue) => !currentValue)}
                />
              </aside>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="rounded-full bg-[#A6341B] px-14 py-4 font-beVietnamPro text-base text-white shadow-[0_10px_24px_rgba(166,52,27,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8d2b17] active:scale-95">
                Xác nhận
              </button>
            </div>
          </div>
        </Section>

        <SiteFooter />
      </main>
    </PageShell>
  );
}

function WeeklyCalendar({
  blockedDayKeys,
  days,
  events,
  mode,
  selectedDayKeys,
  selectedEventIds,
  onCreateSlot,
  onSelectDay,
  onSelectEvent,
}: {
  blockedDayKeys: Set<string>;
  days: ScheduleWeekDay[];
  events: ScheduleEvent[];
  mode: ScheduleMode;
  selectedDayKeys: Set<string>;
  selectedEventIds: Set<number>;
  onCreateSlot: (dayIndex: number, startHour: number) => void;
  onSelectDay: (dayKey: string) => void;
  onSelectEvent: (event: ScheduleEvent) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bodyHeight = hourSlots.length * calendarHourHeight;

  const scrollToHour = (hour: number) => {
    scrollRef.current?.scrollTo({
      top: Math.max(0, (hour - calendarStartHour) * calendarHourHeight - 10),
      behavior: "smooth",
    });
  };

  return (
    <div className="rounded-[28px] border border-[#D4C3BE]/30 bg-[rgba(242,235,225,0.52)] shadow-[0_18px_50px_rgba(92,64,51,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4C3BE]/30 px-5 py-3">
        <p className="font-beVietnamPro text-sm font-semibold text-[#504441]">
          {mode === "open"
            ? "Chọn ô trống để mở slot mới, hoặc bấm vào slot khóa để mở lại."
            : mode === "block"
              ? "Bấm vào tiêu đề ngày để chặn hoặc mở lại cả ngày."
              : mode === "multi"
                ? "Bấm nhiều slot để chọn cùng lúc."
                : "Bấm slot để chọn, dùng date picker để đổi ngày."}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToHour(17)}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#D4C3BE] bg-[#F7F3EE] px-4 font-beVietnamPro text-xs font-semibold uppercase tracking-[0.12em] text-[#504441] transition-colors hover:bg-white"
          >
            <ChevronDown size={16} />
            Xem 17-23h
          </button>
          <button
            type="button"
            onClick={() => scrollToHour(8)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#D4C3BE] bg-[#F7F3EE] text-[#504441] transition-colors hover:bg-white"
            aria-label="Lên đầu lịch"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto xl:overflow-hidden">
        <div
          className="grid min-w-[1062px]"
          style={{
            gridTemplateColumns: `${timeColumnWidth} repeat(7, ${dayColumnWidth})`,
          }}
        >
          <div className="rounded-tl-[28px] bg-[#F4CA80]" />
          {days.map((day) => {
            const isBlocked = blockedDayKeys.has(day.dateKey);
            const isSelected = selectedDayKeys.has(day.dateKey);

            return (
              <button
                key={day.dateKey}
                type="button"
                onClick={() => onSelectDay(day.dateKey)}
                className={`border-l border-b border-[#D4C3BE]/30 px-3 py-4 text-center transition-all duration-300 ${
                  isBlocked
                    ? "bg-[#A6341B] text-[#F9F5F0]"
                    : day.isWeekend
                      ? "bg-[#8B4513] text-[#F4CA80]"
                      : isSelected
                        ? "bg-[#F4CA80] text-[#1C1C19]"
                        : "bg-white/30 text-[#1C1C19] hover:bg-[#F8E0B1]"
                }`}
              >
                <p className="font-beVietnamPro text-[15px] font-semibold tracking-[0.1em] opacity-60">
                  {day.weekday}
                </p>
                <p className="mt-1 font-beVietnamPro text-[31px] leading-none">
                  {day.dayNumber}
                </p>
              </button>
            );
          })}
        </div>

        <div ref={scrollRef} className="max-h-[640px] min-w-[1062px] overflow-y-auto scroll-smooth">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `${timeColumnWidth} repeat(7, ${dayColumnWidth})`,
            }}
          >
            <div className="relative rounded-bl-[28px] bg-[#F4CA80]" style={{ height: bodyHeight }}>
              {hourSlots.map((hour) => (
                <p
                  key={hour}
                  className="absolute left-8 font-beVietnamPro text-base font-semibold tracking-[0.1em] text-[#1C1C19]/40"
                  style={{ top: `${(hour - calendarStartHour) * calendarHourHeight + 24}px` }}
                >
                  {formatHour(hour)}
                </p>
              ))}
            </div>

            {days.map((day, dayIndex) => {
              const isBlocked = blockedDayKeys.has(day.dateKey);

              return (
                <div
                  key={`${day.dateKey}-body`}
                  className={`relative border-l border-[#D4C3BE]/25 ${
                    isBlocked
                      ? "bg-[#A6341B]/20"
                      : day.isWeekend
                        ? "bg-[#8B4513]"
                        : "bg-white/24"
                  }`}
                  style={{ height: bodyHeight }}
                >
                  {hourSlots.map((hour) => (
                    <button
                      key={`${day.dateKey}-${hour}`}
                      type="button"
                      disabled={mode !== "open" || isBlocked}
                      onClick={() => onCreateSlot(dayIndex, hour)}
                      className={`absolute inset-x-0 border-t border-[#D4C3BE]/20 transition-colors ${
                        mode === "open" && !isBlocked ? "hover:bg-[#F4CA80]/28" : ""
                      }`}
                      style={{
                        top: `${(hour - calendarStartHour) * calendarHourHeight}px`,
                        height: calendarHourHeight,
                      }}
                      aria-label={`Mở slot ${formatHour(hour)} ngày ${day.dayNumber}`}
                    />
                  ))}

                  {isBlocked ? (
                    <div className="absolute inset-x-3 top-6 z-10 rounded-xl border border-[#A6341B]/35 bg-[#F9F5F0]/90 px-3 py-3 text-center font-beVietnamPro text-sm font-bold text-[#A6341B] shadow-sm">
                      Ngày đã chặn
                    </div>
                  ) : null}

                  {events
                    .filter((event) => event.dayIndex === dayIndex)
                    .map((event) => (
                      <CalendarEventCard
                        key={event.id}
                        event={event}
                        isBlocked={isBlocked}
                        isSelected={selectedEventIds.has(event.id)}
                        onSelect={() => onSelectEvent(event)}
                      />
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarEventCard({
  event,
  isBlocked,
  isSelected,
  onSelect,
}: {
  event: ScheduleEvent;
  isBlocked: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const top = 16 + (event.startHour - calendarStartHour) * calendarHourHeight;
  const minimumHeight =
    event.status === "full"
      ? 188
      : event.status === "available"
        ? 154
        : event.status === "private"
          ? 112
          : 82;
  const height = Math.max(minimumHeight, event.durationHours * calendarHourHeight);
  const statusClass = eventStatusClass(event.status);
  const selectedClass = isSelected ? "ring-4 ring-[#F4CA80] ring-offset-2 ring-offset-[#F9F5F0]" : "";
  const disabledClass = isBlocked ? "pointer-events-none opacity-35 grayscale" : "";

  if (event.status === "holiday") {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={`${selectedClass} ${disabledClass} absolute inset-x-0 z-20 flex flex-col items-center justify-center gap-2 px-3 text-center text-white/45 transition-transform duration-300 hover:scale-[1.02]`}
        style={{ top, height }}
      >
        <Coffee size={26} />
        <p className="max-w-[90px] font-beVietnamPro text-sm font-semibold leading-5">
          {event.title}
        </p>
      </button>
    );
  }

  if (event.status === "private" || event.status === "locked") {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={`${statusClass} ${selectedClass} ${disabledClass} absolute left-1/2 z-20 flex w-[96px] -translate-x-1/2 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl px-2 text-center font-beVietnamPro text-xs shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(71,45,24,0.18)] sm:w-[104px]`}
        style={{ top, height }}
      >
        {event.status === "private" ? <Coffee size={22} /> : <LockKeyhole size={20} />}
        <p className="line-clamp-3 break-words leading-5">{event.title}</p>
        {event.status === "locked" && <ToggleMini />}
      </button>
    );
  }

  return (
    <article
      className={`${statusClass} ${selectedClass} ${disabledClass} absolute left-1/2 z-20 flex w-[96px] -translate-x-1/2 flex-col justify-between overflow-hidden rounded-xl border px-3 py-4 font-beVietnamPro shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(71,45,24,0.20)] sm:w-[104px]`}
      style={{ top, height }}
    >
      <button type="button" onClick={onSelect} className="flex h-full flex-col justify-between text-left">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-1">
            <h2 className="line-clamp-5 min-w-0 break-words text-[15px] font-bold leading-[18px]">
              {event.title}
            </h2>
            {event.locked && <Lock size={15} className="shrink-0" />}
          </div>
          <p className="mt-3 line-clamp-2 break-words text-[15px] leading-5 opacity-75">{event.detail}</p>
        </div>

        <div className="mt-3 flex items-end justify-between">
          {event.attendees ? <AvatarStack attendees={event.attendees} /> : <span />}
          {event.waitlist && <Users size={18} />}
        </div>
      </button>
    </article>
  );
}

function SummaryCard() {
  const { bookedRate, recentBookings } = mockScheduleManagement;

  return (
    <div className="relative min-h-[345px] overflow-hidden rounded-[28px] px-11 py-10 shadow-sm">
      <img
        src="/quanlilichtrinh/Rectangle4445.png"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        alt=""
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-beVietnamPro text-5xl leading-none text-[#A6341B]">
              {bookedRate}%
            </p>
            <p className="mt-2 max-w-[220px] font-beVietnamPro text-sm uppercase tracking-[0.08em] text-[#A6341B]">
              Các buổi đã được đặt chỗ
            </p>
          </div>
          <div className="grid h-20 w-20 place-items-center rounded-full border-[7px] border-[#A6341B] text-[#A6341B] transition-transform duration-300 hover:scale-105">
            <TrendingUp size={24} />
          </div>
        </div>

        <div className="mt-12 space-y-5">
          {recentBookings.map((booking) => (
            <div key={booking.name} className="flex items-center gap-4 rounded-3xl bg-[#FDF9F4] p-4 transition-transform duration-300 hover:-translate-y-0.5">
              {booking.avatar ? (
                <img src={booking.avatar} className="h-12 w-12 rounded-full object-cover" alt={booking.name} />
              ) : (
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#F2EBE1] font-beVietnamPro text-sm font-bold text-[#1C1C19]">
                  {booking.initials}
                </div>
              )}
              <div>
                <p className="font-beVietnamPro text-base font-bold text-[#1C1C19]">
                  {booking.name}
                </p>
                <p className="font-beVietnamPro text-sm leading-5 text-[#1C1C19]/60">
                  {booking.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusCard({
  acceptsPrivateBookings,
  onToggle,
}: {
  acceptsPrivateBookings: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[28px] bg-[#E0A03F] px-12 py-9 shadow-sm">
      <p className="font-beVietnamPro text-sm font-semibold uppercase tracking-[0.2em] text-[#5D4037]">
        Trạng thái
      </p>
      <div className="mt-4 flex items-center justify-between gap-6">
        <p className="font-beVietnamPro text-2xl leading-8 text-[#504441]">
          Chấp nhận đặt lịch riêng
        </p>
        <button
          type="button"
          onClick={onToggle}
          className={`relative h-9 w-20 rounded-full transition-colors ${
            acceptsPrivateBookings ? "bg-[#A6341B]" : "bg-[#827470]"
          }`}
          aria-pressed={acceptsPrivateBookings}
          aria-label="Bật nhận đặt lịch riêng"
        >
          <span
            className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow transition-all ${
              acceptsPrivateBookings ? "right-1" : "right-12"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {mockScheduleManagement.legend.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <LegendSwatch status={item.status} />
          <p className="font-beVietnamPro text-base text-[#1C1C19]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function ToolbarButton({
  active,
  icon,
  label,
  onClick,
  tone = "neutral",
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  tone?: "neutral" | "danger";
}) {
  const activeClass =
    tone === "danger"
      ? "border-[#A6341B] bg-[#A6341B] text-white shadow-[0_10px_20px_rgba(166,52,27,0.22)]"
      : "border-[#E0A03F] bg-[#F4CA80] text-[#5D4037] shadow-[0_10px_20px_rgba(224,160,63,0.22)]";
  const inactiveClass =
    tone === "danger"
      ? "border-[#B35C44] text-[#B35C44] hover:bg-[#B35C44]/10"
      : "border-[#827470] text-[#504441] hover:bg-white/70";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-beVietnamPro text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 sm:text-sm ${
        active ? activeClass : inactiveClass
      }`}
      aria-pressed={active}
    >
      {icon}
      {label}
    </button>
  );
}

function IconButton({
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
      className="grid h-9 w-9 place-items-center rounded-full text-[#1C1C19] transition-colors hover:bg-white"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function AvatarStack({ attendees }: { attendees: string[] }) {
  return (
    <div className="flex -space-x-2">
      {attendees.map((attendee, index) => (
        <span
          key={`${attendee}-${index}`}
          className="grid h-6 w-6 place-items-center rounded-full border border-[#5D4037] bg-[#B35C44] text-[9px] font-semibold text-[#F9F5F0]"
        >
          {attendee}
        </span>
      ))}
    </div>
  );
}

function ToggleMini() {
  return (
    <span className="absolute right-2 top-2 flex h-3.5 w-7 items-center rounded-full border border-[#1C1C19]/30 bg-white/50">
      <span className="ml-0.5 h-2.5 w-2.5 rounded-full bg-[#1C1C19]/70" />
    </span>
  );
}

function LegendSwatch({ status }: { status: ScheduleEventStatus | "waitlist" }) {
  if (status === "waitlist") {
    return <ListChecks size={18} className="text-[#B35C44]" />;
  }

  return <span className={`h-4 w-4 rounded ${legendClass(status)}`} />;
}

function eventStatusClass(status: ScheduleEventStatus) {
  switch (status) {
    case "available":
      return "border-[#827470]/45 bg-[#FDF9F4] text-[#5D4037]";
    case "full":
      return "border-[#8B4513] bg-[#8B4513] text-[#F9F5F0]";
    case "private":
      return "border-2 border-dashed border-[#D4C3BE]/70 bg-[#F7F3EE]/45 text-[#1C1C19]/55";
    case "locked":
      return "border border-dashed border-[#827470]/50 bg-[#DDD9D5]/35 text-[#1C1C19]/75";
    case "holiday":
      return "text-white/45";
  }
}

function legendClass(status: ScheduleEventStatus) {
  switch (status) {
    case "available":
      return "border border-[#827470]/45 bg-[#FDF9F4]";
    case "full":
      return "bg-[#5D4037]";
    case "private":
      return "border border-dashed border-[#D4C3BE] bg-[#F7F3EE]";
    case "locked":
      return "border border-dashed border-[#827470]/50 bg-[#DDD9D5]/35";
    case "holiday":
      return "bg-[#8B4513]";
  }
}

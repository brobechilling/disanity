import React from "react";
import {
  CalendarCheck,
  CalendarX2,
  ChevronLeft,
  ChevronRight,
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
const calendarHourHeight = 56;

export default function ScheduleManagementPage() {
  const schedule = mockScheduleManagement;

  return (
    <PageShell background="scheduleManagement">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="screen" className="pb-20 pt-16 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-[1640px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-7 xl:grid-cols-[1062px_420px] xl:items-start xl:justify-center">
              <div className="flex flex-col gap-4 min-[1180px]:flex-row min-[1180px]:items-center min-[1180px]:justify-between">
                <div className="flex shrink-0 flex-wrap items-center gap-5">
                  <h1 className="font-beVietnamPro text-3xl leading-tight text-[#1C1C19] sm:text-[34px]">
                    {schedule.weekLabel}
                  </h1>
                  <div className="flex rounded-full border border-[#D4C3BE] bg-[#F7F3EE] p-1">
                    <IconButton label="Tuần trước">
                      <ChevronLeft size={22} />
                    </IconButton>
                    <IconButton label="Tuần sau">
                      <ChevronRight size={22} />
                    </IconButton>
                  </div>
                </div>

                <div className="flex shrink-0 flex-nowrap items-center gap-2 min-[1180px]:justify-end">
                  <ToolbarButton icon={<ListChecks size={16} />} label="Chọn nhiều" />
                  <ToolbarButton icon={<CalendarCheck size={16} />} label="Mở Slot" />
                  <ToolbarButton icon={<CalendarX2 size={16} />} label="Chặn Ngày" tone="danger" />
                </div>
              </div>
              <div className="hidden xl:block" />
            </div>

            <div className="mt-5 grid gap-7 xl:grid-cols-[1062px_420px] xl:items-start xl:justify-center">
              <div className="min-w-0">
                <WeeklyCalendar />
                <Legend />
              </div>

              <aside className="space-y-7 xl:pt-0">
                <SummaryCard />
                <StatusCard />
              </aside>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="rounded-full bg-[#A6341B] px-14 py-4 font-beVietnamPro text-base text-white shadow-[0_10px_24px_rgba(166,52,27,0.22)] transition-colors hover:bg-[#8d2b17]">
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

function WeeklyCalendar() {
  const { days, events, times } = mockScheduleManagement;

  return (
    <div className="overflow-x-auto rounded-[28px] border border-[#D4C3BE]/30 bg-[rgba(242,235,225,0.52)] shadow-[0_18px_50px_rgba(92,64,51,0.08)] xl:overflow-hidden">
      <div
        className="grid min-w-[1062px]"
        style={{
          gridTemplateColumns: `${timeColumnWidth} repeat(7, ${dayColumnWidth})`,
        }}
      >
        <div className="rounded-tl-[28px] bg-[#F4CA80]" />
        {days.map((day) => (
          <div
            key={day.date}
            className={`border-l border-b border-[#D4C3BE]/30 px-3 py-4 text-center ${
              day.isWeekend ? "bg-[#8B4513] text-[#F4CA80]" : "bg-white/30 text-[#1C1C19]"
            }`}
          >
            <p className="font-beVietnamPro text-[15px] font-semibold tracking-[0.1em] opacity-60">
              {day.weekday}
            </p>
            <p className="mt-1 font-beVietnamPro text-[31px] leading-none">
              {day.date}
            </p>
          </div>
        ))}

        <div className="relative row-span-1 min-h-[560px] rounded-bl-[28px] bg-[#F4CA80]">
          {times.map((time, index) => (
            <p
              key={time}
              className="absolute left-8 font-beVietnamPro text-base font-semibold tracking-[0.1em] text-[#1C1C19]/40"
              style={{ top: `${78 + index * 112}px` }}
            >
              {time}
            </p>
          ))}
        </div>

        {days.map((day, index) => (
          <div
            key={`${day.date}-body`}
            className={`relative min-h-[560px] border-l border-[#D4C3BE]/25 ${
              day.isWeekend ? "bg-[#8B4513]" : "bg-white/24"
            }`}
          >
            <div className="absolute inset-x-0 top-[112px] h-px bg-[#D4C3BE]/20" />
            <div className="absolute inset-x-0 top-[224px] h-px bg-[#D4C3BE]/20" />
            <div className="absolute inset-x-0 top-[336px] h-px bg-[#D4C3BE]/20" />
            <div className="absolute inset-x-0 top-[448px] h-px bg-[#D4C3BE]/20" />
            {events
              .filter((event) => event.dayIndex === index)
              .map((event) => (
                <CalendarEventCard key={event.id} event={event} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarEventCard({ event }: { event: ScheduleEvent }) {
  const top = 16 + (event.startHour - 8) * calendarHourHeight;
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

  if (event.status === "holiday") {
    return (
      <div
        className="absolute inset-x-0 flex flex-col items-center justify-center gap-2 px-3 text-center text-white/45"
        style={{ top, height }}
      >
        <Coffee size={26} />
        <p className="max-w-[90px] font-beVietnamPro text-sm font-semibold leading-5">
          {event.title}
        </p>
      </div>
    );
  }

  if (event.status === "private" || event.status === "locked") {
    return (
      <div
        className={`${statusClass} absolute left-1/2 flex w-[96px] -translate-x-1/2 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl px-2 text-center font-beVietnamPro text-xs shadow-sm sm:w-[104px]`}
        style={{ top, height }}
      >
        {event.status === "private" ? <Coffee size={22} /> : <LockKeyhole size={20} />}
        <p className="line-clamp-3 leading-5 break-words">{event.title}</p>
        {event.status === "locked" && <ToggleMini />}
      </div>
    );
  }

  return (
    <article
      className={`${statusClass} absolute left-1/2 flex w-[96px] -translate-x-1/2 flex-col justify-between overflow-hidden rounded-xl border px-3 py-4 font-beVietnamPro shadow-sm sm:w-[104px]`}
      style={{ top, height }}
    >
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
          <div className="grid h-20 w-20 place-items-center rounded-full border-[7px] border-[#A6341B] text-[#A6341B]">
            <TrendingUp size={24} />
          </div>
        </div>

        <div className="mt-12 space-y-5">
          {recentBookings.map((booking) => (
            <div key={booking.name} className="flex items-center gap-4 rounded-3xl bg-[#FDF9F4] p-4">
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

function StatusCard() {
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
          className="relative h-9 w-20 rounded-full bg-[#A6341B]"
          aria-label="Bật nhận đặt lịch riêng"
        >
          <span className="absolute right-1 top-1 h-7 w-7 rounded-full bg-white shadow" />
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
  icon,
  label,
  tone = "neutral",
}: {
  icon: React.ReactNode;
  label: string;
  tone?: "neutral" | "danger";
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-beVietnamPro text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm ${
        tone === "danger"
          ? "border-[#B35C44] text-[#B35C44]"
          : "border-[#827470] text-[#504441]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
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

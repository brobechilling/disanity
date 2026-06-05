import React from "react";
import {
  ArrowRightLeft,
  Bell,
  CalendarDays,
  LayoutDashboard,
  Palette,
  Plus,
  Settings,
  Ticket,
  UserRound,
  Wallet,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import { mockArtisanAccount } from "@/utils/mockData";

const metricIcons = [Palette, CalendarDays, Ticket, Wallet];

export default function ArtisanAccount() {
  return (
    <PageShell background="artisanAccount">
      <SiteHeader />
      <main>
        <Section width="screen" gutter="none">
          <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_288px]">
            <div className="mx-auto min-w-0 w-full max-w-[1120px] space-y-11 px-6 py-10 sm:px-10 lg:px-[88px] lg:py-12">
              <WelcomePanel />
              <AccountActions />
              <MetricGrid />
              <PersonalInfo />
              <BookingsTable />
              <Reviews />
              <StatusNote />
              <CreateWorkshopCallout />
            </div>

            <ArtisanSidebar />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}

function WelcomePanel() {
  const { profile } = mockArtisanAccount;

  return (
    <div className="pt-1">
      <h1 className="break-words font-jaro text-[28px] leading-tight text-[#A6341B] sm:text-4xl">
        {profile.greeting}
      </h1>
    </div>
  );
}

function AccountActions() {
  return (
    <div className="flex items-center gap-3">
      <button className="rounded-full border-2 border-[#5E5E5E] px-5 py-2 font-beVietnamPro text-sm font-medium text-[#666] transition-colors hover:border-[#A6341B] hover:text-[#A6341B]">
        Hồ sơ công khai
      </button>
      <button
        type="button"
        className="relative grid h-11 w-11 place-items-center rounded-full bg-[#F1F5F9] text-[#475569]"
        aria-label="Thông báo"
      >
        <Bell size={18} />
        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#C65C39]" />
      </button>
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {mockArtisanAccount.metrics.map((metric, index) => {
        const Icon = metricIcons[index] ?? LayoutDashboard;
        return <MetricCard key={metric.label} icon={Icon} {...metric} />;
      })}
    </div>
  );
}

function MetricCard({
  label,
  value,
  tone,
  icon: Icon,
}: {
  label: string;
  value: string;
  tone: string;
  icon: React.ElementType<{ size?: number; className?: string }>;
}) {
  const toneClass =
    tone === "sage"
      ? "bg-[#eef3ea] text-[#1A2F23]"
      : tone === "slate"
        ? "bg-[#f1f5f9] text-[#475569]"
        : "bg-[#f8e7df] text-[#C65C39]";

  return (
    <article className="min-h-[168px] rounded-[44px] bg-[#C65C39]/10 p-6">
      <div className={`mb-4 grid h-9 w-9 place-items-center rounded-full bg-white ${toneClass}`}>
        <Icon size={18} />
      </div>
      <p className="font-beVietnamPro text-xs font-medium text-[#64748B]">{label}</p>
      <p className="mt-2 break-words font-beVietnamPro text-3xl font-black leading-tight text-[#0F172A]">
        {value}
      </p>
    </article>
  );
}

function PersonalInfo() {
  return (
    <DashboardPanel title="Thông tin cá nhân">
      <div className="grid gap-4">
        {mockArtisanAccount.personalInfo.map((item) => (
            <div key={item.label} className="grid gap-2 md:grid-cols-[150px_minmax(0,1fr)_100px] md:items-center">
            <p className="font-beVietnamPro text-base font-black text-[#0F172A]">{item.label}:</p>
            <div className="min-w-0 border border-[#A6341B] bg-transparent px-4 py-3 text-center font-beVietnamPro text-sm font-medium text-[#0F172A]">
              {item.value}
            </div>
            <button className="w-fit font-beVietnamPro text-sm font-medium text-[#A6341B] underline-offset-4 hover:underline md:justify-self-center">
              Thay đổi
            </button>
          </div>
        ))}
      </div>
    </DashboardPanel>
  );
}

function BookingsTable() {
  return (
    <DashboardPanel title="Tổng lượt đặt Workshop">
      <div className="overflow-x-auto">
        <table className="min-w-[680px] w-full border-collapse font-beVietnamPro text-sm">
          <thead>
            <tr className="border-b-2 border-[#8B4513] text-left text-[#A6341B]">
              <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Mã</th>
              <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Khách hàng</th>
              <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Trạng thái</th>
              <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Giá</th>
            </tr>
          </thead>
          <tbody>
            {mockArtisanAccount.bookings.map((booking) => (
              <tr key={booking.code} className="border-b-2 border-[#8B4513]/45">
                <td className="px-4 py-4 font-mono text-[#64748B]">{booking.code}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F1F5F9] text-xs font-bold text-[#0F172A]">
                      {booking.initials}
                    </span>
                    <span className="font-medium text-[#0F172A]">{booking.customer}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="px-4 py-4 text-[#0F172A]">{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPanel>
  );
}

function StatusBadge({ status }: { status: string }) {
  const confirmed = status === "Đã xác nhận";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        confirmed ? "bg-[#DCFCE7] text-[#15803D]" : "bg-[#FEF3C7] text-[#B45309]"
      }`}
    >
      {status}
    </span>
  );
}

function Reviews() {
  const circleClasses = ["bg-[#47624d]", "bg-[#D4A017]", "bg-[#B7351E]"];

  return (
    <DashboardPanel title="Các đánh giá từ khách hàng">
      <div className="grid gap-7 pt-10 lg:grid-cols-3">
        {mockArtisanAccount.reviews.map((review, index) => (
          <article key={review.workshop} className="relative min-h-[290px] bg-[#F5F5F5] px-6 pb-6 pt-24 text-center">
            <div
              className={`absolute left-1/2 top-0 grid h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white ${circleClasses[index % circleClasses.length]}`}
            >
              <UserRound size={22} />
            </div>
            <h3 className="font-jaro text-xl text-[#A6341B]">{review.author}</h3>
            <p className="mt-5 font-beVietnamPro text-xs uppercase tracking-[0.25em] text-[#4F4F4F]">
              {review.workshop}
            </p>
            <p className="mt-5 font-beVietnamPro text-sm leading-6 text-[#6E6E6E]">“{review.quote}”</p>
          </article>
        ))}
      </div>
    </DashboardPanel>
  );
}

function StatusNote() {
  return (
    <p className="mx-auto max-w-2xl text-center font-beVietnamPro text-sm leading-5 text-[#64748B]">
      {mockArtisanAccount.profile.statusMessage}
    </p>
  );
}

function CreateWorkshopCallout() {
  const { cta } = mockArtisanAccount;

  return (
    <div className="mx-auto max-w-[980px] rounded-[14px] bg-[#B1B08B] px-5 py-16 text-center sm:px-10">
      <h2 className="font-jaro text-4xl leading-tight text-black sm:text-5xl">{cta.title}</h2>
      <p className="mx-auto mt-3 max-w-2xl font-roboto text-base leading-7 text-black/75">{cta.description}</p>
      <button className="mt-6 border border-black bg-[#A6341B] px-6 py-3 font-roboto text-base text-white transition-colors hover:bg-[#8f2c17]">
        {cta.action}
      </button>
    </div>
  );
}

function ArtisanSidebar() {
  const { profile } = mockArtisanAccount;

  return (
    <aside className="flex h-full min-h-[420px] flex-col bg-[#8B4513] p-6 text-white lg:min-h-[calc(100vh-156px)]">
      <div className="flex items-center gap-3 rounded-full bg-[#7a3d12] p-2">
        <img src={profile.avatar} alt={profile.name} className="h-10 w-10 rounded-full object-cover" />
        <div className="min-w-0">
          <p className="truncate font-beVietnamPro text-sm font-medium">{profile.name}</p>
          <p className="font-beVietnamPro text-xs text-[#CBD5E1]">{profile.role}</p>
        </div>
      </div>

      <nav className="mt-4 space-y-3">
        <SidebarButton icon={ArrowRightLeft} label="Chuyển qua chế độ lữ khách" active />
        <SidebarButton icon={LayoutDashboard} label="Quản lý lịch trình" active />
      </nav>

      <div className="mt-10 border-t border-white/15 pt-5 lg:mt-auto">
        <SidebarButton icon={Plus} label="Workshop Mới" active centered />
        <SidebarButton icon={Settings} label="Cài Đặt" />
      </div>
    </aside>
  );
}

function SidebarButton({
  icon: Icon,
  label,
  active = false,
  centered = false,
}: {
  icon: React.ElementType<{ size?: number; className?: string }>;
  label: string;
  active?: boolean;
  centered?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-full px-4 py-3 font-beVietnamPro text-base transition-colors ${
        active ? "bg-[#C65C39] text-white hover:bg-[#b24f31]" : "text-[#CBD5E1] hover:bg-white/10"
      } ${centered ? "justify-center font-bold" : ""}`}
    >
      <Icon size={18} />
      <span className="min-w-0 text-left">{label}</span>
    </button>
  );
}

function DashboardPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-8 font-jaro text-3xl leading-tight text-[#A6341B]">{title}</h2>
      {children}
    </section>
  );
}

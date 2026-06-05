import React from "react";
import {
  ArrowRightLeft,
  Bell,
  CalendarDays,
  History,
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
import { mockUserAccount } from "@/utils/mockData";

const metricIcons = [Palette, CalendarDays, Ticket, Wallet];

export default function UserAccount() {
  return (
    <PageShell background="userAccount">
      <SiteHeader />
      <main>
        <Section width="screen" gutter="none">
          <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_288px]">
            <div className="mx-auto min-w-0 w-full max-w-[1120px] space-y-11 px-6 py-10 sm:px-10 lg:px-[88px] lg:py-12">
              <WelcomePanel />
              <StatusIntro />
              <AccountActions />
              <MetricGrid />
              <PersonalInfo />
              <UpcomingWorkshops />
              <Reviews />
              <CreateBookingCallout />
            </div>

            <UserSidebar />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}

function WelcomePanel() {
  return (
    <div className="pt-1">
      <h1 className="break-words font-jaro text-[28px] leading-tight text-[#A6341B] sm:text-4xl">
        {mockUserAccount.profile.greeting}
      </h1>
    </div>
  );
}

function StatusIntro() {
  return (
    <p className="max-w-3xl font-beVietnamPro text-sm leading-6 text-[#64748B] sm:text-base">
      {mockUserAccount.profile.statusMessage}
    </p>
  );
}

function AccountActions() {
  return (
    <div className="flex items-center gap-3">
      <button className="rounded-full border-2 border-white px-5 py-2 font-beVietnamPro text-sm font-medium text-[#0F172A] transition-colors hover:border-[#A6341B] hover:text-[#A6341B]">
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
      {mockUserAccount.metrics.map((metric, index) => {
        const Icon = metricIcons[index] ?? LayoutDashboard;
        return <MetricCard key={metric.label} icon={Icon} {...metric} />;
      })}
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  tone: string;
  icon: React.ElementType<{ size?: number; className?: string }>;
}) {
  return (
    <article className="min-h-[168px] rounded-[44px] bg-[#C65C39]/10 p-6">
      <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-white text-[#A6341B]">
        <Icon size={18} />
      </div>
      <p className="font-beVietnamPro text-xs font-medium text-[#A6341B]">{label}</p>
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
        {mockUserAccount.personalInfo.map((item) => (
          <div key={item.label} className="grid gap-2 md:grid-cols-[150px_minmax(0,1fr)_100px] md:items-center">
            <p className="font-beVietnamPro text-base font-black text-[#0F172A]">{item.label}:</p>
            <div className="min-w-0 border border-black bg-transparent px-4 py-3 text-center font-beVietnamPro text-sm font-medium text-[#0F172A]">
              {item.value}
            </div>
            <button className="w-fit font-beVietnamPro text-sm font-medium text-[#0F172A] underline-offset-4 hover:underline md:justify-self-center">
              Thay đổi
            </button>
          </div>
        ))}
      </div>
    </DashboardPanel>
  );
}

function UpcomingWorkshops() {
  return (
    <DashboardPanel title="Các Workshop sắp tới">
      <div className="space-y-8">
        {mockUserAccount.upcomingWorkshops.map((workshop) => (
          <article
            key={`${workshop.title}-${workshop.image}`}
            className="border-y-2 border-[#8B4513] py-7"
          >
            <div className="grid gap-6 lg:grid-cols-[170px_minmax(0,240px)_minmax(220px,1fr)_220px] lg:items-start">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="h-[216px] w-[170px] rounded-[15px] border-[3px] border-[#D4A017] object-cover"
              />

              <div className="space-y-6">
                <h3 className="font-dMSans text-3xl font-bold leading-[1.05] text-[#A6341B]">
                  {workshop.title}
                </h3>
                <div>
                  <p className="font-roboto text-sm font-semibold tracking-[0.02em] text-[#1F2937]">
                    {workshop.packageName}
                  </p>
                  <div className="mt-4 flex gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-8 w-8 rounded-full border border-[#F9FAFB] bg-[#9A9A9A]"
                      />
                    ))}
                  </div>
                </div>
                <div className="inline-flex h-10 min-w-[102px] items-center justify-between border border-[#1F2937] bg-white px-3 font-roboto text-base text-[#1F2937]">
                  <span>SL:</span>
                  <span>{workshop.quantity}</span>
                </div>
              </div>

              <div>
                <p className="font-dMSans text-xl font-bold leading-7 text-black">Mô tả:</p>
                <ul className="mt-2 space-y-1 font-beVietnamPro text-sm leading-6 text-black">
                  {workshop.details.map((detail) => (
                    <li key={detail}>- {detail}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-8 lg:items-center">
                <p className="max-w-[210px] text-center font-dMSans text-2xl font-bold leading-tight tracking-[0.12em] text-black">
                  Giá: {workshop.price}
                </p>
                <button className="rounded-[15px] border-2 border-[#A6341B] bg-[#D4A017] px-5 py-4 font-beVietnamPro text-base font-medium text-white transition-colors hover:bg-[#c29214]">
                  Xem chi tiết đơn hàng
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </DashboardPanel>
  );
}

function Reviews() {
  return (
    <DashboardPanel title="Các đánh giá bạn đã viết">
      <div className="grid gap-7 pt-10 lg:grid-cols-3">
        {mockUserAccount.reviews.map((review) => (
          <article key={review.workshop} className="relative min-h-[290px] bg-[#F5F5F5] px-6 pb-6 pt-24 text-center">
            <div className="absolute left-1/2 top-0 grid h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#A6341B] text-white">
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

function CreateBookingCallout() {
  const { cta } = mockUserAccount;

  return (
    <div className="mx-auto max-w-[980px] rounded-[14px] bg-[#F4CA80] px-5 py-16 text-center sm:px-10">
      <h2 className="font-jaro text-4xl leading-tight text-black sm:text-5xl">{cta.title}</h2>
      <p className="mx-auto mt-3 max-w-2xl font-roboto text-base leading-7 text-black/75">{cta.description}</p>
      <button className="mt-6 rounded-[10px] bg-[#A6341B] px-6 py-3 font-roboto text-base text-white transition-colors hover:bg-[#8f2c17]">
        {cta.action}
      </button>
    </div>
  );
}

function UserSidebar() {
  const { profile } = mockUserAccount;

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
        <SidebarButton icon={ArrowRightLeft} label="Chuyển qua chế độ nghệ nhân" active />
        <SidebarButton icon={History} label="Lịch sử mua hàng" />
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightLeft,
  Bell,
  CalendarDays,
  History,
  LayoutDashboard,
  LogOut,
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
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useAuth } from "@/context/AuthContext";
import { useBooking } from "@/context/BookingContext";
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
              <ScrollReveal animation="fade-in" duration={600}>
                <WelcomePanel />
                <StatusIntro />
                <AccountActions />
              </ScrollReveal>
              <ScrollReveal animation="slide-up" duration={800} delay={100}>
                <MetricGrid />
              </ScrollReveal>
              <PersonalInfo />
              <UpcomingWorkshops />
              <Reviews />
              <ScrollReveal animation="scale-up" duration={800}>
                <CreateBookingCallout />
              </ScrollReveal>
            </div>

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

function WelcomePanel() {
  const { user } = useAuth();
  const displayName = user?.name ?? mockUserAccount.profile.name;

  return (
    <div className="pt-1">
      <h1 className="break-words font-jaro text-[28px] leading-tight text-[#A6341B] sm:text-4xl">
        Xin chao, {displayName}!
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
    <article className="min-h-[168px] rounded-[44px] bg-[#C65C39]/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:bg-[#C65C39]/15">
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
  const { user } = useAuth();
  const initialPersonalInfo = React.useMemo(() => {
    return mockUserAccount.personalInfo.map((item, index) => {
      if (index === 0 && user?.name) {
        return { ...item, value: user.name };
      }

      if (item.label === "Email" && user?.email) {
        return { ...item, value: user.email };
      }

      return item;
    });
  }, [user]);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [editingLabel, setEditingLabel] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  React.useEffect(() => {
    setPersonalInfo(initialPersonalInfo);
  }, [initialPersonalInfo]);

  const handleToggleEdit = (label: string, currentValue: string) => {
    if (editingLabel === label) {
      setPersonalInfo((prev) =>
        prev.map((item) => (item.label === label ? { ...item, value: editValue } : item))
      );
      setEditingLabel(null);
    } else {
      setEditingLabel(label);
      setEditValue(currentValue);
    }
  };

  return (
    <DashboardPanel title="Thông tin cá nhân">
      <div className="grid gap-4">
        {personalInfo.map((item) => {
          const isEditing = editingLabel === item.label;
          return (
            <div key={item.label} className="grid gap-2 md:grid-cols-[150px_minmax(0,1fr)_100px] md:items-center">
              <p className="font-beVietnamPro text-base font-black text-[#0F172A]">{item.label}:</p>
              {isEditing ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="min-w-0 border-2 border-[#A6341B] bg-white px-4 py-2 text-center font-beVietnamPro text-sm font-medium text-[#0F172A] rounded-md outline-none focus:ring-1 focus:ring-[#A6341B]"
                />
              ) : (
                <div className="min-w-0 border border-black bg-transparent px-4 py-3 text-center font-beVietnamPro text-sm font-medium text-[#0F172A] rounded-sm">
                  {item.value}
                </div>
              )}
              <button
                onClick={() => handleToggleEdit(item.label, item.value)}
                className="w-fit font-beVietnamPro text-sm font-medium text-[#0F172A] underline-offset-4 hover:underline md:justify-self-center"
              >
                {isEditing ? "Lưu" : "Thay đổi"}
              </button>
            </div>
          );
        })}
      </div>
    </DashboardPanel>
  );
}

function UpcomingWorkshops() {
  const { cart, updateCartItemQty } = useBooking();
  const navigate = useNavigate();
  const workshops = cart.map((item) => ({
    id: item.workshopId,
    title: item.title,
    image: item.img,
    packageName: "Trọn gói",
    quantity: item.qty,
    unitPrice: item.price,
    details: [
      `Thể loại: ${item.genre}`,
      `Loại hình: ${item.type}`,
      `Địa điểm: ${item.location}`,
      `Nghệ nhân: ${item.artisan}`,
      `Thời lượng: ${item.duration}`,
      item.date ? `Ngày ${item.date}` : "Ngày chưa chọn",
    ],
  }));

  const handleQtyChange = (id: string, newQty: number) => {
    updateCartItemQty(id, newQty);
  };

  return (
    <DashboardPanel title="Các Workshop sắp tới">
      <div className="space-y-8">
        {workshops.length === 0 && (
          <div className="rounded-[14px] border border-[#A6341B]/20 bg-white/45 px-6 py-10 text-center">
            <p className="font-beVietnamPro text-base font-semibold text-[#64748B]">
              Bạn chưa có workshop sắp tới.
            </p>
          </div>
        )}

        {workshops.map((workshop) => {
          return (
            <article
              key={workshop.id}
              className="border-y-2 border-[#8B4513] py-7 transition-all duration-300 hover:bg-[#8B4513]/5 rounded-lg px-2"
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

                  {/* Quantity Input */}
                  <label className="flex h-10 w-[132px] items-center gap-2 rounded-[6px] border border-[#1F2937] bg-[#FFF] px-3 font-beVietnamPro text-sm font-semibold text-[#1F2937]">
                    <span className="shrink-0">SL:</span>
                    <input
                      type="number"
                      min={1}
                      value={workshop.quantity === 0 ? "" : workshop.quantity}
                      onChange={(e) => {
                        const valStr = e.target.value;
                        if (valStr === "") {
                          handleQtyChange(workshop.id, 0);
                        } else {
                          const val = parseInt(valStr, 10);
                          if (!isNaN(val)) {
                            handleQtyChange(workshop.id, val);
                          }
                        }
                      }}
                      onBlur={() => {
                        if (workshop.quantity < 1) {
                          handleQtyChange(workshop.id, 1);
                        }
                      }}
                      className="min-w-0 flex-1 bg-transparent text-center outline-none"
                    />
                  </label>
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
                    Giá: {(workshop.unitPrice * workshop.quantity).toLocaleString("vi-VN")}đ
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/ticketqr")}
                    className="rounded-[15px] border-2 border-[#A6341B] bg-[#D4A017] px-5 py-4 font-beVietnamPro text-base font-medium text-white transition-colors hover:bg-[#c29214]"
                  >
                    Xem chi tiết đơn hàng
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </DashboardPanel>
  );
}

function Reviews() {
  return (
    <DashboardPanel title="Các đánh giá bạn đã viết">
      <div className="grid gap-7 pt-10 lg:grid-cols-3">
        {mockUserAccount.reviews.map((review) => (
          <article key={review.workshop} className="relative min-h-[290px] bg-[#F5F5F5] px-6 pb-6 pt-24 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:bg-[#eaeaea]">
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
      <Link
        to="/booking"
        className="mt-6 inline-flex rounded-[10px] bg-[#A6341B] px-6 py-3 font-roboto text-base text-white transition-colors hover:bg-[#8f2c17]"
      >
        {cta.action}
      </Link>
    </div>
  );
}

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

function DashboardPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal animation="slide-up" duration={800}>
      <section>
        <h2 className="mb-8 font-jaro text-3xl leading-tight text-[#A6341B]">{title}</h2>
        {children}
      </section>
    </ScrollReveal>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightLeft,
  Bell,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Palette,
  Plus,
  Settings,
  Ticket,
  Wallet,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useAuth } from "@/context/AuthContext";
import { useBooking, type ConfirmedBookingItem } from "@/context/BookingContext";
import { useWorkshopCatalog, type CreatedWorkshop } from "@/context/WorkshopCatalogContext";
import { mockArtisanAccount } from "@/utils/mockData";

const metricIcons = [Palette, CalendarDays, Ticket, Wallet];

export default function ArtisanAccount() {
  const { ownedWorkshops } = useWorkshopCatalog();
  const { confirmedBookings } = useBooking();
  const ownedWorkshopIds = React.useMemo(
    () => new Set(ownedWorkshops.map((workshop) => workshop.id)),
    [ownedWorkshops]
  );
  const artisanBookings = React.useMemo(
    () => confirmedBookings.filter((booking) => ownedWorkshopIds.has(booking.workshopId)),
    [confirmedBookings, ownedWorkshopIds]
  );

  return (
    <PageShell background="artisanAccount">
      <SiteHeader />
      <main>
        <Section width="screen" gutter="none">
          <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_288px]">
            <div className="mx-auto min-w-0 w-full max-w-[1120px] space-y-11 px-6 py-10 sm:px-10 lg:px-[88px] lg:py-12">
              <ScrollReveal animation="fade-in" duration={600}>
                <WelcomePanel />
                <AccountActions />
              </ScrollReveal>
              <ScrollReveal animation="slide-up" duration={800} delay={100}>
                <MetricGrid
                  confirmedBookings={artisanBookings}
                  ownedWorkshops={ownedWorkshops}
                />
              </ScrollReveal>
              <PersonalInfo />
              <ArtisanBookingsTable bookings={artisanBookings} />
              <BookingsTable ownedWorkshops={ownedWorkshops} />
              <Reviews />
              <ScrollReveal animation="fade-in" duration={800}>
                <StatusNote workshopCount={ownedWorkshops.length} />
              </ScrollReveal>
              <ScrollReveal animation="scale-up" duration={800}>
                <CreateWorkshopCallout />
              </ScrollReveal>
            </div>

            <ScrollReveal className="h-full" animation="slide-left" duration={800}>
              <ArtisanSidebar />
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
  const { profile } = mockArtisanAccount;
  const displayName = user?.name ?? profile.name;

  return (
    <div className="pt-1">
      <h1 className="break-words font-jaro text-[28px] leading-tight text-[#A6341B] sm:text-4xl">
        Xin chào nghệ nhân {displayName}!
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

function MetricGrid({
  confirmedBookings,
  ownedWorkshops,
}: {
  confirmedBookings: ConfirmedBookingItem[];
  ownedWorkshops: CreatedWorkshop[];
}) {
  const metrics = React.useMemo(() => {
    const totalWorkshops = ownedWorkshops.length;
    const upcomingSessions = confirmedBookings.length;
    const totalBookedTickets = confirmedBookings.reduce(
      (sum, booking) => sum + booking.qty,
      0
    );
    const totalBookedValue = confirmedBookings.reduce(
      (sum, booking) => sum + booking.price * booking.qty,
      0
    );

    return [
      { label: "Tổng số Workshop", value: totalWorkshops.toString(), tone: "terracotta" },
      { label: "Buổi sắp tới", value: upcomingSessions.toString(), tone: "sage" },
      { label: "Tổng lượt đặt", value: totalBookedTickets.toString(), tone: "slate" },
      {
        label: "Thu nhập",
        value: `${totalBookedValue.toLocaleString("vi-VN")}đ`,
        tone: "terracotta",
      },
    ];
  }, [confirmedBookings, ownedWorkshops]);

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, index) => {
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
    <article className="min-h-[168px] rounded-[44px] bg-[#C65C39]/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:bg-[#C65C39]/15">
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
  const { user } = useAuth();
  const initialPersonalInfo = React.useMemo(() => {
    return mockArtisanAccount.personalInfo.map((item, index) => {
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
                <div className="min-w-0 border border-[#A6341B] bg-transparent px-4 py-3 text-center font-beVietnamPro text-sm font-medium text-[#0F172A] rounded-sm">
                  {item.value}
                </div>
              )}
              <button
                onClick={() => handleToggleEdit(item.label, item.value)}
                className="w-fit font-beVietnamPro text-sm font-medium text-[#A6341B] underline-offset-4 hover:underline md:justify-self-center"
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

function ArtisanBookingsTable({ bookings }: { bookings: ConfirmedBookingItem[] }) {
  return (
    <DashboardPanel title="Tổng lượt đặt Workshop">
      {bookings.length === 0 ? (
        <div className="rounded-[14px] border border-[#A6341B]/20 bg-white/45 px-6 py-10 text-center">
          <p className="font-beVietnamPro text-base font-semibold text-[#64748B]">
            Chưa có lượt đặt nào cho các workshop của bạn.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[860px] w-full border-collapse font-beVietnamPro text-sm">
            <thead>
              <tr className="border-b-2 border-[#8B4513] text-left text-[#A6341B]">
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Mã đặt</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Workshop</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Số lượng</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Giá trị</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Ngày đặt</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.bookingId} className="border-b-2 border-[#8B4513]/45">
                  <td className="px-4 py-4 font-mono text-xs text-[#64748B]">
                    {booking.bookingId}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex min-w-[240px] items-center gap-3">
                      <img
                        src={booking.img}
                        alt={booking.title}
                        className="h-12 w-12 shrink-0 rounded-md object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-[#0F172A]">{booking.title}</p>
                        <p className="truncate text-xs text-[#64748B]">{booking.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-[#0F172A]">{booking.qty}</td>
                  <td className="px-4 py-4 text-[#0F172A]">
                    {(booking.price * booking.qty).toLocaleString("vi-VN")}đ
                  </td>
                  <td className="px-4 py-4 text-[#0F172A]">
                    {formatBookingDate(booking.confirmedAt)}
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status="Đã thanh toán" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardPanel>
  );
}

function BookingsTable({ ownedWorkshops }: { ownedWorkshops: CreatedWorkshop[] }) {
  return (
    <DashboardPanel title="Workshop đã tạo">
      {ownedWorkshops.length === 0 ? (
        <div className="rounded-[14px] border border-[#A6341B]/20 bg-white/45 px-6 py-10 text-center">
          <p className="font-beVietnamPro text-base font-semibold text-[#64748B]">
            Bạn chưa tạo workshop nào.
          </p>
          <Link
            to="/create-workshop"
            className="mt-5 inline-flex rounded-full bg-[#A6341B] px-6 py-3 font-beVietnamPro text-sm font-bold text-white transition-colors hover:bg-[#8f2c17]"
          >
            Tạo workshop
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full border-collapse font-beVietnamPro text-sm">
            <thead>
              <tr className="border-b-2 border-[#8B4513] text-left text-[#A6341B]">
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Workshop</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Địa điểm</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Giá</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Trạng thái</th>
                <th className="px-4 py-4 text-base font-bold tracking-[0.08em]">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {ownedWorkshops.map((workshop) => (
                <tr key={workshop.id} className="border-b-2 border-[#8B4513]/45">
                  <td className="px-4 py-4">
                    <div className="flex min-w-[220px] items-center gap-3">
                      <img
                        src={workshop.card.img}
                        alt={workshop.card.title}
                        className="h-12 w-12 shrink-0 rounded-md object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-[#0F172A]">{workshop.card.title}</p>
                        <p className="truncate text-xs text-[#64748B]">{workshop.detail.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#0F172A]">{workshop.detail.location}</td>
                  <td className="px-4 py-4 text-[#0F172A]">{workshop.card.price}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status="Đã tạo" />
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      to={`/workshops/detail?workshop=${workshop.id}`}
                      className="font-semibold text-[#A6341B] underline-offset-4 hover:underline"
                    >
                      Xem
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardPanel>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#15803D]">
      {status}
    </span>
  );
}

function Reviews() {
  return (
    <DashboardPanel title="Các đánh giá từ khách hàng">
      <div className="rounded-[14px] border border-[#A6341B]/20 bg-white/45 px-6 py-10 text-center">
        <p className="font-beVietnamPro text-base font-semibold text-[#64748B]">
          Chưa có đánh giá nào
        </p>
      </div>
    </DashboardPanel>
  );
}

function StatusNote({ workshopCount }: { workshopCount: number }) {
  const message =
    workshopCount > 0
      ? `Hiện tại bạn đang có ${workshopCount} workshop đã tạo. Hãy chuẩn bị thật tốt để mang trải nghiệm di sản đến với khách tham gia.`
      : "Hiện tại bạn chưa có workshop nào. Hãy tạo workshop đầu tiên để bắt đầu chia sẻ câu chuyện di sản của bạn.";

  return (
    <p className="mx-auto max-w-2xl text-center font-beVietnamPro text-sm leading-5 text-[#64748B]">
      {message}
    </p>
  );
}

function CreateWorkshopCallout() {
  const { cta } = mockArtisanAccount;

  return (
    <div className="mx-auto max-w-[980px] rounded-[14px] bg-[#B1B08B] px-5 py-16 text-center sm:px-10">
      <h2 className="font-jaro text-4xl leading-tight text-black sm:text-5xl">{cta.title}</h2>
      <p className="mx-auto mt-3 max-w-2xl font-roboto text-base leading-7 text-black/75">{cta.description}</p>
      <Link
        to="/create-workshop"
        className="mt-6 inline-flex border border-black bg-[#A6341B] px-6 py-3 font-roboto text-base text-white transition-colors hover:bg-[#8f2c17]"
      >
        {cta.action}
      </Link>
    </div>
  );
}

function ArtisanSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { profile } = mockArtisanAccount;
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
        <SidebarButton icon={ArrowRightLeft} label="Chuyển qua chế độ lữ khách" to="/user-account" active />
        <SidebarButton icon={LayoutDashboard} label="Quản lý lịch trình" to="/schedule-management" active />
      </nav>

      <div className="mt-10 border-t border-white/15 pt-5 lg:mt-auto">
        <SidebarButton icon={Plus} label="Workshop Mới" to="/create-workshop" active centered />
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

function formatBookingDate(value: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mockArtisanProfile } from "@/utils/mockData";
import ContactUs from "@/components/domain/ContactUs";

export default function ArtisanProfilePage() {
  const artisan = mockArtisanProfile;
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <PageShell background="artisans">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="screen" gutter="none">
          <ScrollReveal className="relative overflow-hidden text-white shadow-sm" animation="fade-in" duration={900}>
            <img
              src={artisan.heroImage}
              className="block h-auto w-full max-w-none transition-transform duration-1000 hover:scale-[1.01]"
              alt="Bộ sưu tập gốm thủ công"
            />

            <div className="absolute inset-0 px-8 py-7 sm:px-12 lg:px-14">
              <Link
                to="/artisans"
                className="inline-flex w-fit items-center gap-2 font-beVietnamPro text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-[#F4CA80]"
              >
                <ArrowLeft size={18} />
                Trở về
              </Link>

              <div className="mt-[7vw] sm:mt-[8vw] lg:mt-[9vw]">
                <p className="font-oi text-[clamp(42px,5vw,96px)] uppercase leading-none text-[#DCAA25]">
                  {artisan.heroTitleSmall}
                </p>
                <h1 className="mt-4 font-jaro text-[clamp(96px,13vw,260px)] uppercase leading-[0.78] text-[#DCAA25]">
                  {artisan.heroTitleLarge}
                </h1>
              </div>
            </div>
          </ScrollReveal>
        </Section>

        <Section width="wide" className="py-16 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artisan.stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 70} duration={650}>
                <div className="text-center transition-transform duration-300 hover:-translate-y-1">
                <p
                  className={`font-poppins text-5xl font-black tracking-[0.07em] ${
                    stat.tone === "teal" ? "text-[#355D67]" : "text-[#D4A017]"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`mx-auto mt-3 max-w-[220px] font-poppins text-xl leading-7 ${
                    stat.tone === "teal" ? "text-[#355D67]" : "text-[#D4A017]"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section width="wide" className="py-12 lg:py-20">
          <ScrollReveal animation="scale-up">
            <img
              src={artisan.eventHeroImage}
              className="h-[260px] w-full rounded-[15px] object-cover shadow-sm transition-transform duration-700 hover:scale-[1.01] sm:h-[320px] lg:h-[456px]"
              alt={artisan.eventHeroAlt}
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {artisan.eventImages.map((event, index) => (
              <ScrollReveal key={event.title} delay={index * 90} duration={750}>
                <article className="group overflow-hidden rounded-[25px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(71,45,24,0.18)]">
                <img
                  src={event.image}
                  className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[520px] lg:h-[599px]"
                  alt={event.alt}
                  loading="lazy"
                  decoding="async"
                />
              </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1fr_0.4fr] lg:items-start">
            <h2 className="font-jaro text-7xl uppercase leading-none text-[#5A1818]">
              {artisan.eventHeading}
            </h2>
            <p className="max-w-lg text-justify font-dMSans text-lg leading-[30px] text-[#000]">
              {artisan.eventDescription}
            </p>
            <div className="flex gap-4 lg:justify-end">
              <CircleArrow direction="left" />
              <CircleArrow direction="right" active />
            </div>
          </ScrollReveal>
        </Section>

        <Section width="wide" className="py-16 lg:py-24">
          <ScrollReveal className="mx-auto max-w-[1240px]">
            <p className="text-center font-oi text-6xl uppercase leading-none text-[#A6341B]/90 sm:text-7xl lg:text-8xl">
              Nghệ nhân
            </p>
            <div className="mt-10 overflow-hidden rounded-[2px]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-start">
                <img
                  src={artisan.profileImage}
                  className="h-[380px] w-full object-cover object-center shadow-sm transition-transform duration-700 hover:scale-[1.015] sm:h-[500px] lg:h-[560px]"
                  alt={artisan.profileImageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="pt-4 lg:pt-8">
                  <h2 className="font-jaro text-4xl uppercase tracking-[0.07em] text-[#000] sm:text-5xl">
                    {artisan.bioTitle}
                  </h2>
                  <p className="mt-6 max-w-[560px] text-justify font-beVietnamPro text-lg leading-8 tracking-[0.02em] text-[#697077]">
                    {artisan.bioDescription}
                  </p>
                  <Link
                    to="/artisans"
                    className="mt-7 inline-flex border-b border-[#697077] font-beVietnamPro text-base font-medium text-[#697077] hover:text-[#A6341B]"
                  >
                    Xem thêm
                  </Link>
                  <div className="mt-20 flex flex-wrap items-center gap-3 font-beVietnamPro text-sm font-semibold text-[#697077]">
                    <span>Follow the author:</span>
                    <SocialBadge label="f" />
                    <img src="/hosonghenhan/Twitter.png" className="h-7 w-7" alt="Twitter" />
                    <SocialBadge label="in" />
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-2 md:grid-cols-[0.8fr_1.6fr_1fr]">
                {artisan.galleryImages.map((image) => (
                  <img
                    key={image.image}
                    src={image.image}
                    className="h-[190px] w-full object-cover shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] sm:h-[220px] lg:h-[284px]"
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Section>

        <Section width="screen" gutter="none" className="!bg-[rgba(89,166,156,0.21)] py-20">
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-jaro text-4xl leading-tight text-[#3D3D3D]">
                  {artisan.reviewsHeading}
                </h2>
                <p className="mt-3 max-w-lg font-dMSans text-lg leading-[30px] text-[#3D3D3D]">
                  {artisan.reviewsDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-[40px] bg-[#6C0B0B] px-8 py-4 font-beVietnamPro text-lg font-semibold text-white">
                  Bài viết của khách hàng
                </button>
                <button className="rounded-[36px] border border-[#7D7D7D] bg-white px-8 py-4 font-beVietnamPro text-lg text-[#3D3D3D]">
                  Trò chuyện với chúng tôi
                </button>
              </div>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {artisan.reviews.map((review, index) => (
                <ScrollReveal key={review.author} delay={index * 90} duration={700}>
                  <ReviewCard review={review} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>
        
        <ContactUs />
        
        <SiteFooter />
      </main>
    </PageShell>
  );
}

function SocialBadge({ label }: { label: string }) {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-sm font-bold text-white">
      {label}
    </span>
  );
}

function CircleArrow({ active = false, direction }: { active?: boolean; direction: "left" | "right" }) {
  return (
    <button
      className={`grid h-16 w-16 place-items-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
        active
          ? "border-[#6C0B0B] bg-[#6C0B0B] text-white"
          : "border-[#6C0B0B] bg-white/50 text-[#1b1717]"
      }`}
      aria-label={direction === "left" ? "Previous event" : "Next event"}
    >
      {direction === "left" ? <ArrowLeft size={26} /> : <ArrowRight size={26} />}
    </button>
  );
}

function ReviewCard({ review }: { review: (typeof mockArtisanProfile.reviews)[number] }) {
  return (
    <article className="rounded-3xl bg-white p-8 shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.16)]">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={24}
            fill={index < review.rating ? "#F9C029" : "#7D7D7D"}
            className={index < review.rating ? "text-[#F9C029]" : "text-[#7D7D7D]"}
          />
        ))}
      </div>
      <p className="mt-7 font-beVietnamPro text-lg leading-[30px] text-[#5E5E5E]">
        “{review.quote}”
      </p>
      <h3 className="mt-8 font-dMSans text-xl font-bold leading-5 text-[#3D3D3D]">
        {review.author}
      </h3>
      <p className="mt-4 font-beVietnamPro text-lg leading-[18px] text-[#222]">
        {review.role}
      </p>
    </article>
  );
}

function LabeledInput({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label>
      <span className="font-dMSans text-lg font-semibold leading-[18px] text-[#000]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 h-[72px] w-full rounded-[50px] border border-[#000] bg-[#F9F9FF] px-6 font-dMSans text-lg text-[#333] outline-none placeholder:text-[#666]"
      />
    </label>
  );
}

function ContactLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <p className="flex items-center justify-center gap-3 leading-[30px]">
      {icon}
      {text}
    </p>
  );
}

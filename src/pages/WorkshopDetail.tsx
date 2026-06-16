import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CheckCircle2,
  ChevronLeft,
  Languages,
  MessageCircle,
  Star,
  Timer,
  Users,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import WorkshopDetailBooking from "@/components/domain/WorkshopDetailBooking";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useWorkshopCatalog } from "@/context/WorkshopCatalogContext";

const factIcons = {
  timer: Timer,
  languages: Languages,
  users: Users,
};

export default function WorkshopDetailPage() {
  const [searchParams] = useSearchParams();
  const { getWorkshopDetail } = useWorkshopCatalog();
  const workshopId = searchParams.get("workshop") || "default-workshop-detail";
  const workshop = getWorkshopDetail(workshopId);

  return (
    <PageShell background="heritage">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="wide" className="pt-10 sm:pt-14 lg:pt-16">
          <ScrollReveal animation="slide-down" duration={650}>
            <Link
              to="/workshops/list"
              className="inline-flex items-center gap-2 border border-[#A6341B] px-4 py-2 font-beVietnamPro text-sm font-semibold uppercase text-[#1b1717] transition-colors hover:bg-[#A6341B] hover:text-white"
            >
              <ChevronLeft size={18} />
              Trở về
            </Link>

            <p className="mt-7 font-inter text-base font-semibold text-[#A6341B] sm:text-xl">
              {workshop.breadcrumb}
            </p>
          </ScrollReveal>
        </Section>

        <Section
          width="screen"
          gutter="none"
          className="mt-8 !bg-[rgba(89,166,156,0.21)] py-10 lg:py-14"
        >
          <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.95fr] lg:items-stretch lg:px-8">
            <ScrollReveal className="grid gap-5 md:h-[520px] md:grid-cols-[1.25fr_0.9fr] md:grid-rows-2 lg:h-[640px]" animation="fade-in" duration={900}>
              {workshop.galleryImages.map((image) => (
                <div
                  key={image.src}
                  className={`group relative aspect-[4/3] min-h-0 overflow-hidden rounded-[15px] bg-[#e8e1d4] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(71,45,24,0.22)] md:aspect-auto ${
                    image.featured ? "md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal animation="slide-left" duration={850} delay={120}>
              <WorkshopDetailBooking workshop={workshop} workshopId={workshopId} />
            </ScrollReveal>
          </div>
        </Section>

        <Section width="wide" className="pt-20 lg:pt-28">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-dFVNFreckleFace text-[42px] leading-tight text-[#A6341B] sm:text-[54px]">
                {workshop.introTitle}
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {workshop.quickFacts.map((fact) => {
                  const FactIcon = factIcons[fact.icon];

                  return (
                    <div
                      key={fact.label}
                      className="inline-flex h-[53px] items-center gap-2 rounded-sm bg-[rgba(232,225,212,0.70)] px-5 text-[#8B4513]"
                    >
                      <FactIcon size={18} />
                      <span className="font-beVietnamPro text-xs font-bold tracking-[0.05em]">
                        {fact.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <h3 className="mt-14 max-w-2xl font-jaro text-[32px] leading-9 text-[#8B4513]">
                {workshop.introSubtitle}
              </h3>
              <p className="mt-8 max-w-2xl font-beVietnamPro text-xl font-extrabold leading-9 text-[#5A4635]">
                {workshop.introDescription}
              </p>
            </div>
            <img
              src={workshop.introImage}
              className="min-h-[420px] rounded-[15px] object-cover shadow-sm transition-transform duration-700 hover:scale-[1.015]"
              alt={workshop.introImageAlt}
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>
        </Section>

        <Section width="wide" className="pt-20 lg:pt-24">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-start">
            <div>
              <h2 className="font-jaro text-4xl leading-tight text-[#8B4513]">
                {workshop.includedHeading}
              </h2>
              <p className="mt-3 max-w-sm font-roboto text-base leading-6 text-[#21272A]">
                {workshop.includedDescription}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {workshop.includedItems.map((item) => (
                <article
                  key={item.title}
                  className="p-6"
                >
                  <CheckCircle2 size={42} className="text-[#A6341B]" />
                  <h3 className="mt-5 font-beVietnamPro text-lg font-bold leading-7 text-[#4A3728]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-roboto text-sm leading-6 text-[#6E6E6E]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </Section>

        <Section
          width="screen"
          gutter="none"
          className="mt-24 !bg-[rgba(89,166,156,0.21)] py-16 lg:py-20"
        >
          <ScrollReveal className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div className="relative overflow-hidden rounded-[15px]">
              <img
                src={workshop.artisanImage}
                className="h-[520px] w-full object-cover lg:h-[720px]"
                alt={workshop.artisanImageAlt}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/10">
                <button
                  className="grid h-24 w-24 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform hover:scale-105"
                  aria-label="Xem video giới thiệu nghệ nhân"
                >
                  <span className="ml-1 text-5xl leading-none">▶</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-poppins text-base font-black uppercase tracking-[0.07em] text-[#757575]">
                {workshop.artisanEyebrow}
              </p>
              <h2 className="mt-5 font-dFVNFreckleFace text-[40px] leading-tight tracking-[0.05em] text-[#A6341B] sm:text-5xl">
                {workshop.artisanTitle}
              </h2>
              <p className="mt-8 max-w-2xl font-poppins text-base leading-7 text-[#6E6E6E]">
                {workshop.artisanDescription}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {workshop.artisanTraits.map((trait) => (
                  <div key={trait} className="flex items-center gap-3 font-poppins text-[15px] text-[#6E6E6E] transition-transform duration-300 hover:translate-x-1">
                    <CheckCircle2 size={20} className="text-[#757575]" />
                    {trait}
                  </div>
                ))}
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {workshop.artisanStats.map((stat) => (
                  <Stat key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Section>

        <Section width="wide" className="pt-20 lg:pt-24">
          <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-jaro text-4xl leading-tight text-[#8B4513]">
                {workshop.reviewsHeading}
              </h2>
              <p className="mt-3 font-dMSans text-lg leading-[30px] text-[#3D3D3D]">
                {workshop.reviewsDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-[40px] bg-[#A6341B] px-8 py-4 font-dMSans text-lg font-bold text-white transition-transform hover:-translate-y-0.5">
                Xem thêm
              </button>
              <button className="rounded-[36px] border border-[#7D7D7D] bg-white px-8 py-4 font-dMSans text-lg text-[#3D3D3D] transition-colors hover:bg-[#f7f1e8]">
                Liên hệ chúng tôi
              </button>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workshop.reviews.map((review, index) => (
              <ScrollReveal key={review.author} delay={index * 90} duration={700}>
                <article className="rounded-3xl bg-white p-8 shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.16)]">
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
                <p className="mt-7 font-dMSans text-lg leading-[30px] text-[#5E5E5E]">
                  “{review.quote}”
                </p>
                <h3 className="mt-8 font-dMSans text-xl font-bold leading-6 text-[#3D3D3D]">
                  {review.title}
                </h3>
                <p className="mt-5 font-dMSans text-lg leading-[18px] text-[#222]">
                  {review.author}
                </p>
              </article>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section width="wide" className="py-20 lg:py-24">
          <ScrollReveal className="relative h-[328px] overflow-hidden px-6 py-12 text-center text-white" animation="scale-up">
            <div className="absolute inset-0 bg-[rgba(89,166,156,0.36)]" />
            <div className="relative mx-auto flex max-w-md flex-col items-center">
              <MessageCircle size={40} className="text-[#F4CA80]" />
              <h2 className="mt-5 font-beVietnamPro text-lg font-semibold">
                {workshop.consultationTitle}
              </h2>
              <p className="mt-3 max-w-[330px] font-beVietnamPro text-sm font-medium leading-6">
                {workshop.consultationDescription}
              </p>
              <button className="mt-7 border-b-2 border-white pb-1 font-beVietnamPro text-xs font-semibold uppercase tracking-[0.2em] text-[#B22222]">
                Trò chuyện qua Zalo
              </button>
            </div>
          </ScrollReveal>
        </Section>

        <SiteFooter />
      </main>
    </PageShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-poppins text-3xl font-black tracking-[0.07em] text-[#D4A017] sm:text-[43px]">
        {value}
      </p>
      <p className="mt-2 font-poppins text-xs font-semibold uppercase tracking-[0.1em] text-[#1B1717] sm:text-sm">
        {label}
      </p>
    </div>
  );
}

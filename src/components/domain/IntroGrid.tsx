import React from "react";
import Section from "@/components/common/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

const introCards = [
  {
    src: "/Rectangle1201.png",
    alt: "Disanity Youth",
    title: "EMPOWERING AT-RISK AND DISADVANTAGED YOUTH IN VIETNAM",
    className: "",
    titleClassName: "text-center text-2xl leading-8 sm:text-3xl sm:leading-10",
    badgeClassName: "left-1/2 top-8 -translate-x-1/2",
  },
  {
    src: "/Rectangle1202.png",
    alt: "We are Disanity",
    title: "WE ARE DISANITY - The first social enterprise in Vietnam.",
    className: "",
    titleClassName: "text-center text-xl leading-8 sm:text-2xl",
    badgeClassName: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "/Rectangle1203.png",
    alt: "We are Disanity Sub",
    title: "WE ARE DISANITY",
    className: "",
    titleClassName: "text-lg sm:text-xl",
    badgeClassName: "left-5 bottom-14",
  },
  {
    src: "/Rectangle1208.png",
    alt: "We are Disanity Sub 2",
    title: "WE ARE DISANITY",
    className: "",
    titleClassName: "text-lg sm:text-xl",
    badgeClassName: "left-5 bottom-14",
  },
];

const [featuredCard, wideCard, ...smallCards] = introCards;

export default function IntroGrid() {
  return (
    <Section className="pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20" width="full">
      <ScrollReveal
        className="grid gap-4 overflow-hidden md:h-[400px] md:min-h-0 md:grid-cols-2 lg:h-[720px]"
        animation="fade-in"
        duration={1000}
      >
        <IntroCard card={featuredCard} />

        <div className="grid gap-4 md:h-full md:min-h-0 md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          <IntroCard card={wideCard} />
          <div className="grid gap-4 md:h-full md:min-h-0 md:grid-cols-2">
            {smallCards.map((card) => (
              <IntroCard key={card.src} card={card} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

type IntroCardData = (typeof introCards)[number];

function IntroCard({ card }: { card: IntroCardData }) {
  return (
    <article
      className={`group relative h-[460px] min-h-0 cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg md:h-full ${card.className}`}
    >
      <img
        src={card.src}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={card.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className={`absolute border border-white/20 bg-black px-4 py-2 ${card.badgeClassName}`}>
        <p className="font-roboto text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
          News
        </p>
      </div>
      <p className={`absolute inset-x-5 bottom-6 font-roboto font-normal text-white drop-shadow-md ${card.titleClassName}`}>
        {card.title}
      </p>
    </article>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "@/components/common/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

const trendingImages = [
  { src: "/Rectangle18.png", alt: "Trending 1" },
  { src: "/Rectangle19.png", alt: "Trending 2" },
  { src: "/Rectangle20.png", alt: "Trending 3" },
];

export default function HomeTrending() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Section className="py-14 sm:py-18 lg:py-24">
      <ScrollReveal className="space-y-12" animation="slide-up">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <h2 className="font-jaro text-4xl uppercase leading-tight tracking-wide text-black sm:text-[56px]">
            TRẢI NGHIỆM THỊNH HÀNH
          </h2>
          <p className="font-beVietnamPro text-lg font-medium leading-7 tracking-wide text-[#757575]">
            Không chỉ là những buổi trưng bày hay workshop, mỗi sự kiện là một
            lần làng nghề được kể lại bằng sắc màu và câu chuyện đương đại.
          </p>
          <Link
            to="/workshops"
            className="inline-flex h-[50px] items-center justify-center border-2 px-10 font-beVietnamPro text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Xem thêm
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-end">
          {trendingImages.map((image, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <article
                key={image.src}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative min-h-[440px] cursor-pointer overflow-hidden transition-all duration-500 sm:min-h-[560px] lg:min-h-[560px] ${
                  index === 1 ? "lg:mb-20" : ""
                }`}
                style={{
                  transform: isHovered ? "translateY(-15px) scale(1.025)" : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? "0 35px 50px -15px rgba(166, 52, 27, 0.35)"
                    : "0 22px 25px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={image.src}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                  alt={image.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,2,2,0.4)] to-transparent" />
              </article>
            );
          })}
        </div>
      </ScrollReveal>
    </Section>
  );
}

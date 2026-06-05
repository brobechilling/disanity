import React from "react";
import Section from "@/components/common/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutUs() {
  return (
    <Section className="py-12 sm:py-16 lg:py-20">
      <ScrollReveal
        className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        animation="slide-up"
      >
        <div className="group min-h-[420px] overflow-hidden rounded-[24px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] sm:min-h-[560px] lg:min-h-[668px]">
          <img
            src="/Rectangle43.png"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
            alt="DiSanity Story"
          />
        </div>

        <div className="space-y-8">
          <h1 className="max-w-3xl font-jaro text-4xl font-bold leading-tight drop-shadow-sm sm:text-[46px]">
            WE ARE DISANITY - The first social enterprise in Vietnam.
          </h1>

          <div className="space-y-7 font-beVietnam text-lg leading-8 text-[#333]">
            <p className="font-medium">
              Since establishment, we have worked to help people help themselves and
              help others. Thousands of underserved lives have been permanently
              changed for the better. Hundreds thousands more will be touched as we
              expand our operation from hospitality training to various fields
              including other vocational teachings, gender equality, and
              environmental impact.
            </p>
            <p className="font-medium">
              We are different not because we claim to be the best in what we do,
              but we effortlessly want to go beyond the expectation of our
              stakeholders and have you say...
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

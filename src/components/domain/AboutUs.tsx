import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutUs() {
  return (
    <div className="w-[1242px] h-[720px] absolute left-[100px] top-[1019px] overflow-visible">
      <ScrollReveal className="w-full h-full relative" animation="slide-up">
      
      {/* Visual Portrait Card (Left) */}
      <div className="rounded-[24px] w-[505px] h-[668px] absolute left-0 top-0 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition-all duration-300">
        <img
          src="/Rectangle43.png"
          className="w-[505px] h-[668px] max-w-none object-cover transition-transform duration-700 group-hover:scale-103"
          alt="DiSanity Story"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(108,11,11,0.25)] to-transparent pointer-events-none"></div>
      </div>

      {/* Main Jaro Heading */}
      <p className="text-[#A6341B] font-jaro text-[46px] leading-[54px] w-[654px] h-[132px] absolute left-[567px] top-[37px] drop-shadow-sm font-bold">
        WE ARE DISANITY - The first social enterprise in Vietnam.
      </p>

      {/* Content Text Block (Right) */}
      <div className="w-[671px] h-[368px] absolute left-[571px] top-[222px]">
        <p className="text-[#333] font-beVietnam text-[18px] leading-8 w-[671px] h-56 absolute left-0 top-0 font-medium">
          Since establishment, we have worked to help people help themselves and
          help others. Thousands of underserved lives have been permanently
          changed for the better. Hundreds thousands more will be touched as we
          expand our operation from hospitality training to various fields
          including other vocational teachings, gender equality, and
          environmental impact.
        </p>
        <p className="text-[#4A5D4E] font-beVietnam text-[18px] leading-8 w-[671px] h-32 absolute left-0 top-56 font-bold italic border-l-4 border-[#A6341B] pl-4">
          We are different not because we claim to be the best in what we do,
          but we effortlessly want to go beyond the expectation of our
          stakeholders and have you say...
        </p>
      </div>

      </ScrollReveal>
    </div>
  );
}

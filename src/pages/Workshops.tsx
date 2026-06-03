import React from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/domain/Hero";
import FilterBar from "@/components/domain/FilterBar";
import CategoryGrid from "@/components/domain/CategoryGrid";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function WorkshopsDiscoveryPage() {
  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Centered 1440px viewport frame for Workshops Category Discovery.
      */}
      <ResponsiveContainer originalHeight={2410}>
        
        {/* Figma Mockup Background */}
        <img
          src="/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-100 pointer-events-none"
          alt="DiSanity Background Mockup"
        />

        <Header />
        <Hero />
        <FilterBar />
        <CategoryGrid />
        <Footer className="top-[1588px]" />

      </ResponsiveContainer>
    </div>
  );
}

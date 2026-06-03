import React from "react";
import Header from "@/components/common/Header";
import IntroGrid from "@/components/domain/IntroGrid";
import AboutUs from "@/components/domain/AboutUs";
import HomeTrending from "@/components/domain/HomeTrending";
import ExploreTabs from "@/components/domain/ExploreTabs";
import UpcomingEvent from "@/components/domain/UpcomingEvent";
import ContactUs from "@/components/domain/ContactUs";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function Home() {
  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Container viewport 1440px wide by 6940px high matching Figma Homepage.
        This provides a pixel-perfect, highly premium centered frame.
      */}
      <ResponsiveContainer originalHeight={6940}>
        
        {/* Mockup Background Images layered perfectly in the background */}
        <img
          src="/Image143.png"
          className="w-full h-[8221px] absolute left-0 top-[151px] max-w-none opacity-100 pointer-events-none"
          alt="Mockup Background Base"
        />


        {/* 1. Header Area (0px - 181px) */}
        <Header />

        {/* 2. Intro Lưới Giới Thiệu (265px - 894px) */}
        <IntroGrid />

        {/* 3. Về Chúng Tôi (1019px - 1739px) */}
        <AboutUs />

        {/* 4. Trải Nghiệm Thịnh Hành (1740px - 2706px) */}
        <HomeTrending />

        {/* 5. Khám Phá Nghệ Nhân & Làng Nghề (3202px - 4525px) */}
        <ExploreTabs />

        {/* 6. Sự Kiện Sắp Diễn Ra (4772px - 5376px) */}
        <UpcomingEvent />

        {/* 7. Đăng Ký Liên Hệ "Người Giữ Nghề" (5476px - 6454px) */}
        <ContactUs />

        {/* 8. Footer Chân Trang (6117px - 6940px) */}
        <Footer className="top-[6117px]" />

      </ResponsiveContainer>
    </div>
  );
}

import React from "react";
import PageShell from "@/components/common/PageShell";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import AboutUs from "@/components/domain/AboutUs";
import ExploreTabs from "@/components/domain/ExploreTabs";
import HomeTrending from "@/components/domain/HomeTrending";
import HomeUpcomingEvent from "@/components/domain/HomeUpcomingEvent";
import IntroGrid from "@/components/domain/IntroGrid";
import ContactUs from "@/components/domain/ContactUs";

export default function Home() {
  return (
    <PageShell background="heritage">
      <SiteHeader />
      <main>
        <IntroGrid />
        <AboutUs />
        <HomeTrending />
        <ExploreTabs />
        <HomeUpcomingEvent />
        <ContactUs />
      </main>
      <SiteFooter />
    </PageShell>
  );
}

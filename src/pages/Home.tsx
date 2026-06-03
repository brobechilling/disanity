import React from "react";
import PageShell from "@/components/common/PageShell";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import AboutUs from "@/components/domain/AboutUs";
import ExploreTabs from "@/components/domain/ExploreTabs";
import HomeContactUs from "@/components/domain/HomeContactUs";
import HomeTrending from "@/components/domain/HomeTrending";
import HomeUpcomingEvent from "@/components/domain/HomeUpcomingEvent";
import IntroGrid from "@/components/domain/IntroGrid";

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
        <HomeContactUs />
      </main>
      <SiteFooter />
    </PageShell>
  );
}

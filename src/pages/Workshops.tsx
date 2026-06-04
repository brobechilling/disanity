import React from "react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import CategoryGrid from "@/components/domain/CategoryGrid";
import FilterBar from "@/components/domain/FilterBar";
import Hero from "@/components/domain/Hero";

export default function WorkshopsDiscoveryPage() {
  return (
    <PageShell background="heritage">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="screen" gutter="none">
          <div className="relative w-full">
            <Hero />
          </div>
        </Section>

        <Section width="wide" className="mt-16">
          <div className="relative mx-auto flex min-h-[115px] items-center justify-center">
            <FilterBar />
          </div>
        </Section>

        <Section width="wide" className="mt-16">
          <div className="relative mx-auto flex min-h-[640px] items-center justify-center">
            <CategoryGrid />
          </div>
        </Section>

        <div className="mt-16">
          <SiteFooter />
        </div>
      </main>
    </PageShell>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import { mockArtisanStoryDetail } from "@/utils/mockData";

export default function ArtisanStoryDetailPage() {
  const story = mockArtisanStoryDetail;

  return (
    <PageShell background="plain" className="bg-[#050505] text-white">
      <SiteHeader />

      <main className="bg-[#050505]">
        <Section width="wide" className="pb-16 pt-20 lg:pb-24 lg:pt-24">
          <Link
            to="/artisan-stories"
            className="inline-flex items-center gap-2 border border-[#D4A017]/70 px-5 py-2 font-beVietnamPro text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#D4A017]/10"
          >
            <ArrowLeft size={18} />
            Trở về
          </Link>

          <article className="mt-12 grid gap-10 lg:grid-cols-[820px_1fr]">
            <div>
              <h1 className="max-w-[1260px] font-jaro text-5xl leading-tight text-[#FEF3B1] sm:text-[64px] sm:leading-[70px] ">
                {story.title}
              </h1>
              <p className="ml-0 mt-8 max-w-[750px] text-justify  text-xl leading-[26px] text-white sm:ml-16 ">
                {story.excerpt}
              </p>

              <div className="ml-0 mt-7 max-w-[750px] space-y-14 sm:ml-16">
                {story.blocks.map((block, index) => (
                  <ArticleBlock key={`${block.title ?? "section"}-${index}`} block={block} />
                ))}

                <p className=" text-xl font-black leading-[26px] text-white">
                  {story.author}
                </p>
              </div>
            </div>
          </article>
        </Section>

        <Section width="wide" className="pb-20 pt-8 lg:pb-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className=" text-lg font-medium leading-[27px] text-[#777] ">
              {story.relatedHeading}
            </h2>
            <Link
              to="/artisan-stories"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#355D67] px-10 py-3  text-lg font-medium uppercase text-white transition-colors hover:bg-[#416f7a]"
            >
              Thêm
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {story.relatedStories.map((related) => (
              <RelatedStoryCard key={related.name} story={related} />
            ))}
          </div>
        </Section>

        <SiteFooter />
      </main>
    </PageShell>
  );
}

function ArticleBlock({
  block,
}: {
  block: (typeof mockArtisanStoryDetail.blocks)[number];
}) {
  return (
    <section className="space-y-6">
      {block.title && (
        <h2 className=" text-xl leading-[26px] text-white ">
          {block.title}
        </h2>
      )}

      {block.body.map((paragraph) => (
        <p
          key={paragraph}
          className="text-justify  text-base leading-[22px] text-[#DDE1E6]"
        >
          {paragraph}
        </p>
      ))}

      {block.image && (
        <figure className="space-y-3">
          <img
            src={block.image}
            className="w-full max-w-none object-cover shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
            alt={block.imageAlt}
          />
          {block.caption && (
            <figcaption className=" text-xs leading-[22px] text-[#FEF3B1]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )}
    </section>
  );
}

function RelatedStoryCard({
  story,
}: {
  story: (typeof mockArtisanStoryDetail.relatedStories)[number];
}) {
  return (
    <article className="group relative h-[350px] overflow-hidden rounded-xl bg-[#111]">
      <img
        src={story.image}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={story.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-beVietnamPro text-xl font-semibold text-white">
          {story.name}
        </h3>
        <p className="mt-2 min-h-[42px] font-beVietnamPro text-sm font-medium leading-[21px] text-white">
          {story.subtitle}
        </p>
        <div className="mt-5 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#050505] transition-colors group-hover:bg-[#FEF3B1]">
          <ArrowRight size={19} />
        </div>
      </div>
    </article>
  );
}

import React from "react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mockTicketQr } from "@/utils/mockData";

const barcodeBars = [3, 1, 2, 4, 1, 3, 2, 1, 5, 2, 1, 3, 4, 1, 2, 3, 1, 5, 2, 2, 4, 1, 3, 2, 1, 4, 2, 3];

export default function TicketQr() {
  return (
    <PageShell background="ticketQr">
      <SiteHeader />
      <main>
        <Section className="py-10 sm:py-12 lg:py-14" width="full">
          <div className="mx-auto max-w-[1240px]">
            <HeaderBlock />
            <TicketVisual />
            <InfoPanel />
            <TermsPanel />
            <BottomActions />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}

function HeaderBlock() {
  return (
    <ScrollReveal animation="fade-in" duration={800} className="mx-auto max-w-[980px] text-center">
      <h1 className="font-jaro text-4xl leading-tight text-[#A6341B] sm:text-5xl lg:text-[64px]">
        {mockTicketQr.title}
      </h1>
      <CheckoutProgress />
      <h2 className="mt-10 font-jaro text-3xl leading-tight text-[#A6341B] sm:text-4xl lg:text-5xl">
        {mockTicketQr.subtitle}
      </h2>
    </ScrollReveal>
  );
}

function CheckoutProgress() {
  return (
    <div className="mx-auto mt-7 max-w-[880px]">
      <div className="grid grid-cols-3 font-beVietnamPro text-xs font-semibold text-[#A6341B] sm:text-sm">
        {mockTicketQr.progressSteps.map((step) => (
          <span key={step} className="text-center">
            {step}
          </span>
        ))}
      </div>
      <div className="relative mt-7 h-6">
        <span className="absolute left-[16.666%] right-[16.666%] top-1/2 h-px -translate-y-1/2 bg-[#A6341B]" />
        <ProgressDot className="left-[16.666%] border-[#9CA3AF]" />
        <ProgressDot className="left-1/2 border-[#9CA3AF]" />
        <ProgressDot className="left-[83.333%] border-black" />
      </div>
    </div>
  );
}

function ProgressDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-white ${className}`}
    />
  );
}

function TicketVisual() {
  const { ticket } = mockTicketQr;

  return (
    <ScrollReveal animation="scale-up" duration={800} className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden bg-black shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <div className="grid min-h-[380px] grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)_230px] lg:h-[660px]">
        <div className="flex items-center justify-center bg-[#D9D9D9] p-4 md:[writing-mode:vertical-rl] md:rotate-180 transition-all duration-300 hover:bg-[#c8c8c8] cursor-pointer">
          <div className="flex items-center gap-2 text-black md:flex-col">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-black text-xs font-bold">D</span>
            <span className="font-courierNew text-sm font-bold tracking-[-0.025em]">{ticket.brand}</span>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
          <img src={ticket.image} alt="Làng gốm Thanh Hà" className="h-full w-full object-cover transition-all duration-700 hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute right-[14%] top-[30%] text-right font-serif text-4xl italic leading-none text-white/85 sm:text-5xl lg:text-[64px]">
            <p>{ticket.destinationTop}</p>
            <p>{ticket.destinationBottom}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 bg-white p-4 lg:p-5 transition-all duration-300 hover:bg-[#fafafa]">
          <Barcode value={ticket.barcodeValue} />
          <img src={ticket.qr} alt="Mã QR vé workshop" className="mx-auto aspect-square w-full max-w-[195px] object-contain transition-transform duration-300 hover:scale-105 cursor-pointer" />
        </div>
      </div>
    </ScrollReveal>
  );
}

function Barcode({ value }: { value: string }) {
  return (
    <div className="flex min-h-[420px] items-start justify-center gap-3 pt-1">
      <div className="flex h-[410px] w-[150px] flex-col justify-start gap-[6px] overflow-hidden bg-white">
        {barcodeBars.map((width, index) => (
          <span key={`${width}-${index}`} className="w-full shrink-0 bg-black" style={{ height: width * 3.5 }} />
        ))}
      </div>
      <div className="flex h-[410px] flex-col justify-between pt-1 font-mono text-lg text-black text-center leading-none">
        {value.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </div>
  );
}

function InfoPanel() {
  const { details } = mockTicketQr;

  return (
    <ScrollReveal animation="slide-up" duration={800} className="mt-14">
      <PanelTitle title={details.title} />
      <div className="mt-6 overflow-hidden rounded-[10px] bg-[#d6d2af]/70 bg-cover bg-center p-8 sm:p-10 transition-all duration-300 hover:bg-[#d6d2af]/85 hover:-translate-y-1 hover:shadow-lg" style={{ backgroundImage: `url('${details.background}')` }}>
        <dl className="grid max-w-xl grid-cols-[130px_minmax(0,1fr)] gap-x-8 gap-y-4 font-beVietnamPro text-base text-black sm:text-lg">
          {details.items.map((item) => (
            <React.Fragment key={item.label}>
              <dt>{item.label}:</dt>
              <dd className="font-medium break-words">{item.value}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </ScrollReveal>
  );
}

function TermsPanel() {
  const { terms } = mockTicketQr;

  return (
    <ScrollReveal animation="slide-up" duration={800} delay={100} className="mt-14">
      <PanelTitle title={terms.title} />
      <div className="mt-6 overflow-hidden rounded-[10px] bg-[#d6d2af]/70 bg-cover bg-center px-8 py-9 sm:px-14 transition-all duration-300 hover:bg-[#d6d2af]/85 hover:-translate-y-1 hover:shadow-lg" style={{ backgroundImage: `url('${terms.background}')` }}>
        <ul className="list-disc space-y-3 pl-5 font-beVietnamPro text-base leading-7 text-black sm:text-lg">
          {terms.items.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

function PanelTitle({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6">
      <h2 className="font-jaro text-3xl leading-tight text-black sm:text-[42px]">{title}</h2>
      <span className="h-px bg-[#8B4513]" />
    </div>
  );
}

function BottomActions() {
  return (
    <ScrollReveal animation="fade-in" duration={800} className="mt-10">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="rounded-full bg-[#A6341B] px-10 py-4 text-center font-beVietnamPro text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#8f2c17] hover:shadow-md cursor-pointer">
          {mockTicketQr.supportText}
        </div>
        <button className="border border-[#A6341B] px-5 py-2 font-beVietnamPro text-sm font-semibold text-[#A6341B] transition-all duration-300 hover:bg-[#A6341B] hover:text-white hover:-translate-y-1 hover:shadow-md cursor-pointer">
          {mockTicketQr.nextLabel}
        </button>
      </div>
    </ScrollReveal>
  );
}

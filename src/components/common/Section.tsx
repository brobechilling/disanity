import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "muted";
  width?: "normal" | "wide" | "full" | "screen";
  gutter?: "normal" | "none";
}

const variants: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "bg-transparent",
  dark: "bg-[#153b2b] text-[#fef3b1]",
  muted: "bg-[#f2e6d8]",
};

const widths: Record<NonNullable<SectionProps["width"]>, string> = {
  normal: "max-w-[1240px]",
  wide: "max-w-[1320px]",
  full: "max-w-[1540px]",
  screen: "max-w-none",
};

const gutters: Record<NonNullable<SectionProps["gutter"]>, string> = {
  normal: "px-4 sm:px-6 lg:px-8",
  none: "px-0",
};

export default function Section({
  children,
  className = "",
  variant = "default",
  width = "normal",
  gutter = "normal",
}: SectionProps) {
  return (
    <section className={`${variants[variant]} ${className}`}>
      <div className={`${widths[width]} mx-auto ${gutters[gutter]}`}>
        {children}
      </div>
    </section>
  );
}

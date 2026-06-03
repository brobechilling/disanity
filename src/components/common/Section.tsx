import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "muted";
  width?: "normal" | "wide" | "full";
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
};

export default function Section({
  children,
  className = "",
  variant = "default",
  width = "normal",
}: SectionProps) {
  return (
    <section className={`${variants[variant]} ${className}`}>
      <div className={`${widths[width]} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
}

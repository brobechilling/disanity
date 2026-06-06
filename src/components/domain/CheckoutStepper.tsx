import React from "react";
import { Link } from "react-router-dom";

export type CheckoutStepKey = "cart" | "info" | "payment";

const checkoutSteps: Array<{ key: CheckoutStepKey; label: string; href: string }> = [
  { key: "cart", label: "Giỏ hàng", href: "/cart" },
  { key: "info", label: "Thông tin khách hàng", href: "/checkout/info" },
  { key: "payment", label: "Thanh toán", href: "/checkout/payment" },
];

const activeIndexByStep: Record<CheckoutStepKey, number> = {
  cart: 0,
  info: 1,
  payment: 2,
};

export default function CheckoutStepper({
  activeStep,
  className = "",
}: {
  activeStep: CheckoutStepKey;
  className?: string;
}) {
  const activeIndex = activeIndexByStep[activeStep];

  return (
    <div className={`mx-auto w-full max-w-[880px] font-beVietnamPro ${className}`}>
      {/* Steps labels (Centered grid) */}
      <div className="grid grid-cols-3 text-center font-beVietnamPro text-xs font-semibold text-[#A6341B] sm:text-sm">
        {checkoutSteps.map((step, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;

          const toneClass = isActive
            ? "text-[#A6341B] font-bold"
            : isComplete
              ? "text-[#A6341B]/85"
              : "text-[#A6341B]/58";

          return (
            <Link
              key={step.key}
              to={step.href}
              className={`${toneClass} transition-colors hover:text-[#A6341B] outline-none`}
            >
              {step.label}
            </Link>
          );
        })}
      </div>

      {/* Stepper progress line and dots */}
      <div className="relative mt-7 h-6">
        {/* Background base line */}
        <span className="absolute left-[16.666%] right-[16.666%] top-1/2 h-px -translate-y-1/2 bg-[#A6341B]/30" />

        {/* Active progress line */}
        <div
          className="absolute left-[16.666%] top-1/2 h-px -translate-y-1/2 bg-[#A6341B] transition-all duration-300"
          style={{
            width: activeIndex === 0 ? "0%" : activeIndex === 1 ? "33.333%" : "66.666%"
          }}
        />

        {/* Step dots */}
        {checkoutSteps.map((step, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;

          // Align with ticketqr dot styles: h-5 w-5 border-[3px] bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2
          const leftPos = index === 0 ? "left-[16.666%]" : index === 1 ? "left-1/2" : "left-[83.333%]";

          // Border color matches ticketqr logic
          const borderClass = isActive
            ? "border-black"
            : isComplete
              ? "border-[#9CA3AF]"
              : "border-[#9CA3AF]/60";

          return (
            <span
              key={step.key}
              className={`absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-white transition-all duration-300 ${leftPos} ${borderClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}
